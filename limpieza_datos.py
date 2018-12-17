import numpy as np
import scipy.io as sio
import matplotlib.pyplot as plt
#%matplotlib inline

#73256
image_ind = 6982

# =============================================================================
#Rutas de .mat con datos
r_train = './dmat/train_32x32.mat'
#r_test = './dmat/test_32x32.mat'
#r_extra = './dmat/test_32x32.mat'
#Cargar datos de diccionarios
train_data = sio.loadmat(r_train)
#test_data = sio.loadmat(r_test)
#extra_data = sio.loadmat(r_extra)
# =============================================================================
#Acceder a diccionario de datos .mat
# =============================================================================
#Datos ENTRENAMIENTO
x_train = train_data['X']
y_train = train_data['y']
# =============================================================================
print("x_train tiene forma->", x_train.shape ,"[ancho, altura, canales, tamaño]")
print("x_train tiene y y_train tienen ", x_train.shape[3], " datos")

unique, counts = np.unique(y_train, return_counts=True)
print("Los datos en y_train estan distribuidos:")
print(dict(zip(unique, counts)))
del unique,counts,train_data

##Poner aqui gráfica

# =============================================================================
#Los datos de nuestra y deberian de ser de 0 hasta 9 debido, pero estan de 1 a
#10#Para resolver esto tomamos este enfoque para poder mostrar los datos unicos
print("Numeros en y_train: ",np.unique(y_train), "<- Error con 10")
#def unicos(lista):
    #conjunto = set(lista)
    #lista = list(conjunto)
    #print(lista)  #NO FUNCIONA PQ ES unhashable ya es numpyarray
 
#Siempre es una lista de variable dependiente ya que en esta en las tres es 
#donde esta el output buscado
def arreglar_lista(lista_y):
    lista_y[lista_y == 10] = 0

arreglar_lista(y_train)
print("Numeros actualizados", np.unique(y_train), "<- Correcto")
# =============================================================================
#FUNCIONES IMPRIMIR NUMEROS
#COLOR
def pimg (data):
    plt.imshow(data[:,:,:,image_ind])
    plt.show()
#Nuestra variable independiente esta estructurada[ancho,altura,canales,tamaño]    
#El tamaño es el numero de img que tenemos.
# x_train[ancho,altura,canales,id] -> : para que tome todo
#Escala Grayscale
#Función que multiplica matrices dandole color de blanco y negro
def rgb2gray(img):
    return np.dot(img, [0.2990, 0.5870, 0.1140])

##AGREGAR PARAMETRO PARA CONTROLAR CUANDO ES TRAIN O TEST


## revisar ###########plt.imshow(a, cmap='gray')
# =============================================================================
#Mostramos datos en gris
pimg(x_train);
print("Imagen en color")
x_train = x_train.transpose((3,0,1,2))
#Tamaño,ancho,altura,canales

# Y = 0.2990R + 0.5870G + 0.1140B --> Formula
x_train_gris = rgb2gray(x_train)

plt.imshow(x_train_gris[image_ind,:,:], cmap='gray')
plt.show()
print("Misma imagen pero en blanco y negro")
# =============================================================================
#Normalización
#Media
media = np.mean(x_train_gris, axis=0)

#Desviacion estandar
desv = np.std(x_train_gris, axis=0)

# Datos normalizados
x_train_gn = (x_train_gris - media) / desv
# =============================================================================
#Adecuar datos para CNN en Y
from sklearn.preprocessing import OneHotEncoder as encoder
#Necesitamos la data númerica
# Fit the OneHotEncoder
enc = encoder().fit(y_train.reshape(-1, 1))

# Transform the label values to a one-hot-encoding scheme
y_train = enc.transform(y_train.reshape(-1, 1)).toarray()
print("Training set", y_train.shape)

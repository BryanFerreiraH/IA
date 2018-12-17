import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { createPost } from '../actions/postActions';

export class PostForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      body: '',
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  static propTypes = {
    createPost: PropTypes.func.isRequired,
  }

  onChange(e) {
    this.setState({ [e.target.name ]: e.target.value });
  }

  onSubmit(e) {
    debugger;
    e.preventDefault();
    const { title, body } = this.state;
    const post = {
      title,
      body,
    };
    this.props.createPost(post);
  }

  render() {
    const { title, body } = this.state;
    return (
      <div>
        <h1> Add Post </h1>
        <form onSubmit={this.onSubmit}>
          <div>
            <label> Title: </label>
            <br />
            <input
              type="text"
              name="title"
              defaultValue={title}
              onChange={this.onChange}
            />
          </div>
          <br />
          <div>
            <label> Body: </label>
            <br />
            <textarea
              name="body"
              defaultValue={body}
              onChange={this.onChange}
            />
          </div>
          <br />
          <button type="submit" > Submit </button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  //post: state.posts.item
})

const mapDispatchToProps = {
  createPost,
}

export default connect(mapStateToProps, mapDispatchToProps)(PostForm)

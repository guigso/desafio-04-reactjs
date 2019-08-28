import React, { Component } from 'react';

import './styles.css';

class Comment extends Component {
  render() {
    const { author, content } = this.props.comment;
    return (
      <div className="post-comment">
        <img className="avatar" src={author.avatar}></img>
        <div className="comment">
          <p>
            <strong>{author.name}</strong>
            {content}
          </p>
        </div>
      </div>
    );
  }
}

export default Comment;

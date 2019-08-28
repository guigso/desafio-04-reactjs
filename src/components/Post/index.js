import React, { Component } from 'react';

import './styles.css';

import Comment from '../Comment';
class Post extends Component {
  render() {
    const { author, date, content, comments } = this.props.post;
    return (
      <div className="post">
        <div className="post-header">
          <img className="avatar" src={author.avatar} />

          <div className="post-author">
            <p className="author-name">{author.name}</p>
            <p className="post-date">{date}</p>
          </div>
        </div>
        <div className="post-content">
          <p>{content}</p>
          <hr />
          {comments.map(comment => (
            <Comment key={comment.id} comment={comment} />
          ))}
        </div>
      </div>
    );
  }
}

export default Post;

import React, { Component } from 'react';

import './index.css';

class Post extends Component {
  render() {
    const { author, date, content } = this.props.post;
    return (
      <div className='post'>
        <div className='post-header'>
          <img className='avatar' src={author.avatar} />

          <div className='post-author'>
            <p className='author-name'>{author.name}</p>
            <p className='post-date'>{date}</p>
          </div>
        </div>
        <div className='post-content'>
          <p>{content}</p>
          <hr />
          <div className='post-comment'>
            <img className='avatar' src='https://api.adorable.io/avatars/150/001.png'></img>
            <div className='comment'>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam lobortis tortor ac
                odio pretium tempus. Nunc ut mattis leo, nec luctus quam. Sed ac tempus massa.
                Aliquam consectetur quis enim non congue. Vestibulum sagittis sapien venenatis odio
                volutpat, non laoreet ex eleifend.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam lobortis tortor ac
                odio pretium tempus. Nunc ut mattis leo, nec luctus quam. Sed ac tempus massa.
                Aliquam consectetur quis enim non congue. Vestibulum sagittis sapien venenatis odio
                volutpat, non laoreet ex eleifend.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam lobortis tortor ac
                odio pretium tempus. Nunc ut mattis leo, nec luctus quam. Sed ac tempus massa.
                Aliquam consectetur quis enim non congue. Vestibulum sagittis sapien venenatis odio
                volutpat, non laoreet ex eleifend.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam lobortis tortor ac
                odio pretium tempus. Nunc ut mattis leo, nec luctus quam. Sed ac tempus massa.
                Aliquam consectetur quis enim non congue. Vestibulum sagittis sapien venenatis odio
                volutpat, non laoreet ex eleifend.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam lobortis tortor ac
                odio pretium tempus. Nunc ut mattis leo, nec luctus quam. Sed ac tempus massa.
                Aliquam consectetur quis enim non congue. Vestibulum sagittis sapien venenatis odio
                volutpat, non laoreet ex eleifend.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam lobortis tortor ac
                odio pretium tempus. Nunc ut mattis leo, nec luctus quam. Sed ac tempus massa.
                Aliquam consectetur quis enim non congue. Vestibulum sagittis sapien venenatis odio
                volutpat, non laoreet ex eleifend.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam lobortis tortor ac
                odio pretium tempus. Nunc ut mattis leo, nec luctus quam. Sed ac tempus massa.
                Aliquam consectetur quis enim non congue. Vestibulum sagittis sapien venenatis odio
                volutpat, non laoreet ex eleifend.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Post;

import React, { Component } from 'react';

import './index.css';

import Post from '../Post';

class PostList extends Component {
  state = {
    posts: [
      {
        id: 1,
        author: {
          name: 'Julio Alcantara',
          avatar: 'https://api.adorable.io/avatars/150/Julio.png'
        },
        date: '04 Jun 2019',
        content: 'Pessoal, alguém sabe se a Rocketseat está contratando?',
        comments: [
          {
            id: 1,
            author: {
              name: 'Diego Fernandes',
              avatar: 'https://api.adorable.io/avatars/150/001.png'
            },
            content: 'Conteúdo do comentário'
          }
        ]
      }
    ]
  };

  render() {
    return (
      <div className='feed'>
        <Post post={this.state.posts[0]} />
        <Post post={this.state.posts[0]} />
      </div>
    );
  }
}

export default PostList;

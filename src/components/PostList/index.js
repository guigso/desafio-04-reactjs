import React, { Component } from 'react';

import './styles.css';

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
              avatar: 'https://api.adorable.io/avatars/150/Diego.png'
            },
            content: 'Conteúdo do comentário'
          },
          {
            id: 2,
            author: {
              name: 'Matheus Henrique',
              avatar: 'https://api.adorable.io/avatars/150/Matheus.png'
            },
            content: 'Conteúdo do comentário'
          }
        ]
      },
      {
        id: 2,
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
              avatar: 'https://api.adorable.io/avatars/150/Diego.png'
            },
            content: 'Conteúdo do comentário'
          },
          {
            id: 2,
            author: {
              name: 'Matheus Henrique',
              avatar: 'https://api.adorable.io/avatars/150/Matheus.png'
            },
            content: 'Conteúdo do comentário'
          }
        ]
      }
    ]
  };

  render() {
    return (
      <div className="feed">
        {this.state.posts.map(post => (
          <Post key={post.id} post={post} />
        ))}
      </div>
    );
  }
}

export default PostList;

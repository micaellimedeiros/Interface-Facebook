import React, { Component } from 'react';

import PostItem from '../components/PostItem';

class PostList extends Component {
  state = {
    posts: [
      {
        id: 1,
        author: {
          name: 'Micaelli Medeiros',
          avatar: 'https://avatars3.githubusercontent.com/u/54600663?s=460&v=4'
        },
        date: '17 Fev 2020',
        content: 'Pessoal, alguém sabe se a Rocketseat está contratando?',
        comments: [
          {
            id: 2,
            author: {
              name: 'Diego Fernandes',
              avatar: 'https://avatars2.githubusercontent.com/u/2254731?v=4'
            },
            date: '17 Fev 2020',
            content:
              'A Rocketseat está sempre em busca de novos membros para o time, e geralmente ficamos de olho em quem se destaca no Bootcamp, inclusive 80% do nosso time de devs é composto por alunos do Bootcamp. Além disso, se você tem vontade de ensinar gravando vídeos e criando posts, pode me chamar no Discord! (Sério, me chamem mesmo, esse comentário é real)'
          }
        ]
      },
      {
        id: 3,
        author: {
          name: 'Micaelli Medeiros',
          avatar: 'https://avatars3.githubusercontent.com/u/54600663?s=460&v=4'
        },
        date: '17 Fev 2020',
        content:
          'Fala galerinha, tudo bem?\nEstou fazendo o Bootcamp GoStack e está sendo muito top! Alguém mais aí fazendo? Comenta aqui na publicação para conversarmos um pouquinho sobre :)',
        comments: [
          {
            id: 4,
            author: {
              name: 'Luiz Gustavo',
            avatar: 'https://avatars0.githubusercontent.com/u/25311644?s=460&v=4'
          },
            date: '17 Fev 2020',
            content:
              'Também estou fazendo o Bootcamp e estou adorando! Estou no terceiro módulo sobre Node e já tenho minha API dos desafios construída!'
          },
          {
            id: 5,
            author: {
              name: 'Cézar Toledo',
              avatar: 'https://i.pravatar.cc/150?img=11'
            },
            date: '17 Fev 2020',
            content:
              'Que maaaaaassa! Estou pensando em me inscrever na próxima turma pra ver qual é desse Bootcamp GoStack, dizem que os devs saem de lá com super poderes'
          },
          {
            id: 6,
            author: {
              name: 'Thales Testoni',
              avatar: 'https://avatars0.githubusercontent.com/u/49066917?s=460&v=4'
          },
            date: '17 Fev 2020',
            content:
              'Também estou fazendo! Logo nos primeiros dias já consegui um emprego com React, tô felizão! Continua, é muito bom!'
          },
          {
            id: 7,
            author: {
              name: 'Clara Lisboa',
              avatar: 'https://i.pravatar.cc/150?img=5'
            },
            date: '17 Fev 2020',
            content:
              'Com certeza depois de todo este feedback vou me inscrever também! Bootcamp GoStack aí vou eu!'
          }
        ]
      },
    ]
  };

  render() {
    const { posts } = this.state;

    return (
      <div className="postlist">
        {posts.map(post => (
          <PostItem key={post.id} {...post} />
        ))}
      </div>
    );
  }
}

export default PostList;
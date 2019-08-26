const articles = 
[
  {
    id: 1,
    articleTitle: 'John Doe',
    post: 'I am a blog post 1.',
    comment: [
      {
        id: 1,
        text: 'Comment 1'
      }, 
      { 
        id: 2,
        text: 'Comment 2'
      },
      {
        id: 3,
        text: 'Comment 3'
      }
    ]
  },
  {
    id: 2,
    articleTitle: 'Bob Williams',
    post: 'I am a blog post. 2 ',
    comment: [
      {
       id: 1,
       text: 'Comment 2'
      }
    ]
  },
  {
    id: 3,
    articleTitle: 'Shannon Jackson',
    post: 'I am a blog post. 3',
    comment: [
      {
        id: 1,
        text: 'Comment 3'
      },
      {
        id: 2,
        text: 'Comment 2'
      }
    ]
  }
];

module.exports = articles;

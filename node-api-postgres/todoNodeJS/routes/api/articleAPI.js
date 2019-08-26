const express = require('express');
const uuid = require('uuid');
const router = express.Router();
const articles = require('../../articles');

// Gets All Articles
router.get('/', (req, res) => res.json(articles));

// Get Single Article
router.get('/:id', (req, res) => {
  const found = articles.some(article => article.id === parseInt(req.params.id));

  if (found) {
    res.json(articles.filter(article => article.id === parseInt(req.params.id)));
  } else {
    res.status(400).json({ msg: `No article with the id of ${req.params.id}` });
  }
});

// Create Article
router.post('/', (req, res) => {
  const newArticle = {
    id: uuid.v4(),
    articleTitle: req.body.articleTitle,
    post: req.body.post,
    comment:req.body.comment
  };

  if (!newArticle.articleTitle || !newArticle.post) {
    return res.status(400).json({ msg: 'Please include article title and post text' });
  }

  articles.push(newArticle);
  res.json(articles);
  // res.redirect('/');
});

// Update Article
router.put('/:id', (req, res) => {
  const found = articles.some(article => article.id === parseInt(req.params.id));

  if (found) {
    const updArticle = req.body;
    articles.forEach(article => {
      if (article.id === parseInt(req.params.id)) {
        article.articleTitle = updArticle.articleTitle ? updArticle.articleTitle : article.articleTitle;
        article.post = updArticle.post ? updArticle.post : article.post;

        res.json({ msg: 'Article updated', article });
      }
    });
  } else {
    res.status(400).json({ msg: `No article with the id of ${req.params.id}` });
  }
});

// Delete Article
router.delete('/:id', (req, res) => {
  const found = articles.some(article => article.id === parseInt(req.params.id));

  if (found) {
    res.json({
      msg: `Article ${req.params.id} deleted. Here are the remaining articles.`,
      articles: articles.filter(article => article.id !== parseInt(req.params.id))
    });
  } else {
    res.status(400).json({ msg: `No article with the id of ${req.params.id}` });
  }
});


router.post("/comments/:id", (req, res) => {
  const found = articles.some(article => article.id === parseInt(req.params.id));

  if (found) {
    const commentObj = req.body;
    articles.forEach(article => {
      if (article.id === parseInt(req.params.id)) {
        article.comment.push(commentObj.comment);
        res.json({ msg: 'Comment added to Article', article });
      }
    });
  } else {
    res.status(400).json({ msg: `No article with the id of ${req.params.id}` });
  }
})


router.get("/comments/:id", (req, res) => {
  //find article first, then find comment id.
  const found = articles.comment.some(comment => comment.id === parseInt(req.params.id));

  if (found) {
    res.json(articles.comment.filter(comment => comment.id === parseInt(req.params.id)));
  } else {
    res.status(400).json({ msg: `No article with the id of ${req.params.id}` });
  }
})

module.exports = router;

const express = require('express');
const app = express();
const router = express.Router();
const dataJson = require('./data.json');
const { data } = dataJson;

app.use(router);

router.get('/', (req, res) => {
  res.json({ data });
});

const matchTerm = (name, term) => name.toLowerCase().includes(term);
router.get('/published', (req, res) => {
  const { term = null } = req.query;
  let onlyPublishedData = [];

  if (term) {
    onlyPublishedData = data.filter(({isActive, name}) => isActive === 'true' && matchTerm(name, term));
  } else {
    onlyPublishedData = data.filter(({isActive}) => isActive === 'true');
  }

  res.json({data: onlyPublishedData});
});

module.exports = {products: router};

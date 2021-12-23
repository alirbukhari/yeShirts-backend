const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;

app.set('view engine', 'ejs');

app.get('/', async (req, res) => {
  res.render('pages/index', { title: 'yeShirts' });
});

app.get('/feedback', async (req, res) => {
  res.render('pages/feedback', { title: 'yeShirts' });
});

app.get('/status', async (req, res) => {
  res.send({ success: true, message: 'Hello World' });
});

app.listen(PORT, async () => {
  console.log(`App listening on http://localhost:${PORT}`);
});

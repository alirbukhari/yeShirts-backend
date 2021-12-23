const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// application routes
app.get('/status', async (req, res) => {
  return res.send({ success: true, message: 'Hello World' });
});

// server-side routes
app.get('/', async (req, res) => {
  return res.render('pages/index', { title: 'yeShirts' });
});

app.get('/feedback', async (req, res) => {
  return res.render('pages/feedback', { title: 'yeShirts' });
});

app.post('/feedback', async (req, res) => {
  if (!Object.keys(req.body).length) return res.send({ success: false, message: 'fields missing !' });
  return res.send({ success: true, message: 'Submitted!' });
});

app.listen(PORT, async () => {
  console.log(`App listening on http://localhost:${PORT}`);
});

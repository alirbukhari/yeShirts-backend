const express = require('express');
const bodyParser = require('body-parser');
const { nanoid } = require('nanoid');

const app = express();
const PORT = process.env.PORT || 3000;

const users = {};

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

// USER CRUD Operations

app.post('/user/login', async (req, res) => {
  const user = Object.values(users).find((user) => user.email === req.body.email);

  if (!user || user.password !== req.body.password) return res.status(403).json({ success: false, message: 'invalid credentials' });

  return res.json(user);
});

app.post('/user', async (req, res) => {
  const user = { id: nanoid(6), ...req.body };

  users[user.id] = user;

  return res.json({ success: true, message: 'User Registered' });
});

app.put('/user/:id', async (req, res) => {
  const user = users[req.params.id];

  if (!user) return res.status(401).json({ success: false, message: 'no user found' });

  users[req.params.id] = { ...user, ...req.body };

  return res.json({ success: true, message: 'user updated' });
});

app.delete('/user/:id', async (req, res) => {
  delete users[req.params.id];
  return res.json({ success: true, message: 'user deleted' });
});

app.listen(PORT, async () => {
  console.log(`App listening on http://localhost:${PORT}`);
});

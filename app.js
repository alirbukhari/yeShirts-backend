const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', async (req, res) => {
  res.send({ success: true, message: 'Hello World' });
});

app.listen(PORT, async () => {
  console.log(`App listening on http://localhost:${PORT}`);
});

const express = require('express');
const path = require('path');
const db = require('./db');

const app = express();
const port = process.env.PORT || 4000;

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.get('/api/images', async (req, res) => {
  try {
    const { rows } = await db.query(
      `
      SELECT *
      FROM images
    `,
      []
    );
    res.send(rows);
  } catch (error) {
    res.status(error.status || 500).send({ error: error.message });
  }
});

app.post('/api/images', async (req, res) => {
  try {
    const { url, label } = req.body;
    const { rows } = await db.query(
      `
      INSERT INTO images (url, label)
      VALUES ($1, $2)
      RETURNING *
    `,
      [url, label]
    );
    res.send(rows[0]);
  } catch (error) {
    res.status(error.status || 500).send({ error: error.message });
  }
});

app.get('/api/images/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { rows } = await db.query(
      `
      SELECT *
      FROM images
      WHERE id = $1
    `,
      [id]
    );
    res.send(rows);
  } catch (error) {
    res.status(error.status || 500).send({ error: error.message });
  }
});

app.delete('/api/images/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { rows } = await db.query(
      `
      DELETE FROM images
      WHERE id = $1
      RETURNING *
    `,
      [id]
    );
    res.send(rows[0]);
  } catch (error) {
    res.status(error.status || 500).send({ error: error.message });
  }
});

app.use(express.static(path.join(__dirname, 'build')));

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

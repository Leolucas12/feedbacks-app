import { dirname, join, resolve } from 'path'
import express from 'express'
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);

const __dirname = dirname(__filename);

const app = express();

app.use(express.static(resolve(__dirname, './dist')));

app.get('*', (req, res) => {
  res.sendFile(join(__dirname, './dist/index.html'));
});

app.listen(process.env.PORT || 3000, (err) => {
  if (err) { return console.log(err) }

  console.log(`Server started at port ${process.env.PORT}`)
});
const express = require('express');
const app = express();
const port = 3000;

const UserRoutes = require('./routes/users')

app.use(UserRoutes)

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`listening at http://localhost:${port}`);
});
const express = require('express');
const app = express();
const { connectDb } = require('./models/db.js');
const dotenv = require('dotenv');
const jwt = require('jsonwebtoken');
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 3000;

dotenv.config();

app.use(bodyParser.json());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

connectDb();

const apiRouter = require('./routes/api');
const stripeRouter = require('./routes/stripe');
const charityOrgRouter = require('./routes/charityOrg');


app.use('/stripe', stripeRouter);
app.use('/api', apiRouter);
app.use('/charity-organizations', charityOrgRouter);

app.use('*', (req, res) => {
  res.status(404).send();
});

app.use((err, req, res) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 500,
    message: { err: 'An error occurred' },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  return res.status(errorObj.status).json(errorObj.message);
});

app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`));
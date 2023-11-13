const express = require('express');

const app = express();

// Import connection
const dbFile = require('./connection');

// Import routes and user model
const userRoute = require('./routes/user');
const productRoute = require('./routes/product');

const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: 'true' }));

app.use('/api/user', userRoute);
app.use('/api/products', productRoute);

app.get('/', (req, res) => {
    res.end('Welcome to the backend server');
});

const port = process.env.PORT || 7500;
app.listen(port, () => {
  console.log(`serve at http://localhost:${port}`);
});


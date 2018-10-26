const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const items = require('./routes/api/items'); //To make the items file work, to make system to look there

const app = express();

//Body Parser Middleware

app.use(bodyParser.json());

//DB Config

const db = require('./config/keys').mongoURI;

//Connect to Mongo

mongoose
    .connect(db, {useNewUrlParser: true})
    .then(() => console.log("Connected to MongoDb.."))
    .catch(err => console.log(err));

//Use routes
app.use('/api/items', items); // That's how, any request that goes to '/api or /items' goes to items file

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`App started at port ${port}`));

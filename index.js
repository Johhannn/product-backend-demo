require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const bodyparser = require('body-parser');
const user_routes = require('./routes/userRoutes')

const env = process.env;
const app = express();

app.use(bodyparser.json());
app.use('/product', user_routes);

mongoose.connect(env.MONG_URL)
.then(() => {
    console.log("Connected to MongoDB")
})
.catch((err) => console.log(err));

app.listen(env.PORT, () => {console.log("Product App Listening to PORT 3000")});
const express =  require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv/config');

app.use(express.urlencoded(
    {extended: true}
));

app.use(express.json());

const booksRoute = require('./routes/books');

app.use('/books', booksRoute);

app.get('/', (req, res) => {
    res.send('Hello World!!');
});

mongoose.connect(
    process.env.DB_CONNECTION, 
    { useNewUrlParser: true, useUnifiedTopology: true },
    () => console.log('connected to DB!')
);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on ${port}`));
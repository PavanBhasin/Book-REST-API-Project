const express =  require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv/config');

const booksRoute = require('./routes/books');

app.use('/books', booksRoute);

app.get('/', (req, res) => {
    res.send('Hello World!!');
});


app.get('/api/courses/:id', (req, res) => {
    res.send(req.params.id);
})

mongoose.connect(
    process.env.DB_CONNECTION, 
    { useNewUrlParser: true, useUnifiedTopology: true },
    () => console.log('connected to DB!')
);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on ${port}`));
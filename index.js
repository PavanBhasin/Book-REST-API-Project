const express =  require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv/config');

const courses = [
    {   id: 1, name:'course1'},
    {   id: 2, name:'course2'},
    {   id: 3, name:'course3'}
];

app.get('/', (req, res) => {
    res.send('Hello World!!');
});

app.get('/api/courses', (req, res) => {
    res.send(courses);
})

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
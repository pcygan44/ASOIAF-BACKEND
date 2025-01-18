// filepath: /Users/przemek/Documents/Projects/ASOIAF-BackEnd/index.js
const express = require('express');
const app = express();
const port = 5000;

app.get('/', (req, res) => {
    res.send('Hello World!');
});
app.get('/login', (req, res) => {
    res.send('You attempt to log in!');
});
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
const express = require('express');

const PORT = 3000;
// const hostName = '127.0.0.1';

const app = express();

app.get('/', (req, res) => {

    res.send("<h1>Hello</h1>");
})

app.get('/contact', (req, res) => {
    res.json({ 
        message: "I am root rout",
         name: "Shohel Parves",
         age: 25
    })
})
    

    app.listen(PORT, () => {
        console.log(`Server is running on Port ${PORT}`)
    })
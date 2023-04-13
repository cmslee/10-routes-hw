const express = require('express');

const app = express();
const PORT = 3000;



//*ROUTES

//1
app.get('/', (req, res) => {
    res.send(`
    <h1>Hello, 10 routes!</h1>
    <a href='/menu'><h3>Let's get started...</h3></a>
    `)
});

//2
app.get('/menu', (req, res) => {

});


//*LISTEN

app.listen(PORT, () => {
    console.log(`Server is running on port:${PORT}...`)
});
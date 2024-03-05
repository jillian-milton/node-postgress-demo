const express = require('express');
const nunjucks = require('nunjucks');

const app = express();
const port = process.env.PORT || 3000

// Configure Nunjucks
nunjucks.configure('views', {
    autoescape: true,
    noCache: process.env.NODE_ENV !== 'production',
    express: app
});


app.get('/', (req, res) => {
    // Render index.njk using the variable "title" 
    res.render('index.njk', { title: "Welcome to my site!" });
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
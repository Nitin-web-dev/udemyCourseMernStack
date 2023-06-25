const express = require('express');

const app = express();

// home route
app.get('/', (req, res) => {
    res.send('hello wolrd');
    res.end();
})

// contact route
app.get("/contact", (req,res) => {
    res.send('<h1> contact:xyz@gmail.com</h1>');
    res.end();
})
app.get('/about', (req, res) => {
    res.send(`
        <div> 
            <h1> this is about page</h1>
            <p> thisis some text to descibe about myself i am just learing to code etc. etc </p>
            <h2>fake data</h2>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
        </div>
    `)
})
// project go to google by by link on links page
app.get('/links', (req,res) => {
    res.send('<a href="https://www.google.com" target="_blank">go to google</a>');
    res.end();
})


app.listen(8080,() => console.log('server is running'));
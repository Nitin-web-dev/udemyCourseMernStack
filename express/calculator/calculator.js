const express = require('express');
const bodyParser = require('body-parser');
const app  = express();

app.use(bodyParser.urlencoded({extended: true}));

// routes
app.get('/', (req,res) => {
    res.sendFile(__dirname + '/index.html');
    // res.end();
})

app.get("/bmicalculator", (req,res) => {
    res.sendFile(__dirname + '/BMIcalculator.html');
})

app.post('/', (req, res) => {
    // console.log(req.body);
    let {num1, num2} = req.body;
    let result = Number(num1) + Number(num2);

    res.send("the total is "+ result);
})

app.post('/bmicalculator', (req, res ) => {
    let {weight, height} = req.body;
    let result  = parseFloat(weight) / (parseFloat(height) * parseFloat(height));

    res.send('bmi => '+ result);
})



app.listen(8080, () => console.log('server is running'));
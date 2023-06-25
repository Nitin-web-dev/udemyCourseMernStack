// require fs module 
const fs = require('fs');



// create a file 
// fs.writeFile('text.txt', "this is text file text created the file", (err) => {
//     if(err) throw err;
//     console.log('the file has been created');
// })


// read the file

fs.readFile('./text.txt', 'utf-8', (err, data) => {
    if(err) throw err;
    console.log(data);
})
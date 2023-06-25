
// 1. Use the inquirer npm package to get user input.
// 2. Use the qr-image npm package to turn the user entered URL into a QR code image.
// 3. Create a txt file to save the user input using the native fs node module.

    import inquirer from 'inquirer';
    import qr from 'qr-image';
    import fs, { createWriteStream } from 'fs';

    inquirer.prompt(
        [
            {
                message: 'type url:',
                name: "URL"
            }
        ]
    )
    .then((answer) => {
        const url = answer.URL;
        // console.log(url)

        // created img of qr-code 
        let  qr_img = qr.image(url);
        qr_img.pipe(fs.createWriteStream('qr-code_img.png'));



        // created file of text 
        fs.writeFile('./respones-URL.txt', url, (err) => {
            if (err) throw err;
            console.log('file has been created');
        })



    }) .catch((error) => {
    
          // Prompt couldn't be rendered in the current environment
          console.log(error);
    
      });


/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/
import inquirer from 'inquirer';

import qr from 'qr-image';
import fs from 'fs';

let userInput;

inquirer
    .prompt([
        {
            name: 'uri',
            message: 'Enter the URL for the QR-Code'
        },
    ])
    .then(answers => {
        userInput = answers.uri;
        console.log(userInput);
        let qr_png = qr.imageSync(userInput, {type: 'png'});
        if (!fs.existsSync('qr.png')) {
            fs.writeFile("qr.png", qr_png, (err) => {
                if (err) {
                    throw err;
                }
                console.log(`The file has been saved!`);
            });
        }
    });
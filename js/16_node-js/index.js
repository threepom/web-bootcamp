'use strict';

const fs = require('fs');



if (!fs.existsSync('message.txt')) {
    fs.writeFile("message.txt", "Hello from node.js", (err) => {
        if (err) {
            throw err;
        }
        console.log(`The file has been saved!`);
    });
}

fs.readFile('message.txt', 'utf8', (err, data) => {
    if (err) throw err;
    console.log(data);
});


const newfunc = require('./app');
const os = require('os');
const fs = require('fs');
const _ = require('lodash');

newfunc.addNewFruit("Kiwi")
newfunc.reArrange("Cris")

let userDetails = os.userInfo().username;

fs.appendFile('oh-hi.txt', `Hello ${userDetails}`, (err) => {
    if (err){
        console.log('oops');
    }
})

_.camelCase('--hello there');

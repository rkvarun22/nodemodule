//Files Module
//const getNotes = require('./notes.js')
const yargs = require('yargs')
//const chalk = require('chalk');
//const msg = getNotes()
//console.log(msg)

//Validator Library
//const validator = require('validator')
//console.log(validator.isEmail('varun@gmail.com'))

//Chalk Library

//const text = chalk.green.bgWhite.italic('Message printed succesfully!!')
//console.log(text)

//Learn The Nodemon => 
// It is a tool that helps develop node.js based applications by automatically restarting the node application when file changes in the directory are detected.

//Getting input from user

//const command = process.argv[2]

//console.log(process.argv)


// if (command === 'add'){
//     console.log('Adding Note:')
// }else if (command === 'remove') {
//     console.log('Removing Note:')
// }

//file system and command line args
//Arguments parsing with yargs 

//Customize yargs version
yargs.version('1.1.0')

//Create add command
yargs.command ( {
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function (argv) {
        //console.log('Adding a new note!', argv)
        console.log('Title: ' + argv.title)
        console.log('Body: ' + argv.body)
    }
})

//Create remove command
yargs.command ({
    command: 'remove',
    describe: 'Remove a note',
    handler: function () {
        console.log('Removing the note')
    }
})

//Create list command
yargs.command ({
    command: 'list',
    describe: 'List your note',
    handler: function (){
        console.log('Listing out all note')
    }
})

//Create read Command
yargs.command ({
    command: 'read',
    describe: 'Read a note',
    handler: function (){
        console.log('Reading a note')
    }
})
// add, remove, read , list

//console.log(yargs.argv)
yargs.parse()

//Storing Data with json
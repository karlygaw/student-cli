#!/usr/bin/env node
const { Command } = require('commander');
const program = new Command();
const { prompt } = require('inquirer');
const {
    addStudent,
    findStudent,
    updateStudent,
    removeStudent,
    listStudents
} = require('./index');

//Student Questions 
const questions = [
    {
        type: 'input',
        name: 'firstname',
        message: 'Student First Name'
    },
    {
        type: 'input',
        name: 'lastname',
        message: 'Student Last Name'
    },
    {
        type: 'input',
        name: 'phone',
        message: 'Student Phone Number'
    },
    {
        type: 'input',
        name: 'email',
        message: 'Student Email Address'
    },
    {
        type: 'input',
        name: 'age',
        message: 'Student Age'
    },
    {
        type: 'input',
        name: 'major',
        message: 'Student Major'
    },
    {
        type: 'input',
        name: 'CourseNumber',
        message: 'Student Course Number'
    }
];

program
    .version('1.0.0')
    .description('Student Management System')



//Add Command
program
    .command('add')
    .alias('a')
    .description('Add a student')
    .action(() => {
        prompt(questions).then(answers => addStudent(answers));
    });

// Find Command
program
    .command('find <name>')
    .alias('f')
    .description('Find a student')
    .action(name => findStudent(name));

// Update Command
program
    .command('update <_id>')
    .alias('u')
    .description('Update a student')
    .action((_id) => {
        prompt(questions).then(answers => updateStudent(_id, answers));
    });

// Remove command
program
    .command('remove <_id>')
    .alias('r')
    .description('Remove a student')
    .action(_id => removeStudent(_id));

// List command
program
    .command('list')
    .alias('l')
    .description('List all customers')
    .action(() => listStudents());

program.parse(process.argv);

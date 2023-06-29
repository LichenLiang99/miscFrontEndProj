const yargs = require("yargs");
const fs = require("fs");
yargs.version("3.1.0");


//for login, make sure to use username: admin, password: admin
yargs.command({
    command: "login",
    describe: "Login with username and password",
    builder: {
        username: {
            describe: "Username",
            demandOption: true,
            type: "string",
        },
        password: {
            describe: "Password",
            demandOption: true,
            type: "string",
        },
    },
    handler: function (argv) {
        if(argv.username === 'admin' && argv.password === 'admin'){
            console.log('Login success!');
        }
        else{
            console.log('Wrong Username or Password');
        }
    }
});

//to read file
yargs.command({
    command: "read",
    describe: "Read to-do items",
    handler: function () {
        try {
            const data = fs.readFileSync('todos.json');
            const todos = JSON.parse(data);
            console.log('To-do items:');
            console.log(todos);
        } catch (error) {
            console.error('Error in reading file');
        }
    }
});

//add to to-do list, all except desc are required
yargs.command({
    command: "add",
    describe: "add to to-do list",
    builder: {
        title: {
            describe: "Title",
            demandOption: true,
            type: "string",
        },
        desc: {
            describe: 'Description',
            type: 'string'
        },
        status: {
            describe: 'Status (NOT FINISH, FINISH)',
            demandOption: true,
            type: 'string'
        },
        time: {
            describe: 'Time',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function (argv) {
        const { title, desc, status, time } = argv;
        const todo = {title,desc,status,time};

        try {
            const data = fs.readFileSync('todos.json');
            const todos = JSON.parse(data);
            todos.push(todo);

            fs.writeFileSync('todos.json', JSON.stringify(todos));
            console.log('To-do item added successfully.');

        } catch (error) {
            console.log('Error in adding element');
        }
    }
});

//to update status to finish
yargs.command({
    command: "finish",
    describe: "Change status to finish",
    builder: {
        title: {
            describe: "Title",
            demandOption: true,
            type: "string",
        }
    },
    handler: function (argv) {
        const { title } = argv;

        try {
            const data = fs.readFileSync('todos.json');
            const todos = JSON.parse(data);
            const todo = todos.find(item => item.title === title);

            if (todo) {
                todo.status = 'FINISH';
                fs.writeFileSync('todos.json', JSON.stringify(todos));
                console.log('To-do item marked as finished.');
            } else {
                console.log('To-do item not found.');
            }
        } catch (error) {
            console.error('Error in updating status');
        }
    }
});

//delete to-do item
yargs.command({
    command: "delete",
    describe: "Delete a to-do item",
    builder: {
        title: {
            describe: "Title",
            demandOption: true,
            type: "string",
        }
    },
    handler: function (argv) {
        const { title } = argv;

        try {

            const data = fs.readFileSync('todos.json');
            let todos = JSON.parse(data);
            const updatedTodos = todos.filter(item => item.title !== title);

            if (todos.length !== updatedTodos.length) {
                fs.writeFileSync('todos.json', JSON.stringify(updatedTodos));
                console.log('To-do item deleted successfully.');
            } else {
                console.log('To-do item not found.');
            }
        } catch (error) {
            console.error('Error in deleting item');
        }
    }
});

yargs.parse();
const { prompt } = require("inquirer");
const db = require("./db");
require("console.table");

function viewEmployees() {
    db.findAllEmployees()
    .then(([rows]) => {
        let employees = rows;
        console.log("\n");
        console.table(employees);
    })
    .then(() => loadMainPrompts());
}

function quit() {
    console.log("Bye Bye!");
    process.exit();
}

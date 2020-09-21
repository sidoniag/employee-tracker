const mysql = require('mysql2');

// create connecion to database
const connection = mysql.createConnection({
    host: "localhost",
    // your MySQL username
    user: "root",
    // your MySQL password
    password: "",
    database: "employee"
});

connection.connect(err => {
    if (err) throw err;
    console.log('connected as id' + connection.threadId);
    afterConnection();
});

afterConnection = () => {
    connection.query('SELECT * FROM ', function(err, res) {
        if (err) throw err;
        console.log(res);
        connection.end();
    });
};

module.exports = connection;
const mysql = require('mysql2');

// create connecion to database
const connection = mysql.createConnection({
    host: 'localhost',
    port: 3300,
    // your MySQL username
    user: 'root',
    // your MySQL password
    password: '123',
    database: 'employee_trackerDB'
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
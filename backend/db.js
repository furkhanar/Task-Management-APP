const mysql = require("mysql2");

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "furkh@n@r06",
    database: "taskmanager"
});

connection.connect((err) => {
    if(err){
        console.log(err);
    }
    else{
        console.log("MySQL Connected");
    }
});

module.exports = connection;
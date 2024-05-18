import mysql from "mysql"

export const connectDB = mysql.createConnection({
    host: "127.0.0.1",
    user: "root",
    password: "",
    database: "hero"
})

connectDB.connect((err)=>{
    if (!err) {
        console.log('DB connected succeded.');
    }
    else {
        console.log('DB connection is failed \n Error : ' + JSON.stringify(err, undefined, 2));
    }
});

 
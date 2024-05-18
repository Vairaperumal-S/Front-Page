import express from "express"
import cors from "cors"
// import { connectDB } from "./config/db.js"



//app config
const app = express()
const port = 4000

// middleware
app.use(express.json())
app.use(cors())

// db connection
// connectDB

var values = [
    ['NATASHA', 'FEMALE', 'BLACK WIDOW', 'GUINDY']
]

// app.post("/",(req,res)=>{
//     // res.send("API Working")
//     connectDB.query('INSERT INTO testdata(uname, gender, hero, address) VALUES ?',values,(err, rows, fielld)=>{
//         if (!err) {
//             console.log(rows);
            
//         }
//         else
//             console.log(err);
//     })
// })

app.listen(port,()=>{
    console.log(`Server Started on http://localhost:${port}`)
})
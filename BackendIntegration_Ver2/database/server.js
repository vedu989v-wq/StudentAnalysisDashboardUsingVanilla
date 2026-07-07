import express from "express";
import cors from "cors";
import pool from "./db.js";

const app=express();

app.use(cors()); //explicit permission given by server.js to frontend application to access 
app.use(express.json()); //parses table rows to JSON objects

app.get("/", async(req, res)=>{
    try{
        const result=await pool.query(
            "SELECT * FROM studentinfo"
        )

    res.json(result.rows)
    // console.log(result.rows)
} catch(err){
   console.log(err);

   res.status(500).json({
    error:"DataBase Error"
   })

   }
})



app.listen(5000, ()=>{
    console.log(`Server running Flawlessly on port 5000 with link http://localhost:5000`)
}) 

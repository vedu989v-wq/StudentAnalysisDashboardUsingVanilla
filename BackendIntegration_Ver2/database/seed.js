import fs from "fs";
import csv from "csv-parser";
import pool from "./db.js";

const students=[];

//creating read stream, to load data chunk by chunk, not at a go, to prevent RAM overflow and Program Crashes

fs.createReadStream("students.csv")
.pipe(csv()) //csv() -> csv-parser
.on("data", (row)=>{ //converts csv row to javascript object
    students.push(row); //pushing row to student, as soon as pipeline transfer some data, pushing goes active
})
.on("end", async()=>{ //as soon as all data entries are loaded in student array,, this part starts working, tho it uses an awaiting function to avoid misplacement of data rows 
    try {
        for(const student of students){
            await pool.query( //Pushing one data entry at a time...
                'INSERT INTO studentinfo (studentID, name, email, phone, department, year, cgpa, attendance) VALUES ($1, $2, $3, $4, $5, $6, $7, $8)',
                [
                    student.studentID,
                    student.name,
                    student.email,
                    student.phone,
                    student.department,
                    Number(student.year),
                    Number(student.cgpa), 
                    Number(student.attendance),
 
                ]
            );
        }

        console.log("seeding done");
    }
    catch(err){
        console.log(err);
    }
    finally{
        await pool.end();
    }
})
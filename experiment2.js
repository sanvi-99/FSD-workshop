const fs=require("fs");
// creating a file
fs.writeFileSync("student.txt","hello students")
    console.log("done");
// read a file

const data = fs.readFileSync("student.txt","utf-8");
console.log(data);

//write a file
fs.writeFileSync("student.txt",'name:sanvi\nSubject:Full Stack Development')
console.log("file created successfully");

//updating a file
fs.appendFileSync("student.txt","\nExperiment 2 completed")
console.log("file updated");

//unlink
// fs.unlinkSync("student.txt")
// console.log("file deleted")
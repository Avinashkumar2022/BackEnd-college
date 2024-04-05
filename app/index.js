const express = require('express'); // Import Express module
const app = express(); // Initialize Express application

const fs = require("fs");

app.get("/", (req, res) => {
    // res.send({
    //     id:1,name:"Avinash",course:"CSE"
    // })
    res.json({
        id:2,name:"hsaniva",course:"ESC"
    })
    fs.writeFile('student.txt', "Hello from the other side", (err, data) => {
        if (err) {
            res.status(404).send("File not found");
        } else {
            console.log(data);
            fs.readFile("student.txt", "utf-8", (err, data) => {
                if (err) {
                    res.status(404).send("File not found");
                } else {
                    res.send(data);
                }
            });
        }
    });
});

app.listen(1000, () => {
    console.log("Server Started");
});

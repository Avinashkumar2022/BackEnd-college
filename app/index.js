const express = require('express'); // Import Express module
const app = express(); // Initialize Express application

const fs = require("fs");

app.get("/", (req, res) => {
    fs.writeFile('student.txt', "Hello from the other side", (err, data) => {
        if (err) {
            res.status(404).send("File not found");
        } else {
            console.log(data);
            fs.readFile("student.txt", "utf-8", (err, data) => {
                if (err) {
                    res.status(404).send("File not found");
                } else {
                    res.download("student.txt");
                }
            });
        }
    });
});

app.listen(1000, () => {
    console.log("Server Started");
});

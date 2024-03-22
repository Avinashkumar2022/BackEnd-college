const http = require("http");
const fs = require("fs");

const server1 = http.createServer((req, res) => { // Corrected parentheses placement
    const obj = {
        name: "Avinash", // Changed = to : for object property assignment
        subject: ["int222", "int219", "int306"] // Changed = to : for object property assignment
    }

    fs.readFile("package.json", "utf-8", (err, data) => {
        if (err) {
            res.writeHead(500, {'Content-Type': 'text/plain'});
            res.end('Internal Server Error');
            return;
        }
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.end(data);
    });
});

server1.listen(2000, () => {
    console.log("Server started");
});

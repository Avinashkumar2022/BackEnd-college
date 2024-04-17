const express = require('express');
const app = express();

app.use(express.urlencoded({extended:true}));

app.use('/profile',(req,res,next)=>
{
    const{username,password}=req.body;
})

const user=users.find(u=>u.username===username&&u.password===password);

// Middleware to serve static files
app.use(express.static('public'));

// Route to serve login page
app.get('/login', (req, res) => {
    res.sendFile('/login.html');
});

app.listen(3000, () => {
    console.log("Server running at 3000");
});

const express = require('express');
const app = express();
const port = 3000;

app.get('/',(req,res)=>{
    res.send('Home Page');
});

app.get('/about',(req,res)=>{
    res.send('About Page');
});

app.get('/contact',(req,res)=>{
    res.send('Contact Page');
});

app.get('/user/:id',(req,res)=>{
    res.send(`User ID: ${req.params.id}`);
});


app.listen(port,()=>{
    console.log(`Server is running on http://localhost:${port}`);
});
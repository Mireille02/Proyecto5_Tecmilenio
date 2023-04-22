const express = require('express');
const app = express();

const router = require('./route');

// app.use(express.urlencoded({extended:false}));
// app.use(express(json));

app.set('view engine', 'ejs');

app.use('/', require('./route'));


app.listen(5000, () =>{
    console.log(`Server http://localhost:5000`);
}); 
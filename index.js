const express = require('express');
const path = require('path');
const ejs = require('ejs');
const app = express();
const mongoose = require('mongoose');

const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.use(express.static('public'));
app.set('view engine','ejs');

app.listen(3000, ()=>{
    console.log('Listening on 3000');
})

app.get('/',(req,res)=>{
    res.render('index');
})

app.get('/about',(req,res)=>{
    res.render('about');
})

app.get('/faq',(req,res)=>{
    res.render('faq');
})

app.get('/contact',(req,res)=>{
    res.render('index');
})

app.get('/blog-home',(req,res)=>{
    res.render('blog-home');
})

app.get('/blog-post',(req,res)=>{
    res.render('blog-post');
})


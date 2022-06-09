import express from 'express'
import path from 'path'
import ejs from 'ejs'

const app = express();

import mongoose from 'mongoose'
mongoose.connect('mongodb+srv://bottingup:QFWdUSvs8VfmT6s7@cluster0.j5un5.mongodb.net/CollectedCSVData',{useNewUrlParser:true})

import bodyParser from 'body-parser'

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.use(express.static('public'));
app.set('view engine','ejs');


import { ToMongo } from './models/QuoraAnswer.js'

app.get('/blog-home',async (req,res)=>{
    const blogposts = await ToMongo.find({})
    res.render('blog-home',{
        blogposts
        });
})

let port = process.env.PORT;
if (port == null || port == "") {
    port = 4000;
}
app.listen(port, ()=>{
    console.log('App listening...')
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
    res.render('contact');
})


app.get('/blog-home',(req,res)=>{
    res.render('blog-home');
})

app.get('/blog-post/:id',async (req,res)=>{
    const blogpost = await ToMongo.findById(req.params.id)
    res.render('blog-post',{
        blogpost
    })
})

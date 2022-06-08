const mongoose = require('mongoose');

const QuoraAnswer = require('./models/QuoraAnswer');

mongoose.connect('mongodb+srv://bottingup:QFWdUSvs8VfmT6s7@cluster0.j5un5.mongodb.net/',{useNewUrlParser:true})


QuoraAnswer.find({},(error, quoraans)=>{
    console.log(error, quoraans)
})
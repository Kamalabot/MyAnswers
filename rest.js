import mongoose from 'mongoose'

import QuoraAnswer from './models/QuoraAnswer'

mongoose.connect('mongodb+srv://bottingup:QFWdUSvs8VfmT6s7@cluster0.j5un5.mongodb.net/CollectedCSVData',{useNewUrlParser:true})


QuoraAnswer.find({},(error, quoraans)=>{
    console.log(error, quoraans)
})
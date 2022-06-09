import mongoose from 'mongoose'

import { ToMongo } from './models/QuoraAnswer.js'

mongoose.connect('mongodb+srv://bottingup:QFWdUSvs8VfmT6s7@cluster0.j5un5.mongodb.net/CollectedCSVData',{useNewUrlParser:true})


ToMongo.find({},(error, quoraans)=>{
    console.log(error, quoraans)
})
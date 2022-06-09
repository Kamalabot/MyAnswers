import express from 'express'
import cors from  'cors'
import answers from './api/answers_route.js'
import dotenv from 'dotenv'
import mongodb from 'mongodb'
async function main(){
    dotenv.config()

        const client = new mongodb.MongoClient(
            process.env.ANSWERS_DB_URI
        )
        const port = process.env.PORT || 8000

        try{
            await client.connect()

            app.listen(port, ()=>{
                console.log('server is running on port: '+port);
            })
        } catch(e){
            console.error(e);
            process.exit(1)
        }
    }
    main().catch(console.error);
const app = express();

app.use(cors());
app.use(express.json());

app.use("api/v1/answers", answers);
app.use('*',(req,res)=>{
    res.status(404).json({"error":"not found"})
})
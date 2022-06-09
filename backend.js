import express from 'express'
import cors from  'cors'
import answers from './api/answers_route.js'
import dotenv from 'dotenv'

class Index{
    static app = express();

    static main(){
        dotenv.config();
        Index.setUpServer();
        Index.setUpDatabase();
    }

    static setUpServer(){
        Index.app.use(cors());
        Index.app.use(express.json());

        Index.app.use("api/v1/answers", answers.configRoutes(Index.router));
        Index.app.use('*',(req,res)=>{
            res.status(404).json({"error":"not found"});
        });
    }
}
Index.main();
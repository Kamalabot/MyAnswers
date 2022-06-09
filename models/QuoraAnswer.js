import mongoose from 'mongoose'

const Schema = mongoose.Schema;

const AnswerSchema = new Schema({
    Questions: String,
    Answers: String,
    Questions_formed: String,
    Answers_formed: String
});
//important is how your provide the first arg of the mongoose.model function
export const ToMongo = mongoose.model('to_mongo',AnswerSchema);
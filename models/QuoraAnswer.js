import mongoose from 'mongoose'

const Schema = mongoose.Schema;

const BlogPostSchema = new Schema({
    Questions: String,
    Answers: String
});
//important is how your provide the first arg of the mongoose.model function
export const QuoraAnswer = mongoose.model('quoraanswer',BlogPostSchema);
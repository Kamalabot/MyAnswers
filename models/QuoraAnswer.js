const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BlogPostSchema = new Schema({
    Questions: String,
    Answers: String
});

const QuoraAnswer = mongoose.model('QuoraAnswer',BlogPostSchema);
module.exports = QuoraAnswer
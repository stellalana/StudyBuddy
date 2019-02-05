var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var QuestionSchema = new Schema({

    Type: {
        type: String,
        required:true
    },

    Question: {
        type: String,
        required:true
    },
   
    Correct: {
        type: Boolean,
        default: false
    },

    Active: {
        type: Boolean,
        default: true
    },
    
    createDate: {
        type: Date,
        default: Date.now
    }
});

var Question = mongoose.model("Question", QuestionSchema);

module.exports = Question;


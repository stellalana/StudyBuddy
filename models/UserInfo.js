var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var UserSchema = new Schema ({
    UserName: {
        type: String,
        required: true,
        unique: [true, "Title cannot be a duplicate"]
    },
    Password: {
        type: String,
        required:true
    },
    FirstName: {
        type: String,
        required:true
    },
    LastName: {
        type: String,
        required:true
    },
    Saved: {
        type: Boolean,
        default: false
    },
    
    createDate: {
        type: Date,
        default: Date.now
    },
    
    
    ///ref/link to a user created set of questions
    questions: [{
        type: Schema.Types.ObjectId,
        ref: "Questions"
    }]
});

var UserInfo = mongoose.model("UserInfo", UserSchema);

module.exports = UserInfo;
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const MessageModel = new Schema({
    sender:{type: String, required: true},
    reciver:{type: String, required: true},
    content:{type:String,required:true},
    date:{type:Date,default:Date.now}
});

module.exports = mongoose.model("Message",MessageModel);
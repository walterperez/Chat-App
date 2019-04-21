const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const RoomModel = new Schema({
    name : {type: String, required: true},
    date:{type:Date,default:Date.now},
    messages:{type:Array},
    users:{type:Array}
});

RoomModel.methods.createName = (user_1_ID , user_2_ID) => {
        const name = user_1_ID + user_2_ID + Date.now.toString();
        return name;
}

module.exports = mongoose.model("Room", RoomModel);
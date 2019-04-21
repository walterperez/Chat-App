const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcryptjs");

const UserModel = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    date: { type: Date, default: Date.now }
});

UserModel.method("encryptPassword", async (password) => {
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt)
    return hash;
});

UserModel.method("matchPassword", function (password) {
    const comparation = bcrypt.compare(password, this.password);
    return comparation;
});

// UserModel.methods.matchPassword = function (password) {
//     const comparation = bcrypt.compare(password, this.password);
//     return comparation;
// };

// UserModel.methods.encryptPassword = async (password) => {
//     const salt = await bcrypt.genSalt(10);
//     const hash = await bcrypt.hash(password, salt)
//     return hash;
// };



module.exports = mongoose.model("User", UserModel);
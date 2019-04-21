const express = require("express");
const router = express.Router();
const Room = require("../../models/Room");
const isAuth = require("./../../helpers/isAuth");
const uuid = require("uuid");

//   /!\ CODE NO TESTED /!\    //
// @route   POST api/Room/:ID
// @desc    Create Room :id is target persto to speak
// @access  Private
router.post('/:id', isAuth, async (req, res) => {

    const name = uuid() ;
    const messages=[req.body.messages];
    const users = [req.user,req.params.name];
    const newRoom = new Room({
        name, messages, users
    });
    const room = await newRoom.save();
    if (!room) {
       return res.json({error:"There was an error creating the room"})
    } else {
        res.json({messsage:"Room created"})
    }

});

//   /!\ CODE NO TESTED /!\    //
// @route   GET api/Room/:ID
// @desc    Add Message to the room
// @access  Private
router.post('/:id', isAuth, async (req, res) => {

});




module.exports = router;
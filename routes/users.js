const express = require('express');
const router = express.Router();
const {User,Show} = require('../models/index');




//---/users returns all users
router.get('/',async(req,res)=>{
    res.json(await User.findAll())
})
//---/users/id returns user with that id
router.get("/:id", async(req,res)=>{
    res.json(await User.findByPk(req.params.id))
})
//---/users/~id~/shows returns user's shows
router.get("/:id/shows", async(req,res)=>{
    //someUser.getShows
    someUser = await User.findByPk(req.params.id)
    res.json(await someUser.getShows())
})
//add show to user once watched
router.put('/:userId/shows/:showId', async(req,res)=>{
    thisUser = await User.findByPk(req.params.userId);
    someShow = await Show.findByPk(req.params.showId)
    await thisUser.addShow(someShow)
    //res -- all shows of that user has
    res.send(await thisUser.getShows())
})
module.exports = router;
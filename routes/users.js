const express = require('express');
const router = express.Router();
const {User} = require('../models/index');

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
    
})
module.exports = router;
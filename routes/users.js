const express = require('express');
const router = express.Router();
const {User} = require('../models/index');

//  /users returns all users
router.get('/',async(req,res)=>{
    res.json(await User.findAll())
})
router.get("/:id", async(req,res)=>{
    
})
module.exports = router;
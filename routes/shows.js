const express = require('express');
const router = express.Router();
const {Show} = require('../models/index');

// all shows
router.get('/',async(req,res)=>{
    res.json(await Show.findAll())
})
//particular show
router.get("/:id", async(req,res)=>{
    res.json(await Show.findByPk(req.params.id))
})
//get shows of one genre
router.get("/genres/:genre",async(req,res)=>{
    req.send(await Show.findByPk({
        where:{
            genre:'req.params.genre'
        }
    }))
})
module.exports = router;
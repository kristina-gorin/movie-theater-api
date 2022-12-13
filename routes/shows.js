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
    res.send(await Show.findAll({
        where:{
            genre:req.params.genre
        }
    }))
})

//update show's rating
router.put("/:id/watched", async(req,res)=>{
    watchedShow = await Show.findByPk(req.params.id)
    watchedShow.update(req.body);
    res.send(await Show.findAll())
})
//delete a show
router.delete('/:id',async(req,res)=>{
    showToDelete = await Show.findByPk(req.params.id);
    await showToDelete.destroy();
    res.send("here")
    //res.send(await Show.findAll())
})
module.exports = router;
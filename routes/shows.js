const express = require('express');
const router = express.Router();
const {Show} = require('../models/index');
const { check, validationResult } = require('express-validator');

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
router.put("/:id/watched", [check('rating').trim().not().isEmpty()],async(req,res)=>{
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        res.send({error:errors.array()})
    }
    else{watchedShow = await Show.findByPk(req.params.id)
    watchedShow.update({
        rating:req.body.rating
    });
    res.send(await Show.findAll())}
    
})
//upd status of show
// validate -> length bw5-25, no spaces
router.put('/:id/updates',[
    check('status').trim().not().isEmpty(),
    check('status').isLength({min:5,max:25})
    ],
    async(req,res)=>{
        const errors = validationResult(req);
        if(!errors.isEmpty()){
            res.send({error:errors.array()})
        }
        else{updateShow = await Show.findByPk(req.params.id)
        updateShow.update({
            status:req.body.status
        });
        res.send(await Show.findAll())}
        
    })
//delete a show
router.delete('/:id',async(req,res)=>{
    showToDelete = await Show.findByPk(req.params.id);
    await showToDelete.destroy();
    res.send("here")
    //res.send(await Show.findAll())
})
module.exports = router;
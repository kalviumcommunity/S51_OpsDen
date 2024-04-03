const express = require('express')
const getRouter = express.Router();
const postRouter = express.Router();
const putRouter = express.Router();
const deleteRouter = express.Router();
const opsdens = require("../models/opsden.model")
const Joi = require('joi');
const Feedback = require('../models/feedback.model')
const feedbackRouter = express.Router(); 

const schema = Joi.object({
    id:Joi.number().required(),
    name: Joi.string().required(),
    title: Joi.string().required(),
    description: Joi.string().required(),
    publishedAt: Joi.string().required(),
    Like:Joi.number(),
    comment:Joi.array()
}) 
getRouter.get('/api/getallopsden',async (req, res) => {
    try{
        const opsden = await opsdens.find();
        res.status(200).json(opsden);
    } catch(err){
        console.log(err);
        return res.status(500).send({
            message: `Internal server error ${err}`
        })
    }
})

getRouter.get('/api/getopsden/:id',async (req, res) => {
    try{
        const opsden = await opsdens.findone({id:req.params.Id});
        res.status(200).json(opsden);
    } catch(err){
        console.log(err);
        return res.status(500).send({
            message: "Internal server error"
        })
    }
})

postRouter.post('/api/addopsden',async (req, res) => {

          
            const { error, value } = schema.validate(req.body, { abortEarly: false });
          

            try{
                if (!error) {
                let{id,name,title,description,publishedAt} = req.body;
                const opsden = await opsdens.create({id,name,title,description,publishedAt});
                res.status(201).json(opsden);}
                else {
                    return res.status(400).send({
                        message: `Bad request, error:${error}`
                    })
                    console.error(error)
                }
            } catch(err){
                console.log(err);
                return res.status(500).send({
                    message: "Internal server error"
                })
            }
            
        
})

putRouter.patch('/api/updateopsden/:id',async (req, res) => {
    const { error, value } = schema.validate(req.body, { abortEarly: false });
          
    try {
        if (!error) {
        const {Id} = req.params;
        const filter ={"id":Number(Id)}
        let{id,name,title,description,content,image,publishedAt} = req.body;
        const opsden = await opsdens.findOneAndUpdate(filter,{id,name,title,description,content,image,publishedAt});
        res.status(200).json(opsden);}
        else {
            return res.status(400).send({
                message: `Bad request, error:${error}`
            })
            console.error(error)
        }
    }catch(err){
        console.log(err);
        return res.status(500).send({
            message: "Internal server error"
        })
    }

})

deleteRouter.delete('/api/deleteopsden/:id',async (req, res) => {
    try {
        const {Id} = req.params;
        const filter ={"Id":Number(Id)}
        const opsden = await opsdens.findOneAndDelete(filter);
        res.status(200).json(opsden);
    }catch(err){
        console.log(err);
        return res.status(500).send({
            message: "Internal server error"
        })
    }
})
feedbackRouter.post('/api/feedback',async (req, res) => {
    try{
        let{id,name,email,feedback} = req.body;
        const feedbacks = await Feedback.create({id,name,email,feedback});
        res.status(201).json(feedbacks);
    }catch(err){
        console.log(err);
        return res.status(500).send({
            message: `Internal server error , ${err}`
        })
    }
})

module.exports = {getRouter, postRouter, deleteRouter, putRouter,feedbackRouter}
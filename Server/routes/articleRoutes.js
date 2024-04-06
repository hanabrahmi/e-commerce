const express = require("express");
const article = require ('../models/article');
const Router = express.Router();
Router.post("/article", async (req,res) => {
    try {
        const  { nom} = req.body;
        const newArticle = await article.create ({
           nom
        });
        res.status(201).json({msg: "Article created ! ", data:newArticle});
    } catch (error) {
        res.status(500).json({msg : "error server",error });
    }

});
Router.get("/article", async (req,res) => {
    try {
        const articlelist = await  Categorie.find({}) ;
        res.status(200).json({msg : "Article list ! " , data: articlelist });
    } catch (error) {
        res.status(500).json({msg : "error server " , error});

    }
});
module.exports = Router;
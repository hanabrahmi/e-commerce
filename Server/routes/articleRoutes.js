const express = require("express");
const article = require ('../models/article');
const Router = express.Router();
Router.post("/article", async (req,res) => {
    try {
        const  { photo1 , photo2, nom_article,description_article,etat_article,prix_article,prix_net,categorie,option} = req.body;
        const newArticle = await article.create ({
           photo1: req.body.photo1,
           photo2: req.body.photo2,
           nom_article : req.body.nom_article,
           description_article : req.body.description_article,
           etat_article : req.body.etat_article,
           prix_article : req.body.prix_article,
           prix_net : req.body.prix_net,
           categorie : req.body.categori,
           option   : req.body.option,
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

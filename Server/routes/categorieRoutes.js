const express = require("express");
const Categorie = require ('../models/Categorie');
const Router = express.Router();
Router.post("/categorie", async (req,res) => {
    try {
        const  { nom} = req.body;
        const newCategorie = await Contact.create ({
           nom
        });
        res.status(201).json({msg: "Categorie created ! ", data:newCategorie});
    } catch (error) {
        res.status(500).json({msg : "error server",error });
    }

});
Router.get("/categorie", async (req,res) => {
    try {
        const categorieList = await  Categorie.find({}) ;
        res.status(200).json({msg : "Categorie list ! " , data: categorieList});
    } catch (error) {
        res.status(500).json({msg : "error server " , error});

    }
});
module.exports = Router;
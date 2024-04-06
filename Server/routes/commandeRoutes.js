const express = require("express");
const Commande= require ('../models/commande');
const Router = express.Router();
Router.post("/commande", async (req,res) => {
    try {
        const  { id_commande,id_abonee,date_commande,statut_commande,adresse_livraison,methode_paiment,montant_total,informations_facturation,informations_suivi,remarques} = req.body;
        const newCommande = await Commande.create ({
            id_commande,
            id_abonee,
            date_commande,
            statut_commande,
            adresse_livraison,
            methode_paiment,
            montant_total,
            informations_facturation,
            informations_suivi,
            remarques
        });
        res.status(201).json({msg: "Commande created ! ", data:newCommande});
    } catch (error) {
        res.status(500).json({msg : "error server",error });
    }

});
Router.get("/commande", async (req,res) => {
    try {
        const commandeList = await  Commande.find({}) ;
        res.status(200).json({msg : "Commande list ! " , data: commandeList});
    } catch (error) {
        res.status(500).json({msg : "error server " , error});

    }
});
module.exports = Router;
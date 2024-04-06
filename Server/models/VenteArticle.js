const mongoose = require('mongoose');
const VenteSchema = new mongoose.Schema({
    id_article: {
        type: mongoose.Schema.Types.ObjectId,
        ref:'articles', // Référence de la table article 
        required: true,
      },
    nom : {
        type : String , 
        required : true,
    },
    prix : {
        type : Number ,
        required : true, 
    },
   
    }
);
const  Vente = mongoose.model("Vente",VenteSchema) ;
module.exports=Vente;
const mongoose = require('mongoose');
const AchatSchema = new mongoose.Schema({
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
        required : true ,
    },
   
    }
);
const Achat = mongoose.model("Achat",AchatSchema) ;
module.exports=Achat;
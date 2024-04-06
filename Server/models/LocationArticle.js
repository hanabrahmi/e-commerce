const mongoose = require('mongoose');
const LocationSchema = new mongoose.Schema({
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
        type : Number,
       required : true,    
    },
    date_debut : {
        type: Date,
        default: Date.now()
    } ,
    date_fin :{
        type:Date,
        required:true,
    },
    cossion :{
        type: Number,
        required : true,
    },}
);
const  Location = mongoose.model("Location",LocationSchema) ;
module.exports=Location;
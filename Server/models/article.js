const mongoose = require('mongoose');
const ArticleSchema = new mongoose.Schema({
    photo1: {
        data: Buffer, // Données binaires de l'image
        contentType: String, // Type MIME de l'image
    },
    photo1: {
        data: Buffer, // Données binaires de l'image
        contentType: String, // Type MIME de l'image
        },
    nom_article : {
        type : String , 
        required : true,
    },
    description_article : {
        type: String,
        required : true,
    },
    etat: {
        type: String,
        enum: ['mauvais', 'moyen', 'bon', 'très bon', 'excellent', 'neuf'],
        required: true,
      },
    prix_article : {
        type : Number,
        required : true,
    },
    prix_net : {
        type : Number,
        required : true,
    },
    categorie : {
        type :  mongoose.Types.ObjectId,
        refs : 'Categorie',
        enum : ['Vêtements','Vaisselle','Véhicule','Hébergement','Machine'],
        require  :true,
    }, 
    option : {
        type: String,
        enum: ['vendre', 'location'], // Seules les valeurs 'vendre' ou 'location' sont autorisées
        required: true,
    }

    }
);
const Article = mongoose.model("Article",ArticleSchema) ;
module.exports=Article;
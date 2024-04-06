const mongoose = require('mongoose');
const ArticleSchema = new mongoose.Schema({
    nom_article : {
        type : String , 
        required : true,
    },
    description_article : {
        type: String,
        required : true,
    },
    etat_article : {
        type : String,
        required : true,
    },
    prix_article : {
        type : String,
        required : true,
    },

    }
);
const Article = mongoose.model("Article",ArticleSchema) ;
module.exports=Article;
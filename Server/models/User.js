const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    nom : {
        type : String , 
        required : true,
    },
    prenom : {
        type : String , 
        required : true,
    },
    email : {
        type : String , 
        required : true,
        unique: true,
    },
    password : {
        type : String , 
        required : true,
        unique :  true,
    },
    numero_telephone : {
        type : Number,
        required : true,
        unique : true,
    },
    adresse : {
        type : String,
        required : true,
    }, 
    code_postal : {
        type : String,
        required : true,
    },
    ville : {
        type : String,
        required : true,
    }
    }
);
const User = mongoose.model("User",userSchema) ;
module.exports=User;

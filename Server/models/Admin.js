const mongoose = require('mongoose');
const AdminSchema = new mongoose.Schema({
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
    },
    role: {
        type: String,
        enum: ['admin', 'abonne'], // Définissez les valeurs autorisées pour le rôle
        required: true
    }
    }
);
const Admin = mongoose.model("Admin",AdminSchema) ;
module.exports=Admin;

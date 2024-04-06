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
    }
);
const Admin = mongoose.model("Admin",AdminSchema) ;
module.exports=Admin;

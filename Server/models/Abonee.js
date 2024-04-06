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
        type : Number,
        required : true,
    },
    ville : {
        type : String,
        enum : ['Ariana', 'Béja', 'Ben Arous ','Bizerte','Gabès','Gafsa','Jendouba','Kairouan','Kasserine','Kébili','Le Kef','Mahdia','La Manouba', 'Médnine','Monastir','Nabeul','Sfax','Sidi Bouzid','Siliana','Sousse','Tataouine','Tozeur','Tunis','Zaghouan'],
        required : true,
    },
    role: {
        type: String,
        enum: ['admin', 'abonne'], // Définissez les valeurs autorisées pour le rôle
        required: true
    }
    }
);
const User = mongoose.model("Abonee",userSchema) ;
module.exports=User;

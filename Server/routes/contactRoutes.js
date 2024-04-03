const express = require("express");
const Contact = require ('../models/contact');
const Router = express.Router();
Router.post("/", async (req,res) => {
    try {
        const  { firstName, lastName, email, phoneNumber} = req.body;
        const newContact = await Contact.create ({
            firstName, 
            lastName,
            email,
            phoneNumber
        });
        res.status(201).json({msg: "Contact created ! ", data:newContact});
    } catch (error) {
        res.status(500).json({msg : "error server",error });
    }

});
Router.get("/", async (req,res) => {
    try {
        const contactList = await  Contact.find({}) ;
        res.status(200).json({msg : "contact list ! " , data: contactList});
    } catch (error) {
        res.status(500).json({msg : "error server " , error});

    }
});
module.exports = Router;
const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const Admin = require("../models/Admin");

// Route pour l'inscription d'un nouvel administrateur
router.post("/register", async (req, res) => {
    try {
        const { nom, prenom, email, password } = req.body;
        // Hash du mot de passe avant de le stocker dans la base de données
        bcrypt.hash(password, 12, async (err, hash) => {
            if (err) {
                res.status(500).json({ status: false, message: err });
            } else {
                // Création du nouvel administrateur avec le mot de passe hashé
                const admin = await Admin.create({
                    nom,
                    prenom,
                    email,
                    password: hash,
                });
                res.status(201).json({
                    status: true,
                    message: "Nouvel administrateur créé avec succès",
                    data: admin,
                });
            }
        });
    } catch (err) {
        console.log(err);
        res.status(500).json({ status: false, message: err.message });
    }
});

// Route pour la connexion d'un administrateur existant
router.post("/login", async (req, res) => {
    try {
        const { email, password } = req.body;
        // Recherche de l'administrateur dans la base de données par son adresse e-mail
        const findAdmin = await Admin.findOne({ email: email });
        if (findAdmin) {
            // Comparaison du mot de passe hashé stocké avec celui fourni
            bcrypt.compare(password, findAdmin.password).then(function (result) {
                if (result == true) {
                    // Création et envoi du jeton d'authentification si le mot de passe est correct
                    jwt.sign(
                        {
                            adminname: findAdmin.adminname,
                            email: findAdmin.email,
                            _id: findAdmin._id,
                        },
                        "secretkey",
                        {
                            expiresIn: "7d",
                        },
                        (err, token) => {
                            if (err) {
                                console.log(err);
                                res.status(500).json({ message: "Une erreur s'est produite lors de la génération du jeton" });
                            } else if (token) {
                                res.status(200).json({ message: "Connexion réussie", token: token });
                            }
                        }
                    );
                } else {
                    res.status(404).json({ message: "Mot de passe incorrect" });
                }
            });
        } else {
            res.status(404).json({ message: "Adresse e-mail introuvable" });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;


const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const Admin = require("../models/Admin");
router.post("/register", async (req, res) => {
    try {
      const { nom,prenom, email, password,numero_telephone,adresse,code_postal,ville ,role} = req.body;
      bcrypt.hash(password, 12, async (err, hash) => {
        if (err) {
          res.status(500).json({ status: false, message: err });
        } else if (hash) {
          const admin = await Admin.create({
            nom,prenom, email,numero_telephone,adresse,code_postal,ville,role,
            password: hash,
          });
          res.status(201).json({
            status: true,
            message: "user created",
            data: user,
          });
        }
      });
    } catch (err) {
      console.log(err);
      res.status(500).json({ status: false, message: err });
    }
  });
  
  router.post("/login", async (req, res) => {
    try {
      const { email, password } = req.body;
      const findAdmin = await Admin.findOne({ email: email });
      if (findAdmin) {
        bcrypt.compare(password, findAdmin.password).then(function (result) {
          if (result == true) {
            jwt.sign(
              {
                adminname: findAdmin.adminname,
                email: findAdmin.email,
                role: findAdmin.role,
                _id: findAdmin._id,
              },
              "secretkey",
              {
                expiresIn: "7d",
              },
              (err, token) => {
                if (err) {
                  console.log(err);
                } else if (token) {
                  res
                    .status(200)
                    .json({ message: "Logged Successfully", data: token });
                }
              }
            );
          } else {
            res.status(404).json({ message: "password wrong ! " });
          }
        });
      } else {
        res.status(404).json({ message: "Email not Found ! " });
      }
    } catch (error) {
      res.status(500).json({ error });
    }
  });

  module.exports = router;

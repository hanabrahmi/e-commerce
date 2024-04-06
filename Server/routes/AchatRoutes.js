const express = require("express");
const router = express.Router();
const Achat = require("../models/AchatArticle");

// Route pour récupérer tous les achats
router.get("/", async (req, res) => {
  try {
    const achats = await Achat.find();
    res.json(achats);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Route pour créer un nouvel achat
router.post("/", async (req, res) => {
  const achat = new Achat({
    id_article: req.body.id_article,
    nom: req.body.nom,
    prix: req.body.prix
  });

  try {
    const nouvelAchat = await achat.save();
    res.status(201).json(nouvelAchat);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Route pour mettre à jour un achat existant
router.patch("/:id", async (req, res) => {
  try {
    const achat = await Achat.findById(req.params.id);
    if (achat == null) {
      return res.status(404).json({ message: "Achat introuvable" });
    }

    // Mettre à jour les champs de l'achat selon les données reçues dans le corps de la requête
    achat.nom = req.body.nom;
    achat.prix = req.body.prix;

    const achatMiseAJour = await achat.save();
    res.json(achatMiseAJour);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Route pour supprimer un achat
router.delete("/:id", async (req, res) => {
  try {
    const achatSupprime = await Achat.findByIdAndDelete(req.params.id);
    if (achatSupprime == null) {
      return res.status(404).json({ message: "Achat introuvable" });
    }
    res.json({ message: "Achat supprimé" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;

const express = require("express");
const router = express.Router();
const Location = require("../models/LocationArticle");

// Route pour récupérer toutes les locations
router.get("/", async (req, res) => {
  try {
    const locations = await Location.find();
    res.json(locations);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Route pour créer une nouvelle location
router.post("/", async (req, res) => {
  const location = new Location({
    id_article: req.body.id_article,
    nom: req.body.nom,
    prix: req.body.prix,
    date_debut: req.body.date_debut,
    date_fin: req.body.date_fin,
    cossion: req.body.cossion
  });

  try {
    const nouvelleLocation = await location.save();
    res.status(201).json(nouvelleLocation);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Route pour mettre à jour une location existante
router.patch("/:id", async (req, res) => {
  try {
    const location = await Location.findById(req.params.id);
    if (location == null) {
      return res.status(404).json({ message: "Location introuvable" });
    }

    // Mettre à jour les champs de la location selon les données reçues dans le corps de la requête
    location.nom = req.body.nom;
    location.prix = req.body.prix;
    location.date_debut = req.body.date_debut;
    location.date_fin = req.body.date_fin;
    location.cossion = req.body.cossion;

    const locationMiseAJour = await location.save();
    res.json(locationMiseAJour);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Route pour supprimer une location
router.delete("/:id", async (req, res) => {
  try {
    const locationSupprimee = await Location.findByIdAndDelete(req.params.id);
    if (locationSupprimee == null) {
      return res.status(404).json({ message: "Location introuvable" });
    }
    res.json({ message: "Location supprimée" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;

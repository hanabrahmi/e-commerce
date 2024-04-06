const express = require("express");
const router = express.Router();
const Vente = require("../models/VenteArticle");

// Route pour récupérer toutes les ventes
router.get("/", async (req, res) => {
  try {
    const ventes = await Vente.find();
    res.json(ventes);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Route pour créer une nouvelle vente
router.post("/", async (req, res) => {
  const vente = new Vente({
    id_article: req.body.id_article,
    nom: req.body.nom,
    prix: req.body.prix,
  });

  try {
    const nouvelleVente = await vente.save();
    res.status(201).json(nouvelleVente);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Route pour mettre à jour une vente existante
router.patch("/:id", async (req, res) => {
  try {
    const vente = await Vente.findById(req.params.id);
    if (vente == null) {
      return res.status(404).json({ message: "Vente introuvable" });
    }

    // Mettre à jour les champs de la vente selon les données reçues dans le corps de la requête
    vente.nom = req.body.nom;
    vente.prix = req.body.prix;

    const venteMiseAJour = await vente.save();
    res.json(venteMiseAJour);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Route pour supprimer une vente
router.delete("/:id", async (req, res) => {
  try {
    const venteSupprimee = await Vente.findByIdAndDelete(req.params.id);
    if (venteSupprimee == null) {
      return res.status(404).json({ message: "Vente introuvable" });
    }
    res.json({ message: "Vente supprimée" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;

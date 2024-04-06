const express = require('express');
const router = express.Router();
const Livraison = require('../models/livraison');

// Route pour récupérer toutes les livraisons
router.get('/', async (req, res) => {
  try {
    const livraisons = await Livraison.find();
    res.json(livraisons);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Route pour créer une nouvelle livraison
router.post('/', async (req, res) => {
  const livraison = new Livraison({
    id_commande: req.body.id_commande,
    date_livraison: req.body.date_livraison,
    statut_livraison: req.body.statut_livraison,
    adresse_livraison: req.body.adresse_livraison,
    
  });

  try {
    const nouvelleLivraison = await livraison.save();
    res.status(201).json(nouvelleLivraison);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Route pour mettre à jour une livraison existante
router.patch('/:id', async (req, res) => {
  try {
    const livraison = await Livraison.findById(req.params.id);
    if (livraison == null) {
      return res.status(404).json({ message: 'Livraison introuvable' });
    }

    if (req.body.statut_livraison != null) {
      livraison.statut_livraison = req.body.statut_livraison;
    }

    const livraisonMiseAJour = await livraison.save();
    res.json(livraisonMiseAJour);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Route pour supprimer une livraison
router.delete('/:id', async (req, res) => {
  try {
    const livraisonSupprimee = await Livraison.findByIdAndDelete(req.params.id);
    if (livraisonSupprimee == null) {
      return res.status(404).json({ message: 'Livraison introuvable' });
    }
    res.json({ message: 'Livraison supprimée' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;

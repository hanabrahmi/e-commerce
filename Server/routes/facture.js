const express = require('express');
const router = express.Router();
const Facture = require('../models/Facture');

// Route pour récupérer toutes les factures
router.get('/', async (req, res) => {
  try {
    const factures = await Facture.find();
    res.json(factures);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Route pour créer une nouvelle facture
router.post('/', async (req, res) => {
  const facture = new Facture({
    id_commande: req.body.id_commande,
    date_facture: req.body.date_facture,
    montant_total: req.body.montant_total,
    methode_paiement: req.body.methode_paiement,
    informations_facturation: req.body.informations_facturation,
    remarques: req.body.remarques
  });

  try {
    const nouvelleFacture = await facture.save();
    res.status(201).json(nouvelleFacture);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Route pour mettre à jour une facture existante
router.patch('/:id', async (req, res) => {
  try {
    const facture = await Facture.findById(req.params.id);
    if (facture == null) {
      return res.status(404).json({ message: 'Facture introuvable' });
    }

    // Mettre à jour les champs nécessaires
    // Exemple: facture.methode_paiement = req.body.methode_paiement;

    const factureMiseAJour = await facture.save();
    res.json(factureMiseAJour);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Route pour supprimer une facture
router.delete('/:id', async (req, res) => {
  try {
    const factureSupprimee = await Facture.findByIdAndDelete(req.params.id);
    if (factureSupprimee == null) {
      return res.status(404).json({ message: 'Facture introuvable' });
    }
    res.json({ message: 'Facture supprimée' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;

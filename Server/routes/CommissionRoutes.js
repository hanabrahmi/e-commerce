const express = require('express');
const router = express.Router();
const Commission = require('../models/Commission');

// Route pour récupérer toutes les commissions
router.get('/', async (req, res) => {
  try {
    const commissions = await Commission.find();
    res.json(commissions);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Route pour créer une nouvelle commission
router.post('/', async (req, res) => {
  const commission = new Commission({
    id_commande: req.body.id_commande,
    montant: req.body.montant,
    statut: req.body.statut,
  });

  try {
    const nouvelleCommission = await commission.save();
    res.status(201).json(nouvelleCommission);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Route pour mettre à jour une commission existante
router.patch('/:id', async (req, res) => {
  try {
    const commission = await Commission.findById(req.params.id);
    if (commission == null) {
      return res.status(404).json({ message: 'Commission introuvable' });
    }



    const commissionMiseAJour = await commission.save();
    res.json(commissionMiseAJour);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Route pour supprimer une commission
router.delete('/:id', async (req, res) => {
  try {
    const commissionSupprimee = await Commission.findByIdAndDelete(req.params.id);
    if (commissionSupprimee == null) {
      return res.status(404).json({ message: 'Commission introuvable' });
    }
    res.json({ message: 'Commission supprimée' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;

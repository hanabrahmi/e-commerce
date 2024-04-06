const express = require('express');
const router = express.Router();
const ListeAbonne = require('../models/ListeAbonne');

// Route pour récupérer toutes les entrées de la liste des abonnés
router.get('/', async (req, res) => {
  try {
    const listeAbonnes = await ListeAbonne.find();
    res.json(listeAbonnes);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Route pour créer une nouvelle entrée dans la liste des abonnés
router.post('/', async (req, res) => {
  const listeAbonne = new ListeAbonne({
    id_abonne: req.body.id_abonne,
    date_abonnement: req.body.date_abonnement,
    forfait: req.body.forfait,
    date_expiration: req.body.date_expiration,
    statut: req.body.statut,
    informations_complementaires: req.body.informations_complementaires
  });

  try {
    const nouvelleListeAbonne = await listeAbonne.save();
    res.status(201).json(nouvelleListeAbonne);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Route pour mettre à jour une entrée existante dans la liste des abonnés
router.patch('/:id', async (req, res) => {
  try {
    const listeAbonne = await ListeAbonne.findById(req.params.id);
    if (listeAbonne == null) {
      return res.status(404).json({ message: 'Entrée de liste des abonnés introuvable' });
    }

  

    const listeAbonneMiseAJour = await listeAbonne.save();
    res.json(listeAbonneMiseAJour);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Route pour supprimer une entrée de la liste des abonnés
router.delete('/:id', async (req, res) => {
  try {
    const listeAbonneSupprimee = await ListeAbonne.findByIdAndDelete(req.params.id);
    if (listeAbonneSupprimee == null) {
      return res.status(404).json({ message: 'Entrée de liste des abonnés introuvable' });
    }
    res.json({ message: 'Entrée de liste des abonnés supprimée' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;

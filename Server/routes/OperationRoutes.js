const express = require('express');
const router = express.Router();
const Operation = require('../models/Operation');

// Route pour récupérer toutes les opérations
router.get('/', async (req, res) => {
  try {
    const operations = await Operation.find();
    res.json(operations);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Route pour créer une nouvelle opération
router.post('/', async (req, res) => {
  const operation = new Operation({
    type: req.body.type,
    article: req.body.article,
    quantite: req.body.quantite,
  });

  try {
    const nouvelleOperation = await operation.save();
    res.status(201).json(nouvelleOperation);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Route pour mettre à jour une opération existante
router.patch('/:id', async (req, res) => {
  try {
    const operation = await Operation.findById(req.params.id);
    if (operation == null) {
      return res.status(404).json({ message: 'Opération introuvable' });
    }


    const operationMiseAJour = await operation.save();
    res.json(operationMiseAJour);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Route pour supprimer une opération
router.delete('/:id', async (req, res) => {
  try {
    const operationSupprimee = await Operation.findByIdAndDelete(req.params.id);
    if (operationSupprimee == null) {
      return res.status(404).json({ message: 'Opération introuvable' });
    }
    res.json({ message: 'Opération supprimée' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;

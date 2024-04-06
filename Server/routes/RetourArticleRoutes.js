const express = require('express');
const router = express.Router();
const RetourArticle = require('../models/RetourArticle');

// Route pour récupérer tous les retours d'articles'
router.get('/', async (req, res) => {
  try {
    const retoursArticles = await RetourArticle.find();
    res.json(retoursArticles);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Route pour créer un nouveau retour d'article'
router.post('/', async (req, res) => {
  const retourArticle = new RetourArticle({
    id_abonees: req.body.id_abonees,
    id_article: req.body.id_article,
    raison: req.body.raison,
    statut: req.body.statut,
  });

  try {
    const nouveauRetourArticle = await retourArticle.save();
    res.status(201).json(nouveauRetourArticle);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Route pour mettre à jour un retour darticle existant
router.patch('/:id', async (req, res) => {
  try {
    const retourArticle = await RetourArticle.findById(req.params.id);
    if (retourArticle == null) {
      return res.status(404).json({ message: 'Retour d article introuvable' });
    }



    const retourArticletMiseAJour = await retourArticle.save();
    res.json(retourArticletMiseAJour);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Route pour supprimer un retour d' article
router.delete('/:id', async (req, res) => {
  try {
    const retourArticleSupprime = await RetourArticle.findByIdAndDelete(req.params.id);
    if (retourArticleSupprime == null) {
      return res.status(404).json({ message: 'Retour d article  introuvable' });
    }
    res.json({ message: 'Retour d article supprimé' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;

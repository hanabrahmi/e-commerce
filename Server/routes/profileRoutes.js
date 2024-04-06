const express = require('express');
const router = express.Router();
const Profile = require('../models/Profile');

// Route pour récupérer tous les profils
router.get('/', async (req, res) => {
  try {
    const profiles = await Profile.find().populate('Abonees', ['email']); // Population de l'utilisateur
    res.json(profiles);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Route pour créer un nouveau profil
router.post('/', async (req, res) => {
  const profile = new Profile({
    id_Abonees: req.body.id_Abonees,
  });

  try {
    const nouveauProfile = await profile.save();
    res.status(201).json(nouveauProfile);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Route pour mettre à jour un profil existant
router.patch('/:id', async (req, res) => {
  try {
    const profile = await Profile.findById(req.params.id);
    if (profile == null) {
      return res.status(404).json({ message: 'Profil introuvable' });
    }


    const profileMiseAJour = await profile.save();
    res.json(profileMiseAJour);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Route pour supprimer un profil
router.delete('/:id', async (req, res) => {
  try {
    const profileSupprime = await Profile.findByIdAndDelete(req.params.id);
    if (profileSupprime == null) {
      return res.status(404).json({ message: 'Profil introuvable' });
    }
    res.json({ message: 'Profil supprimé' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;

const mongoose = require('mongoose');

const retourProduitSchema = new mongoose.Schema({
  id_utilisateur: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Abonees', // Référence vers le modèle Utilisateur
    required: true,
  },
  id_article: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Articles', // Référence vers le modèle Article
    required: true,
  },
  raison: {
    type: String,
    required: true,
  },
  date_retour: {
    type: Date,
    default: Date.now,
  },
  statut: {
    type: String,
    enum: ['En attente', 'Accepté', 'Refusé'],
    default: 'En attente',
  },
});

const RetourArticle = mongoose.model('RetourArticle', retourProduitSchema);

module.exports = RetourArticle;

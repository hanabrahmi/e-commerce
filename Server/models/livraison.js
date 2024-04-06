const mongoose = require('mongoose');

const livraisonSchema = new mongoose.Schema({
  id_livraison: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    unique: true,
  },
  id_commande: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Commande', // Référence vers le modèle Commande
    required: true,
  },
  date_livraison: {
    type: Date,
    required: true,
  },
  statut_livraison: {
    type: String,
    default: 'En cours', // Valeur par défaut pour le statut de la livraison
  },
  adresse_livraison: {
    type: String,
    required: true,
  },
});

const Livraison = mongoose.model('Livraison', livraisonSchema);

module.exports = Livraison;

const mongoose = require('mongoose');

const commissionSchema = new mongoose.Schema({
  id_commande: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'commande', // Référence vers le modèle Commande
    required: true,
  },
  montant: {
    type: Number,
    required: true,
  },
  date_creation: {
    type: Date,
    default: Date.now,
  },
  statut: {
    type: String,
    enum: ['Payée', 'En attente'],
    default: 'En attente',
  },
});

const Commission = mongoose.model('Commission', commissionSchema);

module.exports = Commission;

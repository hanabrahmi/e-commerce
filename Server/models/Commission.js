const mongoose = require('mongoose');

const commissionSchema = new mongoose.Schema({
  id_commande: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'commande', // Référence vers le modèle Commande
    required: true,
  },
});

const Commission = mongoose.model('Commission', commissionSchema);

module.exports = Commission;

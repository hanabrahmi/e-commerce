const mongoose = require('mongoose');

const operationSchema = new mongoose.Schema({
  type: {
    type: String,
    enum: ['Vente', 'Achat', 'Location'],
    required: true,
  },
  article: {
    type: mongoose.Schema.Types.ObjectId,
    refPath: 'type', // Référence dynamique vers le modèle correspondant au type d'opération
    required: true,
  },
  quantite: {
    type: Number,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

const Operation = mongoose.model('Operation', operationSchema);

module.exports = Operation;

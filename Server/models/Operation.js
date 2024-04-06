const mongoose = require('mongoose');

const operationSchema = new mongoose.Schema({
  id_operation: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    unique: true,
  },
  
 id_article: {
    type: mongoose.Schema.Types.ObjectId,
    ref:'articles', // Référence de la table article 
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

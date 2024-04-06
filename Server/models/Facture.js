const mongoose = require('mongoose');

const factureSchema = new mongoose.Schema({
  id_facture: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    unique: true,
  },
  id_commande: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Commande', // Référence vers le modèle Commande
    required: true,
  },
  date_facture: {
    type: Date,
    required: true,
  },
  montant_total: {
    type: Number,
    required: true,
  },
  methode_paiement: {
    type: String,
    required: true,
  },
  informations_facturation: {
    type: String,
    required: true,
  },
  remarques: {
    type: String,
  },
});

const Facture = mongoose.model('Facture', factureSchema);

module.exports = Facture;

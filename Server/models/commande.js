const mongoose = require('mongoose');

const commandeSchema = new mongoose.Schema({
  id_commande: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    unique: true,
  },
  id_abonees: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'abonnees', // Référence vers le modèle Utilisateur
    required: true,
  },
  date_commande: {
    type: Date,
    required: true,
  },
  statut_commande: {
    type: String,
    default: 'En attente', // Valeur par défaut pour le statut de la commande
  },
  adresse_livraison: {
    type: String,
    required: true,
  },
  methode_paiement: {
    type: String,
    required: true,
  },
  montant_total: {
    type: Number,
    required: true,
  },
  informations_facturation: {
    type: String,
    required: true,
  },
  informations_suivi: {
    type: String,
  },
  remarques: {
    type: String,
  },
});

const Commande = mongoose.model('Commande', commandeSchema);

module.exports = Commande;

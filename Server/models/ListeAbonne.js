const mongoose = require('mongoose');

const listeAbonneSchema = new mongoose.Schema({
  id_abonne: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Abonne', // Référence vers le modèle Abonne
    required: true,
  },
  date_abonnement: {
    type: Date,
    required: true,
  },
  forfait: {
    type: String,
    required: true,
  },
  date_expiration: {
    type: Date,
    required: true,
  },
  statut: {
    type: String,
    enum: ['Actif', 'Suspendu', 'Annulé'],
    required: true,
  },
  informations_complementaires: {
    type: String,
  },
});

const ListeAbonne = mongoose.model('ListeAbonne', listeAbonneSchema);

module.exports = ListeAbonne;

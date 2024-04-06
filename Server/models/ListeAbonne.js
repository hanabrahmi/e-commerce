const mongoose = require('mongoose');

const listeAbonneSchema = new mongoose.Schema({
  id_abonne: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Abonne', // Référence vers le modèle Abonne
    required: true,
  },
  statut: {
    type: String,
    enum: ['Actif', 'Suspendu', 'Annulé'],
    required: true,
  },
  
});

const ListeAbonne = mongoose.model('ListeAbonne', listeAbonneSchema);

module.exports = ListeAbonne;

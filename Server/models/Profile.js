const mongoose = require('mongoose');

const profileSchema = new mongoose.Schema({
  id_Abonees: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Abonees', 
    required: true,
  },
 
  
});

const Profile = mongoose.model('Profile', profileSchema);

module.exports = Profile;

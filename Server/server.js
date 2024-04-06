const express = require ("express");
const connect = require ('./config/connectDb');
const article = require ('./models/article');
const commande = require ('./models/commande');
const facture = require ('./models/Facture');

const categorie = require ('./routes/categorieRoutes')
const Categorie = require("./models/Categorie");

const cors = require("cors");
const app = express();
connect();
const user = require ("./routes/user")
app.use(express.json());
app.use("/api/v1/auth",user);
app.use(
    cors({
      origin: "*", // Use the environment variable
      credentials: true,
    })
  );

app.use(express.json());
app.use("/api/v1/categorie",categorie);
const PORT = 4000;
app.listen(PORT, () => console.log("server running on port 4000"));
const newcategorie = new Categorie({
 nom: "Bijoux",

});
const multiCategorie = [
  {
    nom : "Vêtements" ,
  },
  {
    nom : "Chaussures",
  },
  {
    nom : "Assiettes",
  },
  {
    nom : "Bols",
  },
  {
    nom : "Verres",
  },
  {
    nom : "informatiques et électroniques",
  },
  {
    nom : "électroménagères",
  },
  {
    nom : "ventilation et climatisation",
  },
  {
    nom : "Fermes",
  },
  {
    nom : "Maison d’hôtes",
  },
  {
    nom : "Maison",
  },
  {
    nom : "Voitures",
  },
  {
    nom : "Motos",
  },
  {
    nom : "Camions",
  } 
]
//const Admin = require('./models/Admin');

// Supprimer l'enregistrement existant avec l'e-mail "welhazisouhir@gmail.com"
//Admin.deleteOne({ email: "welhazisouhir@gmail.com" })
  //.then(() => {
    // Une fois que l'enregistrement existant est supprimé, insérer le nouvel enregistrement
    //const newAdmins = [
      //{
        //nom: "Welhazi",
        //prenom: "Souhir",
        //email: "welhazisouhir@gmail.com",
        //password: "souhir12345",
      //},
      //{
        //nom: "Brahmi",
        //prenom: "Hana",
        //email: "brahmi@gmail.com",
        //password: "brahmi12345",
      //}
    //];
    //return Admin.create(newAdmins);
  //})
  //.then(() => {
    //console.log("Nouveaux administrateurs insérés avec succès !");
  //})
  //.catch((error) => {
    //console.error("Erreur lors de l'insertion des administrateurs :", error);
  //});
  const adminRoutes = require('./routes/adminRoutes'); 
 app.use(express.json());
app.use(cors());

// Utilisation des routes pour les administrateurs
app.use("/api/v1/admin", adminRoutes);


Categorie.create(multiCategorie);
// Save the new category to the database
//newcategorie.save();
const articleRoutes = require ('./routes/articleRoutes');
app.use(express.json());
app.use("/api/v1/article",articleRoutes);
const commandeRoutes = require ('./routes/commandeRoutes');
app.use(express.json());
app.use ("/api/v1/commandes",commandeRoutes) ;
const livraisonRoutes = require ('./routes/livraison');
app.use(express.json());
app.use ("/api/v1/livraion",livraisonRoutes) ;
const factureRoutes = require ('./routes/facture');
app.use(express.json());
app.use("api/v1/facture", factureRoutes);
const listeabonneRoutes = require ('./routes/ListeAbonneRoutes');
app.use(express.json());
app.use("api/v1/listeabonne", listeabonneRoutes);
const commissionRoutes =  require ('./routes/CommissionRoutes');
app.use(express.json());
app.use('/api/commissions', commissionRoutes);
const retourArticleRoutes = require ('./routes/RetourArticleRoutes');
app.use(express.json());
app.use('api/v1/retourarticle', retourArticleRoutes);
const operationRoutes = require ('./routes/OperationRoutes');
app.use(express.json());
app.use('api/v1/opertions',operationRoutes);
const profileRoutes = require ('./routes/profileRoutes');
app.use(express.json());
app.use('api/v1/profile', profileRoutes);
const venteRoutes = require ('./routes/VenteRoutes');
app.use(express.json());
app.use('api/v1/vente', venteRoutes);
const achatRoutes = require ('./routes/AchatRoutes');
app.use(express.json());
app.use('api/v1/achat', achatRoutes);
const locationRoutes = require ('./routes/LocationRoutes');
app.use(express.json());
app.use('api/v1/location', locationRoutes);
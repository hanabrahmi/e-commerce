import React from 'react';
import { Link } from 'react-router-dom'; // Importez Link depuis react-router-dom
import './CategoryPage.css';

const vetement = [
  { id: 1, name: 'Bijoux', image: 'https://i.etsystatic.com/6448065/r/il/5ea4d4/3360669897/il_fullxfull.3360669897_muzn.jpg' },
  { id: 2, name: 'Vêtements', image: 'https://thumbs.dreamstime.com/b/green-clothes-isolated-set-woman-over-white-98067359.jpg' },
  { id: 3, name: 'Chaussures', image: 'https://www.sneakers-actus.fr/wp-content/uploads/2022/01/Adidas-Forum-Low-84-Collegiate-Green-2022-GY5835.jpg' },
];

const vaisselle = [
  {id: 1, name: 'Assiettes', image:'https://themarquise.fr/8617-large_default/assiettes-a-dessert-moulin-des-loups-porcerame-mint-rustique-champetre-art-deco-arts-de-la-table-celadon.jpg'},
  {id: 2, name: 'Bols', image:'https://th.bing.com/th/id/R.0852d592913329d29e1d8900c5a2e283?rik=LgjTIIXL8XAa6Q&riu=http%3a%2f%2f1.bp.blogspot.com%2f-6_8rtgny_F0%2fUT9B8Pm6NbI%2fAAAAAAAANQQ%2fQT8DlYkR1OE%2fs640%2fbowls.jpg&ehk=ddd9O2MXTNNpLL286PJ%2fa5GxutC33emRomfnIvUVGlE%3d&risl=&pid=ImgRaw&r=0'},
  {id: 3, name: 'Verres', image:'https://kobere.top/wp-content/uploads/images/51nhwwaUz8L.jpg'},
];

const machine = [
{id: 1, name: 'informatiques et électroniques', image:'https://th.bing.com/th/id/R.1227d4132df2d8360b99c25a3acb8e52?rik=09tBKtNWhVIohw&pid=ImgRaw&r=0'},
{id: 2, name: ' électroménagères ', image:'https://le-de.cdn-website.com/e633d6447960494a9f037058a9fe77bf/dms3rep/multi/opt/620db35cf3964d14af65e2b2df151403-1920w.jpg'},
{id: 3, name: 'ventilation et climatisation ', image:'https://nottinghamenergycentre.co.uk/wp-content/uploads/SPLIT-2.jpg'},
];
const maison = [
  {id: 1, name: 'Fermes', image:'https://th.bing.com/th/id/OIP.zPpHjMzlJTEYGIKGH9m7KQHaFj?w=1280&h=960&rs=1&pid=ImgDetMain' },
  {id: 2, name: 'Maison d’hôtes', image: 'https://th.bing.com/th/id/OIP.Z8HfvIGzaWE75bB1r5OQhwHaEK?rs=1&pid=ImgDetMain'},
  {id: 3, name: 'Maison', image: 'https://th.bing.com/th/id/R.709e75d8867f0e194d3b033bafb6ffd7?rik=PW3jP7kOfdWJig&pid=ImgRaw&r=0'},
];
const Vehicule = [
  { id: 1, name: 'Voitures', image:'https://th.bing.com/th/id/R.f83a72ad1a059dd8af3f97a93439a6ea?rik=gEgnmFqlRWCiFw&riu=http%3a%2f%2f1.bp.blogspot.com%2f-5kYK8ziwVX4%2fTrkZwbAsTjI%2fAAAAAAAABPk%2fbMvByNNK74Q%2fw1200-h630-p-k-no-nu%2f4.jpg&ehk=jiUTWbhyQoS1sgVecThEmHRHHh4B0ox0Awxl3FwbQng%3d&risl=&pid=ImgRaw&r=0'},
  { id: 2, name: 'Motos ', image:'https://th.bing.com/th/id/OIP.0W06hM-ldLsMYjogRX0L7AHaE6?rs=1&pid=ImgDetMain'},
  { id: 3, name: 'Camions ', image:'https://www.fleetex.co.uk/wp-content/uploads/2019/02/VLK-7-500x500.jpg'},
];

function CategoryPage() {
  return (

    <div className="CategoryPage mt-140 ">
      <h1>Vêtements:</h1>
      <div className="vetement-container">
        {vetement.map((item) => (
          <Link key={item.id} to={`/categorie/vetement/${item.id}`} className="vetement">
            <img src={item.image} alt={item.name} />
            <p>{item.name}</p>
          </Link>
        ))}
      </div>

      <h1>Vaisselles</h1>
      <div className="vaisselle-container">
        {vaisselle.map((item) => (
          <Link key={item.id} to={`/categorie/vaisselle/${item.id}`} className="vaisselle">
            <img src={item.image} alt={item.name} />
            <p>{item.name}</p>
          </Link>
        ))}
      </div>

      <h1>Machines</h1>
      <div className="machine-container">
        {machine.map((item) => (
          <Link key={item.id} to={`/categorie/machine/${item.id}`} className="machine">
            <img src={item.image} alt={item.name} />
            <p>{item.name}</p>
          </Link>
        ))}
      </div>

      <h1>Hébergement</h1>
      <div className="maison-container">
        {maison.map((item) => (
          <Link key={item.id} to={`/categorie/maison/${item.id}`} className="maison">
          <img src={item.image} alt={item.name} />
          <p>{item.name}</p>
        </Link>
        ))}
        </div>
        
        <h1>Véhicule</h1>
        <div className="Vehicule-container">
          {Vehicule.map((item) => (
            <Link key={item.id} to={`/categorie/vehicule/${item.id}`} className="Vehicule">
              <img src={item.image} alt={item.name} />
              <p>{item.name}</p>
            </Link>
          ))}
        </div>
        </div>
        );
        }
        
        export default CategoryPage;
        

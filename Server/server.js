const express = require ("express");
const connect = require ('./config/connectDb');
const contactRoutes = require ('./routes/contactRoutes');
const Contact = require("./models/contact");
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
const PORT = 4000;
app.listen(PORT, () => console.log("server running on port 4000"));
const addContact = new Contact({
    firstName : "amir",
    lastName: "mhamdi",
    email : "amir@gmail.com",
    phoneNumber : 24500282,
});
//addContact.save();
const multiContact = [{
    firstName : "ali",
    lastName: "ayari",
    email : "ali23@gmail.com",
    phoneNumber : 54308292,
},
{
    firstName : "amira",
    lastName: "kaabi",
    email : "kaabiamira@gmail.com",
    phoneNumber : 58894012, 
},
{
    firstName : "yassin",
    lastName: "mabrouki",
    email : "mabrouki@gmail.com",
    phoneNumber : 97300567,
}
];
//Contact.create(multiContact);
Contact.find({}).then((data) => console.log(data) );
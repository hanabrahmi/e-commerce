const mongoose = require ("mongoose");
const connect = () => {
    mongoose.connect("mongodb+srv://souhirwelhazi2:souhirwelhazi2@cluster0.mqrscqe.mongodb.net/BrandBridgePfe").then(() =>console.log("connection to database successfully")).catch ((err) => console.log(err));
};
module.exports = connect;
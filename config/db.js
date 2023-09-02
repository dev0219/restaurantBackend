const { MongoClient, ObjectId } = require("mongodb");
const uri = "mongodb+srv://2295472:pNmgIscXfjESkutj@cluster0.9jqfmwc.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri);
const database = client.db("restaurant");
module.exports = { database, ObjectId };
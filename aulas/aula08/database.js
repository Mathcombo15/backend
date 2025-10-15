// Objeto cliente do mongodb
const { MongoClient } = require("mongodb");

// String de conexão
const url = "mongodb+srv://usrTarefas:757302@cluster0.pfgmara.mongodb.net/";

const client = new MongoClient(url);

let db = null;

async function conecta() {
    try {
        await client.connect();
        return client.db("agenda");
    } catch (e) {
        console.log("Error ao concectar no MongoDB", e.message);
    }
}

module.exports = conecta;

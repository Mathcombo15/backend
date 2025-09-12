const express = require('express');

const tarefas = [
    { id: 1, nome: "Estudar middleware", concluida: false },
    { id: 2, nome: "Praticar Express", concluida: true }
];

// criar  instância de uma aplicação Express
const app = express.json();

// middleware de aplicação
app.use((req, res, next) => {
    console.log("Time:", Date.now(), "Metódo HTTP: ", req.method, "URL: ", req.url);
    next();
});

// -----------------------------------------------------------------------------------------------

// criar middleware de rotas
const router = express.Router();
app.use((req, res, next) => {
    console.log("Router passou aqui!")
    next();
});

// rotas

// get
router.get("/", (req, res) => {
    console.log(tarefas);
});

// post
router.post("/", (req, res) => {
    console.log(req.body);
    res.status(201).send("Inserido com sucesso")
});

// get id
router.get("/:id", (req, res) => {
    const { id } = req.params;
    if (id == 1) return res.send("Achei");
    throw Error("Não achei");
});

// put id
router.put("/:id,", (req, res) => {
    const { id } = req.params;
    if (id == 1) res.send("Tarefa alterada");
    res.status(404).send("Tarefa não encontrada")
});

// delete
router.delete("/:id", (req, res) => {
    res.status(404).send("Tarefa não encontrada");
});

// middleware de error
app.use((err, req, res, next) => {
    console.log(err.message);
    res.status(500).send("Algo de errado não está certo!");
});


// fazer o middleware ouvir a porta
app.listen(3000, () => {
    console.log("Escutando a porta: 3000");
})

module.exports = router;
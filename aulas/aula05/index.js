// importa o framework
const express = require('express');

// importa middlware de terceiros
const cors = require('cors');

// importa middleware de rota
const router = require('./routerTarefa')

// criar uma instancia da aplicação
const app = express();

// middleware embutido ou integrado
app.use(express.json());
app.use(express.urlencoded({ extended: false })); //?param1=valor&param2

// middlware de terceiros
app.use(cors());

// middleware de aplicação
app.use((req, res, next) => {
    console.log("Passei aqui!");
    next();
});

// middleware de rota
const router = express.Router();

router.get('/', (req, res) => {
    res.send("Cheguei aqui")
});

router.post('/', (req, res) => {
    console.log(req.body);
    res.status(201).send("Inserido com sucesso");
});

router.get('/:id', (req, res) => {
    const { id } = req.params;
    if (id == 1) return res.send("Achei");
    throw Error("Não achei");
})

router.put("/:id,", (req, res) => {
    const { id } = req.params;
    if (id == 1) res.send("Tarefa alterada");
    res.status(404).send("Tarefa não encontrada")
});

router.delete("/:id", (req, res) => {
    res.status(404).send("Tarefa não encontrada");
})

app.use('/tarefas', router);

// middleware de error
app.use((err, req, res, next) => {
    console.log(err.message);
    res.status(500).send("Algo de errado não está certo!");
});

// inicia a aplicação
app.listen(3000, () => {
    console.log("App está ON!");
});


module.exports = router;
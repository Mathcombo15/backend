const express = require('express');
const YAML = require('yaml');
const fs = require('fs');
const swaggerUi = require('swagger-ui-express');

// Carregar arquivo swagger.yaml
const file = fs.readFileSync("./swagger.yaml", "utf8");

// Valida o formato YAML
const swaggerDoc = YAML.parse(file);

// cria middleware de rota
const router = express.Router();

// Carrega a aplicação do swagger UI
router.use("/", swaggerUi.serve)

// Rederizar a documentacao
router.get("/", swaggerUi.setup(swaggerDoc));

module.exports = router;
var express = require('express');

const auth = require("../middlewares/auth");
const { token } = require('morgan');

var router = express.Router();

router.post("/login", (req, res) => {
  const { username, password } = req.body;

  // simula auntenticacao
  if (username === "matheus@iesb.br" && password === "abcd1234") {
    const payload = {
      iss: "Minha API",
      aud: "Você",
      email: username,
      nome: "Matheus"

    };
    try {
      return res.json({ token: auth.gerarToken(payload) })
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  }

  return res.status(401).json({ msg: "Credenciais inválidas" });
});

router.post('/renovar', auth.verificarToken, auth.renovarToken);

module.exports = router;

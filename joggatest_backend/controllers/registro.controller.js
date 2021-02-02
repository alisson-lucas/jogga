const db = require("../models");
const Registro = db.registro;
const Op = db.Sequelize.Op;

//Criar um novo serviço
exports.create = (req, res) => {
    // Validaçao
    if (!req.body.name) {
      res.status(400).send({
        message: "Conteudo nao pode estar vazio!"
      });
      return;
    }
    
    // Criar um registro
    const registro = {
      name: req.body.name,
      email: req.body.email,
      phone: req.body.phone,
      observation: req.body.observation
    };
    
    // Salvar o registro no banco
    Registro.create(registro)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Algum erro ocorreu enquanto criava o registro."
      });
    });
};
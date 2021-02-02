module.exports = (sequelize, Sequelize) => {
    const Registro = sequelize.define("registro", {
      name: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      phone: {
        type: Sequelize.STRING
      },
      observation: {
        type: Sequelize.STRING
      },
    });
  
    return Registro;
  };
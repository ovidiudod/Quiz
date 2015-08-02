// Definicion del modelo de Quiz con validación

module.exports = function(sequelize, DataTypes) {
  return sequelize.define(
    'Quiz',
    { pregunta: {
        type: DataTypes.STRING,
        validate: { notEmpty: {msg: "-> Falta Pregunta"}}
      },
      respuesta: {
        type: DataTypes.STRING,
        validate: { notEmpty: {msg: "-> Falta Respuesta"}}
<<<<<<< HEAD
      },
      image: {
        type: DataTypes.STRING
      }
    }
  );
}
=======
	},
	  tema: {
        type: DataTypes.STRING,
        validate: { notEmpty: {msg: "-> Falta Tema"}}
	}
            });
}
>>>>>>> 0d1f9bc7bb48c98b6c601407ec4ec781d01bbba8

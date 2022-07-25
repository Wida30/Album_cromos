const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ComidaSchema = new Schema(
  {
    nombre: { type: String, required: true },
    pais: {type: String, required: true},
    plato: {type: String, required: true},
    imagen: {type: String, required: true },
    descripción: {type: String, required: false},
    ingredientes: { type: String, required: false}
  },
  { timestamps: true }
);

const Comida = mongoose.model("comidas", ComidaSchema);

module.exports = Comida;
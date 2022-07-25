const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PaisSchema = new Schema(
  {
    space:{type: String, required: true},
    nombre: { type: String, required: true },
    imagen: { type: String, required: true },

    comidas: [
      { type: Schema.Types.ObjectId, ref: "comidas", required: false },
    ],
  },
  { timestamps: true }
);

const Pais = mongoose.model("paises", PaisSchema);

module.exports = Pais;
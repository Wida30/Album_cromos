const Comida = require('../models/comidas.model');
const HTTPSTATUSCODE = require("../../utils/httpStatusCode");

//Recuperamos todos los videojuegos
const getAllComidas = async (req, res, next) => {
  try {
    const allComidas = await Comida.find();
    return res.json({
      status: 200,
      message: HTTPSTATUSCODE[200],
      comidas: allComidas,
    });
  } catch (error) {
    return next(error);
  }
};

//Recuperamos un videojuego por ID
const getComidaByID = async (req, res, next) => {
  try {
    const id = req.params.id;
    const comidaByID = await Comida.findById(id);
    return res.json({
      status: 200,
      message: HTTPSTATUSCODE[200],
      comida: comidaByID,
    });
  } catch (error) {
    return next(error);
  }
};

//Crear un nuevo videojuego
const createComida = async (req, res, next) => {
  try {
    const newComida = new Comida(req.body);
    const createdComida = await newComida.save();
    return res.json({
      status: 201,
      message: HTTPSTATUSCODE[201],
      comida: createdComida,
    });
  } catch (error) {
    return next(error);
  }
};

const deleteComida = async (req, res, next) => {
    try {
      const { id } = req.params;
  
      const comidaBorrado = await Comida.findByIdAndDelete(id);
  
      return res.status(200).json(comidaBorrado);
    } catch (error) {
      return next(error);
    }
  };

const patchComida = async (req, res, next) => {
  try {
    const { id } = req.params;
    const patchComida = new Comida(req.body);

    patchComida._id = id;
    const ComidaDB = await Comida.findByIdAndUpdate(id, patchComida);
    return res.status(200).json({ nuevo: patchComida, vieja: ComidaDB });

  } catch (error) {
    return next(error);
  }
};

module.exports = { getAllComidas, getComidaByID, createComida, patchComida, deleteComida };

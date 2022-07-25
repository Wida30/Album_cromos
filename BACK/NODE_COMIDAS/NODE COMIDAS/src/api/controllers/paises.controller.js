const { deleteFile } = require('../../middlewares/delete.files');
const Pais = require('../models/paises.model');
const HTTPSTATUSCODE = require('../../utils/httpStatusCode');

const getAllPaises = async (req, res, next) => {
  try {
    const allPaises = await Pais.find().populate('comidas');
    return res.json({
      status: 200,
      message: HTTPSTATUSCODE[200],
      pais: allPaises,
    });
  } catch (error) {
    return next(error);
  }
};

const getPaisByID = async (req, res, next) => {
  try {
    const id = req.params.id;
    const paisByID = await Pais.findById(id).populate('comidas');
    return res.json({
      status: 200,
      message: HTTPSTATUSCODE[200],
      pais: paisByID,
    });
  } catch (error) {
    return next(error);
  }
};

const createPais = async (req, res, next) => {
  try {
    const newPais = new Pais(req.body);
    if (req.file) {
      newPais.image = req.file.path;
    }
    const createdPaises = await newPais.save();
    return res.json({
      status: 201,
      message: HTTPSTATUSCODE[201],
      pais: createdPaises,
    });
  } catch (error) {
    return next(error);
  }
};

const deletePais = async (req, res, next) => {
  try {
    const { id } = req.params;

    const paisBorrado = await Pais.findByIdAndDelete(id);

    return res.status(200).json(paisBorrado);
  } catch (error) {
    return next(error);
  }
};

const patchPais = async (req, res, next) => {
  try {
    const { id } = req.params;
    const patchPais = new Pais(req.body);
    patchPais._id = id;
    const paisData = await Pais.findById(id);

    patchPais.comidas = [...paisData.comidas, ...patchPais.comidas];
    if (paisData.image) {
      deleteFile(paisData.image);
    }

    if (req.file) {
      patchPais.image = req.file.path;
    }
    const PaisDB = await Pais.findByIdAndUpdate(id, patchPais);
    return res.status(200).json({ nuevo: patchPais, vieja: PaisDB });
  } catch (error) {
    return next(error);
  }
};

module.exports = {
  getAllPaises,
  getPaisByID,
  createPais,
  deletePais,
  patchPais,
};

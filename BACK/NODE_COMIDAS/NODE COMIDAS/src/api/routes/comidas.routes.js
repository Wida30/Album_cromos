const express = require("express");
const router = express.Router();
const upload=require("../../middlewares/file")
const {isAuth} = require("../../middlewares/auth.middleware");

const {
  getAllComidas,
  getComidaByID,
  createComida,
  patchComida,
  deleteComida
} = require("../controllers/comidas.controller");

router.get("/", getAllComidas);
router.get("/:id", getComidaByID);
router.post("/",[isAuth], createComida);
router.patch('/:id',[isAuth], patchComida);
router.delete('/:id',[isAuth], deleteComida);

module.exports = router;
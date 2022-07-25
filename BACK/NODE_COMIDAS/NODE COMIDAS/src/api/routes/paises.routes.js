const express = require("express");
const router = express.Router();
const upload=require("../../middlewares/file")
const {isAuth} = require("../../middlewares/auth.middleware");

const {
  getAllPaises,
  getPaisByID,
  createPais,
  deletePais,
  patchPais
} = require("../controllers/paises.controller");

router.get("/", getAllPaises);
router.get("/:id", getPaisByID);
router.post("/", [isAuth],upload.single("imagen"), createPais);
router.delete('/:id',[isAuth], deletePais);
router.patch('/:id',[isAuth],upload.single("imagen"), patchPais)

module.exports = router;
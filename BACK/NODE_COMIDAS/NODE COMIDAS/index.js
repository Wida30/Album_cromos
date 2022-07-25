const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const cloudinary= require("cloudinary").v2;
const logger = require("morgan");

//IMPORTAMOS LOS ROUTERS 
const paisesRouter = require("./src/api/routes/paises.routes");
const comidasRouter = require("./src/api/routes/comidas.routes");
const userRouter = require("./src/api/routes/users.routes");

const {connect}= require("./src/utils/database");

dotenv.config()

const JWT_SECRET = process.env.JWT_SECRET

const server = express();

server.use(logger("dev"))

cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.API_KEY,
    api_secret: process.env.API_SECRET,
})

server.use(express.json());
server.use(express.urlencoded({ extended: true }));

//Nos conectamos a la base de datos
connect();

//CONFIGURAMOS LOS HEADERS
server.use((req, res, next) => {
    res.header('Access-Control-Allow-Methods', 'GET,PUT,PATCH,POST,DELETE');
    res.header('Access-Control-Allow-Credentials', true);
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
  });

//CONFIGURAMOS LAS CORS (Aquí definimos quien puede hacer peticiones a mi servidor)
server.use(cors({
    origin: "*",
    credentials: true
}))

server.set("secretKey", JWT_SECRET)

//Definimos las rutas padre
server.use("/comidas", comidasRouter);
server.use("/paises", paisesRouter);
/* server.use("/platos", platosRouter); */
server.use("/users", userRouter);

const PORT = process.env.PORT || 5000;

//ESCUCHAMOS EL SERVIDOR
server.listen(PORT, () => {
    console.log(`Server listening on http://localhost:${PORT}`)
})
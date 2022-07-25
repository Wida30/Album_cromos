const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const cloudinary=require("cloudinary").v2;
const logger = require("morgan");

const cromoRouter = require("./src/api/routes/cromos.routes");
const userRoute = require("./src/api/routes/user.routes");
const mercadoRoute = require("./src/api/routes/mercado.routes");

const {connect}= require("./src/utils/database")

connect();

const PORT = process.env.PORT || 5000;

const JWT_SECRET = process.env.JWT_SECRET

const server = express();

server.use(express.json());
server.use(express.urlencoded({ extended: true }));


server.use(logger("dev"))


cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.API_KEY,
    api_secret: process.env.API_SECRET,
})

server.use((req, res, next) => {
    res.header('Access-Control-Allow-Methods', 'GET,PUT,PATCH,POST,DELETE');
    res.header('Access-Control-Allow-Credentials', true);
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
  });

server.use(cors({
    origin: "*",
    credentials: true
}))

server.set("secretKey", JWT_SECRET);

server.use("/cromos", cromoRouter);
server.use("/users", userRoute);
server.use("/mercado", mercadoRoute);

server.listen(PORT, () => {
    console.log(`Server listening on http://localhost:${PORT}`)
})
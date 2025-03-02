import express from "express";

import connectDB from "./src/config/db.js";


//conectamos a la base de datos
connectDB();

const app=express();

//crear middlewares
const PORT=process.env.PORT || 5000;

//ponemos en escucha el servidor
app.listen(PORT,()=>{
    console.log(`servidor corriendo en el puerto ${PORT}`);
});



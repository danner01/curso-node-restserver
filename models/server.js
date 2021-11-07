
const express = require('express')
const cors = require('cors')



class Server{

    constructor(){
        this.app=express();
        this.port=process.env.PORT;
        this.usuariosPath="/api/usuarios";

        //Middlewares
        this.middlewares();
        //rutas de mi aplicación
        this.routes();
    }

    ////////////////////////MIDDELWAR/////////////////////////////
    middlewares(){
         //CORS
         this.app.use(cors());

         //Parseo y lectura del body
         this.app.use(express.json());
         // Dirctorio Público
        this.app.use(express.static("public"));
    }
/////////////ROUTES//////////////////////////////////////////////
   routes(){
   
    this.app.use(this.usuariosPath,require("../routes/usuarios"));

   }
 //////////////////////////Escuchar Puerto/////////////////////////////  
   listen(){
        
this.app.listen(this.port,()=>{
    console.log("Servidor corriendo en puerto",this.port);
});

   }


}


module.exports=Server;
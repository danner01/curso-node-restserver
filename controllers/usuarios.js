const{response,request}=require("express");


const usuariosGet=(req=request, res=response)=>{

     const {q,nombre="No name",apikey, page=1, limit} = req.query;

    res.json({
        msg:"get API - usuariosGet",
        q,
        nombre,
        apikey,
        page,
        limit
    });
  }

  const usuariosPut=(req, res=response)=>{
   
    const{ id }= req.params;

    res.status(400).json({
        msg:"put API - usuariosPut",
        id
    });
  }

  const usuariosPost=(req, res=response)=>{

    const {nombre, edad} = req.body;

    res.status(201).json({
        msg:"post API - usuariosPost",
        nombre,
        edad
    });
  }

  const usuariosDelete=(req, res=response)=>{
    res.json({
        msg:"delete API - usuariosDelete"
    });
  }

  const usuariosPatch=(req, res)=>{
    res.json({
        msg:"path API"
    });
  }

  module.exports = {

      usuariosGet,
      usuariosPut,
      usuariosPost,
      usuariosDelete,
      usuariosPatch,

  }
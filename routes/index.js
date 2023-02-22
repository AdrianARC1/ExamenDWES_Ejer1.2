const express = require('express');
const router = express.Router();
const pool = require('../db')
const {getFotos,getAddFotos,postAddFotos,getDeleteFotos,getEditFoto,postEditFoto, getLikeFoto, getDislikeFoto, getMasvotadas, getMenosvotadas} =require('../controllers/index.controller')



/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// Mostrar pagina de las fotos
router.get('/fotos', getFotos)

// Metodo get pagina añadir fotos
router.get('/addfotos', getAddFotos)

// Metodo post pagina añadir fotos
router.post('/addfotos', postAddFotos)

// Metodo get pagina eliminar fotos
router.get('/delete/:id', getDeleteFotos)

// Metodo get pagina editar fotos
router.get('/edit/:id', getEditFoto)

// Metodo get pagina editar fotos
router.post('/edit/:id', postEditFoto)

// Metodo get pagina like fotos
router.get('/like/:id', getLikeFoto)

// Metodo get pagina dislike fotos
router.get('/dislike/:id', getDislikeFoto)

// Metodo get pagina fotos mas votadas
router.get('/masvotadas', getMasvotadas)

// Metodo get pagina fotos menos votadas
router.get('/menosvotadas', getMenosvotadas)

module.exports = router;

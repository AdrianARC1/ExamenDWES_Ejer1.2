const express = require('express');
const router = express.Router();
const pool = require('../db')
const {getFotos,getAddFotos,postAddFotos,getDeleteFotos,getEditFoto,postEditFoto, getLikeFoto, getDislikeFoto, getMasvotadas, getMenosvotadas} =require('../controllers/index.controller')



/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.get('/fotos', getFotos)


router.get('/addfotos', getAddFotos)

router.post('/addfotos', postAddFotos)

router.get('/delete/:id', getDeleteFotos)

router.get('/edit/:id', getEditFoto)

router.post('/edit/:id', postEditFoto)

router.get('/like/:id', getLikeFoto)

router.get('/dislike/:id', getDislikeFoto)

router.get('/masvotadas', getMasvotadas)

router.get('/menosvotadas', getMenosvotadas)

module.exports = router;

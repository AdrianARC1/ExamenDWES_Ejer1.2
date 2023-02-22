const express = require('express');
const router = express.Router();
const pool = require('../db')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.get('/fotos', async (req, res, next)=>{
  const [resul] = await pool.query('SELECT * FROM fotos')
  // console.log(resul);
  res.render('fotos', {resul})
  // res.render('fotos')
})


router.get('/addfotos', (req, res, next)=>{
  res.render('addFotos')
})

router.post('/addfotos', async (req, res, next)=>{
  // console.log(req.body)
  await pool.query('INSERT INTO fotos set ?',req.body)

  res.redirect('/fotos')
})

router.get('/delete/:id', async (req, res, next)=>{
  console.log(req.params);
  const {id} =req.params
  await pool.query('DELETE from fotos where id = ?',id)
  res.redirect('/fotos')
})

router.get('/edit/:id', async (req, res, next)=>{
  console.log(req.params);
  const {id} =req.params
  const [resul] = await pool.query('SELECT * FROM fotos where id = ?', id)
  // console.log(resul)
  // console.log(resul[0])
  const newFoto = resul[0]

  res.render('editFoto', {newFoto})
})

router.post('/edit/:id', async (req, res, next)=>{
  const {id} =req.params
  const {imagen, descrip, titulo, fecha} = req.body
  await pool.query('UPDATE fotos set ? where id = ?', [req.body,id])

  res.redirect('/fotos')
})

module.exports = router;

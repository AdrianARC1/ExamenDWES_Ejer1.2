const express = require('express');
const router = express.Router();
const pool = require('../db')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.get('/fotos', async (req, res, next)=>{
  const [resul] = await pool.query('SELECT * FROM fotos')
  console.log(resul);
  res.render('fotos', {resul})
  // res.render('fotos')
})


router.get('/addfotos', (req, res, next)=>{
  res.render('addFotos')
})

router.post('/addfotos', async (req, res, next)=>{
  console.log(req.body)
  await pool.query('INSERT INTO fotos set ?',req.body)

  res.redirect('/fotos')
})

module.exports = router;

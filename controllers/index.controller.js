const pool = require('../db')

const getFotos= async (req, res, next)=>{
  const [resul] = await pool.query('SELECT * FROM fotos')
  console.log(resul);
  res.render('fotos', {resul})
}

const getAddFotos=(req, res, next)=>{
    res.render('addFotos')
  }

const postAddFotos=async (req, res, next)=>{
    const { imagen, descrip, titulo, fecha } = req.body
    if (!imagen || !descrip || !titulo || !fecha) {
        res.sendStatus(404)
    } else {
        // console.log(req.body)
        await pool.query('INSERT INTO fotos set ?',req.body)
    
        res.redirect('/fotos')
  }
    }

const getDeleteFotos=async (req, res, next)=>{
    console.log(req.params);
    const {id} =req.params
    await pool.query('DELETE from fotos where id = ?',id)
    // res.redirect('/fotos')
  }

const getEditFoto=async (req, res, next)=>{
    console.log(req.params);
    const {id} =req.params
    const [resul] = await pool.query('SELECT * FROM fotos where id = ?', id)
    // console.log(resul)
    // console.log(resul[0])
    const newFoto = resul[0]
  
    res.render('editFoto', {newFoto})
  }

const postEditFoto=async (req, res, next)=>{
    const {id} =req.params
    const {imagen, descrip, titulo, fecha} = req.body
    await pool.query('UPDATE fotos set ? where id = ?', [req.body,id])
  
    res.redirect('/fotos')
  }

  
  const getLikeFoto=async (req, res, next)=>{
      // console.log(req.params);
      const {id} =req.params
      // const [resul] = await pool.query('SELECT * FROM fotos where id = ?', id)
      await pool.query('UPDATE fotos set likes=likes+1 where id = ?',id)
  
      res.redirect('/fotos')
    }

  
    const getDislikeFoto=async (req, res, next)=>{
        // console.log(req.params);
        const {id} =req.params
        // const [resul] = await pool.query('SELECT * FROM fotos where id = ?', id)
        await pool.query('UPDATE fotos set dislikes=dislikes+1 where id = ?',id)
    
        res.redirect('/fotos')
      }


      const getMasvotadas=async (req, res, next)=>{

        const [resul_masvotadas] = await pool.query('SELECT * from fotos order by likes desc')
        // Antes estaba limitada a 3 ( limit 3 ) pero por hacerlo mas bonito, que sea infinito
        console.log(resul_masvotadas)
        res.render('fotoslikes', {resul_masvotadas})
      }

      const getMenosvotadas=async (req, res, next)=>{
        const [resul_menosvotadas] = await pool.query('SELECT * from fotos order by likes asc')
        // Antes estaba limitada a 3 ( limit 3 ) pero por hacerlo mas bonito, que sea infinito

        console.log(resul_menosvotadas)
        res.render('fotosdislikes', {resul_menosvotadas})
      }



module.exports={getFotos,getAddFotos,postAddFotos,getDeleteFotos,getEditFoto,postEditFoto, getLikeFoto, getDislikeFoto,getMasvotadas, getMenosvotadas}

// , getDislikeFoto


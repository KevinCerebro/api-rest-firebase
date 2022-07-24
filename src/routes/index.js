const {Router} = require('express');
const{postMovies,getMoviesById,getMovies,deleteMovie,updateMovie}=require('../controllers/peliculas')

const router=Router();
router.get('/',(req,res)=>{
    return res.json({mesagge:"Bienvenido"})
});
router.get('/movies/:id',getMoviesById);
router.get('/movies',getMovies);
router.post('/movies',postMovies);
router.delete('/movies/delete/:id',deleteMovie);
router.put('/movies',updateMovie);

module.exports={router};
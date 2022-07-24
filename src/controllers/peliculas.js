const {db}=require("../cnn.js")


const getMoviesById= async(req,res)=>{
    try {
        const id=req.params.id;
        const doc=db.collection("movies").doc(id);
        const object_doc= await doc.get();
        const data=object_doc.data()
        return res.status(200).json(data);
    } catch (error) {
        
    }

};

const getMovies= async (req,res)=>{
    try {
        const query=db.collection('movies');
        const querySnapshot= await query.get();
        const docs=querySnapshot.docs;
        const response= docs.map(doc=>({
           id:doc.id,
            titulo:doc.data().titulo,
            actor_principal:doc.data().actor_principal,
            genero:doc.data().genero,
            anio_estreno:doc.data().anio_estreno,
            duracion_min:doc.data().duracion_min
        }));
        return res.status(200).json(response)

    } catch (error) {
        
    }
}

const postMovies= async (req,res)=>{

    try {
        const {id,titulo,actor_principal,genero,anio_estreno,duracion_min}=req.body
        await db.collection('movies').doc(id).create({
        titulo:titulo,
        actor_principal:actor_principal,
        genero:genero,
        anio_estreno:anio_estreno,
        duracion_min:duracion_min
        });
        return res.status(204).json() 
    } catch (error) {
    }
    
        
};


const deleteMovie= async(req,res)=>{
    try {
        const id=req.params.id;
        const doc=db.collection('movies').doc(id);
        await doc.delete();
        return res.status(200).json();
    } catch (error) {
        
    }

}
const updateMovie= async(req,res)=>{
    try {
        const {id,titulo,actor_principal,genero,anio_estreno,duracion_min}=req.body
        const doc=db.collection('movies').doc(id);
        await doc.update({
            titulo:titulo,
            actor_principal:actor_principal,
            genero:genero,
            anio_estreno:anio_estreno,
            duracion_min:duracion_min  
        })
        return res.status(200).json();
    } catch (error) {
        
    }
}

module.exports={
    postMovies,
    getMoviesById,
    getMovies,
    deleteMovie,
    updateMovie
}
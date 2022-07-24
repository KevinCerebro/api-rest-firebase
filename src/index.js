const express=require('express');
const app=express();
const {router}=require('../src/routes/index.js')
const cors = require('cors')

/* 
//midlewears
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use(cors({ origin: true, credentials: true  }));

app.use(router)

exports.app=functions.https.onRequest(app);

*/

app.set('port', process.env.PORT || 5000);

//midlewears
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use(cors({ origin: true, credentials: true  }));

app.use(router)

app.listen( app.get('port'),()=>{
    console.log(`Servidor levantado en el puesto: ${app.get('port')}`)
})




const admin=require('firebase-admin');
const serviceAccount = require("../src/key.json");
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL:"https://fir-api-rest-326cc.firebaseio.com"
});


const db=admin.firestore();
module.exports={db};
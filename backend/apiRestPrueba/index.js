const express = require('express');
const cors = require('cors');
const routerApi = require('./routes/index')
const app  = express();// El constructor de expres crea una aplicación

const port = 3000;// Inicializamos una variable con el número 3000
//Son los dos puertos que utilizaré por el momento, el que utiliza live server y el mismo origen del backend
const whitelist = ['http://localhost:3000','http://127.0.0.1:5500','http://127.0.0.1:5501','https://programadorenproceso.com'];
const options = {
  // Una propiedad que es un método el cual evaluará el origen
  origin:(origin, callback) =>{
    if (whitelist.includes(origin)) {
      callback(null, true);
    }
    else{
      callback(new Error('Origen no permitido !! Ten cuidado !!'))
    }
  }
}

app.use(cors(options));
app.use(express.json());
routerApi(app)

// Con esto le decimos por qué puerto debe de estar escuchando nuestra aplicación, le pasamos la varable port, el
// callback lo podemos utilizar paraa verificar cuando ya se este corriedo en el puesto espesificado.
app.listen(port, () =>{
  console.log(' Mi puerto es !!  ' + port);
});




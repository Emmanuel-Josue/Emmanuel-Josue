const express = require('express');
const cors = require('cors');

const app  = express();// El constructor de expres crea una aplicación
const port = 3000;// Inicializamos una variable con el número 3000


app.use(express.json())
app.use(cors())
// El método get de la aplicación es para crear una ruta, el callback es lo que se ara cuando se invoque esa ruta,
// el callback tendra dos parametros por default, el requese y el default
app.get('/', (req, res) => {
  res.json(
    {
      message: 'La conexión se ha establecido !!!!'
    })
});

// Con esto le decimos por qué puerto debe de estar escuchando nuestra aplicación, le pasamos la varable port, el
// callback lo podemos utilizar paraa verificar cuando ya se este corriedo en el puesto espesificado.
app.listen(port, () =>{
  console.log(' Mi puesto es !!  ' + port);
});

//Dependencias, son bibliotecas que se instalan para que el servidor pueda levantarse correctamente
const express = require('express'); //Facilita la creaciÃ³n de servidores y manejo de rutas
const mongoose = require('mongoose'); //Permite conectarse a la BD de mongoDB y crear las colecciones y realizar consultas
const cors = require('cors'); //Permite la comunicaciÃ³n entre dominios diferentes
const bodyParser = require('body-parser'); //Permite interpretar los datos que vienen en la peticiÃ³n en formto json
require('dotenv').config(); //Se importa el archivo .env para poder utilizar sus variables dentro del cÃ³digo

const app = express(); //Crear una instancia de express
const PORT = process.env.PORT || 3000; //Usar el puerto indicado en .env o si no se indica usar el puerto 3000

// Importacion de rutas
const empleadoRoute = require("./routes/empleado.route");
const certificacionRoute = require("./routes/certificacion.route");
const atestadosRoute = require("./routes/astestados.route"); 
const departamentoRoute = require("./routes/departamento.route");
const evaluacionRoute = require("./routes/evaluacion.route");
const proyectoRoute = require("./routes/proyecto.route");
//



app.use(express.json());//Habilita el manejo de JSON en las peticiones
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());//Habilita el anÃ¡lisis de JSON en las peticiones 
app.use(cors());


require("node:dns/promises").setServers(["1.1.1.1", "8.8.8.8"]); // Para el error querySrv ECONNREFUSED https://alexbevi.com/
mongoose.connect(process.env.MONGODB_URI)
.then(()=> console.log('MongoDB Atlas conectado'))
.catch(error => console.log('Ocurrió un error al conectarse con MongoDB: ', error));

// Rutas

app.use("/empleados", empleadoRoute); // Usar la ruta de empleados para manejar las peticiones a /empleados
app.use("/certificaciones",certificacionRoute); // Usar la ruta de certificaciones para manejar las peticiones a /certificaciones

app.use("atestados",atestadosRoute); // Usar la ruta de atestados para manejar las peticiones a /atestados

app.use("/departamentos", departamentoRoute);
app.use("/evaluaciones", evaluacionRoute);
app.use("/proyectos", proyectoRoute);


app.get('/', (req,res)=> {
    res.send('Servidor en funcionamiento');
});

app.listen(PORT, ()=>{
    console.log('Servidor corriendo en http://localhost:' + PORT);
});
//importamos o requerimos express y sql
const express = require('express');
const mysql = require('mysql');

const bodyParser = require('body-parser');

//creamos una constante para nuestro puerto 
const PORT = process.env.PORT || 3000;

const app = express();

app.use(bodyParser.json());

//MySql - conexión a nuestra base de datos
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'rootpass',
    database:'node20_mysql'
});

//Rutas 
app.get('/', (req,res) =>{
   res.send('Welcome to my API!');
});

//Listado de todos los clientes 
app.get ('/customers', (req,res) => {
    res.send('List of costumers');
})

app.get ('/customers/:id', (req,res) => {
    res.send('Get customer by id');
})

app.post('/add', (req,res) =>{
    res.send('New customer');
})

//actualizar los datos de un cliente
app.put ('/update/:id', (req, res) =>{
    res.send('Update customer');
})

//Eliminar algun cliente recibiendo su id 
app.delete('/delete/id', (req,res) => {
    res.send('Detele customer');
})
// checar la conexión 
/*
connection.connect(error => {
    if (error) throw error;
    console.log('Database server running');
})*/

//esto se hace para vincular y escuchar las conexiones del host y puerto especificados
app.listen(PORT,()=> console.log(`Server running on port ${PORT}`));
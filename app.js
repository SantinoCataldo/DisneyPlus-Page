const express = require ('express');
const app = express ();

//captura de datos//
app.use(express.urlencoded({extended:false}));
app.use(express.json());


//invoco a dotenv//
const dotenv = require ('dotenv');
dotenv.config({path: './env/.env'});

//directorio public//
app.use('/resources', express.static('public'));
app.use('/resources', express.static(__dirname + '/public'));

//ejs// 
app.set('view engine', 'ejs');


//motor bcrypts//
const bcryptsjs = require('bcryptjs');

//var de session//
const session = require ('express-session');
app.use(session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true
}));

//BD//
const connection = require('./db/db');

//Rutas//
app.get('/', (req, res) => {
    res.render('index');
});

app.get('/Login', (req, res) => {
    res.render('login');
});

app.get('/Disney', (req, res) => {
    res.render('disney');
});

app.get('/Register', (req, res) => {
    res.render('register');
});

app.listen(3000, (req, res)=>{
    console.log('fiumbaa');
});

app.get('/Aladin', (req, res) => {
    res.render('html/ala');
});

app.get('/Bolt', (req, res) => {
    res.render('html/bolt');
});

app.get('/Cusco', (req, res) => {
    res.render('html/cusco');
});

app.get('/Dinosaurio', (req, res) => {
    res.render('html/dino');
});

app.get('/Goofy', (req, res) => {
    res.render('html/goo');
});

app.get('/LiloYStitch', (req, res) => {
    res.render('html/rey');
});

app.get('/TierraDeOsos', (req, res) => {
    res.render('html/oso');
});

app.get('/PlanetaDelTesoro', (req, res) => {
    res.render('html/pla');
});

app.get('/Rata', (req, res) => {
    res.render('html/rata');
});

app.get('/ReyLeon', (req, res) => {
    res.render('html/rey');
});

app.get('/Rio', (req, res) => {
    res.render('html/rio');
});

app.get('/ZorroYSabueso', (req, res) => {
    res.render('html/tod');
});


// Registro //

app.post('/register', async (req, res)=>{
    const id_mail = req.body.email;
    const contraseña = req.body.contraseña;
    let contraseñaHaash = await bcryptsjs.hash(contraseña, 8);
    connection.query('INSERT INTO personas SET ?', {id_mail:id_mail, contraseña:contraseñaHaash}, async(error, results)=>{
        if(error){
            console.log(error);
        }else {
            res.redirect('/');
        }
    });
});

//login//

app.post('/login', async (req, res)=>{
    const id_mail = req.body.email;
    const contraseña = req.body.contraseña;
    let contraseñaHaash = await bcryptsjs.hash(contraseña, 8);
    if(id_mail && contraseña){
        connection.query('SELECT * FROM personas WHERE id_mail = ?', [id_mail] , async(error, results)=>{
            if(results.length == 0 || ! (await bcryptsjs.compare(contraseña, results[0].contraseña))){
                res.redirect('/login');
                console.log(results);
                console.log(contraseña)
            }
            else {
                res.redirect('/disney');
                console.log(results);
                console.log(contraseña)
            }
        })
    }
})

const conection = require('../database/conection.js');


let nombre_usuario = 'usuario';
let datos_usuario;
// Controlador de rutas
const execController = {
    login: async (req, res) => {
        res.render('login')
    },

    logueando: async (req, res) => {
        try {
            const firstName = req.body.inputFirstName;
            const password = req.body.inputPassword;
            console.log(firstName, password);
            const [rows] = await conection.query('SELECT *, DATE_FORMAT(fechanacimiento, "%d/%m/%Y") AS fechanacimiento FROM users WHERE 1nombre = ? AND nidentificacion = ?', [firstName, password]);
            if (rows.length > 0) {
                nombre_usuario = rows[0]['1nombre'];
                res.redirect('/home');
                datos_usuario = rows[0]
                console.log(datos_usuario['1nombre'], datos_usuario['fechanacimiento']);
            }
            else {
                console.log('Usuario no encontrado');
                res.send('Usuario no encontrado');
            }
        } catch (error) {
            console.log(error);
        }
    },

    home: async (req, res) => {
        res.render('home', {name: nombre_usuario})
    },

    info: async (req, res) => {
        res.render('info', {data: datos_usuario})
    }
}

module.exports = execController
// Controlador de rutas
const execController = {
    login: async (req, res) => {
        res.render('login')
    },

    home: async (req, res) => {
        res.render('home')
    },

    info: async (req, res) => {
        res.render('info')
    }
}

module.exports = execController
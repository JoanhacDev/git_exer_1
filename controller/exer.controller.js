const path = require('path');
const execController = {
    login: async (req, res) => {
        res.sendFile(path.join(__dirname, '../login.html'));
    },

    home: async (req, res) => {
        res.sendFile(path.join(__dirname, '../home.html'));
    },

    info: async (req, res) => {
        res.sendFile(path.join(__dirname, '../info.html'));
    }
}

module.exports = execController
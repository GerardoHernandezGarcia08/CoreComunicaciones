require('dotenv').config()
const axios = require('axios');
const op = require('../configMethods');

const optionToken = {
  message: "Se regenero el token correctamete"
}

const sendKaizalaText = async (option) => {
  await axios.post(op.url, option, op.config)
    .then(console.log("Mensaje enviado a Kaizala"))
}

module.exports = {
  sendKaizalaText,
  optionToken
}
require('dotenv').config()
const axios = require('axios');
const fs = require('fs').promises;
const options = require('../configMethods');
const kaizalaText = require('../KaizalaCode/kaizalaText');
const optionTokenError = {
    message: "Error al regenerar el token"
}

const createAccessToken = async () => {
    let responseData
    await axios(options.kaizalaConfig)
        .then(response => {
            responseData = response.data
            console.log('Peticion Token Correcta');
        })
        .catch(function (error) {
            console.log(error)
            kaizalaText.sendKaizalaText(optionTokenError)
        });
    await fs.writeFile('token.json', JSON.stringify(responseData))
        .then(
            console.log('Token Escrito en Disco'))
        .catch(err => {
            console.error(err)
            kaizalaText.sendKaizalaText(optionTokenError)
        })

    return responseData
}

module.exports = async function (context, myTimer) {

    var timeStamp = new Date().toISOString();

    createAccessToken()
        .then((() => {
            console.log(`Token del dia ${timeStamp}`)
            kaizalaText.sendKaizalaText(kaizalaText.optionToken)
        })).catch(err => {
            console.error(err)
            kaizalaText.sendKaizalaText(optionTokenError)
        })

    if (myTimer.isPastDue) {
        context.log('JavaScript is running late!');
    }

    context.log('JavaScript timer trigger function ran!', timeStamp);
};
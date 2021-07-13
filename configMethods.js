require('dotenv').config();

const groupKaizala = process.env.KAIZALA_GROUDID;
const access = require('./token.json');


const url = `https://api1.kaiza.la/v1/groups/${groupKaizala}/messages`;

const config = {
  headers: {
    accessToken: access.accessToken,
    "Content-Type": "application/json"
  }
}

const kaizalaConfig = {
  method: 'get',
  url: 'https://api1.kaiza.la/v1/accessToken',
  headers: {
    //Aplicacion ID del Conector
    applicationId: process.env.KAIZALA_APPID,
    //Aplicacion Secret del Conector
    applicationSecret: process.env.KAIZALA_APPSECRET,
    //Aplicacion Token, este se regenera cada año!!
    refreshToken: process.env.KAIZALA_REFRESHTOKEN
  }
}

module.exports = {
  url,
  config,
  kaizalaConfig
}
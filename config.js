const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({
    path: './config.env'
});

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

module.exports = {
    SESSION_ID: process.env.SESSION_ID || 'YASIYA-MD~x6VBRBZI#Wa4m9Wd8357djcPQUaZ-vN__yKQxw08lW12CQwygj1g'
};

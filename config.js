const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({
    path: './config.env'
});

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

module.exports = {
    SESSION_ID: process.env.SESSION_ID || 'YASIYA-MD~hVwl0QLI#Rz4AFmOOaHeUT2cx_W-51bc9JUDl75bJPRh73B5nk70'
};

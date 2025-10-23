const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({
    path: './config.env'
});

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

module.exports = {
    SESSION_ID: process.env.SESSION_ID || 'YASIYA-MD~hZQSiDzL#Vh8LK_A3KvkXj0HL8u2POzol4rz3Qz6DAk48nSJq4zI'
};



export class TokenServices{
    
    generar(){
        const crypto = require('crypto');
        const tokenLength = 16;
        const characters = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
        let token = '';

        for (let i = 0; i < tokenLength; i++) {
            const randomIndex = crypto.randomInt(0, characters.length);
            token += characters.charAt(randomIndex);
        }

        return token;
    }
}

module.exports = TokenServices;
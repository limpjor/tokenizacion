import { cardModel } from "../models/cardModel";

export class Utils {
    public validateCard (card:cardModel){
        if (!(/^[0-9]+$/.test(card.card_number) && /^[0-9]+$/.test(card.cvv))){
            throw("El numero de tarjeta o cvv deben ser solo numeros");

        }else if (!("^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$".test(card.email))){
            throw("El correo NO es válido.");

        }else if (!(card.card_number.length > 12 && card.card_number.length < 17 )){
            throw("El número de tarjeta de crédito NO es válido.");

        }else if (!(card.cvv.length > 2 && card.cvv.length < 4 )){
            throw("El número de tarjeta de crédito NO es válido.");
        
        }else if (!(card.expiration_month.length > 0 && card.expiration_month.length < 2 )){
            throw("El mes de tarjeta de crédito NO es válido.");
        
        }else if (Number.parseInt(card.expiration_year) > 5 ){
            throw("El año de tarjeta de crédito NO es válido.");

        }else if (!(card.email.length > 5 && card.email.length < 100 )){
            throw("El correo NO es válido.");
        }
    }

    public luhnAlgorithm(cardNumber:string){
        const digits = cardNumber.toString().split('').map(Number);
        
        for (let i = digits.length - 2; i >= 0; i -= 2) {
            let doubleDigit = digits[i] * 2;
            
            if (doubleDigit >= 10) {
            doubleDigit -= 9;
            }
            
            digits[i] = doubleDigit;
        }
        const sum = digits.reduce((acc, curr) => acc + curr, 0);
        
        return sum % 10 === 0;
    }
}
module.exports = Utils;
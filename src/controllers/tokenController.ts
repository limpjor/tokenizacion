import { APIGatewayProxyHandler, APIGatewayProxyResult } from 'aws-lambda';
import { CardModel } from '../models/cardModel';
import {Utils} from '../util/utils';
import {TokenServices} from '../service/tokenService';


export const createToken: APIGatewayProxyHandler = async (event) => {
  try {
        const utils = new Utils();
        const tokenServices = new TokenServices();
        const cardModel = JSON.parse(event.body || '{}') as CardModel;
        await utils.validateCard(cardModel);
        let token = await tokenServices.generar();
        const response: APIGatewayProxyResult = {
            statusCode: 200,
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({'token':token})
          };
      return response;
        
  } catch (error) {
    console.log(error);

    const errorResponse: APIGatewayProxyResult = {
        statusCode: 500,
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ error: 'Error interno' }),
      };
  
      return errorResponse;
  }
};


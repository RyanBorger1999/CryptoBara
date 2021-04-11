'use strict';
const username = 'Cryptobara';
const hostName = 'cryptobara.c7od0jbcdye6.us-east-2.rds.amazonaws.com';
const portNumber = 3333;
const databaseName = 'postgres';
const password = 'cryptobara';

const PgConnection = require('postgresql-easy');
var querystring = require('querystring');

const pg = new PgConnection({

  user: username,
  host: hostName,
  database: databaseName,
  password: password,
  port: portNumber,
  
});



module.exports.login = async (event, context, callback) => {

  context.callbackWaitsForEmptyEventLoop = false;

  console.log(event);
  if (event.httpMethod == 'GET'){
    var username = event.pathParameters.username;
    await pg.getById('username', username).then(res => {

      callback(null, {
        
        statusCode: 200,
        body: JSON.stringify(res, null, 2)
  
      })
    }).catch(error => {
  
      console.log(error);
  
      callback(null, {
  
        statusCode: error.statusCode || 500,
        body: 'Could not find user. '
  
      })
    });

  } else if (event.httpMethod == 'POST') {
    console.log(event.body);
    const data = JSON.parse(event.body);
    await pg.insert('user', 
    {
      username: data["username"],
      password: data["password"], 
    }).then(res => {

      callback(null, {
        
        statusCode: 200,
        body: JSON.stringify(res, null, 2)

      })
    }).catch(error => {

      console.log(error);

      callback(null, {

        statusCode: error.statusCode || 500,
        body: 'Error: Could not find User: ' + error

      })
    });
  }
};

const path = require('path');
const webpack = require('webpack');
require("dotenv").config();

const environment = process.env.ENVIRONMENT ;
// const environment = "production" ;

console.log('environment:::::', environment);

let ENVIRONMENT_VARIABLES = {
  'process.env.ENVIRONMENT': JSON.stringify('development'),
  'process.env.PORT': JSON.stringify('3080'),
  'process.env.MONGO_CONNECTION_STRING': JSON.stringify('mongodb://mongo-db:27017')
};

if (environment === 'test') {
  ENVIRONMENT_VARIABLES = {
    'process.env.ENVIRONMENT': JSON.stringify('test'),
    'process.env.PORT': JSON.stringify('3080'),
    'process.env.MONGO_CONNECTION_STRING': JSON.stringify('mongodb://mongo-db:27017')
  };
} else if (environment === 'production') {
  ENVIRONMENT_VARIABLES = {
    'process.env.ENVIRONMENT': JSON.stringify('production'),
    'process.env.PORT': JSON.stringify('8080'),
    'process.env.COSMOSDB_HOST': JSON.stringify('ty-mern-mongo.mongo.cosmos.azure.com'),
    'process.env.COSMOSDB_PORT': JSON.stringify('10255'),
    'process.env.COSMOSDB_DBNAME': JSON.stringify('ty-mern-mongo'),
    'process.env.COSMOSDB_USER': JSON.stringify('ty-mern-mongo'),
    'process.env.COSMOSDB_PASSWORD': JSON.stringify('Fy5Mn454u7EHUTD69RzohFGoIV50D5AY98SNY30qkSiCkXB5gz8viVf8PYfMcqJO8iwkAzqACnodACDbOWUDIA=='),
    // 'process.env.MONGO_CONNECTION_STRING': JSON.stringify('mongodb://ty-mern-mongo:Fy5Mn454u7EHUTD69RzohFGoIV50D5AY98SNY30qkSiCkXB5gz8viVf8PYfMcqJO8iwkAzqACnodACDbOWUDIA==@ty-mern-mongo.mongo.cosmos.azure.com:10255/?ssl=true&replicaSet=globaldb&retrywrites=false&maxIdleTimeMS=120000&appName=@ty-mern-mongo@')
  };
}

module.exports = {
  entry: './server.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'api.bundle.js',
  },
  target: 'node',
  plugins: [
    new webpack.DefinePlugin(ENVIRONMENT_VARIABLES),
  ],
};
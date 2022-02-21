// require("dotenv").config();

import dotenv from "dotenv";
dotenv.config();

// require("dotenv").config();
// import { config } from 'dotenv';

import express from "express";
const app = express();
const port = process.env.PORT; // default port to listen

// define a route handler for the default home page
app.get( "/", ( req, res ) => {
    res.status(200).send( "Hello world!" );
} );

app.get( "/echo", ( req, res ) => {
    res.status(200).send( "Echo" );
} );

app.all( "*", ( req, res ) => {
    res.status(404).send( "Error404" );
} );

// start the Express server
app.listen( port, () => {
    console.log( `server started at http://localhost:${ port }` );
} );
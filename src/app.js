const logger = require('./logger');

const feathers = require('@feathersjs/feathers');
const express = require('@feathersjs/express');
const socketio = require('@feathersjs/socketio');

const appHooks = require('./app.hooks');

const app = express(feathers());

app.configure(express.rest());
app.configure(socketio());

app.use(express.notFound());
app.use(express.errorHandler({ logger }));

app.hooks(appHooks);

module.exports = app;

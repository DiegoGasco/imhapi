'use strict';

// Load modules

const Hapi = require('hapi');
const Version = require('./version');


// Declare internals

const internals = {};


internals.init = function (port, next) {

    const server = new Hapi.Server();
    server.connection({ port: port });

    server.register(Version, (err) => {

        if (err) {
            return next(err);
        }

        server.start((err) => {

            return next(err, server);
        });
    });

};

module.exports = internals;

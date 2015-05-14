/*global require */
'use strict';

var _ = require('lodash'),
    utils = require('./../../utils'),
    StatementBloq = require('./../statementBloq');

var bloq = _.merge(_.clone(StatementBloq, true), {

    name: 'continue',
    bloqClass: 'bloq-continue',
    content: [
        [{
            alias: 'text',
            value: 'Continuar con la siguiente iteracción del bucle'
        }]
    ],
    code: 'continue;'
});

utils.generateBloqInputConnectors(bloq);

module.exports = bloq;
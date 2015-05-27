/*global require */
'use strict';

var _ = require('lodash'),
    utils = require('./../../utils'),
    OutputBloq = require('./../outputBloq');

var bloq = _.merge(_.clone(OutputBloq, true), {

    name: 'readDropdown',
    bloqClass: 'bloq-read-dropdown',
    content: [
        [{
            alias: 'text',
            value: 'Leer'
        }, {
            id: 'SENSOR',
            alias: 'dynamicDropdown',
            options: 'sensors' //[{label:'ANALOG', value:'A0'}, {label:'DIGIT', value:'1'}]
        }]
    ],
    // code: '\'{SENSOR}\'.indexOf(\'A\') === 0 ? \'analogRead({SENSOR})\' : \'digitalRead({SENSOR})\'',
    code: '{SENSOR.type}',
    returnType: {
        type: 'fromDynamicDropdown',
        idDropdown: 'SENSOR',
        options: 'sensors'
    }
});

utils.generateBloqInputConnectors(bloq);

module.exports = bloq;
//---IN PROGGRESS---//

/*global require */
'use strict';

var _ = require('lodash'),
    utils = require('./../build-utils'),
    OutputBloq = require('./../outputBloq');

/**
 * Bloq name: PTSensor
 *
 * Bloq type: Output
 *
 * Description: It returns a specific measure, selectable
 *              from a first drop-down, of a specific preassure sensor,
 *              selectable from a second drop-down.
 *
 * Return type: float
 */


var PTSensor = _.merge(_.clone(OutputBloq, true), {
    name: 'PTSensor',
    bloqClass: 'bloq-PT-sensor',
    content: [
        [{
            alias: 'text',
            value: 'Obtener la'
        }, {
            id: 'FUNCTION',
            alias: 'staticDropdown',
            options: [{
                label: 'temperatura',
                value: ''
            }, {
                label: 'presión',
                value: ''
            }, {
                label: 'altitud',
                value: ''
            }]
        }, {
            alias: 'text',
            value: 'usando el sensor'
        }, {
            id: 'RTC',
            alias: 'dynamicDropdown',
            options: 'clocks'
        }]
    ],
    code: '',
    returnType: {
        type: 'simple',
        value: 'float'
    }
});

utils.generateBloqInputConnectors(PTSensor);

module.exports = PTSensor;
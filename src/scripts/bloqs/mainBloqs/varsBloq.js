 /*global require */
 'use strict';

 var _ = require('lodash'),
     utils = require('./../../utils'),
     GroupBloq = require('./../groupBloq');

 var bloq = _.merge(_.clone(GroupBloq, true), {

     name: 'varsBloq',
     headerText: 'Variables globales y funciones',
     descriptionText: 'Define los valores que vas a utilizar en Setup y Loop, también puedes hacer funciones para agrupar bloques',
     content: []
 });

 utils.generateBloqInputConnectors(bloq);


 module.exports = bloq;

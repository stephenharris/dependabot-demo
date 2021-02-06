var _ = require('lodash');
var moment = require('moment'); // require

console.log("Starting application 1.0.0")

console.log(_.partition([1, 2, 3, 4], n => n % 2));
console.log(moment().format());
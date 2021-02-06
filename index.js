var _ = require('lodash');

console.log("Starting application 1.0.0")

console.log(_.partition([1, 2, 3, 4], n => n % 2));
const _ = require('lodash');

const number = _.random(1, 10, false);

console.log(number);

const div = document.querySelector('#root');
div.append('Hello, webpack!');
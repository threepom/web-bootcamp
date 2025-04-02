// let generateName = require('sillyname');

import {randomSuperhero} from 'superheroes';
import generateName from "sillyname";


let sillyName = generateName();
console.log(`Name is ${sillyName}`);
console.log(`My name is ${randomSuperhero()}`);
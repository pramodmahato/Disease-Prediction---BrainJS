const brain = require("brain.js");

const network = new brain.NeuralNetwork();

network.train([
  { input: { r: 0.01, g: 0.02, b: 0.03 }, output: { Fever: 1 } },
  { input: { r: 0.07, g: 0.06, b: 0.05 }, output: { Flu: 2 } },
  { input: { r: 0.33, g: 0.24, b: 0.29 }, output: { dark: 1 } }
  //	{ input: { r:0.74, g: 0.78, b: 0.86 }, output: { light: 1} },
  //	{ input: { r:0.31, g: 0.35, b: 0.41 }, output: { dark: 1} },
  //	{ input: { r:0.0, g: 1, b: 0.65 }, output: { light: 1} },
]);

const result = network.run({ r: 0.03, g: 0.24, b: 0.05 });
console.log(result);

//Headache 			: 0.01
//Sweating 			: 0.02
//Dehydration		: 0.03
//General weakness	: 0.04

//sore throat		: 0.05
//cough				: 0.06
//runny nose		: 0.07

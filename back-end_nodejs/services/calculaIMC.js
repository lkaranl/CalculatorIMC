const calculadoraIMC = (peso, altura) => (peso / (altura * altura)).toFixed(2);

const retornaStatusIMC = (imc) => 
  imc < 18.5 ? "Abaixo do peso" :
  imc >= 18.5 && imc <= 24.8 ? "Peso normal" :
  imc >= 24.9 && imc < 30 ? "Acima do peso" :
  "Obeso";

const parameterValidation = (parameter) => isNaN(parameter) ? false : true;

exports.parameterValidation = parameterValidation;
exports.retornaStatusIMC = retornaStatusIMC;
exports.calculadoraIMC = calculadoraIMC;

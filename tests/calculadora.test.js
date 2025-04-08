const calculadora = require("../models/calculadora.js");

test("testando", () => {
  const resultado = calculadora.somar(2, 2);
  expect(resultado).toBe(4);
});

test("Outro teste", () => {
  const resultado = calculadora.somar(2, 2);
  expect(resultado).toBe(4);
});

test("Testando---", () => {
  const resultado = calculadora.somar("banana", 200);
  expect(resultado).toBe("Error");
});

const Calculator = require('../src/test-run');
const calc = new Calculator();

test('suma correcta', () => {
  expect(calc.sum(2, 3)).toBe(5);
});

test('resta correcta', () => {
  expect(calc.sub(10, 4)).toBe(6);
});

test('multiplicación correcta', () => {
  expect(calc.mul(3, 5)).toBe(15);
});

test('división correcta', () => {
  expect(calc.div(10, 2)).toBe(5);
});

test('error al dividir entre 0', () => {
  expect(() => calc.div(10, 0)).toThrow();
});

test('potencia correcta', () => {
  expect(calc.pow(2, 3)).toBe(8);
});

test('raíz cuadrada correcta', () => {
  expect(calc.sqrt(16)).toBe(4);
});

test('error al sacar raíz negativa', () => {
  expect(() => calc.sqrt(-1)).toThrow();
});

test("sum debe sumar números", () => {
    const c = new Calculator();
    expect(c.sum(2, 3)).toBe(5);
  });

  test("div debe lanzar un error cuando se divide entre cero", () => {
    const c = new Calculator();
    expect(() => c.div(10, 0)).toThrow("No se puede dividir entre cero");
  });
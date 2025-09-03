const { calcularMediaAluno } = require('../src/calcularMediaAluno');

test("calcularMediaAluno?", function () {
    expect(calcularMediaAluno()).toBeDefined()
});

test("a1 ou a2 estão indefinidos?", function () {
    expect(() => calcularMediaAluno(a1, 2, 5)).toThrow("Nota A1 ou A2 não estão definidas!");
    expect(() => calcularMediaAluno(10, a2, 3)).toThrow("Nota A1 ou A2 não estão definidas!");
});

test("a1 ou a2 negativos?", function () {
    expect(() => calcularMediaAluno(-1, 2, 5)).toThrow("Notas A1 ou A2 não podem ser negativas!");
    expect(() => calcularMediaAluno(10, -6, 3)).toThrow("Notas A1 ou A2 não podem ser negativas!");
});

test("a3 é informada?", function () {
    expect(() => calcularMediaAluno(10, 5, a3)).toBeCloseTo(7);
});

test("a3 negativo?", function () {
    expect(() => calcularMediaAluno(1, 2, -5)).toThrow("Nota A3 não podem ser negativa!");
});

test("melhor combinacão de a1 com a3", function () {
    expect(() => calcularMediaAluno(1, 0, 10)).toBeCloseTo(10);
    expect(() => calcularMediaAluno(0, 2, 10)).toBeCloseTo(10);
});

test("melhor combinacão de a3 com a2", function () {
    expect(() => calcularMediaAluno(0, 1, 10)).toBeCloseTo(10);
    expect(() => calcularMediaAluno(0, 2, 10)).toBeCloseTo(10);
});

function calcularMediaAluno(a1, a2, a3) {
    if (a1 || a2 === undefined) {
        throw Error("Nota A1 ou A2 não estão definidas!");
    } if (a1 < 0 || a2 < 0) {
        throw Error("Notas A1 ou A2 não podem ser negativas!");
    } if (a3 < 0) {
        throw Error("Nota A3 não podem ser negativa!");
    }
    return Math.max(((a1 * 0.4) + (a2 * 0.6) + (a3)))
}

module.exports = { calcularMediaAluno }
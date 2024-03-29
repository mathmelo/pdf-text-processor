const { evaluateRegex } = require("./util")

class Person {
    constructor([
        nome,
        nacionalidade,
        estadoCivil,
        documento,
        rua,
        numero,
        bairro,
        estado
    ]) {

        // ^ -> comeco da string
        // + -> um ou mais ocorrencias
        // (\w{1}) -> pega so a primeira letra e deixa em um grupo
        // (a-zA-Z) -> encontra letras maiusculas e minusculas
        // g -> para pegar todas os matchs

        const firstLetterExp = evaluateRegex(/^(\w{1})([a-zA-Z]+$)/g)
        const formatFirstLetter = (prop) => {
            return prop.replace(firstLetterExp, (fullMatch, group1, group2, index) => {
                return `${group1.toUpperCase()}${group2.toLowerCase()}`
            })
        }

        this.nome = nome
        this.nacionalidade = formatFirstLetter(nacionalidade)
        this.estadoCivil = formatFirstLetter(estadoCivil)
        this.documento = documento.replace(evaluateRegex(/\D/g), '')
        this.rua = rua.match(evaluateRegex(/(?<=\sa\s).*$/)).join()
        this.numero = numero
        this.bairro = bairro.match(evaluateRegex(/(?<=\s).*$/)).join()
        this.estado = estado.replace(evaluateRegex(/\.$/), "")
    }
}

module.exports = Person;
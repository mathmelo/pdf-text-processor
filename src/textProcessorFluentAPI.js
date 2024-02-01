const { evaluateRegex } = require('./util')

/**
 * O objetivo do Fluent API é executar tarefas
 * como um pipeline, step by step
 * e no fim, chama o build. Muito similar ao padrão Builder.
 * A diferença que aqui é sobre processos, o Builder sobre construção
 * de objetos
 */

class TextProcessorFluentAPI {
    #content

    constructor(content) {
        this.#content = content
    }

    extractPeopleData() {
        // ?<= Fala que vai extrair os dados que virão depois desse grupo
        // [contratante|contratada] ou um ou outro, (e tem a flag no fim da expressão para pegar maiúsculo e minúsculo)
        // :\s{1} vsi procura o caractere literal dos dois pontos seguido de um espaco
        // Tudo acima fica dentro de um parenteses para falar "vamos pegar dai para frente"
        // (?!s) negative look around, vai ignorar os contratantes do fim do documento (que so tem espaco a frente deles)
        //.*\n pega qualquer coisa ate o primeiro \n
        //.*? non greety, esse ? faz com que ele pare na primeira recorrencia, assim ele evita ficar em loop
        // $ Informar que a pesquisa acaba no fim da linha
        // g -> global
        // m -> multiline
        // i -> insensitive


        const matchPerson = evaluateRegex(/(?<=[contratante|contratada]:\s{1})(?!\s)(.*\n.*?)$/gmi)
        const onlyPerson = this.#content.match(matchPerson)

        this.#content = onlyPerson

        return this;
    }

    splitTextIntoColumns() {
        const regexSplit = evaluateRegex(/,/)

        this.#content = this.#content.map(line => line.split(regexSplit))

        return this
    }

    removeEmptyCharacters() {
        const regexTrim = evaluateRegex(/^\s+|\s+$|\n/g)
        this.#content = this.#content.map(line => line.replace(regexTrim, ''))
        return this
    }

    build() {
        return this.#content
    }
}

module.exports = TextProcessorFluentAPI;
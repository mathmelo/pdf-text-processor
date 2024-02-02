const { describe, it } = require('mocha');
const { expect } = require("chai")
const mock = require('./mock/valid')

const TextProcessorFacade = require('./../src/textProcessorFacade')

describe('Text processor Facade', () => {
    it('#getPeopleFromPdf', () => {
        const expected = [
            {
                nome: 'Xuxa da Silva',
                nacionalidade: 'Brasileira',
                estadoCivil: 'Casada',
                documento: '23574342012',
                rua: 'Rua dos bobos',
                numero: 'zero',
                bairro: 'Alphaville',
                estado: 'São Paulo'
            },
            {
                nome: 'Júlia Menezes',
                nacionalidade: 'Brasileira',
                estadoCivil: 'Solteira',
                documento: '29794780081',
                rua: 'Av. dos Estados',
                numero: '99',
                bairro: 'Jardins',
                estado: 'São Paulo'
            }
        ]

        const result = new TextProcessorFacade(mock).getPeopleFromPdf();

        expect(result).to.be.deep.equal(expected)
    })
})
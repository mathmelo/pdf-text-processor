const { describe, it } = require("mocha");
const { expect } = require('chai');
const { evaluateRegex, InvalidRegexError } = require("../src/util");

describe("Util", () => {
    it("#evaluateRegex should throw an error using unsafe regex", () => {
        const unsafeRegex = /^([a-zA-Z0-9]+\s?)+$/

        expect(() => evaluateRegex(unsafeRegex)).to.throw(InvalidRegexError, `This ${unsafeRegex} is unsafe!`)
    })

    it('#evaluateRegex should not throw an error using a safe regex', () => {
        const safeRegex = /^([a-z])$/

        /**
time \
node --eval "/^([a-zA-Z0-9]+\s?)+$/.test('eaaae man como vai voce e como vai voce e como vai voce?') && console.log('legal')"
         */

        expect(() => evaluateRegex(safeRegex)).to.not.throw
        expect(evaluateRegex(safeRegex)).to.be.ok
    })
})
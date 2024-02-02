const safeRegex = require('safe-regex')

class InvalidRegexError extends Error {
    constructor(exp = '') {
        super(`This ${exp} is unsafe!`)
        this.name = 'InvalidRegexError'
    }
}

const evaluateRegex = (exp) => {
    const isValid = safeRegex(exp);

    if(isValid) return exp;
    
    throw new InvalidRegexError(exp);
}

module.exports = { InvalidRegexError, evaluateRegex }
const TextProcessorFluentAPI = require("./textProcessorFluentAPI");

class TextProcessorFacade {
    #textProcessorFluentAPI

    constructor(text) {
        this.#textProcessorFluentAPI = new TextProcessorFluentAPI(text)
    }

    getPeopleFromPdf() {
        return this.#textProcessorFluentAPI
            .extractPeopleData()
            .splitTextIntoColumns()
            .removeEmptyCharacters()
            .matchPerson()
            .build()
    }
}

module.exports = TextProcessorFacade;
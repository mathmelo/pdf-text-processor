'use strict';

const { readFile } = require('node:fs/promises');
const { join } = require('node:path');
const pdfParse = require('pdf-parse');

const TextProcessorFacade = require('./textProcessorFacade');

;(async () => {
    const pdfDataBuffer = await readFile(join(__dirname, './../../docs/contrato.pdf'));

    const content = await pdfParse(pdfDataBuffer);

    const instance = new TextProcessorFacade(content.text);
    const peoples = instance.getPeopleFromPdf();

    console.log(peoples);
})()
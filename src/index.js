'use strict';

const { readFile } = require('node:fs/promises');
const { join } = require('node:path');
const pdfParse = require('pdf-parse');

;(async () => {
    const pdfDataBuffer = await readFile(join(__dirname, './../../docs/contrato.pdf'));

    const content = await pdfParse(pdfDataBuffer);

    console.log(content.text);
})()
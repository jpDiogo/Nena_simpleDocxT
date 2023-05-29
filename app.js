// Dependencies
const fs = require('fs');
const Docxtemplater = require('docxtemplater');
const Pzip = require("pizzip");
// Globas variables
let INPUT_FILE_NAME = 'example.docx';
let OUTPUT_FILE_NAME = 'output.docx';

// Load the template file, zip it and create a Docxtemplater instance
const content = fs.readFileSync(INPUT_FILE_NAME, 'binary');
const zip_content = new Pzip(content);
const doc = new Docxtemplater(zip_content, {
    paragraphLoop: true,
    linebreaks: true,
});

// Set the data to be injected into the template
const data = {
    name: 'John Dough',
    age: 69,
    position: 'Same as my age',
    email: 'imakepizzas@gmail.com',
    phone: '+351 911 222 333',
};
  
// Perform the template substitution
doc.setData(data);
doc.render();

// Save the output
const output = doc.getZip().generate({ type: 'nodebuffer' });
fs.writeFileSync(OUTPUT_FILE_NAME, output);
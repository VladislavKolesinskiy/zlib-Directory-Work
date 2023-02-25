const fs = require('fs');
const readStream = new fs.ReadStream('./txt/text.txt');
const writeStream = fs.createWriteStream('./txt/newText.txt')

readStream.on('data', (chunk) => {
    console.log('**********')
    console.log((chunk).toString())
})
let indexChunk = 1;

readStream.on('data', (chunk) => {
    writeStream.write('\nчасть №' + indexChunk++ + '\n')
    writeStream.write(chunk)
})




const fs = require('fs')
const zlib = require('zlib')

const compress = () => {
    const gzipFile = zlib.createGzip()
    const inputFile = fs.createReadStream('./index.html')
    const outputFile = fs.createWriteStream('./index.html.gz')
    inputFile.pipe(gzipFile).pipe(outputFile)
}
compress()
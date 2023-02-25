const fs = require('fs')
const zlib = require('zlib')

const decompress = () => {
    const unzipFile = zlib.createUnzip()
    const inputFile = fs.createReadStream('./index.html.gz')
    const outputFile = fs.createWriteStream('./indexDecompressed.html')
    inputFile.pipe(unzipFile).pipe(outputFile)
}

decompress()
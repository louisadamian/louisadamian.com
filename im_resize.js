const sharp = require('sharp');
const fs = require('fs');
var files = process.argv.slice(2);

for (file in files){
    fileName = file.split(".")[0];
    sharp(file)
        .resize(1920)
        .jpeg({ quality: 100 })
        .toFile(fileName + ".jpg")
}
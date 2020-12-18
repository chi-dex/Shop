const path = require("path");
const fs = require("fs");

module.exports = (filePath) => {
    const pathFile = path.join(__dirname, "../") + filePath;
    fs.unlink(pathFile, err => {
        if (err) {
            throw new Error("Image not found");
        }
    })
}
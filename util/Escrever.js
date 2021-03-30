const fs = require("fs");
const util = require("util");

class Escrever {
    constructor() {
        this.escrever = util.promisify(fs.writeFile)
    }
    async Escrever(filePath, obj) {
        try {
            return await this.escrever(filePath, JSON.stringify(obj), 'utf8')
        } catch (err) {
            return console.log(err);
        }

    };
};
/*function Esver(obj) {
    const content = JSON.stringify(obj);
    fs.writeFile('./teste.json', content, 'utf8', function (err) {
        if (err) {
            return console.log(err);
        }

        console.log("The file was saved!");
    });
}*/
module.exports = Escrever;
const fs = require("fs");
const util = require("util");

class Reader {
    constructor() {
        this.read = util.promisify(fs.readFile)
    }
    async  Read(filePath) {
        try {
            return await this.read(filePath, { encoding: "utf-8" })
        } catch (error) {
            return undefined
        }

    };
};

module.exports = Reader;
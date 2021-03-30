class Arithmetic {
    getRandomIntInclusive(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };

    chance(chance, penality = 0) {

        let randomNumber = this.getRandomIntInclusive(0, 100);

        if (randomNumber <= chance - penality) return true;

        return false;


    };
}



module.exports = Arithmetic
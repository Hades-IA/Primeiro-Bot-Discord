const { Reckless } = require('../ability/index');

class Magmon {
    constructor() {
        this.scanAbility = { reckless: 5, fire: 5 };
        this.scaneadEnergy = 50;
        this.scaneadPower = 70;
        this.updateenergy = this.scaneadEnergy;
        this.updatePower = this.scaneadPower;
        this.updateAbility = this.scanAbility;
        this.atkList = {
            firearm: {
                damage: 20,
                statcheck: (stat, sucess) => {
                    return stat >= sucess;
                }
            }
        }
    }
    Atk() {
        const recklessDamage = new Reckless().RecklessDamage(this.scanAbility);
        this.updateenergy = this.updateenergy + recklessDamage;

        return this.updateenergy;

    }
}


module.exports = Magmon
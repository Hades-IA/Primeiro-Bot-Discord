
const Knex = require('../index');

class ScansDB {


    List() {
        return Knex('scans').then(Scans => {

            return Scans;
        }).catch(erro => erro);

    };

    Create(userId, cardId, atklist = { list: [] }, others = { hasContent: false }) {
        atklist = JSON.stringify(atklist);
        others = JSON.stringify(others);

        return Knex('scans').insert(
            { user_id: userId, cardId: cardId, atklist: atklist, others: others }).catch((erro) => {
                console.log(erro)
                return;
            });
    };


    Delet(userId, cardId) {
        Knex('scans').where({ cardId: cardId, user_id: userId }).del();
        return;
    };

    async GetCard(cardId, userId) {
        const card = await Knex('scans').where({ cardId: cardId, user_id: userId }).select('*');
        return JSON.parse(card);
    }
    schema() {
        return Knex.schema.table('scans')
    }

}



module.exports = ScansDB;

/* */
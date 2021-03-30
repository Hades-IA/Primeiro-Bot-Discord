const Knex = require('../index');

class Matchs {
    List() {
        return Knex('usersMatchs').then(matchs => {

            return matchs;
        }).catch(erro => erro);

    };

    Del(userId) {
        return Knex('usersMatchs').where({ user_id: userId }).del().catch(erro => erro);
    };

    async History(userId) {
        return await Knex('usersMatchs').where({ user_id: userId })
            .join('users', 'users.id', '=', 'usersMatchs.user_id')
            .select('usersMatchs.result', 'users.name').limit(10)
        // .limit(limite).offSet(pagina - 1 *limite) para paginação
    }

}


module.exports = Matchs;

const Knex = require('../index');

class UsersDb {


    List() {
        return Knex('users').then(users => {

            return users;
        }).catch(erro => erro);

    };

    Create(userId, username) {

        return Knex('users').insert(
            { id: userId, name: username, points: 10 }).catch(() => {
                return `${username} ja usado, escolha um novo apelido ou vc ja tem um personagem.`
            });
    };

    async Edit(userId, username) {
        const checkNick = await Knex('users').where({ name: username }).select('name');

        if (checkNick.length >= 1) return 'apelido ja em uso, escolha um novo'
        const upName = await Knex('users').update({ name: username }).where({ id: userId });
        return `apelido alterado com sucesso para ${username},`;
    }
    async Delet(userId, username) {
        const dele = await Knex('users').where({ id: userId }).del();
        return dele;
    }

    SaveMacth(userId, result) {
        return Knex('usersMatchs').insert(
            { result: result, user_id: userId }).catch((erro) => {
                return erro
            });
    }
}



module.exports = UsersDb;

/* */
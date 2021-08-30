require('dotenv/config');

const Discord = require('discord.js');
const prefix = process.env.PREFIX;
const client = new Discord.Client();

const cardsData = require("./database/json/cardsdata.json");
const T20MagiasData = require("./database/json/T20Magia.json");
const T20PoderesData = require("./database/json/t20poderes.json");
const T20condicaoData = require("./database/json/t20condicao.json");
console.log('oi');


// td n numerico replace(/[^0-9]/gi, '')
function EmojiGet(id) {
    return client.emojis.cache.get(id);
}

client.on('message', async message => {

    if (!message.guild) return;

    const msgContent = message.content.toLocaleLowerCase();


    if (msgContent.split(" ")[0] === prefix + "t20") {


        if (msgContent.split(" ")[1] === "-m") {
            const magias = T20MagiasData.magialist;
            var word = msgContent.split("-m")[1].replace(/[^a-zA-Z ]| /g, "").toLowerCase();
            //let regExp = new RegExp(word, "gi");
            let result = magias.filter(magia => {
                let magiaNome = magia.meta.nome.replace(/[^a-zA-Z ]| /g, "").toLowerCase();
                let res = magiaNome.indexOf(word);
                return res === 0;
            });
            if (result.length === 0) {
                message.channel.send("nenhuma magia encontrada");
                return;
            }
            let meta = `\r\nEscola: ${result[0].meta.escola}\r\nCíclo: ${result[0].meta.ciclo}\r\nExecução: ${result[0].meta.execucao}\r\nAlcance: ${result[0].meta.alcance}\r\nAlvo: ${result[0].meta.alvo}\r\nDuração: ${result[0].meta.duracao}\r\nResitência: ${result[0].meta.resitencia}\r\n`;


            const msg = new Discord.MessageEmbed()
                .setColor('#RANDOM')
                .setTitle(result[0].meta.nome)
                .addFields(
                    { name: 'Meta', value: meta },
                    { name: '\r\nDescrição', value: result[0].desc },
                    
                );
            message.channel.send(msg);
            if(result[0].continue.length > 0){
                result[0].continue.forEach(data =>{
                    const msg = new Discord.MessageEmbed()
                    .setColor('#RANDOM')
                    .setTitle('Continuação de '+result[0].meta.nome)
                    .addFields(
                        
                        { name: data.nome, value: data.content },
                        
                    );
                    message.channel.send(msg);
                })
                

            }
            return;

        }

        if (msgContent.split(" ")[1] === "-p") {
            const poderes = T20PoderesData.podereslist;
            let word = msgContent.split("-p")[1].replace(/[^a-zA-Z ]| /g, "").toLowerCase();
            let result = poderes.filter(poderes => {
                let poderesNome = poderes.nome.replace(/[^a-zA-Z ]| /g, "").toLowerCase();
                let res = poderesNome.indexOf(word);
                return res === 0;
            });
            if (result.length === 0) {
                message.channel.send("nenhum poder encontrado");
                return;
            }
            const msg = new Discord.MessageEmbed()
                .setColor('#RANDOM')
                .setTitle(result[0].nome)
                .addFields(
                    { name: 'Poder', value: result[0].classe },
                    { name: '\r\nDescrição', value: result[0].descrição },

                );
            message.channel.send(msg);
            return;
        }
        if (msgContent.split(" ")[1] === "-lp") {
            const poderes = T20PoderesData.podereslist;
            let word = msgContent.split("-lp")[1].replace(/[^a-zA-Z ]| /g, "").toLowerCase();
            let result = poderes.filter(poderes => {
                let poderesNome = poderes.classe.replace(/[^a-zA-Z ]| /g, "").toLowerCase();
                let res = poderesNome.indexOf(word);
                return res === 0;
            });
            if (result.length === 0) {
                message.channel.send("nenhum poder encontrado");
                return;
            };
            let list = "";
            result.forEach(poder => list += '\r\n'+ poder.nome);
            message.channel.send(`lista de poderes:${list}`);
            return;
        };

        if (msgContent.split(" ")[1] === "-c") {
            const condicao = T20condicaoData.listcond;
            let word = msgContent.split("-c")[1].replace(/[^a-zA-Z ]| /g, "").toLowerCase();
            let result = condicao.filter(condicao => {
                let condicaoNome = condicao.nome.replace(/[^a-zA-Z ]| /g, "").toLowerCase();
                let res = condicaoNome.indexOf(word);
                return res === 0;
            });
            if (result.length === 0) {
                message.channel.send("nenhum condição encontrada");
                return;
            }
            const msg = new Discord.MessageEmbed()
                .setColor('#RANDOM')
                .setTitle(result[0].nome)
                .addFields(
                    { name: 'Tipo', value: result[0].tipo },
                    { name: '\r\nDescrição', value: result[0].desc },

                );
            message.channel.send(msg);
            return;
        };
        if (msgContent.split(" ")[1] === "-lc") {
            const condicao = T20condicaoData.listcond;
            let word = msgContent.split("-lc")[1].replace(/[^a-zA-Z ]| /g, "").toLowerCase();
            let result = condicao.filter(condicao => {
                let condicaotipo = condicao.tipo.replace(/[^a-zA-Z ]| /g, "").toLowerCase();
                let res = condicaotipo.indexOf(word);
                return res === 0;
            });
            if (result.length === 0) {
                message.channel.send("nenhuma condição encontrada");
                return;
            };
            let list = "";
            result.forEach(condicao => list += '\r\n'+ condicao.nome);
            message.channel.send(`lista de condição:${list}`);
            return;
        };
    }

    if (msgContent.split(" ")[0] === prefix + "carta") {
        const cards = cardsData;
        var word = msgContent.split(prefix + "carta")[1].replace(/[^a-zA-Z ]| /g, "").toLowerCase();
        //   let regExp = new RegExp(word, "gi");

        let cardFilter = cards.filter(card => {
            let cardName = card.name.replace(/[^a-zA-Z ]| /g, "").toLowerCase();
            let res = cardName.indexOf(word);
            return res === 0;
        });
        if (cardFilter.length === 0) {
            message.channel.send("nenhuma carta encontrada");
            return;
        }
        let cardMap = cardFilter.map(data => {
            return {
                name: `\r\n${data.name}`,
                url: data.url,
                bodybr: data.bodybr
            };
        });

        const embed = new Discord.MessageEmbed()
            .setColor('RANDOM')
            .setTitle(cardMap[0].name)
            .setDescription(`\r\n${cardMap[0].bodybr}\r\n`)
            .setImage(cardMap[0].url);
        message.channel.send(embed);
        return;

    };

    if (msgContent.split(" ")[0] === prefix + "procura") {
        const cards = cardsData;
        var word = msgContent.split(" ")[1];
        let regExp = new RegExp(word, "gi");

        let cardFilter = cards.filter(card => {
            let cardName = card.name.replace(/[^a-zA-Z ]| /g, "").toLowerCase();
            let res = cardName.match(regExp) || [];
            return res.length > 0;
        });
        if (cardFilter.length < 1) return;
        let cardMap = cardFilter.map(data => {
            return {
                name: `\r\n${data.name}`,
                url: data.url,
                bodybr: data.bodybr
            };
        });
        let list = ""
        cardMap.forEach(card => list += card.name)

        message.channel.send(`total de ${cardMap.length} resultados encontrados para ${word}.\r\n${list}`);
        return;
    };

    //gacha
    if (msgContent === prefix + 'gacha') {
        const Emoji = EmojiGet('783782447832891473').toString();
        const Emojis = ["array com tds os emojis de criaturas para sortear abaixo"]
        message.channel.send(`
${Emoji}${Emoji}${Emoji}
${Emoji}${Emoji}${Emoji}
${Emoji}${Emoji}${Emoji}
`).then(message => {
            setTimeout(async () => {
                await message.channel.send(`ganhou um icrivel pau no teu cu`)
                message.channel.send(Emoji)
            },
                1.2 * 1000)

        });
        return;
    };
    // experimentos
    if (msgContent === prefix + 'ola') {
        const reactionEmoji = EmojiGet('783782447832891473');

        message.react(reactionEmoji);
        message.channel.send(reactionEmoji.toString());
        return;
    };

    if (msgContent === prefix + 'olaaa') {
        const Emoji = EmojiGet('783782447832891473').toString();

        message.channel.send(Emoji).then(message => {
            setTimeout(() => {
                message.edit(`pau no teu cu\r\n${Emoji}`)
            },
                1.2 * 1000)
        });
        return;
    };

    if (msgContent.split(" ")[0] === prefix + 'eu45') {
        const target = message.mentions.users.first();
        const member = message.guild.member(target);

        console.log(member);

        return;
    };

    if (msgContent === prefix + "rip") {
        let attachment = new Discord.MessageAttachment('https://i.imgur.com/w3duR07.png');
        message.channel.send(attachment);

        return;
    };

    if (msgContent === prefix + 'rip_autor') {
        let attachment = new Discord.MessageAttachment('https://i.imgur.com/w3duR07.png');
        message.channel.send(`${message.author},`, attachment);
        return;
    };


    if (msgContent === prefix + 'avatar') {
        // Send the user's avatar URL
        const avatar = message.author.displayAvatarURL();
        let attachment = new Discord.MessageAttachment(`${avatar}`);
        message.reply('aqui seu avatar: \r\n', attachment);
        return;
    };

    if (msgContent === prefix + 'embed') {
        const embed = new Discord.MessageEmbed()
            .setColor('#0999ff')
            .setTitle('nome da carta')
            .setDescription('body da carta')
            .setImage('https://i.imgur.com/wSTFkRM.png');
        message.channel.send(embed);
        return;
    };
    if (msgContent[0] === prefix) {

        return;
    }
});




client.login(process.env.BOT_TOKEN);

if (message.channel.id !== '754752292443652106') return;

const inGame = inPlaying.find(data => {

    return data.challenger === player.id || data.challenged === player.id;
});
//x1 start
//game
console.log('ingame é true:' + !!inGame, 'ingame é false' + !inGame)
if (inGame && msgX1[0] === prefix + "deck" && msgX1.length === 4) {
    let cards = [msgX1[1], msgX1[2], msgX1[3]]
    deck(cards, message)
};

if (inGame && msgX1[0] === prefix + "ataque") {
    let playerWho = userWho(message.author.id);
    console.log('playerwho é', playerWho)
    if (playerWho === 'challenger') {
        let allyCreature = inGame.challengerDeck.creature;
        let oponentCrature = inGame.challengedDeck.creature;
        console.log(inGame)
        console.log('atacou')
        console.log(`${allyCreature} atacou ${oponentCrature} com water pulse`)
    }
    if (playerWho === 'challenged') {
        let allyCreature = inGame.challengedDeck.creature;
        let oponentCrature = inGame.challengerDeck.creature;
        console.log(inGame)
        console.log(`${allyCreature} atacou ${oponentCrature} com water pulse`)
    }
    return;

};

if (inGame && msgX1[0] === prefix + "mugic") {
    let playerWho = userWho(message.author.id);
    if (playerWho === 'challenger') {
        let allyCreature = inGame.challengerDeck;
        let oponentCrature = inGame.challengedDeck;

    }
    if (playerWho === 'challenged') {
        let allyCreature = inGame.challengedDeck;
        let oponentCrature = inGame.challengerDeck;
    }
    return;
};

if (inGame && msgX1[0] === prefix + "battlegear") {
    let playerWho = userWho(message.author.id);
    if (playerWho === 'challenger') {
        let allyCreature = inGame.challengerDeck;
        let oponentCrature = inGame.challengedDeck;

    }
    if (playerWho === 'challenged') {
        let allyCreature = inGame.challengedDeck;
        let oponentCrature = inGame.challengerDeck;
    }
    return;
};
if (inGame && msgX1[0] === prefix + "habilidade") {
    let playerWho = userWho(message.author.id);
    if (playerWho === 'challenger') {
        let allyCreature = inGame.challengerDeck;
        let oponentCrature = inGame.challengedDeck;

    }
    if (playerWho === 'challenged') {
        let allyCreature = inGame.challengedDeck;
        let oponentCrature = inGame.challengerDeck;
    }
    return;
};

//challenge
if (msgX1[0] === prefix + "x1" && msgX1.length === 2) {

    const channel = message.guild.channels.cache.find(ch => ch.name === 'x1');


    if (!channel) return;
    const challenge = {
        challenger: player.id,
        challenged: msgX1[1].replace(/[^0-9]/gi, '')
    };

    const inQueue = matchingMaking.find(data => {

        return data.challenger === player.id || data.challenged === challenge.challenged;
    });



    if (inQueue) return;
    if (inGame) return;
    matchingMaking.push(challenge)

    channel.send(`<@!${challenge.challenged}>!  <@!${player.id}> te chamou pro x1 vai correr ou encarar?`);

    return;
}


//chalenge aceito
if (msgX1[0] === prefix + "aceito" && msgX1.length === 1) {
    const channel = message.guild.channels.cache.find(ch => ch.name === 'x1');

    if (!channel) return;
    const findChallegen = matchingMaking.filter(data => {

        return data.challenged === player.id;
    })

    if (findChallegen[0]) {

        channel.send(`${player} aceitou o x1, vem pro pau! <@!${findChallegen[0].challenger}>`);
        const playing = {
            challenger: findChallegen[0].challenger,
            challenged: player.id,
            challengerDeck: false,
            challengedDeck: false
        };
        inPlaying.push(playing);

    }



    return;
}


// fora da funsão de mensagem

function deck(cards, message) {
    const channel = message.guild.channels.cache.find(ch => ch.name === 'x1');
    //blaz,tang classico, magmon,danian n sei, e algum chieftain
    let deck = {

    };
    let index;
    let valido;
    switch (creature = cards[0]) {
        case '1' || 'blazvatan':
            deck.creature = 'blazvatan';
            break;
        case '2' || 'magmon':
            deck.creature = 'magmon';
            break;
        default:
            valido = true;
            channel.send(`${creature} não encontrado.`)
    };

    switch (battlegear = cards[1]) {
        case '6':
            deck.battlegear = '';
            break;
        case '0':
            deck.battlegear = '';
            break;
        default:
            valido = true;
            channel.send(`${battlegear} não encontrado.`)
    };

    switch (mugic = cards[2]) {
        case '6':
            deck.mugic = '';
            break;
        case '0':
            deck.mugic = '';
            break;
        default:
            valido = true;
            channel.send(`${mugic} não encontrado.`);
    };

    if (!valido) {
        inPlaying.find(data => {

            if (data.challenger === message.author.id) {

                index = inPlaying.indexOf(data);
                if (inPlaying[index].challengerDeck === false) {
                    inPlaying[index].challengerDeck = deck;
                    channel.send(`${message.author} deck concluido.`);
                }

                return;
            };

            if (data.challenged === message.author.id) {
                index = inPlaying.indexOf(data);
                if (inPlaying[index].challengedDeck === false) {
                    inPlaying[index].challengedDeck = deck;
                    channel.send(`${message.author} deck concluido.`);
                }


                return;
            };

        });

    }

}


function userWho(id) {
    let useris = ''
    let player = inPlaying.find(data => {
        if (data.challenger === id) {
            useris = 'challenger';
            return;
        }
        if (data.challenged === id) {
            useris = 'challenged';
            return;
        }

    });
    return useris;
}

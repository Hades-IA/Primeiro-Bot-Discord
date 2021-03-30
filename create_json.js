
async function CriarJSON() {
    const Escrever = require("./util/Escrever");
    const CriarJSON = new Escrever();


    const Magiadata = {
        magialist: [
            {
                meta: {
                    nome: "Abençoar Alimentos",
                    escola: "Transmutação",
                    ciclo: 1,
                    execucao: "padrão",
                    alcance: "curto",
                    alvo: "alimento para 1 criatura",
                    duracao: "cena",
                    resitencia: ""
                },
                desc: `Você purifica e abençoa uma porção de comida ou dose de bebida. Isso torna um alimento sujo, estragado ou envenenado próprio para consumo. Além disso, se for consumido até o final da duração, o alimento oferece 5 PV temporários ou 1 PM temporário (além de quaisquer bônus que já oferecesse). Bônus de alimentação duram um dia e cada personagem só pode receber um bônus de alimentação por dia.`,
                custo: `Truque: o alimento é purificado (não causa nenhum efeito nocivo se estava estragado ou envenenado), mas não oferece bônus ao ser consumido.\r\n+1 PM: aumenta o número de alvos em +1.\r\n+1 PM: muda a duração para permanente, o alvo para 1 frasco com água e adiciona componente material (pó de prata no valor de T$ 5). Em vez do normal, cria um frasco de água benta.\r\n`
            },
            {
                meta: {
                    nome: "Acalmar Animal",
                    escola: "Encantamento",
                    ciclo: 1,
                    execucao: "padrão",
                    alcance: "curto",
                    alvo: "1 animal",
                    duracao: "cena",
                    resitencia: "Vontade anula"
                },
                desc: `O animal fica prestativo em relação a você. Ele não fica sob seu controle, mas percebe suas palavras e ações da maneira mais favorável possível. Você recebe +10 nos testes de Adestramento e Diplomacia que fizer contra o animal.\r\nUm alvo hostil ou que esteja envolvido em um combate recebe +5 em seu teste de resistência. Se você ou seus aliados tomarem qualquer ação hostil contra o alvo, a magia é anulada e ele retorna à atitude que tinha antes (ou piorada, de acordo com o mestre). Se tratar bem o alvo, a atitude pode permanecer mesmo após o término da magia.`,
                custo: `+1 PM: muda o alcance para médio.\r\n+1 PM: muda o alvo para 1 monstro ou espírito com Inteligência 1, 2 ou nula.\r\n+2 PM: aumenta o número de alvos em +1.\r\n+5 PM: muda o alvo para 1 monstro ou espírito. Requer 3º círculo.`
            },
            {
                meta: {
                    nome: "Adaga Mental",
                    escola: "Encantamento",
                    ciclo: 1,
                    execucao: "padrão",
                    alcance: "curto",
                    alvo: "1 criatura",
                    duracao: "instantânea",
                    resitencia: "Vontade parcial"
                },
                desc: `Você manifesta e dispara uma adaga imaterial contra a mente do alvo, que sofre 2d6 pontos de dano mental e fica pasmo por uma rodada. Se passar no teste de resistência, sofre apenas metade do dano e não fica pasmo.`,
                custo: `\r\n +1 PM: você lança a magia sem gesticular ou pronunciar palavras e a adaga se torna invisível. Se o alvo falhar no teste de resistência, não percebe que você lançou uma magia contra ele. \r\n +2 PM: muda a duração para 1 dia. Além do normal, você “finca” a adaga na mente do alvo. Enquanto a magia durar, você sabe a direção e localização do alvo, desde que ele esteja no mesmo mundo. \r\n +2 PM: aumenta o dano em +1d6.`
            },
            {
                meta: {
                    nome: "Alarme",
                    escola: "Abjuração",
                    ciclo: 1,
                    execucao: "padrão",
                    alcance: "curto",
                    alvo: "Área, esfera de 9m de raio",
                    duracao: "1 dia",
                    resitencia: ""
                },
                desc: `Você cria uma barreira protetora invisível que detecta qualquer criatura que tocar ou entrar na área protegida. Ao lançar a magia, você pode escolher quais criaturas podem entrar na área sem ativar seus efeitos. Alarme pode emitir um aviso telepático ou sonoro, decidido quando a magia é lançada. Um aviso telepático alerta apenas você, inclusive acordando-o se estiver dormindo, mas apenas se estiver a até 1km da área protegida. Um aviso sonoro alerta todas as criaturas em alcance longo.`,
                custo: `\r\n +2 PM: muda o alcance para pessoal. A área é emanada a partir de você. \r\n +5 PM: além do normal, você também percebe qualquer efeito de adivinhação que seja usado dentro da área ou atravesse a área. Você pode fazer um teste oposto de Misticismo contra quem usou o efeito; se passar, tem um vislumbre de seu rosto e uma ideia aproximada de sua localização (“três dias de viagem ao norte”, por exemplo). \r\n +5 PM: muda a duração para 1 dia ou até ser descarregada e a resistência para Vontade anula. Quando um intruso entra na área, você pode descarregar a magia como uma reação. Se o intruso falhar na resistência, ficará paralisado por 1d4 rodadas. Além disso, pelas próximas 24 horas você e as criaturas escolhidas ganham +10 em testes de Sobrevivência para rastrear o intruso.`
            },
            {
                meta: {
                    nome: "Aliado Animal",
                    escola: "Encantamento",
                    ciclo: 2,
                    execucao: "padrão",
                    alcance: "curto",
                    alvo: "1 animal prestativo",
                    duracao: "1 dia",
                    resitencia: ""
                },
                desc: `Você cria um vínculo mental com um animal prestativo em relação a você. O Aliado Animal obedece a você ao melhor de suas capacidades, mesmo que isso arrisque a vida dele. Ele funciona como um aliado veterano, de um tipo a sua escolha entre ajudante, combatente, fortão, guardião, montaria ou perseguidor.`,
                custo: `\r\n +1 PM: muda o alvo para 1 animal Minúsculo e a duração para 1 semana. Em vez do normal, o animal se desloca ao melhor de suas capacidades até um local designado por você — em geral, para levar um item, carta ou similar. Quando o animal chega ao destino, fica esperando até o fim da magia, permitindo apenas que uma ou mais criaturas escolhidas por você se aproximem e peguem o que ele estiver carregando. \r\n +7 PM: muda o aliado para mestre. Requer 3º círculo. \r\n +12 PM: muda o alvo para 2 animais prestativos. Cada animal funciona como um aliado de um tipo diferente, e você pode receber a ajuda de ambos (mas ainda precisa seguir o limite de aliados de acordo com o seu nível de personagem). Requer 4º círculo.`
            },
            {
                meta: {
                    nome: "Alterar Destino",
                    escola: "Adivinhação",
                    ciclo: 5,
                    execucao: "reação",
                    alcance: "pessoal",
                    alvo: "você",
                    duracao: "instantânea",
                    resitencia: ""
                },
                desc: `Sua mente visualiza todas as possibilidades de um evento, permitindo a você escolher o melhor curso de ação. Você automaticamente passa em um teste de resistência ou evita um ataque nesta rodada.`,
                custo: ``
            },
            {
                meta: {
                    nome: "Alterar Memória",
                    escola: "Encantamento",
                    ciclo: 4,
                    execucao: "padrão",
                    alcance: "toque",
                    alvo: "1 criatura",
                    duracao: "instantânea",
                    resitencia: "Vontade anula"
                },
                desc: `Você invade a mente do alvo e altera ou apaga suas memórias da última hora.`,
                custo: `\r\n +2 PM: muda o alcance para cone de 4,5m e o alvo para criaturas na área. \r\n +5 PM: você pode alterar ou apagar as memórias das últimas 24 horas.`
            },
            {
                meta: {
                    nome: "Alterar Tamanho",
                    escola: "Transmutação",
                    ciclo: 2,
                    execucao: "padrão",
                    alcance: "curto",
                    alvo: "1 objeto",
                    duracao: "1 dia",
                    resitencia: ""
                },
                desc: `Esta magia aumenta ou diminui o tamanho de um item mundano em até três categorias (um objeto Enorme vira Pequeno, por exemplo). Você também pode mudar a consistência do item, deixando-o rígido como pedra ou flexível como seda (isso não altera sua RD ou PV, apenas suas propriedades físicas).`,
                custo: `\r\n +1 PM: aumenta o número de alvos em +1. \r\n +2 PM: muda o alcance para toque e o alvo para 1 criatura. Em vez do normal, o alvo e seu equipamento aumentam de tamanho em uma categoria. O alvo também recebe Força +4. Um alvo involuntário pode fazer um teste de Fortitude para negar o efeito. \r\n +3 PM: muda o alcance para toque e o alvo para 1 criatura. Em vez do normal, o alvo e seu equipamento diminuem de tamanho em uma categoria. O alvo também recebe Destreza +4. Um alvo involuntário pode fazer um teste de Fortitude para negar o efeito. Requer 3º círculo. \r\n +7 PM: muda o alcance para toque, o alvo para 1 criatura, a duração para permanente e a resistência para Fortitude anula. Em vez do normal, se falhar na resistência o alvo e seu equipamento têm seu tamanho mudado para Minúsculo. O alvo também tem seu valor de Força reduzido a 1 e suas formas de deslocamento reduzidas a 3m. Requer 4º círculo.`
            },
            {
                meta: {
                    nome: "Amarras Etéreas",
                    escola: "Convocação",
                    ciclo: 2,
                    execucao: "padrão",
                    alcance: "médio",
                    alvo: "1 criatura",
                    duracao: "cena",
                    resitencia: ""
                },
                desc: `Três cordas de energia surgem do chão e se enroscam no alvo, deixando-o agarrado. A vítima pode tentar se livrar, gastando uma ação padrão para fazer um teste de Atletismo (CD igual à da magia). Se passar, destrói uma corda, mais uma corda adicional para cada 2 pontos pelos quais superou a CD. \r\n As cordas também podem ser atacadas e destruídas: cada uma tem Defesa 10, 10 PV, RD 5 e imunidade a dano mágico. Se todas as cordas forem destruídas, a magia é dissipada. Por serem feitas de energia, as cordas afetam criaturas incorpóreas.`,
                custo: `\r\n +2 PM: aumenta o número de alvos em +1. \r\n +2 PM: aumenta o número de cordas em um alvo a sua escolha em +1. \r\n +3 PM: em vez do normal, cada corda pode ser destruída automaticamente com um único ataque bem-sucedido; porém, cada corda destruída libera um choque de energia que causa 1d6+1 pontos de dano de essência na criatura amarrada. Requer 3º círculo.`
            },
            {
                meta: {
                    nome: "Amedrontar",
                    escola: "Necromancia",
                    ciclo: 1,
                    execucao: "padrão",
                    alcance: "curto",
                    alvo: "1 animal ou humanoide de até 4º nível",
                    duracao: "cena",
                    resitencia: "Vontade parcial."
                },
                desc: `Envolvido por energias sombrias, o alvo fica abalado. Se falhar na resistência, fica apavorado por 1d4 rodadas, depois abalado. Se passar, fica abalado por 1d4 rodadas.`,
                custo: `\r\n +2 PM: muda o alvo para criatura de até 4º nível. \r\n +2 PM: muda o nível do alvo para até 8º. \r\n +5 PM: afeta todos os alvos válidos a sua escolha dentro do alcance. \r\n +5 PM: muda o nível do alvo para até 12º. \r\n +9 PM: muda o nível do alvo para até 16º. \r\n +14 PM: muda o nível do alvo para qualquer.`
            },
            {
                meta: {
                    nome: "Âncora Dimensional",
                    escola: "Abjuração",
                    ciclo: 3,
                    execucao: "padrão",
                    alcance: "curto",
                    alvo: "1 criatura ou objeto",
                    duracao: "cena",
                    resitencia: ""
                },
                desc: `O alvo é envolvido por um campo de força cor de esmeralda que impede qualquer movimento planar. Isso inclui todas as magias de convocação (como Salto Dimensional e Teletransporte), viagens astrais e anula a habilidade incorpóreo.`,
                custo: `\r\n +2 PM: muda o alcance para médio, a área para círculo de 3m de raio e o alvo para criaturas escolhidas. \r\n +2 PM: muda o efeito para criar um fio de energia cor de esmeralda que prende o alvo a um ponto no espaço dentro do alcance. O ponto precisa ser fixo, mas não precisa de nenhum apoio ou superfície (pode simplesmente flutuar no ar). O alvo não pode se afastar mais de 3m do ponto, nem fisicamente, nem com movimento planar. O fio possui 20 PV e resistência a dano 30 (mas pode ser dissipado por efeitos que libertam criaturas, como o Julgamento da Liberdade do paladino). \r\n +4 PM: como acima, mas em vez de um fio, cria uma corrente de energia, com 20 PV e resistência a dano 50. \r\n +4 PM: muda o alvo para área de cubo de 9m, a duração para permanente e adiciona componente material (chave de esmeralda no valor de T$ 2.000). Em vez do normal, nenhum tipo de movimento planar pode entrar ou sair da área. \r\n +9 PM: muda o alcance para médio, a área para círculo de 3m de raio e o alvo para criaturas escolhidas. Cria um fio de energia (veja acima) que prende todos os alvos ao centro da área.`
            },
            {
                meta: {
                    nome: "Animar Objetos",
                    escola: "Transmutação",
                    ciclo: 4,
                    execucao: "padrão",
                    alcance: "médio",
                    alvo: "até 8 objetos Minúsculos ou Pequenos, 4 objetos Médios, 2 objetos Grandes ou 1 objeto Enorme",
                    duracao: "cena",
                    resitencia: ""
                },
                desc: `Você concede vida a objetos inanimados. Cada objeto se torna um tipo de aliado sob seu controle, escolhido da lista de tamanho. Com uma ação de movimento, você pode comandar mentalmente qualquer objeto animado dentro do alcance para que auxilie você ou outra criatura neste turno. Outros usos criativos para os objetos ficam a cargo do mestre. Objetos ani171 Capítulo Quatro mados têm valores de Força e Destreza de acordo com seu tamanho. Diferente dos aliados comuns, um objeto pode ser alvo de um ataque direto, que acerta automaticamente — os PV de cada objeto dependem de seu tamanho. Esta magia não afeta itens mágicos, nem objetos que estejam sendo carregados por outra criatura.`,
                custo: `\r\n +5 PM: muda a duração para permanente e adiciona componente material (prataria no valor de T$ 1.000). Você pode ter um máximo de objetos animados igual à metade do seu nível. Estatísticas de objetos animados \r\n Minúsculo: For 4, Des 18, 5 PV; Assassino ou Combatente Iniciante. \r\n Pequeno: For 6, Des 14, 10 PV; Combatente ou Guardião Iniciante. \r\n Médio: For 10, Des 12, 20 PV; Combatente ou Guardião Veterano. \r\n Grande: For 14, Des 10, 40 PV; Fortão, Guardião ou Montaria Veterano. \r\n Enorme: For 18, Des 6, 60 PV; Fortão, Guardião ou Montaria Mestre.`
            },
            {
                meta: {
                    nome: "Anular a Luz ",
                    escola: "Necromancia",
                    ciclo: 3,
                    execucao: "padrão",
                    alcance: "pessoal",
                    alvo: "Área, esfera de 6m de raio",
                    duracao: "instantânea",
                    resitencia: ""
                },
                desc: `Esta magia cria uma onda de escuridão que causa diversos efeitos. Todas as magias de 3º círculo ou menor ativas na área são anuladas se você passar num teste de Religião contra a CD de cada magia. Seus aliados na área são protegidos por uma aura sombria e recebem +4 na Defesa até o fim da cena. Inimigos na área ficam enjoados por 1d4 rodadas. Anular a Luz anula Dispersar as Trevas.`,
                custo: `\r\n +2 PM: aumenta o bônus na Defesa em +1. \r\n +4 PM: muda o círculo máximo de magias dissipadas para 4º. \r\n +9 PM: muda o círculo máximo de magias dissipadas para 5º.`
            },
            {
                meta: {
                    nome: "Aparência Perfeita",
                    escola: "Ilusão",
                    ciclo: 2,
                    execucao: "padrão",
                    alcance: "pessoal",
                    alvo: "você",
                    duracao: "cena",
                    resitencia: ""
                },
                desc: `Esta magia lhe concede um rosto idealizado, porte físico garboso, voz melodiosa e olhar sedutor, deixando-o mais atraente e confiável. Enquanto a magia estiver ativa, seu Carisma torna-se 20 (ou recebe um bônus de +4, caso seja 20 ou maior) e você recebe +8 nos testes de Diplomacia e Enganação. Quando a magia acaba, quaisquer observadores percebem a mudança e tendem a suspeitar de você. Da mesma maneira, pessoas que o viram sob o efeito da magia sentirão que “algo está errado” ao vê-lo em condições normais. Quando a cena acabar, você pode gastar os PM da magia novamente como uma ação livre para mantê-la ativa. Este efeito não fornece PV ou PM adicionais.`,
                custo: `\r\n +1 PM: muda o alcance para toque e o alvo para 1 humanoide.`
            },
            {
                meta: {
                    nome: "Aprisionamento",
                    escola: "Abjuração",
                    ciclo: 5,
                    execucao: "completa",
                    alcance: "curto",
                    alvo: "1 criatura",
                    duracao: "permanente",
                    resitencia: "Vontade anula"
                },
                desc: `Você cria uma prisão mágica para aprisionar uma criatura. Se falhar no teste de resistência, o alvo sofre o efeito da magia; se passar, fica imune a esta magia por uma semana. Enquanto estiver aprisionada, a criatura não precisa respirar e alimentar-se, e não envelhece. Magias de adivinhação não conseguem localizar ou perceber o alvo. Ao lançar o feitiço, você escolhe uma das seguintes formas de prisão. O componente material varia, mas todos custam T$ 1.000. \r\n Acorrentamento: o alvo é preso por correntes firmemente enraizadas no chão, que o mantêm no lugar. O alvo fica paralisado e não pode se mover ou ser movido por qualquer meio. Componente Material: uma fina corrente de mitral. \r\n Contenção Mínima: o alvo diminui para uma altura de 2 centímetros e é preso dentro de uma pedra preciosa ou objeto semelhante. A luz pode passar através da pedra preciosa normalmente (permitindo que o alvo veja o lado de fora e outras criaturas o vejam), mas nada mais pode passar, nem por meio de teletransporte ou viagem planar. A pedra não pode ser quebrada enquanto o alvo estiver dentro. Componente Material: uma pedra preciosa, como um diamante ou rubi. \r\n Prisão Dimensional: o alvo é transportado para um pequeno semiplano protegido contra teletransporte e viagens planares. O semiplano pode ser um labirinto, uma gaiola, uma torre ou qualquer estrutura ou área confinada similar de sua escolha. Componente Material: uma representação em miniatura da prisão, feita de jade. \r\n Sepultamento: o alvo é sepultado bem fundo abaixo da terra, dentro de uma esfera de força mágica. Nada pode destruir ou atravessar a esfera, nem mesmo criaturas e magias capazes de se teletransportar ou usar viagens planares. Componente Material: um pequeno orbe de adamante. \r\n Sono Eterno: o alvo adormece e não pode ser acordado. Componente Material: uma fruta preparada com ervas soporíferas raras. \r\n Quando a magia é lançada, você deve especificar uma condição que fará com que ela termine e solte o alvo. A condição pode ser tão específica ou elaborada quanto você quiser, mas deve ser possível de acontecer. As condições podem se basear no nome, identidade ou divindade padroeira de uma criatura, ou em ações ou qualidades observáveis, mas nunca em estatísticas intangíveis, como nível, classe ou pontos de vida. O mestre tem a palavra final sobre se uma condição é válida ou não. \r\n Dissipar Magia pode anular o efeito, mas deve ser conjurada com o aprimoramento de 5º círculo e alvo na prisão`,
                custo: ``
            },
            {
                meta: {
                    nome: "Área Escorregadia ",
                    escola: "Convocação",
                    ciclo: 1,
                    execucao: "padrão",
                    alcance: "curto",
                    alvo: "Área, 4 quadrados de 1,5m ou 1 objeto",
                    duracao: "cena",
                    resitencia: "Reflexos (veja texto)"
                },
                desc: `Esta magia recobre uma superfície com uma substância gordurosa e escorregadia. Criaturas na área devem passar na resistência para não cair. Nas rodadas seguintes, criaturas que tentem movimentar-se pela área devem fazer testes de Acrobacia para equilíbrio (CD 10). \r\n Área Escorregadia pode tornar um item escorregadio. Uma criatura segurando um objeto afetado deve passar na resistência para não deixar o item cair cada vez que usá-lo.`,
                custo: `\r\n +1 PM: aumenta a área em +1 quadrado de 1,5m. \r\n +2 PM: muda a CD dos testes de Acrobacia para 15. \r\n +5 PM: muda a CD dos testes de Acrobacia para 20.`
            },
            {
                meta: {
                    nome: "Arma Espiritual",
                    escola: "Convocação",
                    ciclo: 1,
                    execucao: "padrão",
                    alcance: "pessoal",
                    alvo: "você",
                    duracao: "cena",
                    resitencia: ""
                },
                desc: `Você invoca a arma preferida de sua divindade, que surge flutuando a seu lado. Uma vez por rodada, quando você sofre um ataque corpo a corpo, pode usar uma reação para que a arma  cause automaticamente 2d6 pontos de dano do tipo da arma — por exemplo, uma espada longa causa dano de corte — no oponente que fez o ataque. Esta magia se dissipa se você morrer.`,
                custo: `\r\n +1 PM: além do normal, a arma também o protege, oferecendo +1 na Defesa. \r\n +2 PM: aumenta o bônus na Defesa em +1. \r\n +2 PM: muda a duração para sustentada. Uma vez por rodada, você pode gastar uma ação livre para fazer a arma acertar automaticamente um alvo em alcance curto. Se a arma atacar, não poderá contra-atacar até seu próximo turno. Requer 2º círculo. \r\n +2 PM: muda o tipo do dano para essência. Requer 2º círculo. \r\n +5 PM: invoca duas armas, permitindo que você contra-ataque (ou ataque, se usar o aprimoramento acima) duas vezes por rodada. Requer 3º círculo.`
            },
            {
                meta: {
                    nome: "Arma Mágica",
                    escola: "Transmutação",
                    ciclo: 1,
                    execucao: "padrão",
                    alcance: "toque",
                    alvo: "1 arma",
                    duracao: "cena",
                    resitencia: ""
                },
                desc: `A arma fornece um bônus de +1 nos testes de ataque e rolagens de dano e é considerada mágica. Caso você esteja empunhando a arma, pode usar seu atributo-chave de magias em vez do atributo original nos testes de ataque. `,
                custo: `\r\n +2 PM: aumenta o bônus em +1, limitado pelo círculo máximo de magia que você pode lançar. \r\n +2 PM: a arma passa a causar +1d6 de dano de ácido, eletricidade, fogo ou frio, escolhido no momento em que a magia é lançada.`
            },
            {
                meta: {
                    nome: "Armadura Arcana ",
                    escola: "Abjuração",
                    ciclo: 1,
                    execucao: "padrão",
                    alcance: "pessoal",
                    alvo: "você",
                    duracao: "cena",
                    resitencia: ""
                },
                desc: `Esta magia cria uma película protetora invisível, mas tangível, fornecendo +4 na Defesa. Esse bônus é cumulativo com outras magias, mas não com bônus fornecido por armaduras.`,
                custo: `\r\n +1 PM: muda a execução para reação. Em vez do normal, você cria um escudo mágico para se proteger de um ataque, recebendo +6 na Defesa contra esse ataque apenas. \r\n +2 PM: aumenta o bônus na Defesa em +1. \r\n +2 PM: muda a duração para 1 dia. Requer 2º círculo.`
            },
            {
                meta: {
                    nome: "Assassino Fantasmagórico ",
                    escola: "Necromancia",
                    ciclo: 4,
                    execucao: "padrão",
                    alcance: "longo",
                    alvo: "1 criatura",
                    duracao: "cena, até ser descarregada",
                    resitencia: "Vontade parcial, Fortitude parcial"
                },
                desc: `Usando os medos subconscientes do alvo, você cria uma imagem daquilo que ele mais teme. Apenas a própria vítima pode ver o Assassino Fantasmagórico com nitidez; outras criaturas presentes (incluindo o conjurador) enxergam apenas um espectro sombrio. \r\nO espectro surge adjacente a você e flutua em direção ao alvo com deslocamento de voo 18m por turno. Ele é incorpóreo e imune a qualquer tipo de dano ou magia. \r\nSe o espectro terminar seu turno em alcance curto do alvo, este deve passar num teste de Vontade ou ficar abalado. \r\nSe o espectro terminar seu turno adjacente ao alvo, este deve passar num teste de Fortitude. Se passar, sofre 6d6 pontos de dano de trevas (este dano não pode reduzir o alvo a menos de 0 PV e não o deixa sangrando). Se falhar, sofre um colapso, ficando imediatamente com 0 PV, mas estável. \r\nO espectro persegue o alvo implacavelmente. Ele só desaparece se deixar seu alvo inconsciente, se for dissipado ou ao término da cena.`,
                custo: ``
            },
            {
                meta: {
                    nome: "Augúrio ",
                    escola: "Adivinhação",
                    ciclo: 2,
                    execucao: "completa",
                    alcance: "pessoal",
                    alvo: "você",
                    duracao: "instantânea",
                    resitencia: ""
                },
                desc: `Esta magia diz se uma ação que você tomará em breve — no máximo uma hora no futuro — trará resultados bons ou ruins. O mestre rola 1d6 em segredo; com um resultado de 1 a 5 a magia funciona e você recebe uma das seguintes respostas: “felicidade” (a ação trará bons resultados); “miséria” (a ação trará maus resultados); “felicidade e miséria” (para ambos) ou “nada” (para ações que não trarão resultados bons ou ruins). \r\nCom um resultado 6, a magia falha e oferece o resultado “nada”. Não há como saber se esse resultado foi dado porque a magia falhou ou não. Lançar esta magia múltiplas vezes sobre o mesmo assunto gera sempre o primeiro resultado. \r\nPor exemplo, se o grupo está prestes a entrar em uma câmara, o augúrio dirá “felicidade” se a câmara contém um tesouro desprotegido, “miséria” se contém um monstro, “felicidade e miséria” se houver um tesouro e um monstro ou “nada” se a câmara estiver vazia.`,
                custo: `\r\n +3 PM: muda a execução para 1 minuto. Em vez do normal, você pode consultar uma divindade, fazendo uma pergunta sobre um evento que acontecerá até um dia no futuro. O mestre rola a chance de falha; com um resultado de 1 a 5, você recebe uma resposta, desde uma simples frase até uma profecia ou enigma. Em geral, este uso sempre oferece pistas, indicando um caminho a tomar para descobrir a resposta que se procura. Numa falha você não recebe resposta alguma. Requer 3º círculo. \r\n +7 PM: muda a execução para 10 minutos e a duração para 1 minuto. Em vez do normal, você consulta uma divindade, podendo fazer uma pergunta por rodada, desde que ela possa ser respondida com “sim”, “não” ou “não sei” (embora poderosos, os deuses não são oniscientes). O mestre rola a chance de falha para cada pergunta. Em caso de falha, a resposta também é “não sei”. Requer 4º círculo. \r\n +7 PM: o mestre rola 1d12; a magia só falha em um resultado 12. \r\n +12 PM: o mestre rola 1d20; a magia só falha em um resultado 20.`
            },
            {
                meta: {
                    nome: "Aura Divina",
                    escola: "Encantamento",
                    ciclo: 5,
                    execucao: "padrão",
                    alcance: "pessoal",
                    alvo: "Área, emanação de 9m de raio",
                    duracao: "cena",
                    resitencia: "Vontade parcial"
                },
                desc: `Você se torna um condutor direto da energia de sua divindade, emanando uma aura brilhante da cor que escolher. Aliados dentro da área de efeito recebem +5 na Defesa e em testes de resistência (+10 se forem devotos da mesma divindade que você) e ficam imunes a efeitos de encantamento. Além disso, inimigos que entrem na área afetada devem fazer um teste de Vontade; em caso de falha, recebem uma condição a sua escolha entre esmorecido, debilitado ou lento. O teste deve ser refeito cada vez que a criatura entrar novamente na área.`,
                custo: `\r\n +2 PM: aumenta os bônus na Defesa e em testes de resistência em +1.`
            },
            {
                meta: {
                    nome: "Aviso",
                    escola: "Adivinhação",
                    ciclo: 1,
                    execucao: "movimento",
                    alcance: "longo",
                    alvo: "1 criatura",
                    duracao: "instantânea",
                    resitencia: ""
                },
                desc: `Você envia um alerta telepático para uma criatura, mesmo que não tenha linha de efeito. Escolha um dos efeitos. Alerta: o alvo recebe +5 em seu próximo teste de Iniciativa e de Percepção dentro da cena. \r\nMensagem: o alvo recebe uma mensagem sua de até 25 palavras. Vocês devem ter um idioma em comum para o alvo poder entendê-lo. \r\nLocalização: o alvo sabe onde você está naquele momento. Se você mudar de posição, ele não saberá.`,
                custo: `\r\n +1 PM: aumenta o alcance em um fator de 10 (90m para 900m, 900m para 9km e assim por diante). \r\n +1 PM: se escolher mensagem, o alvo pode enviar uma resposta de até 25 palavras para você até o fim de seu próximo turno. \r\n +2 PM: se escolher localização, muda a duração para cena. O alvo sabe onde você está mesmo que você mude de posição. \r\n +3 PM: aumenta o número de alvos em +1.`
            },

        ]
    };
    await CriarJSON.Escrever("./database/json/T20Magia.json", Magiadata);
    console.log("json emojis criados")


}

CriarJSON()
// magia molde
/*
{
                meta: {
                    nome: "",
                    escola: "",
                    ciclo:1,
                    execucao: "",
                    alcance: "",
                    alvo: "",
                    duracao: "",
                    resitencia: ""
                },
                desc: ``,
                custo: ``
            },
*/

async function CriarJSON() {
    const Escrever = require("./util/Escrever");
    const CriarJSON = new Escrever();


    const Magiadata = {
        magialist: [
            {
                meta: {
                    nome: "Abençoar Alimentos",
                    escola: "Transmutação",
                    ciclo: "Divina 1",
                    execucao: "padrão",
                    alcance: "curto",
                    alvo: "alimento para 1 criatura",
                    duracao: "cena",
                    resitencia: ""
                },
                desc: `Você purifica e abençoa uma porção de comida ou dose de bebida. Isso torna um alimento sujo, estragado ou envenenado próprio para consumo. Além disso, se for consumido até o final da duração, o alimento oferece 5 PV temporários ou 1 PM temporário (além de quaisquer bônus que já oferecesse). Bônus de alimentação duram um dia e cada personagem só pode receber um bônus de alimentação por dia.`,
                
                continue:[ {nome:'Custo', content:'\r\nTruque: o alimento é purificado (não causa nenhum efeito nocivo se estava estragado ou envenenado), mas não oferece bônus ao ser consumido.\r\n+1 PM: aumenta o número de alvos em +1.\r\n+1 PM: muda a duração para permanente, o alvo para 1 frasco com água e adiciona componente material (pó de prata no valor de T$ 5). Em vez do normal, cria um frasco de água benta.\r\n'}]
            },
            {
                meta: {
                    nome: "Acalmar Animal",
                    escola: "Encantamento",
                    ciclo: "Divina 1",
                    execucao: "padrão",
                    alcance: "curto",
                    alvo: "1 animal",
                    duracao: "cena",
                    resitencia: "Vontade anula"
                },
                desc: `O animal fica prestativo em relação a você. Ele não fica sob seu controle, mas percebe suas palavras e ações da maneira mais favorável possível. Você recebe +10 nos testes de Adestramento e Diplomacia que fizer contra o animal.\r\nUm alvo hostil ou que esteja envolvido em um combate recebe +5 em seu teste de resistência. Se você ou seus aliados tomarem qualquer ação hostil contra o alvo, a magia é anulada e ele retorna à atitude que tinha antes (ou piorada, de acordo com o mestre). Se tratar bem o alvo, a atitude pode permanecer mesmo após o término da magia.`,
                continue:[ {nome:'Custo', content:`\r\n+1 PM: muda o alcance para médio.\r\n+1 PM: muda o alvo para 1 monstro ou espírito com Inteligência 1, 2 ou nula.\r\n+2 PM: aumenta o número de alvos em +1.\r\n+5 PM: muda o alvo para 1 monstro ou espírito. Requer 3º círculo.`}] 
            },
            {
                meta: {
                    nome: "Adaga Mental",
                    escola: "Encantamento",
                    ciclo: "Arcana 1",
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
                    ciclo: "Arcana 1",
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
                    ciclo: "Divina 2",
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
                    ciclo: "Arcana 5",
                    execucao: "reação",
                    alcance: "pessoal",
                    alvo: "você",
                    duracao: "instantânea",
                    resitencia: ""
                },
                desc: `Sua mente visualiza todas as possibilidades de um evento, permitindo a você escolher o melhor curso de ação. Você automaticamente passa em um teste de resistência ou evita um ataque nesta rodada.`,
                custo: `não tem.`
            },
            {
                meta: {
                    nome: "Alterar Memória",
                    escola: "Encantamento",
                    ciclo: "Arcana 4",
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
                    ciclo: "Arcana 2",
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
                    ciclo: "Arcana 2",
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
                    ciclo: "Arcana 1",
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
                    ciclo: "Arcana 3",
                    execucao: "padrão",
                    alcance: "curto",
                    alvo: "1 criatura ou objeto",
                    duracao: "cena",
                    resitencia: "não tem."
                },
                desc: `O alvo é envolvido por um campo de força cor de esmeralda que impede qualquer movimento planar. Isso inclui todas as magias de convocação (como Salto Dimensional e Teletransporte), viagens astrais e anula a habilidade incorpóreo.`,
                custo: `\r\n +2 PM: muda o alcance para médio, a área para círculo de 3m de raio e o alvo para criaturas escolhidas. \r\n +2 PM: muda o efeito para criar um fio de energia cor de esmeralda que prende o alvo a um ponto no espaço dentro do alcance. O ponto precisa ser fixo, mas não precisa de nenhum apoio ou superfície (pode simplesmente flutuar no ar). O alvo não pode se afastar mais de 3m do ponto, nem fisicamente, nem com movimento planar. O fio possui 20 PV e resistência a dano 30 (mas pode ser dissipado por efeitos que libertam criaturas, como o Julgamento da Liberdade do paladino). \r\n +4 PM: como acima, mas em vez de um fio, cria uma corrente de energia, com 20 PV e resistência a dano 50. \r\n +4 PM: muda o alvo para área de cubo de 9m, a duração para permanente e adiciona componente material (chave de esmeralda no valor de T$ 2.000). Em vez do normal, nenhum tipo de movimento planar pode entrar ou sair da área. \r\n +9 PM: muda o alcance para médio, a área para círculo de 3m de raio e o alvo para criaturas escolhidas. Cria um fio de energia (veja acima) que prende todos os alvos ao centro da área.`
            },
            {
                meta: {
                    nome: "Animar Objetos",
                    escola: "Transmutação",
                    ciclo: "Arcana 4",
                    execucao: "padrão",
                    alcance: "médio",
                    alvo: "até 8 objetos Minúsculos ou Pequenos, 4 objetos Médios, 2 objetos Grandes ou 1 objeto Enorme",
                    duracao: "cena",
                    resitencia: ""
                },
                desc: `Você concede vida a objetos inanimados. Cada objeto se torna um tipo de aliado sob seu controle, escolhido da lista de tamanho. Com uma ação de movimento, você pode comandar mentalmente qualquer objeto animado dentro do alcance para que auxilie você ou outra criatura neste turno. Outros usos criativos para os objetos ficam a cargo do mestre. Objetos animados têm valores de Força e Destreza de acordo com seu tamanho. Diferente dos aliados comuns, um objeto pode ser alvo de um ataque direto, que acerta automaticamente — os PV de cada objeto dependem de seu tamanho. Esta magia não afeta itens mágicos, nem objetos que estejam sendo carregados por outra criatura.`,
                custo: `\r\n +5 PM: muda a duração para permanente e adiciona componente material (prataria no valor de T$ 1.000). Você pode ter um máximo de objetos animados igual à metade do seu nível. Estatísticas de objetos animados \r\n Minúsculo: For 4, Des 18, 5 PV; Assassino ou Combatente Iniciante. \r\n Pequeno: For 6, Des 14, 10 PV; Combatente ou Guardião Iniciante. \r\n Médio: For 10, Des 12, 20 PV; Combatente ou Guardião Veterano. \r\n Grande: For 14, Des 10, 40 PV; Fortão, Guardião ou Montaria Veterano. \r\n Enorme: For 18, Des 6, 60 PV; Fortão, Guardião ou Montaria Mestre.`
            },
            {
                meta: {
                    nome: "Anular a Luz ",
                    escola: "Necromancia",
                    ciclo: "Divina 3",
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
                    ciclo: "Arcana 2",
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
                    ciclo: "Arcana 5",
                    execucao: "completa",
                    alcance: "curto",
                    alvo: "1 criatura",
                    duracao: "permanente",
                    resitencia: "Vontade anula"
                },
                desc: `Você cria uma prisão mágica para aprisionar uma criatura. Se falhar no teste de resistência, o alvo sofre o efeito da magia; se passar, fica imune a esta magia por uma semana. Enquanto estiver aprisionada, a criatura não precisa respirar e alimentar-se, e não envelhece. Magias de adivinhação não conseguem localizar ou perceber o alvo. Ao lançar o feitiço, você escolhe uma das seguintes formas de prisão. O componente material varia, mas todos custam T$ 1.000. \r\n Acorrentamento: o alvo é preso por correntes firmemente enraizadas no chão, que o mantêm no lugar. O alvo fica paralisado e não pode se mover ou ser movido por qualquer meio. Componente Material: uma fina corrente de mitral. \r\n Contenção Mínima: o alvo diminui para uma altura de 2 centímetros e é preso dentro de uma pedra preciosa ou objeto semelhante. A luz pode passar através da pedra preciosa normalmente (permitindo que o alvo veja o lado de fora e outras criaturas o vejam), mas nada mais pode passar, nem por meio de teletransporte ou viagem planar. A pedra não pode ser quebrada enquanto o alvo estiver dentro. Componente Material: uma pedra preciosa, como um diamante ou rubi. \r\n Prisão Dimensional: o alvo é transportado para um pequeno semiplano protegido contra teletransporte e viagens planares. O semiplano pode ser um labirinto, uma gaiola, uma torre ou qualquer estrutura ou área confinada similar de sua escolha. Componente Material: uma representação em miniatura da prisão, feita de jade. \r\n Sepultamento: o alvo é sepultado bem fundo abaixo da terra, dentro de uma esfera de força mágica. Nada pode destruir ou atravessar a esfera, nem mesmo criaturas e magias capazes de se teletransportar ou usar viagens planares. Componente Material: um pequeno orbe de adamante. \r\n Sono Eterno: o alvo adormece e não pode ser acordado. Componente Material: uma fruta preparada com ervas soporíferas raras. \r\n Quando a magia é lançada, você deve especificar uma condição que fará com que ela termine e solte o alvo. A condição pode ser tão específica ou elaborada quanto você quiser, mas deve ser possível de acontecer. As condições podem se basear no nome, identidade ou divindade padroeira de uma criatura, ou em ações ou qualidades observáveis, mas nunca em estatísticas intangíveis, como nível, classe ou pontos de vida. O mestre tem a palavra final sobre se uma condição é válida ou não. \r\n Dissipar Magia pode anular o efeito, mas deve ser conjurada com o aprimoramento de 5º círculo e alvo na prisão`,
                custo: `não tem.`
            },
            {
                meta: {
                    nome: "Área Escorregadia ",
                    escola: "Convocação",
                    ciclo: "Arcana 1",
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
                    ciclo: "Divina 1",
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
                    ciclo: "Universal 1",
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
                    ciclo: "Arcana 1",
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
                    ciclo: "Arcana 4",
                    execucao: "padrão",
                    alcance: "longo",
                    alvo: "1 criatura",
                    duracao: "cena, até ser descarregada",
                    resitencia: "Vontade parcial, Fortitude parcial"
                },
                desc: `Usando os medos subconscientes do alvo, você cria uma imagem daquilo que ele mais teme. Apenas a própria vítima pode ver o Assassino Fantasmagórico com nitidez; outras criaturas presentes (incluindo o conjurador) enxergam apenas um espectro sombrio. \r\nO espectro surge adjacente a você e flutua em direção ao alvo com deslocamento de voo 18m por turno. Ele é incorpóreo e imune a qualquer tipo de dano ou magia. \r\nSe o espectro terminar seu turno em alcance curto do alvo, este deve passar num teste de Vontade ou ficar abalado. \r\nSe o espectro terminar seu turno adjacente ao alvo, este deve passar num teste de Fortitude. Se passar, sofre 6d6 pontos de dano de trevas (este dano não pode reduzir o alvo a menos de 0 PV e não o deixa sangrando). Se falhar, sofre um colapso, ficando imediatamente com 0 PV, mas estável. \r\nO espectro persegue o alvo implacavelmente. Ele só desaparece se deixar seu alvo inconsciente, se for dissipado ou ao término da cena.`,
                custo: `não tem.`
            },
            {
                meta: {
                    nome: "Augúrio",
                    escola: "Adivinhação",
                    ciclo: "Divina 2",
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
                    ciclo: "Divina 5",
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
                    ciclo: "Universal 1",
                    execucao: "movimento",
                    alcance: "longo",
                    alvo: "1 criatura",
                    duracao: "instantânea",
                    resitencia: ""
                },
                desc: `Você envia um alerta telepático para uma criatura, mesmo que não tenha linha de efeito. Escolha um dos efeitos. Alerta: o alvo recebe +5 em seu próximo teste de Iniciativa e de Percepção dentro da cena. \r\nMensagem: o alvo recebe uma mensagem sua de até 25 palavras. Vocês devem ter um idioma em comum para o alvo poder entendê-lo. \r\nLocalização: o alvo sabe onde você está naquele momento. Se você mudar de posição, ele não saberá.`,
                custo: `\r\n +1 PM: aumenta o alcance em um fator de 10 (90m para 900m, 900m para 9km e assim por diante). \r\n +1 PM: se escolher mensagem, o alvo pode enviar uma resposta de até 25 palavras para você até o fim de seu próximo turno. \r\n +2 PM: se escolher localização, muda a duração para cena. O alvo sabe onde você está mesmo que você mude de posição. \r\n +3 PM: aumenta o número de alvos em +1.`
            },
            {
                meta: {
                    nome: "Armamento da Natureza",
                    escola: "Transmutação",
                    ciclo: "Divina 1",
                    execucao: "padrão",
                    alcance: "toque",
                    alvo: "1 arma (veja texto)",
                    duracao: "cena",
                    resitencia: ""
                },
                desc: `Você fortalece uma arma mundana primitiva (sem custo em T$, como bordão, clava, funda ou tacape) ou natural (incluindo ataque desarmado). O dano da arma aumenta em um passo e ela é considerada mágica para propósitos de resistência a dano. Ao lançar a magia, você pode mudar o tipo de dano da arma (escolhendo entre corte, impacto ou perfuração).`,
                custo: `\r\n+1 PM: fornece +1 nos testes de ataque com a arma. \r\n +2 PM: muda a execução para ação de movimento. \r\n +3 PM: aumenta o bônus nos testes de ataque em +1. \r\n +5 PM: aumenta o dano da arma em mais um passo.`
            },
            {
                meta: {
                    nome: "Banimento",
                    escola: "Abjuração",
                    ciclo: "Divina 3",
                    execucao: "padrão",
                    alcance: "curto",
                    alvo: "1 criatura",
                    duracao: "instantânea",
                    resitencia: "Vontade parcial"
                },
                desc: `Você expulsa criaturas que não são naturais deste mundo. Um alvo nativo de outro mundo, como muitas criaturas do tipo espírito, é teletransportado de volta para um lugar aleatório de seu mundo de origem. Já um alvo morto-vivo tem sua conexão com as energias negativas quase completamente rompida, sendo reduzido a 1d6 PV. Se passar na resistência, em vez dos efeitos acima, o alvo fica enjoado por 1d4 rodadas.\r\nAlém disso, se você tiver um ou mais itens que se oponham ao alvo de alguma maneira, a CD do teste de resistência aumenta em +2 por item. Por exemplo, se lançar a magia contra demônios do frio (vulneráveis a água benta e que odeiam luz e calor) enquanto segura um frasco de água benta e uma tocha acesa, a CD do teste de resistência aumenta em +4. O mestre decide se determinado item é forte o bastante contra a criatura para isso.`,
                custo: `\r\n +1 PM: aumenta o número de alvos em +1.`
            },
            {
                meta: {
                    nome: "Barragem elemental de Vectorius",
                    escola: "Evocação",
                    ciclo: " Arcana 5",
                    execucao: "padrão",
                    alcance: "longo",
                    alvo: "1 criatura",
                    duracao: "instantânea",
                    resitencia: "Reflexos parcial"
                },
                desc: `Criada pelo arquimago Vectorius, esta magia produz quatro esferas elementais diferentes (ácido, eletricidade, fogo e frio) que voam até um ponto a sua escolha. Quando atingem o ponto escolhido, explodem causando 6d6 pontos de dano (cada uma do seu tipo) numa dispersão com 12m de raio. Um teste de Reflexos reduz o dano à metade. Uma criatura ao alcance da explosão de mais de uma esfera deve fazer um teste de resistência separado para cada uma. É possível mirar cada esfera em uma criatura ou ponto diferente. Além disso, a magia também tem os seguintes efeitos: \r\n• Alvos que sofrerem dano de ácido ficam vulneráveis até o fim da cena. \r\n• Alvos que sofrerem dano elétrico ficam atordoados por 1 rodada. \r\n• Alvos que sofrerem dano de fogo ficam em chamas. \r\nAlvos que sofrerem dano de frio ficam lentos até o final da cena.`,
                custo: `\r\n+5 PM: aumenta o dano de cada esfera em +2d6. \r\n +5 PM: muda o tipo de dano para essência. Demais efeitos continuam os mesmos.`
            },
            {
                meta: {
                    nome: "Bênção",
                    escola: "Encantamento",
                    ciclo: "Divina 1",
                    execucao: "padrão",
                    alcance: "curto",
                    alvo: "criaturas escolhidas",
                    duracao: "cena",
                    resitencia: ""
                },
                desc: `Abençoa os alvos, que recebem +1 em testes de ataque e rolagens de dano. Bênção anula Perdição.`,
                custo: `\r\n +1 PM: muda o alvo para 1 cadáver e a duração para 1 semana. O cadáver não se decompõe nem pode ser transformado em morto-vivo pela duração da magia. \r\n +2 PM: aumenta os bônus em +1, limitado pelo círculo máximo de magia que você pode lançar.`
            },
            {
                meta: {
                    nome: "Bola de Fogo",
                    escola: "Evocação",
                    ciclo: " Arcana 2",
                    execucao: "padrão",
                    alcance: "médio",
                    alvo: "Área, esfera com 6m de raio",
                    duracao: "instantânea",
                    resitencia: "Reflexos reduz à metade"
                },
                desc: `Esta famosa magia de ataque cria uma poderosa explosão, causando 6d6 pontos de dano de fogo em todas as criaturas e objetos livres na área.`,
                custo: `\r\n +2 PM: aumenta o dano em +2d6. \r\n +2 PM: muda a área para efeito de esfera de fogo com 3m de diâmetro e a duração para cena. Em vez do normal, cria uma esfera de fogo que causa 3d6 pontos de dano a qualquer criatura no mesmo espaço. Você pode gastar uma ação de movimento para fazer a esfera voar 9m em qualquer direção. A esfera é imune a dano, mas pode ser apagada com água. Uma criatura só pode sofrer dano da esfera uma vez por rodada. \r\n +3 PM: muda a duração para 1 dia ou até ser descarregada. Em vez do normal, você cria uma pequena pedra flamejante, que pode detonar como uma reação, descarregando a magia. A pedra pode ser usada como uma arma de arremesso com alcance curto. Uma vez detonada, causa o dano da magia numa área de esfera de 6m de raio.`
            },
            {
                meta: {
                    nome: "Buraco Negro",
                    escola: "Convocação",
                    ciclo: "Universal 5",
                    execucao: "completa",
                    alcance: "longo",
                    alvo: "buraco negro",
                    duracao: "3 rodadas",
                    resitencia: "Fortitude parcial"
                },
                desc: `Esta magia cria um vácuo capaz de sugar tudo nas proximidades. Escolha um espaço desocupado para o buraco negro. No início de cada um de seus três turnos seguintes, todas as criaturas a até 90m do buraco negro, incluindo você, devem fazer um teste de Fortitude. Em caso de falha, ficam caídas e 174 Magia são puxadas 30m na direção do buraco. Objetos soltos também são puxados. Criaturas podem gastar uma ação de movimento para se segurar em algum objeto fixo, recebendo +2 em seus testes de resistência. Criaturas e objetos que toquem o buraco negro são sugadas, desaparecendo para sempre. Não se conhece o destino das coisas sugadas pelo buraco negro, uma vez que jamais retornam. Alguns estudiosos sugerem que podem ser enviadas para outros mundos. Muitos clérigos de Tenebra acreditam que esta magia abre um portal para Sombria, o lar de sua deusa, e sonham um dia poder realizar essa jornada.`,
                custo: `\r\n +5 PM: muda o efeito para que você não seja afetado. \r\n +10 PM: muda o efeito para que criaturas escolhidas dentro do alcance não sejam afetadas.`
            },
            {
                meta: {
                    nome: "Caminhos da Natureza",
                    escola: "Convocação",
                    ciclo: "Divina 1",
                    execucao: "padrão",
                    alcance: "curto",
                    alvo: "Área, criaturas escolhidas",
                    duracao: "1 dia",
                    resitencia: ""
                },
                desc: `Você invoca espíritos da natureza, pedindo que eles abram seu caminho. As criaturas afetadas recebem deslocamento +3m e ignoram penalidades por terreno difícil em terrenos naturais.`,
                custo: `\r\nTruque: muda o alcance para pessoal e o alvo para você. Em vez do normal, você sabe onde fica o norte e recebe +5 em testes de Sobrevivência para se orientar. \r\n +1 PM: além do normal, a CD para rastrear os alvos em terreno natural aumenta em +10. \r\n +2 PM: aumenta o bônus de deslocamento em +3m.`
            },
            {
                meta: {
                    nome: "Campo Antimagia",
                    escola: "Abjuração",
                    ciclo: "Arcana 4",
                    execucao: "padrão",
                    alcance: "pessoal",
                    alvo: "você",
                    duracao: "sustentada",
                    resitencia: ""
                },
                desc: `Você é cercado por uma barreira invisível com 3m de raio que acompanha seus movimentos. Qualquer magia ou efeito mágico que entre na área da barreira é anulado enquanto estiver lá. \r\nCriaturas convocadas que entrem em um Campo Antimagia desaparecem. Elas reaparecem na mesma posição quando a duração do Campo termina — supondo que a duração da magia que as convocou ainda não tenha terminado. \r\nCriaturas mágicas, como elementais, ou construtos imbuídos com magia durante sua criação, como golens, não são diretamente afetados pelo Campo Antimagia. Entretanto, como qualquer criatura, não poderão usar magias ou habilidades mágicas dentro dele. \r\nDissipar Magia não anula um Campo Antimagia, e dois Campos na mesma área não se neutralizam. Artefatos e deuses maiores não são afetados por um Campo Antimagia.`,
                custo: `não tem`
            },
            {
                meta: {
                    nome: "Campo de Força",
                    escola: "Abjuração",
                    ciclo: "Arcana 2",
                    execucao: "padrão",
                    alcance: "pessoal",
                    alvo: "você",
                    duracao: "cena",
                    resitencia: ""
                },
                desc: `Esta magia cria uma película protetora sobre você. Você recebe 30 PV temporários, mas apenas contra dano físico (corte, impacto ou perfuração).`,
                custo: `\r\n+1 PM: muda a execução para reação e a duração para instantânea. Em vez do normal, você recebe resistência 30 contra o próximo dano físico que sofrer. \r\n +1 PM: aumenta os PV temporários em +5 ou a resistência a dano em +10. \r\n +7 PM: muda o alcance para curto e o alvo para 1 criatura ou objeto Enorme ou menor. Em vez do normal, cria uma esfera imóvel e tremeluzente com 4,5m de diâmetro, centrada no alvo. Nenhum ataque ou efeito de dano é capaz de entrar ou sair da esfera, embora criaturas possam respirar normalmente. Criaturas na área podem fazer um teste de Reflexos para evitar serem aprisionadas. Requer 4º círculo. \r\n +9 PM: como o aprimoramento acima, mas também muda a duração para sustentada. Tudo dentro da esfera fica praticamente sem peso. Uma vez por rodada, você pode gastar uma ação livre para flutuar a esfera e seu conteúdo para qualquer local dentro de alcance longo. Requer 4º círculo.`
            },
            {
                meta: {
                    nome: "Camuflagem Ilusória",
                    escola: "Ilusão",
                    ciclo: "Arcana 2",
                    execucao: "padrão",
                    alcance: "toque",
                    alvo: "1 criatura",
                    duracao: "cena",
                    resitencia: ""
                },
                desc: `O alvo fica com sua imagem nublada, como se vista através de um líquido, recebendo os efeitos de camuflagem.`,
                custo: `\r\n+3 PM: a imagem do alvo fica ainda mais distorcida, oferecendo camuflagem total. \r\n +7 PM: muda o alcance para curto e o alvo para criaturas escolhidas. Requer 4º círculo.`
            },
            {
                meta: {
                    nome: "Chuva de Meteoros",
                    escola: "Convocação",
                    ciclo: "Arcana 5",
                    execucao: "completa",
                    alcance: "longo",
                    alvo: "Área, explosão com 9m de raio",
                    duracao: "instantânea",
                    resitencia: "Reflexos reduz à metade"
                },
                desc: `Esta magia faz com que um meteoro caia dos céus, devastando a área de impacto e seus arredores. Criaturas na área sofrem 20d6 pontos de dano (metade impacto, metade fogo).`,
                custo: `\r\n+2 PM: criaturas que falhem no teste de resistência ficam caídas e presas sob os escombros (agarradas). Uma criatura agarrada pode escapar gastando uma ação padrão e passando em um teste de Atletismo. Toda a área afetada fica coberta de escombros, sendo considerada terreno difícil. \r\n +10 PM: aumenta o número de meteoros em +1. Os meteoros podem cair na mesma área, para acumular o dano (uma criatura atingida por dois meteoros, por exemplo, sofre 40d6 pontos de dano) ou em uma área diferente (mas ainda dentro do alcance) para afetar mais alvos.`
            },
            {
                meta: {
                    nome: "Círculo da Justiça",
                    escola: "Abjuração",
                    ciclo: "Divina 2",
                    execucao: "completa",
                    alcance: "curto",
                    alvo: "cubo com 9m de lado",
                    duracao: "1 dia",
                    resitencia: "Vontade parcial"
                },
                desc: `Também conhecida como Lágrimas de Hyninn, esta magia é usada em tribunais e para proteger áreas sensíveis. Criaturas na área sofrem –10 em testes de Acrobacia, Enganação, Furtividade e Ladinagem e não podem mentir deliberadamente — mas podem tentar evitar perguntas que normalmente responderiam com uma mentira (sendo evasivas ou cometendo omissões, por exemplo). Uma criatura que passe na resistência tem as penalidades reduzidas para –5 e pode mentir.`,
                custo: `\r\n+1 PM: muda a execução para ação padrão, o alcance para pessoal, o alvo para você, a duração para cena e a resistência para nenhuma. Em vez do normal, qualquer criatura ou objeto invisível em alcance curto se torna visível. Isso não anula o efeito mágico; se sair do seu alcance, a criatura ou objeto voltam a ficar invisíveis. \r\n +3 PM: muda a penalidade nas perícias para –10 (se passar na resistência) e –20 (se falhar). Requer 4º círculo. \r\n +7 PM: muda a duração para permanente e adiciona componente material (balança de prata no valor de T$ 5.000).`
            },
            {
                meta: {
                    nome: "Círculo da Restauração",
                    escola: "",
                    ciclo: "Divina 4",
                    execucao: "padrão",
                    alcance: "curto",
                    alvo: "Área, círculo de 3m de raio",
                    duracao: "5 rodadas",
                    resitencia: ""
                },
                desc: `Você evoca um círculo de luz que emana uma energia poderosa. Qualquer criatura viva que termine o turno dentro do círculo recupera 3d8+3 PV e 1 PM. Mortos-vivos e criaturas que sofrem dano por luz perdem PV e PM na mesma quantidade. Uma criatura só pode recuperar PM através desta magia uma vez por dia.`,
                custo: `\r\n +2 PM: aumenta a regeneração de PV em 1d8+1.`
            },
            {
                meta: {
                    nome: "cólera de azgher",
                    escola: "evocação",
                    ciclo: "Divina 4",
                    execucao: "padrão",
                    alcance: "médio",
                    alvo: "Área, esfera com 6m de raio",
                    duracao: "instantânea",
                    resitencia: "Reflexos parcial"
                },
                desc: `Você cria uma explosão de luz dourada e intensa. Criaturas na área ficam cegas por 1d4 rodadas, pegam fogo e sofrem 10d6 pontos de dano de fogo (mortos-vivos sofrem 10d8 pontos de dano). Uma criatura que passe no teste de resistência não fica cega, não pega fogo e sofre metade do dano.`,
                custo: `\r\n +2 PM: aumenta o dano em +2d6 (+2d8 contra mortos-vivos). \r\n +2 PM: aumenta a área em +6m de raio. \r\n +5 PM: a luz purificadora do Deus-Sol anula todas as magias de necromancia ativas na área. Requer 5º círculo.`
            },
            {
                meta: {
                    nome: "Coluna de Chamas",
                    escola: "Evocação",
                    ciclo: "Divina 3",
                    execucao: "padrão",
                    alcance: "longo",
                    alvo: "Área, cilindro com 3m de raio e 30m de altura",
                    duracao: "instantânea",
                    resitencia: "Reflexos reduz à metade"
                },
                desc: `Um pilar de fogo sagrado desce dos céus, causando 6d6 pontos de dano de fogo mais 6d6 pontos de dano de luz nas criaturas e objetos livres na área.`,
                custo: `\r\n +1 PM: aumenta o dano de fogo em +1d6. \r\n +1 PM: aumenta o dano de luz em +1d6.`
            },
            {
                meta: {
                    nome: "Comando",
                    escola: "Encantamento",
                    ciclo: "Divina 1",
                    execucao: "padrão",
                    alcance: "curto",
                    alvo: "1 humanoide",
                    duracao: "1 rodada",
                    resitencia: "Vontade anula"
                },
                desc: `Você dá uma ordem irresistível, que o alvo deve ser capaz de ouvir (mas não precisa entender). Se falhar na resistência, ele deve obedecer ao comando em seu próprio turno da melhor maneira possível. Escolha um dos efeitos. \r\n Caia: o alvo se joga no chão — ou cai, se estava pendurado em algo — e não se levanta até o próximo turno. Como esta é uma ação livre, ele ainda pode fazer outras ações (exceto levantar-se). Fuja: o alvo gasta seu turno se afastando de você (usando todas as suas ações). \r\n Largue: o alvo solta quaisquer itens que esteja segurando e não pode pegá-los novamente até o início de seu próximo turno. Como esta é uma ação livre, ele ainda pode executar outras ações (exceto pegar aquilo que largou). \r\n Pare: o alvo fica pasmo (não pode fazer ações, exceto reações). \r\n Venha: o alvo gasta seu turno se aproximando de você (usando todas as suas ações).`,
                custo: `\r\n +1 PM: muda o alvo para 1 criatura. \r\n +2 PM: aumenta a quantidade de alvos em +1.`
            },
            {
                meta: {
                    nome: "Compreensão",
                    escola: "Adivinhação",
                    ciclo: "Universal 1",
                    execucao: "padrão",
                    alcance: "toque",
                    alvo: "1 criatura ou texto",
                    duracao: "cena",
                    resitencia: "Vontade anula (veja texto)"
                },
                desc: `Essa magia lhe confere compreensão sobrenatural. Você pode tocar um texto e entender as palavras mesmo que não conheça o idioma. Se tocar numa criatura inteligente, pode se comunicar com ela mesmo que não tenham um idioma em comum. Se tocar uma criatura não inteligente, como um animal, pode perceber seus sentimentos. \r\n Você também pode gastar uma ação de movimento para ouvir os pensamentos de uma criatura tocada (você “ouve” o que o alvo está pensando), mas um alvo involuntário tem direito a um teste de Vontade para proteger seus pensamentos e evitar este efeito.`,
                custo: `\r\n +1 PM: muda o alcance para curto. \r\n +2 PM: muda o alcance para curto e o alvo para criaturas escolhidas. Você pode entender todas as criaturas afetadas, mas só pode ouvir os pensamentos de uma por vez. \r\n +2 PM: muda o alvo para 1 criatura. Em vez do normal, pode vasculhar os pensamentos do alvo para extrair informações. O alvo tem direito a um teste de Vontade para anular este efeito. O mestre decide se a criatura sabe ou não a informação que você procura. Requer 2º círculo. \r\n +5 PM: muda o alcance para pessoal e o alvo para você. Em vez do normal, você pode falar, entender e escrever qualquer idioma. Requer 3º círculo.`
            },
            {
                meta: {
                    nome: "Comunhão com a Natureza",
                    escola: "Adivinhação",
                    ciclo: "Divina 3",
                    execucao: "completa",
                    alcance: "pessoal",
                    alvo: "você",
                    duracao: "1 dia",
                    resitencia: ""
                },
                desc: `Após uma breve união com a natureza local, você obtém informações e intuições sobre a região em que está, numa distância equivalente a um dia de viagem. Você recebe 6d4 dados de auxílio. Enquanto a magia durar, sempre que for realizar um teste de perícia em áreas naturais, você pode gastar qualquer quantidade desses d4 e adicionar o resultado rolado como bônus no teste. A magia termina se você ficar sem dados.`,
                custo: `\r\n+1 PM: muda a execução para 1 minuto e a duração para instantânea. Em vez do normal, você descobre 1d4+1 informações sobre os seguintes temas: terreno, animais, vegetais, minerais, cursos d’água e presença de criaturas antinaturais numa região natural em que você esteja. Você pode, por exemplo, descobrir a quantidade de cavernas (terreno), se uma planta rara existe (vegetais) e se há mortos-vivos (criaturas antinaturais) na região. \r\n+3 PM: aumenta o número de dados de auxílio em +2. \r\n+4 PM: muda o tipo dos dados de auxílio para d6. +8 PM: muda o tipo dos dados de auxílio para d8.`
            },
            {
                meta: {
                    nome: "Conceder Milagre",
                    escola: "Encantamento",
                    ciclo: "Divina 4",
                    execucao: "padrão",
                    alcance: "toque",
                    alvo: "1 criatura",
                    duracao: "permanente até ser descarregada",
                    resitencia: ""
                },
                desc: `Você transfere um pouco de seu poder divino a outra criatura. Escolha uma magia de até 2º círculo que você conheça; o alvo pode lançar essa magia uma vez, sem pagar o custo base dela em PM (aprimoramentos podem ser usados, mas o alvo deve gastar seus próprios PM). Você sofre uma penalidade de –3 PM até que o alvo lance a magia que ganhou.`,
                custo: `\r\n +4 PM: muda o círculo da magia concedida para 3º e a penalidade de PM para –6.`
            },
            {
                meta: {
                    nome: "Concentração de Combate",
                    escola: "Adivinhação",
                    ciclo: "Arcana 1",
                    execucao: "livre",
                    alcance: "pessoal",
                    alvo: "você",
                    duracao: "1 rodada",
                    resitencia: ""
                },
                desc: `Você amplia sua percepção, antecipando movimentos dos inimigos e achando brechas em sua defesa. Quando faz um ataque, você rola dois dados e usa o melhor resultado.`,
                custo: `\r\n +2 PM: muda a execução para padrão e a duração para cena. \r\n +5 PM: além do normal, ao atacar você, um inimigo deve rolar dois dados e usar o pior resultado. \r\n +9 PM: muda a execução para padrão, o alcance para curto, o alvo para criaturas escolhidas e a duração para cena. \r\n +14 PM: muda a execução para padrão e a duração para cena. Além do normal, você recebe um sexto sentido que avisa-o de qualquer perigo ou ameaça. Você fica imune às condições surpreendido e desprevenido e recebe +10 em Defesa e Reflexos.`
            },
            {
                meta: {
                    nome: "Condição",
                    escola: "Adivinhação",
                    ciclo: "Divina 2",
                    execucao: "padrão",
                    alcance: "curto",
                    alvo: "até 5 criaturas",
                    duracao: "cena",
                    resitencia: ""
                },
                desc: `Pela duração da magia, você sabe a posição e condição (PV atuais, se estão sob efeito de magia...) das criaturas escolhidas. Depois de lançada, a distância entre você e os alvos não importa — a magia só deixa de detectar um alvo se ele morrer ou viajar para outro plano.`,
                custo: `\r\n +1 PM: aumenta o número de alvos em +1. \r\n +1 PM: aumenta a duração para 1 dia.`
            },
            {
                meta: {
                    nome: "Conjurar Elemental",
                    escola: "Convocação",
                    ciclo: "Arcana 4",
                    execucao: "completa",
                    alcance: "médio",
                    alvo: "aliado elemental",
                    duracao: "sustentada",
                    resitencia: ""
                },
                desc: `Essa magia transforma uma porção de um elemento inerte em uma criatura elemental Grande do tipo do elemento alvo. Por exemplo, lançar esta magia numa fogueira ou tocha cria um elemental do fogo. Você pode criar elementais do ar, água, fogo e terra com essa magia. O elemental obedece a todos os seus comandos e pode funcionar como um aliado mestre do tipo destruidor (mas sem custo em PM) e mais um tipo entre os indicados na lista abaixo. Somente você pode ser auxiliado pelo elemental. \r\n Ar: assassino, perseguidor ou vigilante. Dano de eletricidade. \r\n Água: ajudante, curandeiro ou guardião. Dano de frio. \r\n Fogo: atirador, combatente ou fortão. Dano de fogo. \r\n Terra: combatente, guardião ou montaria. Dano de impacto.`,
                custo: `\r\n +5 PM: o elemental muda para Enorme e recebe dois tipos de aliado indicados no seu elemento. \r\n +5 PM:  você convoca um elemental de cada tipo. Você pode ordenar que cada elemental auxilie você ou seus aliados. Requer 5º círculo.`
            },
            {
                meta: {
                    nome: "Conjurar Monstro",
                    escola: "Convocação",
                    ciclo: "Arcana 1",
                    execucao: "completa",
                    alcance: "curto",
                    alvo: "Efeito, 1 criatura conjurada",
                    duracao: "sustentada",
                    resitencia: ""
                },
                desc: `muito grande para mensagem de bot, veja a magia completa na pagina 179 ou na wike do t20 https://tsrd.fandom.com/pt-br/wiki/Magias_1%C2%B0_C%C3%ADrculo_T20#Conjurar_Monstro`,
                custo: `\r\n +1 PM: o monstro ganha deslocamento de escalada ou natação igual ao seu deslocamento. \r\n +1 PM: aumenta o deslocamento do monstro em +3m. \r\n +1 PM: muda o tipo de dano do ataque do monstro para ácido, fogo, frio ou eletricidade. muito grande para mensagem de bot, veja a magia completa na pagina 179 ou na wike do t20 https://tsrd.fandom.com/pt-br/wiki/Magias_1%C2%B0_C%C3%ADrculo_T20#Conjurar_Monstro`
            },
            {
                meta: {
                    nome: "Conjurar Mortos-Vivos",
                    escola: "Necromancia",
                    ciclo: "Universal 2",
                    execucao: "completa",
                    alcance: "curto",
                    alvo: "Efeito, 6 mortos-vivos",
                    duracao: "sustentada",
                    resitencia: ""
                },
                desc: `Seis esqueletos de tamanho Médio feitos de energia negativa emergem do chão em espaços desocupados escolhidos por você dentro do alcance. Você pode usar uma ação de movimento para fazer os mortos-vivos andarem (eles têm deslocamento 9m) ou uma ação padrão para fazer com que ataquem criaturas adjacentes, causando 1d6+2 pontos de dano de trevas. Os esqueletos têm For 14, Des 14 e todos os outros atributos nulos; eles têm 6 PV, não têm valor de Defesa ou testes de resistência (qualquer efeito os acerta automaticamente) e são imunes a atordoamento, dano não letal, doença, encantamento, fadiga, frio, ilusão, paralisia, sono e veneno. Eles desaparecem quando são reduzidos a 0 PV ou no fim da cena. Os mortos-vivos não agem sem receber uma ordem. Usos criativos para criaturas invocadas fora de combate ficam a critério do mestre. `,
                custo: `\r\n +2 PM: aumenta o número de mortosvivos conjurados em +1. \r\n +3 PM: em vez de esqueletos, conjura carniçais. Requer 3º círculo. \r\n +7 PM: em vez de esqueletos, conjura sombras. Requer 4º círculo.\r\nCarniçal: como o esqueleto, mas tem For 16, Des 16, 12 PV e causa 1d8+3 pontos de dano de trevas mais 1d8 pontos de dano de veneno. Além disso, criaturas atingidas por um carniçal devem passar num teste de Fortitude (CD igual à da magia) ou ficam paralisadas por 1 rodada. Uma criatura que passe no teste de resistência fica imune à paralisia dos carniçais por 24 horas. \r\n Sombra: como o esqueleto, mas tem a habilidade incorpóreo, Des 18, 30 PV e causa 1d10 pontos de dano de trevas mais 1d10 pontos de dano de frio. Além disso, criaturas vivas atingidas por uma sombra devem passar num teste de Fortitude (CD igual à da magia) ou perdem 1d4 PM. Sombras perdem a habilidade incorpóreo quando expostas à luz do sol.`
            },
            {
                meta: {
                    nome: "Consagrar",
                    escola: "Evocação",
                    ciclo: "Divina 1",
                    execucao: "padrão",
                    alcance: "longo",
                    alvo: "Área, esfera com 9m de raio",
                    duracao: "1 dia",
                    resitencia: ""
                },
                desc: `Esta magia enche a área com energia positiva. Magias e efeitos de luz que curam pontos de vida ou canalizam energia positiva têm seus efeitos maximizados. Por exemplo, Curar Ferimentos cura automaticamente 18 pontos de vida. Esta magia não pode ser lançada em uma área contendo um símbolo dedicado a qualquer divindade, exceto a sua. Consagrar anula Profanar.`,
                custo: `\r\n +1 PM: além do normal, mortos-vivos na área sofrem –2 em testes e Defesa. \r\n +2 PM: aumenta as penalidades para mortos-vivos em –1. \r\n +9 PM: muda a execução para 1 hora, a duração para permanente e adiciona componente material (incenso e óleos no valor de T$ 1.000). Requer 4º círculo.`
            },
            {
                meta: {
                    nome: "Contato Extraplanar",
                    escola: "Adivinhação",
                    ciclo: "Arcana 3",
                    execucao: "completa",
                    alcance: "pessoal",
                    alvo: "você",
                    duracao: "1 dia",
                    resitencia: ""
                },
                desc: `Sua mente viaja até outro plano de existência, onde entra em contato com seres extraplanares como gênios, demônios ou elementais. Você firma um contrato com uma dessas entidades para que o auxilie durante o dia, em troca de se alimentar de seu mana. Quando a magia é lançada, você recebe 6d6 dados de auxílio. Enquanto a magia durar, sempre que for realizar um teste de perícia, você pode gastar qualquer quantidade desses d6 e adicionar o resultado rolado como bônus no teste. No entanto, esse auxílio tem um preço: sempre que rolar um “6” num desses d6, a entidade “suga” 1 PM de você. A magia termina quando você ficar sem dados para rolar, sem PM ou no fim do dia (o que acontecer primeiro).`,
                custo: `\r\n +2 PM: aumenta o número de dados de auxílio em +1. \r\n +8 PM: Muda os dados de auxílio para d12. Sempre que rolar um resultado 12 num desses d12, a entidade “suga” 2 PM de você. Requer 4º círculo.`
            },
            {
                meta: {
                    nome: "Controlar a Gravidade",
                    escola: "Transmutação",
                    ciclo: "Arcana 4",
                    execucao: "padrão",
                    alcance: "médio",
                    alvo: "Área, cubo de 12m de lado",
                    duracao: "sustentada",
                    resitencia: ""
                },
                desc: `Você controla os efeitos da gravidade dentro da área. Ao lançar a magia, escolha um dos efeitos. muito grande para mensagem de bot, veja a magia completa na pagina 180 ou na wike do t20 https://tsrd.fandom.com/pt-br/wiki/Magias_4%C2%B0_C%C3%ADrculo_T20#Controlar_a_Gravidade`,
                custo: `não tem`
            },
            {
                meta: {
                    nome: "Controlar Água",
                    escola: "Transmutação",
                    ciclo: "Divina 3",
                    execucao: "padrão",
                    alcance: "longo",
                    alvo: "esfera com 30m de raio",
                    duracao: "cena",
                    resitencia: "veja texto"
                },
                desc: `Você pode controlar os movimentos e comportamentos da água. Ao lançar a magia, escolha um dos efeitos abaixo. \r\n Congelar: toda a água mundana na área é congelada. Criaturas nadando na área ficam presas; escapar exige gastar uma ação padrão e passar num teste de Atletismo ou Acrobacia. muito grande para mensagem de bot, veja a magia completa na pagina 180 ou na wike do t20 https://tsrd.fandom.com/pt-br/wiki/Magias_3%C2%B0_C%C3%ADrculo_T20#Controlar_.C3.81gua`,
                custo: `\r\n +2 PM: aumenta o dano em +2d8.`
            },
            {
                meta: {
                    nome: "Controlar Fogo",
                    escola: "Evocação",
                    ciclo: "Divina 2",
                    execucao: "padrão",
                    alcance: "curto",
                    alvo: "veja texto",
                    duracao: "cena",
                    resitencia: ""
                },
                desc: `Você pode criar, moldar, mover ou extinguir chamas e emanações de calor. Ao lançar a magia, escolha um dos efeitos. \r\n Chamejar: o alvo é armas escolhidas. Elas causam +1d6 de dano de fogo. Também afeta armas naturais e ataques desarmados. muito grande para mensagem de bot, veja a magia completa na pagina 181 ou na wike do t20 https://tsrd.fandom.com/pt-br/wiki/Magias_2%C2%B0_C%C3%ADrculo_T20#Controlar_Fogo`,
                custo: `\r\n +1 PM: muda a duração para sustentada e a resistência para Reflexos reduz à metade. Em vez do normal, você deve escolher o seguinte efeito. Labaredas: a cada rodada, você pode gastar uma ação livre para projetar uma labareda, acertando um alvo em alcance curto a partir da chama. O alvo sofre 4d6 pontos de dano de fogo (Reflexos reduz à metade). \r\n +2 PM: aumenta o dano em +1d6. \r\n +3 PM: muda o alvo para 1 criatura composta principalmente por fogo, lava ou magma (como um elemental do fogo) e a resistência para Fortitude parcial. Em vez do normal, se a criatura falhar no teste de resistência, é reduzida a 0 PV. Se passar, sofre 5d6 pontos de dano.`
            },
            {
                meta: {
                    nome: "Controlar Madeira",
                    escola: "Transmutação",
                    ciclo: "Divina 2",
                    execucao: "padrão",
                    alcance: "médio",
                    alvo: "1 objeto de madeira Grande ou menor",
                    duracao: "cena",
                    resitencia: ""
                },
                desc: `Você molda, retorce, altera ou repele madeira. Ao lançar a magia, escolha. Fortalecer: você deixa o alvo mais resistente. Armas têm seu dano aumentado em um passo. Escudos têm seu bônus de Defesa aumentado em +2. Além disso, estes e outros itens de madeira recebem +5 na RD e dobram seus PV. muito grande para mensagem de bot, veja a magia completa na pagina 181 ou na wike do t20 https://tsrd.fandom.com/pt-br/wiki/Magias_2%C2%B0_C%C3%ADrculo_T20#Controlar_Madeira`,
                custo: `\r\n +1 PM: muda o alcance para pessoal, o alvo para você e a duração para 1 dia. Você e seu equipamento se transformam em uma árvore de tamanho Grande. Nessa forma, você não pode falar ou fazer ações físicas, mas consegue perceber seus arredores normalmente. Se for atacado nessa forma, a magia é anulada. Um teste de Sobrevivência (CD 30) revela que você não é uma árvore verdadeira. \r\n +3 PM: muda o alvo para área de quadrado com 9m de lado e a duração para cena. Em vez do normal, qualquer vegetação na área fica rígida e afiada. A área é considerada terreno difícil e criaturas que andem nela sofrem 1d6 pontos de dano para cada 1,5m que avancem. \r\n +7 PM: muda o alvo para objeto de madeira Enorme ou menor. Requer 3º círculo. \r\n +12 PM: muda o alvo para objeto de madeira Colossal ou menor. Requer 4º círculo.`
            },
            {
                meta: {
                    nome: "Controlar o Clima",
                    escola: "Transmutação",
                    ciclo: "Divina 4",
                    execucao: "completa",
                    alcance: "2km",
                    alvo: "Área, círculo com 2km de raio centrado em você",
                    duracao: "4d12 horas",
                    resitencia: ""
                },
                desc: `Você muda o clima da área onde se encontra, podendo criar qualquer condição climática: chuva, neve, ventos, névoas... Veja o Capítulo 6: O Mestre para os efeitos em jogo do clima.`,
                custo: `\r\n +1 PM (Apenas Druidas): muda o raio da área para 3km e duração para 1d4 dias.`
            },
            {
                meta: {
                    nome: "Controlar o Tempo",
                    escola: "Transmutação",
                    ciclo: "Arcana 5",
                    execucao: "padrão",
                    alcance: "curto",
                    alvo: "veja texto",
                    duracao: "veja texto",
                    resitencia: ""
                },
                desc: `Aquele que controla o tempo controla o mundo. Escolha um dos efeitos a seguir. \r\nCongelar o tempo: você entra em um estado atemporal que faz todas as criaturas e efeitos parecerem congelados. Você pode agir livremente por 3 rodadas de tempo aparente. Durante essas rodadas, efeitos contínuos não o afetam, mas criaturas e objetos em posse de criaturas ficam imunes a seus ataques e magias. Magias de área e com duração maior que este efeito vão agir normalmente quando a aceleração acabar. Este efeito costuma ser usado para fortalecer suas defesas e invocar criaturas. muito grande para mensagem de bot, veja a magia completa na pagina 181 ou na wike do t20 https://tsrd.fandom.com/pt-br/wiki/Magias_5%C2%B0_C%C3%ADrculo_T20#Controlar_o_Tempo`,
                custo: `não tem.`
            },
            {
                meta: {
                    nome: "Controlar Plantas",
                    escola: "Transmutação",
                    ciclo: "Divina 1",
                    execucao: "padrão",
                    alcance: "curto",
                    alvo: "quadrado com 9m de lado",
                    duracao: "cena",
                    resitencia: "Reflexos anula"
                },
                desc: `Esta magia só pode ser lançada em uma área com vegetação. As plantas se enroscam nas criaturas da área. Aquelas que falharem na resistência ficam enredadas. Uma vítima pode se libertar com uma ação padrão e um teste de Acrobacia ou Atletismo (CD igual à da magia). Além disso, a área é considerada terreno difícil. No início de seus turnos, a vegetação tenta enredar novamente qualquer criatura na área, exigindo um novo teste de Reflexos.`,
                custo: `\r\nTruque: muda a área para alvo de 1 planta e a resistência para nenhuma. Em vez do normal, você pode fazer a planta se mover como se fosse animada. Ela não pode causar dano ou atrapalhar a concentração de um conjurador. \r\n +1 PM: muda a duração para instantânea. Em vez do normal, as plantas na área diminuem, como se tivessem sido podadas. Terreno difícil muda para terreno normal e não oferece camuflagem. Esse efeito anula o uso normal de Controlar Plantas. \r\n+1 PM: além do normal, criaturas que falhem na resistência também ficam presas. \r\n+2 PM: muda o alcance para pessoal, a área para alvo (você) e a resistência para nenhuma. Em vez do normal, você consegue se comunicar com plantas, que começam com atitude prestativa ao lidar com você. Além disso, você pode fazer testes de Diplomacia com plantas. Em geral, plantas têm uma percepção limitada de seus arredores e normalmente fornecem respostas simplórias.`
            },
            {
                meta: {
                    nome: "Controlar Terra",
                    escola: "Transmutação",
                    ciclo: "Divina 3",
                    execucao: "padrão",
                    alcance: "longo",
                    alvo: "Área, 9 cubos com 1,5m de lado",
                    duracao: "instantânea",
                    resitencia: "veja texto"
                },
                desc: `Você manipula a densidade e a forma de toda terra, pedra, lama, argila ou areia na área. Ao lançar a magia, escolha. \r\n Amolecer: se afetar o teto, uma coluna ou suporte, provoca um desabamento que causa 10d6 pontos de dano de impacto às criaturas na área (Reflexos reduz à metade). Se afetar um piso de terra ou pedra, cria terreno difícil de areia ou argila, respectivamente. \r\n Modelar: pode usar pedra ou argila para criar um ou mais objetos simples de tamanho Enorme ou menor (sem mecanismos ou partes móveis). Por exemplo, pode transformar um tijolo em uma maça, criar uma passagem onde antes havia apenas uma parede ou levantar uma ou mais paredes que oferecem cobertura total (RD 8 e 50 PV para cada 3m). \r\n Solidificar: transforma lama ou areia em terra ou pedra. Criaturas com os pés na superfície ficam presas. Elas podem se soltar com uma ação padrão e um teste de Acrobacia ou Atletismo.`,
                custo: `\r\n +1 PM: aumenta o número de cubos de 1,5m em +2. \r\n +1 PM: muda o alcance para pessoal, o alvo para você e a duração para 1 dia. Você e seu equipamento fundem-se a uma superfície ou objeto adjacente feito de pedra, terra, argila ou areia que possa acomodá-lo. Você pode voltar ao espaço adjacente como uma ação livre, anulando a magia. Enquanto mesclado você não pode falar ou fazer ações físicas, mas consegue perceber seus arredores normalmente. Pequenos danos não o afetam, mas se o objeto (ou o trecho onde você está imerso) for destruído, a magia é anulada, você volta a um espaço livre adjacente e sofre 10d6 pontos de dano.`
            },
            {
                meta: {
                    nome: "Convocação Instantânea",
                    escola: "Convocação",
                    ciclo: "Arcana 3",
                    execucao: "padrão",
                    alcance: "ilimitado",
                    alvo: "1 objeto de até 5kg",
                    duracao: "instantânea",
                    resitencia: ""
                },
                desc: `Você invoca um objeto de qualquer lugar para sua mão. O item deve ter sido previamente preparado com uma runa ou marca pessoal sua (ao custo de T$ 5). A magia não funciona se o objeto estiver com outra criatura, mas você saberá onde ele está e quem o está carregando (ou sua descrição física, caso não conheça a criatura).`,
                custo: `\r\n +1 PM: além do normal, até 1 hora depois que lançou a magia, você pode gastar uma ação de movimento para enviar o objeto de volta para o local em que ele estava antes. \r\n +1 PM: muda o alvo para um baú Médio, a duração para permanente e adiciona sacrifício de 1 PM. Em vez do normal, você esconde um baú no Etéreo, com até 250kg de equipamento. A magia faz com que qualquer objeto caiba no baú, independentemente do seu tamanho. Uma vez escondido, você pode convocar o baú para um espaço livre adjacente a qualquer momento, como uma ação padrão. Componente material: baú construído com matéria-prima da melhor qualidade (T$ 1.000). Você deve ter em mãos uma miniatura do baú, no valor de T$ 100, para invocar o baú verdadeiro. \r\n +2 PM: aumenta o número de alvos em +1. \r\n +2 PM: aumenta o peso limite do alvo em um fator de 10, até 500 kg. Um objeto muito grande ou pesado para aparecer em suas mãos é teletransportado para um espaço adjacente a sua escolha.`
            },
            {
                meta: {
                    nome: "Crânio Voador de Vladislav",
                    escola: "Necromancia",
                    ciclo: "Arcana 2",
                    execucao: "padrão",
                    alcance: "médio",
                    alvo: "1 criatura",
                    duracao: "instantânea",
                    resitencia: "Fortitude reduz à metade"
                },
                desc: `Esta magia cria um crânio humano envolto em energia negativa, que causa 4d8+4 pontos de dano de trevas quando atinge o alvo e se desfaz emitindo um som horrendo, podendo deixar abalados todos os inimigos num raio de 3m. Passar no teste de resistência diminui o dano pela metade e evita a condição abalado. Alvos que já estiverem abalados e falharem no teste ficam apavorados por 1d4 rodadas.`,
                custo: `\r\n +1 PM: aumenta o dano em +1d8+1. \r\n +2 PM: aumenta o número de alvos em +1.`
            },
            {
                meta: {
                    nome: "Criar Elementos",
                    escola: "Convocação",
                    ciclo: "Divina 1",
                    execucao: "padrão",
                    alcance: "curto",
                    alvo: "Efeito, elemento escolhido",
                    duracao: "instantânea",
                    resitencia: ""
                },
                desc: `Você cria uma pequena porção de um elemento, a sua escolha. Os elementos criados são reais, não mágicos. Elementos físicos devem surgir em uma superfície. Em vez de um cubo, podese criar objetos simples (sem partes móveis) feitos de gelo, terra ou pedra. Água: enche um recipiente de tamanho Minúsculo (como um odre) com água potável ou cria um cubo de gelo de tamanho Minúsculo. \r\n Ar: cria um vento fraco em um quadrado de 1,5m. Isso purifica a área de qualquer gás ou fumaça, ou remove névoa por uma rodada. \r\n Fogo: cria uma chama que ilumina como uma tocha. Você pode segurá-la na palma de sua mão sem se queimar, ou fazê-la surgir em um quadrado de 1,5m. Se uma criatura ou objeto estiver no quadrado, sofre 1d6 pontos de dano de fogo; se falhar num teste de Reflexos, pega fogo. \r\n Terra: cria um cubo de tamanho Minúsculo feito de terra, argila ou pedra.`,
                custo: `\r\n +1 PM: aumenta a quantidade do elemento em um passo (uma categoria de tamanho para água ou terra, +1 quadrado de 1,5m para ar e fogo). \r\n +1 PM: muda o efeito para alvo 1 criatura ou objeto e a resistência para Reflexos reduz à metade. Se escolher água ou terra, você arremessa o cubo ou objeto criado no alvo, causando 2d4 pontos de dano de impacto. Para cada categoria de tamanho acima de Minúsculo, o dano aumenta em um passo. O cubo se desfaz em seguida. \r\n +2 PM: se escolheu fogo, aumenta o dano inicial de cada chama em +1d6.`
            },
            {
                meta: {
                    nome: "Criar Ilusão",
                    escola: "Ilusão",
                    ciclo: "Arcana 1",
                    execucao: "padrão",
                    alcance: "médio",
                    alvo: "Efeito, ilusão que se estende a até 4 cubos de 1,5m",
                    duracao: "cena",
                    resitencia: "Vontade desacredita"
                },
                desc: `Esta magia cria uma ilusão visual ou sonora: uma criatura, uma parede, um grito de socorro, um uivo assustador... A magia cria apenas imagens ou sons simples, com volume equivalente ao tom de voz normal para cada cubo de 1,5m no efeito. Não é possível criar cheiros, texturas ou temperaturas, nem sons complexos, como uma música ou diálogo. Criaturas e objetos atravessam uma ilusão sem sofrer dano, mas a magia pode, por exemplo, esconder uma armadilha ou inimigo. A magia é anulada se você sair do alcance.`,
                custo: `\r\n +1 PM: muda a duração para sustentada. A cada rodada você pode usar uma ação livre para mover a imagem ou alterar levemente o som, como aumentar o volume ou fazer com que pareça se afastar ou se aproximar, ainda dentro dos limites do efeito. Você pode, por exemplo, criar a ilusão de um fantasma que anda pela sala, controlando seus movimentos. Quando você para de sustentar a magia, a imagem ou som persistem por mais uma rodada antes de a magia se dissipar. \r\n +1 PM: aumenta o efeito da ilusão em +1 cubo de 1,5m. muito grande para mensagem de bot, veja a magia completa na pagina 183 ou na wike do t20 https://tsrd.fandom.com/pt-br/wiki/Magias_1%C2%B0_C%C3%ADrculo_T20#Criar_Ilus.C3.A3o`
            },
            {
                meta: {
                    nome: "Cúpula de Repulsão",
                    escola: "Abjuração",
                    ciclo: "Divina 4",
                    execucao: "padrão",
                    alcance: "pessoal",
                    alvo: "você",
                    duracao: "cena",
                    resitencia: ""
                },
                desc: `Uma cúpula de energia invisível o cerca, impedindo a aproximação de certas criaturas. Escolha um tipo de criatura com uma limitação específica, como animais mamíferos, monstros insetoides ou mortos-vivos corpóreos; ou uma raça, como elfos, goblins ou minotauros. Criaturas com o tipo e a limitação escolhidos (ou com a raça escolhida) não podem se aproximar a até 3m de você. Isso detém ataques corpo a corpo, mas não ataques à distância ou magias. Se você tentar se aproximar além do limite de 3m, rompe a cúpula e a magia é anulada.`,
                custo: `\r\n +1 PM: você pode se aproximar sem romper a cúpula. \r\n +4 PM: você não precisa escolher uma limitação do tipo de criaturas que não pode se aproximar. \r\n +8 PM: muda a duração para sustentada. Além do normal, qualquer ataque, magia ou habilidade de uma criatura afetada é desviado pelo efeito e não o atinge. Requer 5º círculo.`
            },
            {
                meta: {
                    nome: "Curar Ferimentos",
                    escola: "Evocação",
                    ciclo: "Divina 1",
                    execucao: "padrão",
                    alcance: "toque",
                    alvo: "1 criatura",
                    duracao: "instantânea",
                    resitencia: ""
                },
                desc: `Você canaliza energia positiva que recupera 2d8+2 pontos de vida na criatura tocada. Como mortos-vivos usam energia negativa, esta magia causa dano de luz a eles (Vontade reduz à metade). Curar Ferimentos anula Infligir Ferimentos.`,
                custo: `\r\n Truque: em vez do normal, estabiliza uma criatura. Truque: muda o alvo para 1 morto-vivo. Em vez do normal, causa 1d8 pontos de dano de luz (Vontade reduz à metade). \r\n +1 PM: aumenta a cura em +1d8+1. \r\n +2 PM: muda o alcance para curto. \r\n +5 PM: muda o alcance para curto e o alvo para criaturas escolhidas.`
            },
            {
                meta: {
                    nome: "Deflagração de Mana",
                    escola: "Evocação",
                    ciclo: "Arcana 5",
                    execucao: "completa",
                    alcance: "pessoal",
                    alvo: "Área, explosão de 15m de raio",
                    duracao: "instantânea",
                    resitencia: "Fortitude parcial"
                },
                desc: `Após concentrar seu mana, você explode em dano de essência, como uma estrela em plena terra. Todas as criaturas na área sofrem 150 pontos de dano de essência e todos os itens mágicos (exceto artefatos) deixam de funcionar permanentemente. Você não é afetado pela magia. Alvos que passem no teste de Fortitude sofrem apenas metade do dano (75) e seus itens mágicos voltam a funcionar depois de um dia.`,
                custo: `\r\n +1 PM: aumenta o dano em 10. \r\n +5 PM: afeta apenas criaturas a sua escolha.`
            },
            {
                meta: {
                    nome: "Desejo",
                    escola: "Transmutação",
                    ciclo: "Arcana 5",
                    execucao: "completa",
                    alcance: "veja texto",
                    alvo: "veja texto",
                    duracao: "veja texto",
                    resitencia: "veja texto"
                },
                desc: `Esta é a mais poderosa das magias arcanas, permitindo alterar a realidade a seu bel-prazer. Com um Desejo você pode: \r\n• Duplicar qualquer magia arcana de 4º círculo ou menor. \r\n• Criar um item mundano no valor de até T$ 25.000. \r\n • Conceder a uma criatura um bônus permanente de +1 em um atributo. Um mesmo atributo pode ser aumentado em até +5 com essa magia. \r\n• Desfazer os efeitos nocivos de qualquer magia de 4º círculo ou menor. \r\n • Curar todos os PV e todas as condições de até 10 criaturas. \r\n Texto muito grande pra mensagem de bot. Veja a magia completa na pagina 184 ou na wiki do t20 https://tsrd.fandom.com/pt-br/wiki/Magias_5%C2%B0_C%C3%ADrculo_T20#Desejo`,
                custo: `Custo Adicional: sacrifício de 1 PM.`
            },
            {
                meta: {
                    nome: "Desespero Esmagador ",
                    escola: "Encantamento",
                    ciclo: "Arcana 2",
                    execucao: "padrão",
                    alcance: "6m",
                    alvo: "Área, cone",
                    duracao: "cena",
                    resitencia: "Vontade parcial"
                },
                desc: `Humanoides na área são acometidos de grande tristeza, adquirindo as condições fraco e frustrado. Se passarem na resistência, adquirem esta condição por uma rodada.`,
                custo: `\r\n +2 PM: em vez do normal, as condições adquiridas são debilitado e esmorecido. \r\n +3 PM: em vez do normal, afeta qualquer tipo de criatura. \r\n +3 PM: além do normal, criaturas que falhem na resistência ficam aos prantos (em termos de jogo, adquirem a condição pasmo) por 1 rodada. Requer 3º círculo.`
            },
            {
                meta: {
                    nome: "Desintegrar",
                    escola: "Transmutação",
                    ciclo: "Arcana 4",
                    execucao: "padrão",
                    alcance: "médio",
                    alvo: "1 criatura ou objeto",
                    duracao: "instantânea",
                    resitencia: "Fortitude parcial"
                },
                desc: `Você dispara um raio fino e esverdeado que causa 10d12 pontos de dano de essência. Se o alvo passar no teste de resistência, em vez disso sofre 2d12 pontos de dano. \r\nIndependentemente do resultado do teste de Fortitude, se os PV do alvo forem reduzidos a 0 ou menos, ele será completamente desintegrado, restando apenas pó.`,
                custo: `\r\n +4 PM: aumenta o dano total em +2d12 e o dano mínimo em +1d12.`
            },
            {
                meta: {
                    nome: "Despedaçar",
                    escola: "Evocação",
                    ciclo: "Divina 1",
                    execucao: "padrão",
                    alcance: "curto",
                    alvo: "1 criatura ou objeto mundano Pequeno",
                    duracao: "instantânea",
                    resitencia: "Fortitude parcial ou Reflexos anula"
                },
                desc: `Esta magia emite um som alto e agudo. Se o alvo é uma criatura, sofre 1d8+2 pontos de dano de impacto e fica atordoado por uma rodada (Fortitude reduz o dano à metade e evita o atordoamento). Construtos sofrem dano dobrado por essa magia. Se o alvo é um objeto, é destruído (Reflexos anula).`,
                custo: `\r\n +2 PM: aumenta o dano em +1d8+2. \r\n +2 PM: muda o alvo para objeto mundano Médio. Requer 2º círculo. \r\n +5 PM: muda o alvo para objeto mundano Grande. Requer 3º círculo. \r\n +9 PM: muda o alvo para objeto mundano Enorme. Requer 4º círculo. \r\n +14 PM: muda o alvo para objeto mundano Colossal. Requer 5º círculo. \r\n +5 PM: muda o alcance para pessoal e a área para explosão de 6m de raio. Todas as criaturas e objetos na área são afetados.`
            },
            {
                meta: {
                    nome: "Despertar Consciência",
                    escola: "Encantamento",
                    ciclo: "Divina 3",
                    execucao: "completa",
                    alcance: "toque",
                    alvo: "1 animal ou planta",
                    duracao: "1 dia",
                    resitencia: ""
                },
                desc: `Você desperta a consciência de um animal ou planta, que passa a ajudá-lo. O alvo se torna um aliado veterano de um tipo a sua escolha entre combatente, conselheiro, curandeiro, fortão, guardião, montaria ou perseguidor. Se usar esta magia em um aliado que já possua, seu nível de poder aumenta em um passo (iniciante para veterano para mestre). Se já for um aliado mestre, fornece um bônus adicional de outro tipo de aliado iniciante (entre as escolhas acima). O alvo ganha Inteligência 3d6, +1d4 de Carisma e pode falar os idiomas que você conhece. \r\n Se não quiser ter o alvo como aliado, você pode pedir que ele proteja um local específico, atacando invasores (nesse caso, use as estatísticas apropriadas à criatura; plantas usam as estatísticas de entes).`,
                custo: `\r\n +4 PM: muda o alvo para 1 escultura mundana inanimada. Além do normal, o alvo tem as mesmas características de um construto. \r\n +4 PM: muda a duração para permanente e adiciona sacrifício de 1 PM.`
            },
            {
                meta: {
                    nome: "Detectar Ameaças ",
                    escola: "Adivinhação",
                    ciclo: "Divina 1",
                    execucao: "padrão",
                    alcance: "pessoal",
                    alvo: "Área, esfera de 9m de raio",
                    duracao: "instantânea",
                    resitencia: ""
                },
                desc: `Você percebe a presença e localização de criaturas inamistosas ou hostis na área.`,
                custo: `\r\n +0 PM: em vez de criaturas, você percebe a presença e localização de venenos. \r\n +1 PM: muda a execução para ação completa. Você descobre também a raça ou espécie e o poder das criaturas (determinado pela aura). Criaturas de 1º a 6º nível geram uma aura tênue, criaturas de 7º a 12º nível geram uma aura moderada e criaturas de 13º ao 20º nível geram uma aura poderosa. Criaturas acima do 20º nível geram uma aura avassaladora. \r\n +2 PM: em vez de criaturas, você percebe a presença e localização de armadilhas. \r\n +5 PM: muda a área para esfera de 30m de raio. Requer 3º círculo.`
            },
            {
                meta: {
                    nome: "Dificultar Detecção ",
                    escola: "Abjuração",
                    ciclo: "Arcana 3",
                    execucao: "padrão",
                    alcance: "toque",
                    alvo: "1 criatura ou objeto",
                    duracao: "1 dia",
                    resitencia: ""
                },
                desc: `Esta magia oculta a presença do alvo contra qualquer meio mágico de detecção, inclusive detectar magia. Um conjurador que lance uma magia de adivinhação para detectar a presença ou localização do alvo deve fazer um teste de Vontade. Se falhar, a magia não funciona, mas os PM são gastos mesmo assim. Se for lançada sobre uma criatura, Dificultar Detecção protege tanto a criatura quanto seu equipamento.`,
                custo: `\r\n +4 PM: muda o alvo para área de cubo de 9m. Qualquer criatura ou objeto na área recebe o efeito da magia enquanto estiver dentro dela. \r\n +4 PM: muda a duração para 1 semana.`
            },
            {
                meta: {
                    nome: "Disfarce Ilusório",
                    escola: "Ilusão",
                    ciclo: "Arcana 1",
                    execucao: "padrão",
                    alcance: "pessoal",
                    alvo: "você",
                    duracao: "cena",
                    resitencia: "Vontade desacredita"
                },
                desc: `Você muda a aparência do alvo, incluindo seu equipamento. Isso inclui altura, peso, tom de pele, cor de cabelo, timbre de voz etc. O alvo recebe +10 em testes de Enganação para disfarce. O alvo não recebe novas habilidades (você pode ficar parecido com outra raça, mas não ganhará suas habilidades), nem modifica o equipamento (uma espada longa disfarçada como um bordão continua funcionando e causando dano como uma espada).`,
                custo: `\r\n Truque: muda o alcance para toque, o alvo para 1 criatura e a duração para 1 semana. Em vez do normal, você faz uma pequena alteração na aparência do alvo, como deixar o nariz vermelho ou fazer brotar um singelo gerânio no alto da cabeça. A mudança é inofensiva, mas persistente — se a flor for arrancada, por exemplo, uma nova flor nascerá no local. \r\n +1 PM: muda o alcance para curto e o alvo para 1 criatura. Uma criatura involuntária pode anular o efeito com um teste de Vontade. \r\n +1 PM: muda o alcance para curto e o alvo para 1 objeto. Você pode, por exemplo, transformar pedaços de ferro em moedas de ouro. Você recebe +10 em testes de Enganação para falsificação. \r\n +2 PM: a ilusão também inclui odores e sensações. Isso muda o bônus em testes de Enganação para disfarce para +20. \r\n+3 PM: muda o alcance para curto e o alvo para criaturas escolhidas. Cada criatura pode ter uma aparência diferente. Criaturas involuntárias podem anular o efeito com um teste de Vontade. Requer 2º círculo.`
            },
            {
                meta: {
                    nome: "Dispersar as Trevas",
                    escola: "Evocação",
                    ciclo: "Divina 3",
                    execucao: "padrão",
                    alcance: "pessoal",
                    alvo: "Área, esfera de 6m de raio",
                    duracao: "instantânea",
                    resitencia: ""
                },
                desc: `Esta magia cria um forte brilho (de uma cor que remete a sua divindade) que causa diversos efeitos. Todas as magias de 3º círculo ou menor ativas na área são anuladas se você passar num teste de Religião contra a CD de cada magia. Seus aliados na área recebem +4 em testes de resistência e resistência a trevas 10 até o fim da cena, protegidos por uma aura sutil da mesma cor. Inimigos na área ficam cegos por 1d4 rodadas. Dispersar as Trevas anula Anular a Luz.`,
                custo: `\r\n +2 PM: aumenta o bônus nas resistências em +1. \r\n +4 PM: muda a área para alvo 1 criatura e a duração para cena. O alvo fica imune a efeitos de necromancia e trevas. \r\n +4 PM: muda o círculo máximo de magias dissipadas para 4º. Requer 4º círculo. \r\n +9 PM: muda o círculo máximo de magias dissipadas para 5º. Requer 5º círculo.`
            },
            {
                meta: {
                    nome: "Dissipar Magia",
                    escola: "Abjuração",
                    ciclo: "Universal 2",
                    execucao: "padrão",
                    alcance: "médio",
                    alvo: "1 criatura ou 1 objeto mágico ou esfera com 3m de raio",
                    duracao: "instantânea",
                    resitencia: ""
                },
                desc: `Esta magia anula outras magias que estejam ativas, como se sua duração tivesse acabado. Note que efeitos de magias instantâneas não podem ser dissipados (não se pode dissipar uma Bola de Fogo ou Relâmpago depois que já causaram dano...). Se lançar essa magia em uma criatura ou área, faça um teste de Misticismo; você anula as magias com CD igual ou menor que o resultado do teste. Se lançada contra um item mágico, ela o transforma em um item mundano por 1d6 rodadas.`,
                custo: `\r\n +12 PM: muda a área para esfera com 9m de raio. Em vez do normal, cria um efeito de disjunção. Todas as magias na área são automaticamente dissipadas e todos os itens mágicos na área, exceto aqueles que você estiver carregando, viram itens mundanos (itens mágicos têm direito a um teste de resistência para evitar esse efeito). Requer 5º círculo`
            },
            {
                meta: {
                    nome: "Duplicata Ilusória",
                    escola: "Ilusão",
                    ciclo: "Arcana 4",
                    execucao: "padrão",
                    alcance: "médio",
                    alvo: "Efeito, cópia ilusória",
                    duracao: "cena",
                    resitencia: ""
                },
                desc: `Você cria uma cópia ilusória semirreal de... você mesmo! Ela é idêntica em aparência, som e cheiro, mas é intangível. A cada turno, você escolhe se vai ver e ouvir através da duplicata ou de seu corpo original. A cópia reproduz todas as suas ações, incluindo fala. Qualquer magia com alcance de toque ou maior que você lançar pode se originar da duplicata, em vez do seu corpo original. As magias afetam outros alvos normalmente, com a única diferença de se originarem da cópia, em vez de você. Se quiser que a duplicata faça algo diferente de você, deve gastar uma ação de movimento. Qualquer criatura que interagir com a cópia tem direito a um teste de Vontade para perceber que é uma ilusão. As magias que se originam dela, no entanto, são reais. A cópia desaparece se sair do alcance.`,
                custo: `\r\n +3 PM: cria uma cópia adicional.`
            },
            {
                meta: {
                    nome: "Enfeitiçar",
                    escola: "Encantamento",
                    ciclo: "Arcana 1",
                    execucao: "padrão",
                    alcance: "curto",
                    alvo: "1 humanoide",
                    duracao: "cena",
                    resitencia: "Vontade anula"
                },
                desc: `Esta magia torna o alvo prestativo (veja Diplomacia no Capítulo 2: Perícias). Ele não fica sob seu controle, mas percebe suas palavras e ações da maneira mais favorável possível. Você recebe um bônus de +10 em testes de Diplomacia com a vítima. Um alvo hostil ou que esteja envolvido em um combate recebe +5 em seu teste de resistência. Se você ou seus aliados tomarem qualquer ação hostil contra o alvo, a magia é anulada e o alvo retorna à atitude que tinha antes (ou piorada, de acordo com o mestre).`,
                custo: `\r\n+2 PM: em vez do normal, você sugere uma ação para o alvo e ele obedece. A sugestão deve ser feita de modo que pareça aceitável, a critério do mestre. Pedir ao alvo que pule de um precipício, por exemplo, anula a magia. Já sugerir a um guarda que descanse um pouco, de modo que você e seus aliados passem por ele, é aceitável. Quando o alvo executa a ação, a magia termina. Você pode determinar uma condição específica para a sugestão: por exemplo, que um rico mercador doe suas moedas para o primeiro mendigo que encontrar. \r\n +5 PM: muda o alvo para 1 espírito ou monstro. Requer 3º círculo. +5 PM: afeta todos os alvos dentro do alcance.`
            },
            {
                meta: {
                    nome: "Engenho de Mana",
                    escola: "Abjuração",
                    ciclo: "Arcana 5",
                    execucao: "padrão",
                    alcance: "médio",
                    alvo: "Efeito, disco de energia com 1,5m de diâmetro",
                    duracao: "sustentada",
                    resitencia: ""
                },
                desc: `Esta poderosa magia manifesta um disco de energia que lembra uma roda de engenho e flutua no ponto em que foi conjurado. O disco é intangível, imune a dano e não pode ser movido. Enquanto estiver ativo, tenta absorver qualquer magia lançada em alcance médio dele, como uma ação automática de contramágica, usando seu teste de Misticismo. Caso vença o teste, o engenho não só anula a magia como absorve os PM usados para lançá-la, acumulando PM temporários. No seu turno, você pode gastar PM guardados no disco para lançar magias.`,
                custo: `\r\n +1 PM: em vez de flutuar no ponto em que foi conjurado, o disco flutua atrás de você, mantendo-se sempre adjacente. \r\n +4 PM: muda a duração para 1 dia.`
            },
            {
                meta: {
                    nome: "Enxame de Pestes",
                    escola: "Convocação",
                    ciclo: "Divina 2",
                    execucao: "completa",
                    alcance: "longo",
                    alvo: "Efeito, 1 enxame",
                    duracao: "sustentada",
                    resitencia: "Fortitude reduz à metade"
                },
                desc: `Você conjura um enxame de criaturas a sua escolha, como besouros, gafanhotos, mosquitos, ratos, morcegos ou serpentes. O enxame ocupa o espaço de um alvo escolhido por você, causando 2d12 pontos de dano de veneno no fim de seus turnos. Você pode mudar o alvo para outro dentro do alcance com uma ação livre, mas apenas uma vez por rodada.`,
                custo: `\r\n +2 PM: aumenta o dano em +1d12. \r\n +3 PM: muda a resistência para Reflexos reduz à metade e o enxame para criaturas maiores, como gatos, guaxinins, compsognatos ou mesmo kobolds! Eles passam a causar 3d12 pontos de dano (a sua escolha entre corte, impacto ou perfuração). O resto da magia segue normal. \r\n +5 PM: aumenta o número de enxames em +1. Eles não podem se concentrar num único alvo, devendo escolher alvos diferentes. Requer 3º círculo. \r\n +7 PM: muda a resistência para Reflexos reduz à metade e o enxame para criaturas elementais, feitas de um tipo de energia a sua escolha entre ácido, eletricidade, fogo ou frio. Elas passam a causar 5d12 pontos do dano escolhido. O resto da magia segue normal. Requer 4º círculo`
            },
            {
                meta: {
                    nome: "Enxame Rubro de Ichabod",
                    escola: "Convocação",
                    ciclo: "Arcana 3",
                    execucao: "padrão",
                    alcance: "médio",
                    alvo: "Efeito, 1 enxame",
                    duracao: "sustentada",
                    resitencia: "Reflexos parcial"
                },
                desc: `Você conjura um enxame de pequenas criaturas da Tormenta. Ele surge adjacente a você e ocupa o espaço de uma criatura Média. \r\n Uma vez por rodada, você pode gastar uma ação de movimento para mover o enxame. Ele possui deslocamento 12m e pode passar pelo espaço de qualquer criatura. O enxame causa 4d12 pontos de dano de ácido a qualquer criatura que tocar em seu turno \r\n Uma criatura que comece seu turno em um espaço ocupado pelo enxame deve fazer um teste de Reflexos. Se falhar, fica agarrada (o enxame escala e cobre o corpo dela). Se você mover o enxame, a criatura se livra. A criatura pode gastar uma ação padrão e fazer um teste de Acrobacia ou Atletismo para escapar.`,
                custo: `\r\n +2 PM: aumenta o dano em +1d12. \r\n +2 PM: muda o tipo de dano para trevas. \r\n +3 PM: o enxame passa a ocupar o espaço de uma criatura Grande. \r\n +3 PM: o enxame ganha deslocamento de voo 18m. \r\n +4 PM: o enxame inclui parasitas inchados que explodem e criam novos enxames. No início de cada um de seus turnos, role 1d6. Em um resultado 5 ou 6, um novo enxame surge adjacente a um já existente. Com uma ação de movimento você pode fazer todos os enxames se moverem.`
            },
            {
                meta: {
                    nome: "Erupção Glacial",
                    escola: "Evocação",
                    ciclo: "Arcana 3",
                    execucao: "padrão",
                    alcance: "médio",
                    alvo: "Área, quadrado de 6m de lado",
                    duracao: "instantânea",
                    resitencia: "Reflexos parcial"
                },
                desc: `Estacas de gelo irrompem do chão. Criaturas na área sofrem 4d6 de dano de corte, 4d6 de dano de frio e ficam caídas. Passar no teste de Reflexos evita o dano de corte e a queda. As lanças duram pela cena, o que torna a área afetada terreno difícil, e concedem cobertura para criaturas dentro da área ou atrás dela. As estacas são destruídas caso sofram qualquer quantidade de dano por fogo mágico.`,
                custo: `\r\n +3 PM: aumenta o dano de frio em +2d6 e o dano de corte em +2d6. \r\n +4 PM: muda a área para cilindro com 6m de raio e 6m de altura e a duração para sustentada. Em vez do efeito normal, a magia cria uma tempestade de granizo que causa 3d6 pontos de dano de impacto e 3d6 pontos de dano de frio em todas as criaturas na área. A tempestade fornece camuflagem a todas as criaturas dentro dela e deixa o piso escorregadio. Piso escorregadio conta como terreno difícil e obriga criaturas na área a fazer testes de Acrobacia para equilíbrio (veja o Capítulo 2). Requer 4º círculo.`
            },
            {
                meta: {
                    nome: "Escudo da Fé",
                    escola: "Abjuração",
                    ciclo: "Divina 1",
                    execucao: "reação",
                    alcance: "curto",
                    alvo: "1 criatura",
                    duracao: "1 turno",
                    resitencia: ""
                },
                desc: `Um escudo místico se manifesta momentaneamente para bloquear um golpe. O alvo recebe +2 na Defesa.`,
                custo: `\r\n +1 PM: muda a execução para ação padrão, o alcance para toque e a duração para cena. \r\n +1 PM: também fornece ao alvo camuflagem contra ataques à distância. \r\n +2 PM: aumenta o bônus na Defesa em +1. \r\n +2 PM: muda a execução para ação padrão, o alcance para toque e a duração para cena. A magia cria uma conexão mística entre você e o alvo. Além do efeito normal, o alvo sofre apenas metade do dano por ataques e efeitos; a outra metade do dano é transferida a você. Se a qualquer momento o alvo sair do alcance, a magia é anulada. Requer 2º círculo. \r\n +3 PM: muda a duração para 1 dia. Requer 2º círculo.`
            },
            {
                meta: {
                    nome: "Esculpir Sons",
                    escola: "Ilusão",
                    ciclo: "Arcana 2",
                    execucao: "padrão",
                    alcance: "médio",
                    alvo: "1 criatura ou objeto",
                    duracao: "cena",
                    resitencia: "Vontade anula"
                },
                desc: `Esta magia altera os sons emitidos pelo alvo. Ela não é capaz de criar sons, mas pode omiti-los (como fazer uma carroça ficar silenciosa) ou transformá-los (como fazer um conjurador ficar com voz de passarinho). Você não pode criar sons que não conhece (por exemplo, não pode fazer uma criatura falar num idioma que não conheça). Uma vez que você escolha a alteração, ela não pode ser mudada. Um conjurador que tenha a voz modificada drasticamente (por exemplo, se tiver voz de passarinho) não poderá lançar magias.`,
                custo: `\r\n +2 PM: aumenta o número de alvos em +1. Todas as criaturas e objetos devem ser afetadas da mesma forma.`
            },
            {
                meta: {
                    nome: "Escuridão",
                    escola: "Necromancia",
                    ciclo: "Universal 1",
                    execucao: "padrão",
                    alcance: "curto",
                    alvo: "1 objeto",
                    duracao: "cena",
                    resitencia: ""
                },
                desc: `O alvo emana sombras em uma área com 6m de raio. Criaturas dentro da área recebem camuflagem por escuridão. As sombras não podem ser iluminadas por nenhuma fonte de luz natural. O objeto pode ser guardado (em um bolso, por exemplo) para interromper a escuridão, que voltará a funcionar caso o objeto seja revelado. Escuridão anula Luz.`,
                custo: `\r\n +1 PM: aumenta a área da escuridão em +1,5m de raio. \r\n +2 PM: muda o efeito para fornecer camuflagem total por escuridão. \r\n +2 PM: muda a duração para 1 dia. \r\n +2 PM: muda o alvo para 1 criatura e a resistência para Fortitude parcial. Você lança a magia nos olhos do alvo, que fica cego pela cena. Se passar na resistência, fica cego por uma rodada. Requer 2º círculo. \r\n +5 PM: muda o alcance para pessoal e o alvo para você. Em vez do normal, você é coberto por sombras, recebendo +10 em testes de Furtividade e camuflagem por escuridão. Requer 2º círculo.`
            },
            {
                meta: {
                    nome: "Explosão Caleidoscópica",
                    escola: "Ilusão",
                    ciclo: "Arcana 4",
                    execucao: "padrão",
                    alcance: "curto",
                    alvo: "Área, esfera de 6m de raio",
                    duracao: "instantânea",
                    resitencia: "Fortitude parcial"
                },
                desc: `Esta magia cria uma forte explosão de luzes estroboscópicas e sons cacofônicos que desorienta as criaturas atingidas. O efeito que cada criatura sofre depende do nível dela. \r\n 7º nível ou menor: se falhar no teste de resistência, fica inconsciente. Se passar, fica atordoada por 1d4 rodadas e enjoada pelo resto da cena. \r\n Entre 8º e 14º nível: se falhar no teste de resistência, fica atordoada por 1d4 rodadas e enjoada pelo resto da cena. Se passar, fica atordoada por 1 rodada e enjoada por 1d4 rodadas. \r\n Acima de 15º nível: se falhar no teste de resistência, fica atordoada por 1 rodada e enjoada por 1d4 rodadas. Se passar, fica desprevenida e enjoada por 1 rodada.`,
                custo: `não tem`
            },
            {
                meta: {
                    nome: "Explosão de Chamas",
                    escola: "Evocação",
                    ciclo: "Arcana 1",
                    execucao: "padrão",
                    alcance: "6m",
                    alvo: "Área, cone",
                    duracao: "instantânea",
                    resitencia: "Reflexos reduz à metade"
                },
                desc: `Um leque de chamas irrompe de suas mãos, causando 2d6 pontos de dano de fogo às criaturas na área.`,
                custo: `\r\n Truque: muda o alcance para curto, a área para alvo de 1 objeto e a resistência para Reflexos anula. Você gera uma pequena explosão que não causa dano mas pode acender uma vela, tocha ou fogueira. Também pode fazer um objeto inflamável com RD 0 (como uma corda ou pergaminho) ficar em chamas. Uma criatura em posse de um objeto pode evitar esse efeito se passar no teste de resistência. \r\n +1 PM: aumenta o dano em +1d6. \r\n +2 PM: muda a resistência para Reflexos parcial. Se passar, a criatura reduz o dano à metade; se falhar, fica em chamas.`
            },
            {
                meta: {
                    nome: "Ferver Sangue",
                    escola: "Necromancia",
                    ciclo: "Arcana 3",
                    execucao: "padrão",
                    alcance: "curto",
                    alvo: "1 criatura",
                    duracao: "sustentada",
                    resitencia: "Fortitude reduz à metade"
                },
                desc: `O sangue do alvo aquece rapidamente até entrar em ebulição. Quando a magia é lançada, e no início de cada um de seus turnos, o alvo sofre 3d6 pontos de dano de fogo (Fortitude reduz à metade). Se o alvo passar em dois testes de Fortitude seguidos, dissipa a magia. Se o alvo for reduzido a 0 PV pelo dano desta magia, seu corpo explode, matando-o e causando 6d6 pontos de dano de fogo em todas as criaturas a até 3m (Reflexos reduz à metade). Essa magia não afeta criaturas sem sangue, como construtos ou espíritos.`,
                custo: `\r\n +2 PM: aumenta o dano em +1d6. \r\n +9 PM: muda alvo para criaturas escolhidas. Requer 5º círculo.`
            },
            {
                meta: {
                    nome: "Físico Divino",
                    escola: "Transmutação",
                    ciclo: "Divina 2",
                    execucao: "padrão",
                    alcance: "toque",
                    alvo: "1 criatura",
                    duracao: "cena",
                    resitencia: ""
                },
                desc: `O alvo se torna uma versão mais poderosa de si mesmo. O alvo recebe +4 em Força, Destreza ou Constituição, a sua escolha. Esse aumento não oferece PV ou PM adicionais.`,
                custo: `\r\n+3 PM: em vez do normal, o alvo recebe +4 nos três atributos físicos. Requer 3º círculo. \r\n+7 PM: muda o alcance para curto e o alvo para criaturas escolhidas. \r\n+7 PM: aumenta o bônus em +2. Requer 4º círculo.`
            },
            {
                meta: {
                    nome: "Flecha Ácida",
                    escola: "Evocação",
                    ciclo: "Arcana 2",
                    execucao: "padrão",
                    alcance: "médio",
                    alvo: "1 criatura ou objeto",
                    duracao: "instantânea",
                    resitencia: "Reflexos parcial"
                },
                desc: `Você dispara um projétil que causa 4d6 pontos de dano de ácido. Se falhar no teste de resistência, o alvo também fica coberto por um muco corrosivo durante duas rodadas, sofrendo mais 2d6 de dano de ácido no início de seus turnos. Se lançada contra um objeto livre, que não esteja em posse de uma criatura, a magia causa dano dobrado e ignora a RD do objeto.`,
                custo: `\r\n +1 PM: além do normal, se o alvo coberto pelo muco ácido estiver usando armadura ou escudo, o item é corroído. Isso reduz o bônus na Defesa do item em 1 ponto permanentemente. O item pode ser consertado, restaurando seu bônus, mas é destruído totalmente se o bônus na Defesa chegar a 0. \r\n +2 PM: aumenta a redução na Defesa em +1. \r\n +2 PM: aumenta o dano inicial e o dano por rodada em +1d6.`
            },
            {
                meta: {
                    nome: "Forma Etérea",
                    escola: "Transmutação",
                    ciclo: "Arcana 4",
                    execucao: "completa",
                    alcance: "pessoal",
                    alvo: "você",
                    duracao: "sustentada",
                    resitencia: ""
                },
                desc: `As criaturas e todo o equipamento que estão vestindo são transportadas para o Plano Etéreo, que existe paralelamente ao mundo físico, o plano material. Na prática, é como ser transformado em um fantasma (mas você ainda é considerado uma criatura viva). Uma criatura etérea é invisível (mas pode se tornar visível como uma ação livre), incorpórea e capaz de se mover em qualquer direção, inclusive para cima e para baixo. Ela enxerga o plano material, mas tudo parece cinza e insubstancial, reduzindo o alcance da visão e audição para 18m. Magias de abjuração afetam criaturas etéreas, mas outras magias, não. Da mesma forma, uma criatura etérea não pode atacar nem lançar magias contra criaturas no plano material. \r\n Texto muito grande pra mensagem de bot. Veja a magia completa na pagina 188 ou na wiki do t20 https://tsrd.fandom.com/pt-br/wiki/Magias_4%C2%B0_C%C3%ADrculo_T20#Forma_Et.C3.A9rea`,
                custo: `\r\n +5 PM: muda o alcance para toque e o alvo para até 5 criaturas voluntárias que estejam de mãos dadas. Depois que a magia é lançada, as criaturas podem soltar as mãos. Requer 5º círculo.`
            },
            {
                meta: {
                    nome: "Fúria do Panteão",
                    escola: "Evocação",
                    ciclo: "Divina 5",
                    execucao: "completa",
                    alcance: "longo",
                    alvo: "Efeito, nuvem de tempestade com 90m de lado",
                    duracao: "sustentada",
                    resitencia: ""
                },
                desc: `Você cria uma nuvem de tempestade, com trovões e relâmpagos. Enquanto você sustenta a magia, ela gera os seguintes efeitos, sempre no início do seu turno. \r\n 1ª rodada (quando você lança a magia): trovões ribombam. Criaturas na área sofrem 6d6 pontos de dano de impacto e ficam surdas por uma rodada. \r\n 2ª rodada: relâmpagos caem. Até seis criaturas a sua escolha na área sofrem 10d8 pontos de dano de eletricidade. \r\n 3º rodada em diante: chuva gélida e ventos causam 6d6 pontos de dano de frio por rodada. Além disso, reduzem a visibilidade (como a magia Névoa), transformam toda a área em terreno difícil e tornam ataques à distância impossíveis. Além disso, a área conta como condição terrível para conjuradores lançarem magias.`,
                custo: `não tem`
            },
            {
                meta: {
                    nome: "Globo da verdade de gwen ",
                    escola: "adivinhação",
                    ciclo: "divina 2",
                    execucao: "padrão",
                    alcance: "curto",
                    alvo: "Efeito, 1 globo",
                    duracao: "cena",
                    resitencia: ""
                },
                desc: `Cria um globo flutuante, translúcido e intangível, com 50cm de diâmetro. O globo mostra uma cena vista pelo conjurador até uma semana atrás, permitindo que outras pessoas vejam o que ele viu.`,
                custo: `\r\n+3 PM: o globo mostra uma cena vista pelo conjurador até um mês atrás. \r\n+6 PM: como acima, até um ano atrás. \r\n+12 PM: muda o alcance para longo e o efeito para até 10 globos. Criaturas em alcance curto de um globo ficam fascinadas por ele por 1d4+1 rodadas (Vontade anula). Requer 5º círculo.`
            },
            {
                meta: {
                    nome: "Globo de Invulnerabilidade",
                    escola: "Abjuração",
                    ciclo: "Arcana 3",
                    execucao: "padrão",
                    alcance: "pessoal",
                    alvo: "você",
                    duracao: "sustentada",
                    resitencia: ""
                },
                desc: `Você é envolto por uma esfera mágica brilhante com 3m de raio, que detém qualquer magia de 2º círculo ou menor. Nenhuma magia pode ser lançada contra um alvo dentro do globo e magias de área não o penetram. No entanto, magias ainda podem ser lançadas de dentro para fora. \r\n Dissipar Magia só anula o globo se for usada diretamente sobre você, não o afetando se usada em área. Efeitos mágicos não são anulados quando entram na esfera, apenas suprimidos (voltam a funcionar fora do globo, caso sua duração não tenha acabado). \r\n O globo é imóvel e não tem efeito sobre criaturas ou objetos. Após lançá-lo, você pode entrar ou sair livremente.`,
                custo: `\r\n +4 PM: muda o efeito para afetar magias de até 3º círculo. Requer 4º círculo. \r\n +9 PM: muda o efeito para afetar magias de até 4º círculo. Requer 5º círculo.`
            },
            {
                meta: {
                    nome: "Guardião Divino",
                    escola: "Convocação",
                    ciclo: "Divina 4",
                    execucao: "padrão",
                    alcance: "curto",
                    alvo: "Efeito, elemental de luz invocado",
                    duracao: "cena ou até ser descarregado",
                    resitencia: ""
                },
                desc: `A magia invoca um elemental Pequeno, com a forma de um orbe feito de luz divina. A criatura é incorpórea, imune a dano e ilumina como uma tocha. O elemental tem 100 pontos de luz. Uma vez por rodada, durante o seu turno, o elemental pode se movimentar (deslocamento de voo 18m) e gastar quantos pontos de luz quiser para curar dano ou condições de quaisquer criaturas em alcance curto, à taxa de 1 PV por 1 ponto de luz ou uma condição (entre abalado, apavorado, alquebrado, atordoado, cego, confuso, debilitado, enjoado, esmorecido, exausto, fascinado, fatigado, fraco, frustrado, ofuscado, pasmo, sangrando, surdo ou vulnerável) por 3 pontos de luz. A magia é encerrada quando o elemental fica sem pontos de luz.`,
                custo: `não tem.`
            },
            {
                meta: {
                    nome: "Heroísmo ",
                    escola: "Encantamento",
                    ciclo: "Divina 3",
                    execucao: "padrão",
                    alcance: "toque",
                    alvo: "1 criatura",
                    duracao: "cena",
                    resitencia: ""
                },
                desc: `Esta magia imbui uma criatura com coragem e valentia. O alvo fica imune a medo e recebe +4 em testes de ataque e rolagens de dano contra inimigos que tenham mais níveis que ele.`,
                custo: `\r\n +2 PM: aumenta o bônus em +1.`
            },
            {
                meta: {
                    nome: "Hipnotismo",
                    escola: "Encantamento",
                    ciclo: "Arcana 1",
                    execucao: "padrão",
                    alcance: "curto",
                    alvo: "criaturas escolhidas de até 4º nível",
                    duracao: "1d4 rodadas",
                    resitencia: "Vontade anula"
                },
                desc: `Suas palavras e movimentos ritmados deixam as criaturas fascinadas (veja Condições, no Apêndice A). Esta magia só afeta criaturas que possam perceber você. Se usar esta magia em combate, os alvos recebem +5 em seus testes de resistência.`,
                custo: `\r\n Truque: muda o alvo para 1 criatura e a duração para 1 rodada. Em vez de fascinado, o alvo fica pasmo. Uma criatura só pode ser afetada por este truque uma vez por cena. \r\n +1 PM: em vez do normal, se passarem na resistência os alvos não saberão que foram alvos de uma magia. \r\n +2 PM: muda a duração para cena. \r\n +2 PM: muda o alcance para médio. \r\n +2 PM: muda os alvos para até 8º nível. \r\n +5 PM: muda os alvos para até 12º nível. \r\n +9 PM: muda os alvos para até 16º nível.`
            },
            {
                meta: {
                    nome: "Ilusão Lacerante",
                    escola: "Ilusão",
                    ciclo: "Arcana 3",
                    execucao: "padrão",
                    alcance: "curto",
                    alvo: "1 criatura",
                    duracao: "cena",
                    resitencia: "Vontade parcial"
                },
                desc: `Você cria uma ilusão realista de algum perigo mortal. Quando a magia é lançada, e no início de cada um de seus turnos, o alvo deve fazer um teste de Vontade; se falhar, acredita que a ilusão é real e sofre 3d6 pontos de dano. O tipo de dano depende da ilusão — uma ilusão de que o alvo está em chamas causa dano de fogo, enquanto uma ilusão de que o teto desabou sobre ele causa dano de impacto. Somente o alvo pode ver a ilusão, e racionaliza o efeito sempre que falha no teste (por exemplo, acredita que o mesmo teto pode cair sobre ele várias vezes). Se o alvo passar em dois testes de Vontade seguidos, anula o efeito.`,
                custo: `\r\n +2 PM: aumenta o dano em +2d6. O aumento pode ser de um novo tipo de dano, desde que explicado pela ilusão. \r\n +3 PM: aumenta o número de alvos em +1`
            },
            {
                meta: {
                    nome: "Imagem Espelhada",
                    escola: "Ilusão",
                    ciclo: "Arcana 1",
                    execucao: "padrão",
                    alcance: "pessoal",
                    alvo: "você",
                    duracao: "cena",
                    resitencia: ""
                },
                desc: `Três cópias ilusórias suas aparecem. As duplicatas ficam ao seu redor e imitam suas ações, tornando difícil para um inimigo saber quem atacar. Você recebe +6 na Defesa. Cada vez que um ataque contra você erra, uma das imagens desaparece e o bônus na Defesa diminui em 2. Um oponente deve ver as cópias para ser confundido. Se você estiver invisível, ou o atacante fechar os olhos, você não recebe o bônus (mas o atacante ainda sofre penalidades normais por não enxergar).`,
                custo: `\r\n +2 PM: aumenta o número de cópias em +1 (e o bônus na Defesa em +2). \r\n +5 PM: além do normal, toda vez que uma cópia é destruída, emite um clarão de luz. A criatura que destruiu a cópia faz um teste de Fortitude; se falhar, fica cega por uma rodada. Requer 3º círculo.`
            },
            {
                meta: {
                    nome: "Imobilizar ",
                    escola: "Encantamento",
                    ciclo: "Universal 3",
                    execucao: "padrão",
                    alcance: "curto",
                    alvo: "1 humanoide ou animal",
                    duracao: "cena",
                    resitencia: "Vontade parcial"
                },
                desc: `Você restringe os movimentos do alvo com sua pressão espiritual. Se o alvo falhar na resistência, fica paralisado; se passar, fica lento. A cada rodada, a criatura pode gastar uma ação completa para fazer um novo teste de Vontade e tentar anular o efeito.`,
                custo: `\r\n +1 PM: muda o alvo para 1 espírito. \r\n +2 PM: aumenta o número de alvos em +1. \r\n +3 PM: muda o alvo para 1 criatura. Requer 4º círculo.`
            },
            {
                meta: {
                    nome: "Infligir Ferimentos",
                    escola: "Necromancia",
                    ciclo: "Divina 1",
                    execucao: "padrão",
                    alcance: "toque",
                    alvo: "1 criatura",
                    duracao: "instantânea",
                    resitencia: "Fortitude reduz à metade"
                },
                desc: `Você canaliza energia negativa contra um alvo, causando 2d8+2 pontos de dano de trevas (ou curando 2d8+2 PV, se for um morto-vivo). Infligir Ferimentos anula Curar Ferimentos.`,
                custo: `\r\n +1 PM: como parte da execução da magia, você pode fazer um ataque corpo a corpo contra o alvo. Se acertar, causa o dano do ataque e o efeito da magia. \r\n +1 PM: além do normal, se falhar na resistência, o alvo fica fraco pela cena. \r\n +2 PM: aumenta o dano em 1d8+1. \r\n +5 PM: muda o alcance para curto e o alvo para criaturas escolhidas.`
            },
            {
                meta: {
                    nome: "Intervenção Divina",
                    escola: "Convocação",
                    ciclo: "Divina 5",
                    execucao: "completa",
                    alcance: "veja texto",
                    alvo: "veja texto",
                    duracao: "veja texto",
                    resitencia: "veja texto"
                },
                desc: `Você pede a sua divindade para interceder diretamente. Você pode: \r\n • Duplicar qualquer magia divina de 4º círculo ou menor. \r\n • Duplicar qualquer magia arcana de 3º círculo ou menor. \r\n • Criar um item mundano no valor de até T$ 25.000. \r\n • Desfazer os efeitos nocivos de qualquer magia de 4º círculo ou menor. \r\n • Produzir qualquer outro efeito de poder similar aos efeitos acima. Normalmente, Intervenção Divina não tem custo em PM — mas você pode implorar por algo mais poderoso. Nesse caso, a magia requer o sacrifício de 2 PM e pode fazer coisas como: \r\n • Mudar o destino de uma batalha quase perdida, ressuscitando todos os seus aliados caídos. \r\n • Proteger uma cidade de um desastre, como uma erupção vulcânica, enchente ou terremoto. \r\n • Qualquer outra coisa que o mestre autorize, conforme os desejos e objetivos da divindade do conjurador.`,
                custo: `não tem`
            },
            {
                meta: {
                    nome: "Invisibilidade",
                    escola: "Ilusão",
                    ciclo: "Arcana 2",
                    execucao: "livre",
                    alcance: "pessoal",
                    alvo: "você",
                    duracao: "1 rodada",
                    resitencia: ""
                },
                desc: `O alvo fica invisível, incluindo seu equipamento. Ele recebe camuflagem total, +20 em testes de Furtividade e pode se esconder mesmo que alguém o esteja observando diretamente. Além disso, criaturas que não possam vê-lo ficam desprevenidas contra seus ataques. \r\n A magia termina se o alvo faz um ataque ou lança uma magia ofensiva. Ações contra objetos livres não anulam a Invisibilidade (você pode tocar ou apanhar objetos que não estejam sendo seguros por outras criaturas). Causar dano indiretamente — por exemplo, acendendo o pavio de um barril de pólvora que vai detonar mais tarde — não é considerado um ataque. \r\n Objetos soltos pelo alvo voltam a ser visíveis e objetos apanhados por ele ficam invisíveis. Uma luz transportada pelo alvo nunca fica invisível (mesmo que sua fonte seja). Qualquer parte de um item carregado que se estenda além de seu alcance corpo a corpo natural se torna visível.`,
                custo: `\r\n +1 PM: muda a execução para ação padrão, o alcance para toque e o alvo para 1 criatura ou 1 objeto. \r\n +3 PM: muda a duração para cena. Requer 3º círculo. \r\n +3 PM: muda a duração para sustentada e o efeito para esfera de 3m de raio. Em vez do normal, todas as criaturas a até 3m do alvo (incluindo ele próprio) se tornam invisíveis, como no efeito normal da magia. O efeito se move juntamente com o alvo e se mantém a até 3m dele; qualquer coisa que se estenda além fica visível. Requer 3º círculo. \r\n +7 PM: muda a execução para ação padrão, o alcance para toque e o alvo para 1 criatura. A magia não é anulada caso o alvo faça um ataque ou lance uma magia ofensiva. Requer 4º círculo.`
            },
            {
                meta: {
                    nome: "Invulnerabilidade",
                    escola: "Abjuração",
                    ciclo: "Universal 5",
                    execucao: "padrão",
                    alcance: "pessoal",
                    alvo: "você",
                    duracao: "cena",
                    resitencia: ""
                },
                desc: `Esta magia cria uma barreira mágica impenetrável que protege você contra efeitos nocivos mentais ou físicos, a sua escolha. \r\nProteção mental: você fica imune às condições abalado, alquebrado, apavorado, atordoado, confuso, esmorecido, fascinado, frustrado e pasmo, além de efeitos de encantamento e ilusão. \r\nProteção física: você fica imune às condições atordoado, cego, debilitado, enjoado, envenenado, exausto, fatigado, fraco, lento, ofuscado e paralisado, além de acertos críticos, ataques furtivos e doenças.`,
                custo: `\r\n +5 PM: muda o alcance para curto e o alvo para 1 criatura.`
            },
            {
                meta: {
                    nome: "Lágrimas de Wynna ",
                    escola: "abjuração",
                    ciclo: "Divina 5",
                    execucao: "padrão",
                    alcance: "curto",
                    alvo: "1 criatura",
                    duracao: "instantânea",
                    resitencia: "Vontade parcial"
                },
                desc: `Se falhar no teste de resistência, o alvo perde a habilidade de lançar magias arcanas até o fim da cena. Se passar, perde a habilidade por uma rodada.`,
                custo: `\r\n +2 PM: muda a área para círculo de 6m de raio e o alvo para criaturas escolhidas. \r\n +5 PM: muda a execução para 1 dia e adiciona custo adicional (sacrifício de 1 PM). O alvo da magia precisa ser mantido em alcance curto do conjurador durante toda a execução. Ao término, faz um teste de Vontade. Se falhar, perde a habilidade de lançar magias arcanas permanentemente. Se passar, resiste, mas ainda pode ser alvo da magia no dia seguinte. Nenhum poder mortal é capaz de reverter essa perda. Os clérigos de Wynna dizem que sua deusa chora cada vez que este ritual é realizado.`
            },
            {
                meta: {
                    nome: "Lança Ígnea de Aleph",
                    escola: "Evocação",
                    ciclo: "Arcana 3",
                    execucao: "padrão",
                    alcance: "médio",
                    alvo: "1 criatura",
                    duracao: "instantânea",
                    resitencia: "Reflexos parcial"
                },
                desc: `Esta magia foi desenvolvida pelo mago imortal Aleph Olhos Vermelhos, um entusiasta dos estudos vulcânicos. Ela dispara um projétil de magma superaquecido contra o alvo, que sofre 4d6 pontos de dano de fogo e 4d6 pontos de dano de perfuração e fica em chamas. As chamas causam 2d6 pontos de dano por rodada, em vez do dano normal. Se passar no teste de resistência, o alvo sofre metade do dano e não fica em chamas. \r\nRespingos de rocha incandescente se espalham com a explosão, atingindo todas as criaturas adjacentes ao alvo, que devem fazer um teste de Reflexos. Se falharem, ficam em chamas, como descrito acima.`,
                custo: `\r\n+3 PM: aumenta o dano inicial em +2d6 e o dano do efeito em chamas em +1d6. \r\n+4 PM: muda a duração para cena ou até ser descarregada. Em vez do efeito normal, a magia cria quatro dardos de lava que flutuam ao lado do conjurador. Uma vez por rodada, como uma ação livre, você pode disparar um dos dardos em uma criatura, causando o efeito normal da magia. Requer 4º Círculo.`
            },
            {
                meta: {
                    nome: "Legião",
                    escola: "Encantamento",
                    ciclo: "Arcana 5",
                    execucao: "padrão",
                    alcance: "médio",
                    alvo: "até 10 criaturas na área",
                    duracao: "sustentada",
                    resitencia: "Vontade parcial"
                },
                desc: `Você domina a mente dos alvos. Os alvos obedecem cegamente a seus comandos, exceto ordens claramente suicidas. Um alvo tem direito a um teste no final de cada um de seus turnos para se livrar do efeito. Alvos que passarem no teste ficam pasmos por 1 rodada enquanto recuperam a consciência.`,
                custo: `\r\n +1 PM: aumenta o número de alvos em +1.`
            },
            {
                meta: {
                    nome: "Lendas e Histórias",
                    escola: "Adivinhação",
                    ciclo: "Universal 3",
                    execucao: "padrão",
                    alcance: "toque",
                    alvo: "1 criatura, objeto ou local",
                    duracao: "sustentada",
                    resitencia: ""
                },
                desc: `Você descobre informações sobre uma criatura, objeto ou local que esteja tocando. O que exatamente você descobre depende do mestre: talvez você não descubra tudo que há para saber, mas ganhe pistas para continuar a investigação. A cada rodada que mantiver a magia, você descobre: \r\n • Todas as informações sobre o alvo, como se tivesse passado em todos os testes de Conhecimento para tal. \r\n • Todas as habilidades do alvo. Se for uma criatura, você sabe suas estatísticas de jogo como raça, classe, nível, atributos, magias, resistências e fraquezas. Se for um item mágico, aprende seu efeito e funcionamento. \r\n • Se o alvo está sob influência de alguma magia e todas as informações sobre as magias ativas, se houver alguma.`,
                custo: `\r\n +4 PM: muda a execução para 1 dia, o alcance para ilimitado e adiciona componente material (cuba de ouro cheia d’água e ingredientes mágicos, no valor de T$ 1.000). Você ainda precisa ter alguma informação sobre o alvo, como um nome, descrição ou localização.`
            },
            {
                meta: {
                    nome: "Leque Cromático",
                    escola: "Ilusão",
                    ciclo: "Arcana 1",
                    execucao: "padrão",
                    alcance: "4,5m",
                    alvo: "cone",
                    duracao: "instantânea",
                    resitencia: "Vontade parcial"
                },
                desc: `Um cone de luzes brilhantes surge a partir das suas mãos, deixando as criaturas na área ofuscadas pela cena. Caso falhem na resistência, ficam atordoadas por 1 rodada. Esta magia afeta apenas criaturas de até 4º nível e não afeta criaturas cegas.`,
                custo: `\r\n+2 PM: aumenta a duração do efeito em +1 rodada. \r\n +2 PM: afeta alvos de até 8º nível. Requer 2º círculo. \r\n +5 PM: afeta alvos de até 12º nível. Requer 3º círculo. \r\n +9 PM: afeta alvos de até 16º nível. Requer 4º círculo. \r\n +14 PM: afeta alvos de qualquer nível. Requer 5º círculo.`
            },
            {
                meta: {
                    nome: "Libertação",
                    escola: "abjuração",
                    ciclo: "Universal 4",
                    execucao: "padrão",
                    alcance: "curto",
                    alvo: "1 criatura",
                    duracao: "cena",
                    resitencia: ""
                },
                desc: `O alvo fica imune a condições de paralisia e ignora qualquer efeito que impeça ou restrinja seu deslocamento. Por fim, pode usar habilidades que exigem liberdade de movimentos mesmo se estiver usando armadura ou escudo.`,
                custo: `\r\n +2 PM: além do normal, o alvo pode caminhar sobre a água ou outros líquidos com seu deslocamento normal. Entretanto, isso não protege contra qualquer efeito que o líquido possa causar (o alvo pode andar sobre lava, mas ainda vai sofrer dano). \r\n +2 PM: além do normal, o alvo pode escolher 20 em todos os testes de Atletismo. \r\n +2 PM: além do normal, o alvo pode escolher 20 em todos os testes de Acrobacia e pode fazer todas as manobras desta perícia mesmo sem treinamento. \r\n +5 PM: muda o alcance para curto e o alvo para até 5 criaturas. \r\n +5 PM: pode dissipar Aprisionamento.`
            },
            {
                meta: {
                    nome: "Ligação Sombria",
                    escola: "Necromancia",
                    ciclo: "Divina 4",
                    execucao: "padrão",
                    alcance: "longo",
                    alvo: "1 criatura",
                    duracao: "1 dia",
                    resitencia: "Fortitude anula"
                },
                desc: `Esse ritual cria uma conexão entre seu corpo e o da criatura alvo, deixando uma marca idêntica na pele de ambos. Enquanto a magia durar, sempre que você sofrer qualquer dano ou condição, o alvo dessa magia deve fazer um teste de Fortitude; se falhar, sofre a mesma quantidade e tipo de dano que você ou adquire a mesma condição. A magia termina se o alvo chegar a 0 pontos de vida.`,
                custo: `\r\n +5 PM: além do normal, o alvo também pode morrer por perda de PV ou se você morrer (um teste de Fortitude anula a morte).`
            },
            {
                meta: {
                    nome: "Ligação Telepática",
                    escola: "Adivinhação",
                    ciclo: "Arcana 2",
                    execucao: "padrão",
                    alcance: "toque",
                    alvo: "2 criaturas voluntárias",
                    duracao: "1 dia",
                    resitencia: ""
                },
                desc: `Você cria um elo mental entre duas criaturas com Inteligência 3 ou maior (você pode ser uma delas). As criaturas podem se comunicar independente de idioma ou distância, mas não em mundos diferentes.`,
                custo: `\r\n +2 PM: aumenta o número de alvos em +1. \r\n +3 PM: muda o alvo para 1 criatura. Em vez do normal, você cria um elo mental que permite que você veja e ouça através dos sentidos da criatura, se gastar uma ação de movimento. Uma criatura involuntária pode fazer um teste de Vontade para anular a magia por uma hora. Requer 3º círculo.`
            },
            {
                meta: {
                    nome: "Localização",
                    escola: "Adivinhação",
                    ciclo: "Arcana 2",
                    execucao: "padrão",
                    alcance: "pessoal",
                    alvo: "Área, círculo com 90m de raio",
                    duracao: "cena",
                    resitencia: ""
                },
                desc: `Esta magia pode encontrar uma criatura ou objeto a sua escolha. Você pode pensar em termos gerais (“um elfo”, “algo de metal”) ou específicos (“Gwen, a elfa”, uma espada longa). A magia indica a direção e distância da criatura ou objeto mais próximo desse tipo, caso esteja ao alcance. Você pode movimentar-se para continuar procurando. Procurar algo muito específico (“a espada longa encantada do Barão Rulyn”) exige que você tenha em mente uma imagem precisa do objeto; caso a imagem não seja muito próxima da verdade, a magia falha, mas você gasta os PM mesmo assim. Esta magia pode ser bloqueada por uma fina camada de chumbo.`,
                custo: `\r\n Truque: muda a área para alvo você. Em vez do normal, você sabe onde fica o norte e recebe +5 em testes de Sobrevivência para se orientar. \r\n +5 PM: aumenta a área em um fator de 10 (90m para 900m, 900m para 9km e assim por diante).`
            },
            {
                meta: {
                    nome: "Luz",
                    escola: "Evocação",
                    ciclo: "Universal 1",
                    execucao: "padrão",
                    alcance: "curto",
                    alvo: "1 objeto",
                    duracao: "cena",
                    resitencia: ""
                },
                desc: `O alvo emite luz (mas não produz calor) em uma área com 6m de raio. O objeto pode ser guardado (em um bolso, por exemplo) para interromper a luz, que voltará a funcionar caso o objeto seja revelado. Luz anula Escuridão.`,
                custo: `\r\n +1 PM: aumenta a área iluminada em +3m de raio. \r\n +2 PM: muda a duração para 1 dia. \r\n +2 PM: muda a duração para permanente e adiciona componente material (pó de rubi no valor de T$ 50). Requer 2º círculo. \r\n +0 PM (Apenas Arcanos): muda o alvo para 1 criatura. Você lança a magia nos olhos do alvo, que fica ofuscado pela cena. Não afeta criaturas cegas.\r\nTexto muito grande pra mensagem de bot. Veja a magia completa na pagina 188 ou na wiki do t20 https://tsrd.fandom.com/pt-br/wiki/Magias_1%C2%B0_C%C3%ADrculo_T20#Luz`
            },
            {
                meta: {
                    nome: "Manto de Sombras",
                    escola: "Ilusão",
                    ciclo: "Universal 3",
                    execucao: "padrão",
                    alcance: "pessoal",
                    alvo: "você",
                    duracao: "sustentada",
                    resitencia: ""
                },
                desc: `Você fica coberto por um manto de energia translúcida e sombria. Nesta forma, torna-se incorpóreo: só pode ser afetado por armas mágicas, magias ou outras criaturas incorpóreas e pode atravessar objetos sólidos, mas não manipulá-los. Contudo, você se torna vulnerável à luz direta: se exposto a uma fonte de luz, sofre 1 ponto de dano por rodada. \r\n Você pode gastar uma ação de movimento e 1 PM para “entrar” em uma sombra do seu tamanho ou maior e se teletransportar para outra sombra, também do seu tamanho ou maior, em alcance médio.`,
                custo: `\r\n +4 PM: muda o alcance para toque e o alvo para 1 criatura. Requer 4º círculo.`
            },
            {
                meta: {
                    nome: "Manto do Cruzado",
                    escola: "Convocação",
                    ciclo: "Divina 4",
                    execucao: "padrão",
                    alcance: "pessoal",
                    alvo: "você",
                    duracao: "sustentada",
                    resitencia: ""
                },
                desc: `Você invoca a energia sagrada de sua divindade na forma de um manto de energia sólida que reveste seu corpo. Esta magia tem duas versões. Você escolhe qual versão pode lançar quando aprende esta magia. Ela não pode ser mudada. \r\n Manto de Luz: um manto dourado e luminoso. No início de cada um de seus turnos, você e todos os seus aliados em alcance curto recuperam 2d8 PV. Você fica imune a dano de trevas e seus ataques corpo a corpo causam +2d8 pontos de dano de eletricidade. \r\n Manto de Trevas: um manto negro como a noite. No início de cada um de seus turnos, todos os inimigos em alcance curto sofrem 2d8 pontos de dano de trevas. Você cura metade de todo o dano causado pela magia.`,
                custo: `não tem.`
            },
            {
                meta: {
                    nome: "Mão Poderosa de Talude",
                    escola: "Convocação",
                    ciclo: "Arcana 4",
                    execucao: "padrão",
                    alcance: "médio",
                    alvo: "Efeito, mão gigante de energia",
                    duracao: "sustentada",
                    resitencia: ""
                },
                desc: `Esta magia cria uma mão flutuante de tamanho Grande que sempre se posiciona entre você e um oponente a sua escolha. A mão fornece cobertura (+5 na Defesa) contra esse oponente. Nada é capaz de enganar a mão— coisas como escuridão, invisibilidade, metamorfose e disfarces mundanos não a impedem de protegê-lo. A mão tem Defesa 20 e PV e resistências iguais aos seus. Com uma ação de movimento, você pode comandar a mão para que o proteja de outro oponente ou para que realize uma das ações a seguir. \r\n Agarrar: a mão usa uma manobra agarrar contra o oponente, com bônus de +20. A mão mantém o oponente agarrado, mas não causa dano. \r\n Esmagar: a mão esmaga um oponente já agarrado, causando 2d6+12 pontos de dano. \r\n Empurrar: a mão afasta o oponente, usando uma manobra empurrar com bônus de +20. A mão sempre acompanha o oponente para empurrá-lo até a distância máxima que conseguir, dentro do alcance da magia.`,
                custo: `\r\n +3 PM: aumenta o bônus dos testes em +5 e o dano de impacto em +1d6+6.`
            },
            {
                meta: {
                    nome: "Mapear",
                    escola: "Adivinhação",
                    ciclo: "Arcana 2",
                    execucao: "padrão",
                    alcance: "toque",
                    alvo: "superfície ou objeto plano, como uma mesa ou pergaminho",
                    duracao: "cena",
                    resitencia: ""
                },
                desc: `Uma fagulha percorre a superfície afetada, queimando-a enquanto esboça um mapa da região onde o conjurador está. Se você conhece o lugar, o mapa será completo. Caso contrário, apresentará apenas um esboço geral, além de um ponto de referência (para possibilitar localização) e um lugar de interesse, ambos definidos pelo mestre. A região representada no mapa tem tamanho máximo de um quadrado de 10km de lado. Caso você esteja dentro de uma construção, o mapa mostrará o andar no qual você se encontra.`,
                custo: `\r\n +3 PM: muda o alvo para 1 criatura e a duração para 1 hora. Em vez do normal, a criatura tocada descobre o caminho mais direto para entrar ou sair de um lugar. Assim, a magia pode ser usada para descobrir a rota até o relicário de uma catedral ou a saída mais próxima de uma masmorra (mas não para encontrar a localização de uma criatura ou objeto; a magia funciona apenas em relação a lugares). Caso a criatura demore mais de uma hora para percorrer o caminho, o conhecimento se perde.`
            },
            {
                meta: {
                    nome: "Marca da Obediência",
                    escola: "Encantamento",
                    ciclo: "Universal 2",
                    execucao: "padrão",
                    alcance: "toque",
                    alvo: "1 criatura",
                    duracao: "cena",
                    resitencia: "Vontade anula"
                },
                desc: `Você toca uma criatura, gravando uma marca mística no corpo dela enquanto profere uma ordem, como “não ataque a mim ou meus aliados”, “sigame” ou “não saia desta sala”. A cada rodada, o alvo deve fazer um teste de Vontade. Se falhar, deve cumprir sua ordem, gastando todas as ações de seu turno para isso. Se passar, a magia é anulada. A ordem não pode ser genérica demais (como “ajude-me”, por exemplo) e nem pode forçar uma criatura a atos suicidas.`,
                custo: `\r\n +1 PM: muda a duração para 1 dia. \r\n +3 PM: além do normal, caso o alvo tente desobedecer à ordem, a marca também causa 3d6 pontos de dano mental. Requer 3º círculo.`
            },
            {
                meta: {
                    nome: "Marionete",
                    escola: "Encantamento",
                    ciclo: "Arcana 4",
                    execucao: "padrão",
                    alcance: "médio",
                    alvo: "1 criatura",
                    duracao: "sustentada",
                    resitencia: "Fortitude anula"
                },
                desc: `Esta magia manipula o sistema nervoso do alvo. Ao sofrer a magia, e no início de cada um de seus turnos, a vítima faz um teste de Fortitude. Se passar, a magia é anulada. Se falhar, todas as suas ações físicas naquele turno estarão sob controle do conjurador. A vítima ainda tem consciência de tudo que acontece a sua volta, podendo ver, ouvir e até falar com certo esforço (mas não lançar magias). Contudo, seu corpo realiza apenas os movimentos que o conjurador deseja. A vítima pode ser manipulada para se movimentar, lutar, usar habilidades de combate... Enfim, qualquer coisa de que seja fisicamente capaz. \r\n O conjurador precisa de linha de efeito para controlar a vítima. Se perder o contato, não poderá controlar a vítima — mas ela estará paralisada até que o conjurador recupere o controle ou a magia termine.`,
                custo: `não tem.`
            },
            {
                meta: {
                    nome: "Mata-Dragão",
                    escola: "Evocação",
                    ciclo: "Arcana 5",
                    execucao: "duas rodadas",
                    alcance: "pessoal",
                    alvo: "Área, explosão em cone de 30m",
                    duracao: "instantânea",
                    resitencia: "Reflexos reduz à metade"
                },
                desc: `Esta é uma das mais poderosas magias de destruição existentes. Após entoar longos cânticos, o conjurador dispara uma carga de energia que varre uma enorme área em sua frente, causando 20d12+20 pontos de dano de essência em todas as criaturas, construções e objetos livres atingidos. Apesar de seu poder destrutivo, esta magia é lenta, tornando seu uso difícil em combate. Além disso, pode causar tantos danos colaterais que poucos conjuradores se arriscam a utilizá-la.`,
                custo: `\r\n +1 PM: aumenta o dano em 1d12+1.`
            },
            {
                meta: {
                    nome: "Mente Divina",
                    escola: "Adivinhação",
                    ciclo: "Divina 2",
                    execucao: "padrão",
                    alcance: "toque",
                    alvo: "1 criatura",
                    duracao: "cena",
                    resitencia: ""
                },
                desc: `Você traz inspiração divina à mente do alvo. Escolha entre Inteligência, Sabedoria ou Carisma. O alvo recebe +4 no atributo escolhido. Esse aumento não oferece PV, PM ou perícias adicionais.`,
                custo: `\r\n +3 PM: em vez do normal, o alvo recebe +4 nos três atributos mentais. Requer 3º círculo. \r\n +7 PM: muda o alcance para curto e o alvo para criaturas escolhidas. \r\n +7 PM: aumenta o bônus em +2. Requer 4º círculo.`
            },
            {
                meta: {
                    nome: "Metamorfose",
                    escola: "Transmutação",
                    ciclo: "Arcana 2",
                    execucao: "padrão",
                    alcance: "pessoal",
                    alvo: "você",
                    duracao: "cena",
                    resitencia: ""
                },
                desc: `Você muda sua aparência e forma — incluindo seu equipamento — para qualquer outra criatura, existente ou imaginada. Independentemente da forma escolhida, você recebe +20 em testes de Enganação para disfarce. Características não mencionadas não mudam. \r\n Se mudar para uma forma humanoide, pode mudar o tipo de dano físico de suas armas (se usa uma maça e transformá-la em espada longa, ela pode causar dano de corte, por exemplo). Se quiser, pode assumir uma forma humanoide com uma categoria de tamanho acima ou abaixo da sua; nesse caso aplique os modificadores em Furtividade e testes de manobra. \r\n Se mudar para outras formas, você pode escolher uma Forma Selvagem do druida (veja no Capítulo 1). Nesse caso você não pode atacar com suas armas, falar ou lançar magias até voltar ao normal, mas recebe um ou mais ataques naturais e os bônus da forma selvagem escolhida.`,
                custo: `\r\n+1 PM: a forma escolhida recebe uma habilidade de sentidos entre faro, visão na penumbra e visão no escuro. \r\n+3 PM: a forma escolhida recebe percepção às cegas. Requer 3º círculo. \r\n+3 PM: muda o alcance para toque, o alvo para 1 criatura e adiciona resistência (Vontade anula). \r\n+3 PM: muda o alcance para médio, o alvo para 1 criatura e a resistência para Vontade anula. Em vez do normal, transforma o alvo em uma criatura ou objeto inofensivo (ovelha, sapo, galinha, pudim de ameixa etc.). A criatura não pode atacar, falar e lançar magias; seu deslocamento vira 3m e sua Defesa vira 10. Suas outras características não mudam. No início de seus turnos, o alvo pode fazer um teste de Vontade; se passar, retorna a sua forma normal e a magia termina. Requer 3º círculo. \r\n Veja a magia completa na pagina 192 ou na wiki do t20 https://tsrd.fandom.com/pt-br/wiki/Magias_2%C2%B0_C%C3%ADrculo_T20#Metamorfose`
            },
            {
                meta: {
                    nome: "Miasma Mefítico",
                    escola: "Necromancia",
                    ciclo: "Divina 2",
                    execucao: "padrão",
                    alcance: "médio",
                    alvo: "Área, nuvem com 6m de raio",
                    duracao: "instantânea",
                    resitencia: "Fortitude (veja texto)"
                },
                desc: `A área é coberta por emanações letais. Criaturas na área sofrem 5d6 pontos de dano de veneno e ficam enjoadas por 1 rodada. Se passarem na resistência, sofrem metade do dano e não ficam enjoadas.`,
                custo: `\r\n Truque: muda o alcance para toque, a área para alvo (1 criatura com 0 PV ou menos), a duração para instantânea e a resistência para Fortitude anula. Em vez do normal, você canaliza o Miasma contra uma vítima. Se falhar na resistência, ela morre e você recebe +2 na CD de suas magias por 1 dia. Se passar, fica imune a este truque por um dia. \r\n +2 PM: aumenta o dano em +1d6. \r\n +3 PM: muda o tipo do dano para trevas.`
            },
            {
                meta: {
                    nome: "Miragem",
                    escola: "Ilusão",
                    ciclo: "Arcana 3",
                    execucao: "padrão",
                    alcance: "longo",
                    alvo: "Área, cubo de até 90m de lado",
                    duracao: "1 dia",
                    resitencia: "Vontade desacredita"
                },
                desc: `Você faz um terreno parecer outro, incluindo sons e cheiros. Uma planície pode parecer um pântano, uma floresta pode parecer uma montanha etc. Esta magia pode ser usada para criar armadilhas: areia movediça pode parecer terra firme ou um precipício pode parecer um lago. Você pode alterar, incluir e esconder estruturas dentro da área, mas não criaturas (embora elas possam se esconder nas estruturas ilusórias).`,
                custo: `\r\n+4 PM: além do normal, pode alterar a aparência de criaturas escolhidas na área, como se usando Disfarce Ilusório. \r\n+9 PM: muda a duração para permanente e adiciona componente material (pó de diamante no valor de T$ 1.000). Requer 5º círculo.`
            },
            {
                meta: {
                    nome: "Missão Divina",
                    escola: "Encantamento",
                    ciclo: "Divina 3",
                    execucao: "padrão",
                    alcance: "curto",
                    alvo: "1 criatura",
                    duracao: "1 semana ou até ser descarregada",
                    resitencia: "Vontade anula (veja texto)"
                },
                desc: `Esta magia obriga o alvo a cumprir uma tarefa a sua escolha. Ela dura uma semana ou até o alvo cumprir a tarefa, o que vier primeiro. O alvo pode recusar a missão — mas, no fim de cada dia em que não se esforçar para cumprir a tarefa, deve fazer um teste de Vontade; se falhar, sofre uma penalidade cumulativa de –2 em todos os testes e rolagens. \r\n A Missão Divina não pode forçar uma criatura a um ato suicida, nem designar uma missão impossível (como matar uma criatura que não existe).`,
                custo: `\r\n +2 PM: muda o alcance para toque, a duração para permanente e adiciona penalidade de –1 PM. Em vez do normal, você inscreve uma marca (como uma tatuagem) na pele do alvo e escolhe um tipo de ação que ativará a marca. Normalmente, será cometer um crime (roubar, matar...) ou outra coisa contrária às Obrigações & Restrições de sua divindade. Sempre que a marca é ativada, o alvo recebe uma penalidade cumulativa de –2 em todos os testes. Muitas vezes, portar essa marca é um estigma por si só, já que esta magia normalmente é lançada em criminosos ou traidores. Dissipar Magia anula a marca e suas penalidades por um dia; elas só podem ser totalmente removidas pelo conjurador original ou pela magia Purificação. \r\n +4 PM: aumenta a duração para 1 ano ou até ser descarregada.`
            },
            {
                meta: {
                    nome: "Montaria Arcana ",
                    escola: "Convocação",
                    ciclo: "Arcana 2",
                    execucao: "padrão",
                    alcance: "curto",
                    alvo: "criatura conjurada",
                    duracao: "1 dia",
                    resitencia: ""
                },
                desc: `Esta magia convoca um cavalo de batalha que serve como um aliado montaria veterano. Sua aparência típica é de um animal negro com crina e cauda cinzentas e cascos feitos de fumaça, mas você pode mudá-la se quiser. Além dos benefícios normais, a Montaria Arcana pode atravessar terreno difícil sem redução em seu deslocamento.`,
                custo: `\r\n+1 PM: além do normal, criaturas do tipo animal em alcance curto da montaria devem fazer um teste de Vontade. Se passarem, ficam abaladas pela cena; se falharem, ficam apavoradas por 1d4 rodadas, depois abaladas pela cena. \r\n+3 PM: muda a duração para permanente e adiciona sacrifício de 1 PM. \r\n+3 PM: aumenta o tamanho da montaria em uma categoria. Isso também aumenta o número de criaturas que ela pode carregar — duas para uma criatura Enorme, seis para Colossal. Uma única criatura controla a montaria; as outras apenas são deslocadas. \r\n+3 PM: muda a criatura para um aliado montaria mestre. Requer 3º círculo.`
            },
            {
                meta: {
                    nome: "Muralha de Ossos",
                    escola: "Necromancia",
                    ciclo: "Universal 4",
                    execucao: "padrão",
                    alcance: "médio",
                    alvo: "Efeito, muro de ossos",
                    duracao: "cena",
                    resitencia: ""
                },
                desc: `Uma parede de ossos se eleva da terra. A parede tem 15m de comprimento, 3m de altura e 1,5m de profundidade. Ela pode ter qualquer forma — não precisa ser uma linha reta —, mas sua base precisa estar no chão e ela não pode aparecer de modo que ocupe o espaço de uma criatura. \r\nÉ possível escalar a parede. Isso exige um teste de Atletismo e causa 4d8 pontos de dano de corte. Também é possível destruir o muro para atravessá-lo ou libertar uma criatura agarrada. Cada trecho de 3m do muro tem Defesa 8, 40 PV e resistência a corte, frio e perfuração 5.`,
                custo: `\r\n +2 PM: aumenta o comprimento em +15m e altura em +3m (máximo de 60m de comprimento e 9m de altura). \r\n +5 PM: o muro é feito de uma massa de esqueletos animados. Quando você lança a magia e no início de cada um de seus turnos, todos os inimigos adjacentes à muralha sofrem 4d8 pontos de dano e devem fazer um teste de Reflexos. Se falharem, são agarrados pela muralha. Uma criatura agarrada pode gastar uma ação padrão para fazer um teste de Acrobacia ou Atletismo para se soltar.`
            },
            {
                meta: {
                    nome: "Muralha Elemental",
                    escola: "Evocação",
                    ciclo: "Arcana 3",
                    execucao: "padrão",
                    alcance: "médio",
                    alvo: "Efeito, muralha de energia",
                    duracao: "cena",
                    resitencia: "veja texto"
                },
                desc: `Esta magia cria uma muralha feita de um elemento a sua escolha. A muralha pode ter duas formas: uma barreira de até 30m de comprimento e 3m de altura (ou o contrário) ou uma cúpula de 3m de raio. A magia tem efeitos diferentes dependendo do tipo de elemento escolhido. Fogo. Faz surgir uma violenta cortina de chamas. Um lado da muralha (a sua escolha) emite ondas de calor, que causam 2d6 pontos de dano em criaturas a até 6m. A muralha causa esse dano quando surge e no início de seus turnos. Atravessar a muralha causa 8d6 pontos de dano de fogo. Caso seja criada em uma área onde existem criaturas, elas sofrem dano como se estivessem atravessando a muralha, mas podem fazer um teste de Reflexos para reduzir o dano à metade (a criatura escolhe para qual lado quer escapar, mas se escapar para o lado quente sofrerá mais 2d6 pontos de dano). \r\n Veja a magia completa na pagina 194 ou na wiki do t20 https://tsrd.fandom.com/pt-br/wiki/Magias_3%C2%B0_C%C3%ADrculo_T20#Muralha_Elemental`,
                custo: `\r\n+2 PM: aumenta o comprimento em +15m e altura em +3m, até 60m de comprimento e 9m de altura. \r\n+4 PM: muda a duração para sustentada e adiciona uma nova escolha, Essência. A muralha é invisível e indestrutível — imune a qualquer forma de dano e não afetada por nenhuma magia. Ela não pode ser atravessada nem mesmo por criaturas incorpóreas. No entanto, magias que teletransportam criaturas, como Salto Dimensional, podem atravessá-la. Magias e efeitos de dano, como Bola de Fogo e o sopro de um dragão, não vencem a muralha, mas magias lançadas diretamente sobre uma criatura ou área, como Sono, podem ser lançadas contra alvos que estejam no outro lado. Requer 4º círculo.`
            },
            {
                meta: {
                    nome: "Névoa",
                    escola: "Convocação",
                    ciclo: "Universal 1",
                    execucao: "padrão",
                    alcance: "curto",
                    alvo: "Efeito, nuvem com 6m de raio e 6m de altura",
                    duracao: "cena",
                    resitencia: ""
                },
                desc: `Uma névoa espessa eleva-se de um ponto a sua escolha, obscurecendo toda a visão — criaturas a até 1,5m têm camuflagem e criaturas a partir de 3m têm camuflagem total. Um vento forte dispersa a névoa em 4 rodadas e um vendaval a dispersa em 1 rodada. Esta magia não funciona sob a água.`,
                custo: `\r\n +1 PM: a magia também funciona sob a água, criando uma nuvem de tinta. \r\n +2 PM: você pode escolher criaturas no alcance ao lançar a magia; elas enxergam através do efeito. Requer 2º círculo. \r\n +2 PM: além do normal, a nuvem tem um cheiro horrível. No início de seus turnos, qualquer criatura dentro dela, ou qualquer criatura com faro em alcance curto da nuvem, deve fazer um teste de Fortitude. Se falhar, fica enjoada por uma rodada. \r\n +2 PM: além do normal, a nuvem tem um tom esverdeado e se torna cáustica. No início de seus turnos, criaturas dentro dela sofrem 2d4 pontos de dano de ácido. \r\n +3 PM: aumenta o dano de ácido em +2d4. \r\n +5 PM: além do normal, a nuvem fica espessa, quase sólida. Qualquer criatura dentro dela tem seu deslocamento reduzido para 3m (independentemente de seu deslocamento normal) e sofre –2 em testes de ataque e rolagens de dano.`
            },
            {
                meta: {
                    nome: "Oração",
                    escola: "Encantamento",
                    ciclo: "Divina 2",
                    execucao: "padrão",
                    alcance: "curto",
                    alvo: "todas as criaturas (veja texto)",
                    duracao: "sustentada",
                    resitencia: ""
                },
                desc: `Todos os seus aliados no alcance recebem +2 em testes de perícia e rolagens de dano, e todos os seus inimigos no alcance sofrem –2 em testes de perícia e rolagens de dano. Esses bônus e penalidades são cumulativos com outras magias.`,
                custo: `\r\n +2 PM: aumenta os bônus em +1. \r\n +2 PM: aumenta as penalidades em –1. \r\n +7 PM: muda o alcance para médio. Requer 3º círculo. \r\n +12 PM: muda a duração para cena. Requer 4º círculo.`
            },
            {
                meta: {
                    nome: "Orientação",
                    escola: "Adivinhação",
                    ciclo: "Divina 1",
                    execucao: "movimento",
                    alcance: "curto",
                    alvo: "1 criatura",
                    duracao: "cena",
                    resitencia: ""
                },
                desc: `Você oferece ajuda. Escolha um atributo — até o final da cena, sempre que o alvo fizer um teste de perícia baseada no atributo escolhido, pode rolar dois dados e ficar com o melhor resultado. Esse benefício não se aplica a testes de ataque ou resistência.`,
                custo: `\r\n Truque: muda a execução para ação padrão e a duração para 1 rodada. O bônus vale para um único teste. Uma criatura só pode ser afetada por esse truque uma vez por cena. \r\n +5 PM: em vez de um atributo, escolha entre atributos físicos (Força, Destreza e Constituição) ou mentais (Inteligência, Sabedoria e Carisma). Requer 3º círculo. \r\n +5 PM: muda o alvo para criaturas escolhidas. Requer 3º círculo.`
            },
            {
                meta: {
                    nome: "Palavra Primordial ",
                    escola: "Encantamento",
                    ciclo: "Universal 5",
                    execucao: "padrão",
                    alcance: "curto",
                    alvo: "1 criatura com menos níveis que você",
                    duracao: "instantânea",
                    resitencia: "Vontade parcial"
                },
                desc: `Você pronuncia uma palavra do idioma primordial da Criação, que causa um dos efeitos abaixo, a sua escolha. Atordoar: a criatura fica atordoada por 2d4 rodadas. Se passar no teste de resistência, fica desprevenida por 1d4 rodadas. \r\n Cegar: a criatura fica cega. Se passar no teste de resistência, fica ofuscada por 1d4 rodadas \r\n Matar: a criatura morre. Além do teste de Vontade, a criatura tem direito a um teste de Fortitude. Se passar em qualquer um deles, sofre 10d8 pontos de dano e fica sangrando.`,
                custo: `não tem.`
            },
            {
                meta: {
                    nome: "Pele de Pedra",
                    escola: "Transmutação",
                    ciclo: "Universal 3",
                    execucao: "padrão",
                    alcance: "pessoal",
                    alvo: "você",
                    duracao: "cena",
                    resitencia: ""
                },
                desc: `Sua pele ganha aspecto e dureza de rocha. Você recebe resistência a dano 5.`,
                custo: `\r\n +1 PM: muda o alcance para toque e o alvo para 1 criatura. \r\n +4 PM: muda a duração para 1 dia. \r\n +4 PM: sua pele ganha aspecto e dureza de aço. Você recebe resistência a dano 10. Requer 4º círculo. \r\n +4 PM: muda o alcance para toque, o alvo para 1 criatura, a duração para 1d4 rodadas e adiciona Resistência: Fortitude anula. Em vez do efeito normal, a magia transforma o alvo e seu equipamento em uma estátua inerte e sem consciência. Se a estátua for quebrada, a criatura morrerá. Requer 4º círculo. \r\n +9 PM: como acima, mas com duração permanente. Requer 5º círculo.`
            },
            {
                meta: {
                    nome: "Perdição ",
                    escola: "Necromancia",
                    ciclo: "Divina 1",
                    execucao: "padrão",
                    alcance: "curto",
                    alvo: "criaturas escolhidas",
                    duracao: "cena",
                    resitencia: "nenhuma"
                },
                desc: `Amaldiçoa os alvos, que recebem –1 em testes de ataque e rolagens de dano. Perdição anula Bênção.`,
                custo: `\r\n +2 PM: muda a resistência para Vontade parcial. Caso falhem, os alvos ficam abalados. Caso passem, recebem a penalidade normal. \r\n +2 PM: aumenta as penalidades em –1.`
            },
            {
                meta: {
                    nome: "Poeira da Podridão",
                    escola: "Necromancia",
                    ciclo: "Divina 3",
                    execucao: "padrão",
                    alcance: "médio",
                    alvo: "Área, nuvem com 6m de raio",
                    duracao: "cena",
                    resitencia: "Fortitude (veja texto)"
                },
                desc: `Você manifesta uma nuvem de poeira carregada de energia negativa, que apodrece lentamente as criaturas na área. Ao lançar a magia, e no início de seus turnos, criaturas na área sofrem 2d8+8 pontos de dano de trevas (Fortitude reduz à metade). Alvos que falharem no teste ficam imunes a magias de cura por uma rodada.`,
                custo: `\r\n +2 PM: aumenta o dano em 1d8+4.`
            },
            {
                meta: {
                    nome: "Possessão",
                    escola: "Encantamento",
                    ciclo: "Arcana 5",
                    execucao: "padrão",
                    alcance: "longo",
                    alvo: "1 criatura",
                    duracao: "1 dia",
                    resitencia: "Vontade anula"
                },
                desc: `Você projeta sua consciência no corpo do alvo. Enquanto possui uma criatura, você assume o controle total do corpo dela. O seu próprio corpo fica inconsciente e a consciência do alvo fica inerte. Em termos de jogo, você continua usando a sua ficha, mas com os atributos físicos e deslocamento da criatura. Se o alvo passar no teste de resistência, sabe que você tentou possuí-lo e fica imune a esta magia por um dia. Caso o corpo da criatura morra enquanto você a possui, a criatura morre e você deve fazer um teste de Vontade contra a CD da sua própria magia. Se passar, sua consciência retorna para o seu corpo (contanto que esteja dentro do alcance). Do contrário, você também morre. Retornar para o seu corpo voluntariamente é uma ação livre.`,
                custo: `\r\n+5 PM: você ganha acesso às habilidades de raça e classe da criatura. \r\n+5 PM: enquanto a magia durar e você estiver dentro do alcance do seu corpo original, pode “saltar” de uma criatura possuída para outra. O novo alvo tem direito a um teste de Vontade. Se falhar, você assume o controle do corpo dele e o alvo anterior recobra a consciência. \r\n+5 PM: muda a duração para permanente, mas destrói seu corpo original no processo. Uma criatura possuída pode fazer um teste de Vontade no começo do dia para retomar seu corpo. Se passar, recobra a consciência (e a sua própria consciência fica inerte). O teste se repete no início de cada dia. Se o corpo de uma criatura possuída morrer e houver outra criatura em alcance curto, você pode tentar possuí-la como uma reação. Enquanto houver novos corpos para possuir, você é imortal!`
            },
            {
                meta: {
                    nome: "Potência Divina",
                    escola: "Transmutação",
                    ciclo: "Divina 3",
                    execucao: "padrão",
                    alcance: "pessoal",
                    alvo: "você",
                    duracao: "sustentada",
                    resitencia: ""
                },
                desc: `Você canaliza o poder de sua divindade. Você aumenta uma categoria de tamanho (seu equipamento muda de acordo). Além disso, você recebe Força +8 e resistência a dano 10. Você não pode lançar magias enquanto estiver sob efeito de Potência Divina.`,
                custo: `\r\n +2 PM: aumenta o bônus de Força em +2. \r\n +2 PM: aumenta a resistência a dano em +2. \r\n +2 PM: muda o alcance para toque e o alvo para 1 criatura. A magia falha se o alvo não seguir a mesma divindade que você`
            },
            {
                meta: {
                    nome: "Premonição",
                    escola: "Adivinhação",
                    ciclo: "Divina 4",
                    execucao: "padrão",
                    alcance: "pessoal",
                    alvo: "você",
                    duracao: "cena",
                    resitencia: ""
                },
                desc: `Vislumbres do futuro permitem que você reavalie suas ações. Uma vez por rodada, você pode usar uma reação para rolar novamente um teste recém realizado, mas deve aceitar o resultado da nova rolagem.`,
                custo: `\r\n +3 PM: muda a execução para reação, o alcance para curto, o alvo para 1 criatura e a duração para instantânea. Esta magia só pode ser usada em uma criatura que tenha acabado de fazer um teste. Obriga a criatura a fazer uma nova rolagem de dados e aceitar o novo resultado, seja ele um sucesso ou falha. Criaturas involuntárias têm direito a um teste de Vontade para negar o efeito. \r\n +5 PM: muda a duração para 1 dia.`
            },
            {
                meta: {
                    nome: "Primor Atlético",
                    escola: "Transmutação",
                    ciclo: "Arcana 1",
                    execucao: "padrão",
                    alcance: "toque",
                    alvo: "1 criatura",
                    duracao: "cena",
                    resitencia: ""
                },
                desc: `Você modifica os limites físicos do alvo, que recebe deslocamento +9m e +10 em testes de Atletismo.`,
                custo: `\r\n +1 PM: além do normal, o alvo recebe um bônus adicional de +20 em testes de Atletismo para saltar (para um bônus total de +30). \r\n +1 PM: além do normal, o alvo pode escalar paredes e tetos sem precisar fazer testes de Atletismo. Para isso, precisa estar com as mãos livres, mas pode usar uma única mão se ficar parado no lugar. O alvo não fica desprevenido enquanto escala. \r\n +1 PM: muda a execução para ação de movimento, o alcance para pessoal, o alvo para você e a duração para instantânea. Você salta muito alto e pousa adjacente a uma criatura em alcance curto. Se fizer um ataque corpo a corpo contra esta criatura nesta rodada, recebe os benefícios e penalidades de uma investida e sua arma tem o dano aumentado em um dado do mesmo tipo. \r\n +3 PM: além do normal, ao fazer testes de perícias baseadas em Força, Destreza ou Constituição, o alvo pode rolar dois dados e escolher o melhor. Não afeta testes de ataque ou resistência. Requer 2º círculo.`
            },
            {
                meta: {
                    nome: "Profanar",
                    escola: "Necromancia",
                    ciclo: "Divina 1",
                    execucao: "padrão",
                    alcance: "longo",
                    alvo: "Área, esfera com 9m de raio",
                    duracao: "1 dia",
                    resitencia: ""
                },
                desc: `Esta magia enche a área com energia negativa. Magias e efeitos que causam dano de trevas ou canalizam energia negativa têm o dano dobrado. Esta magia não pode ser lançada em uma área contendo um símbolo dedicado a qualquer divindade, exceto a sua. Profanar anula Consagrar.`,
                custo: `\r\n +1 PM: além do normal, mortos-vivos na área recebem +2 na Defesa e +2 em todos os testes. \r\n +2 PM: aumenta os bônus para mortos-vivos em +1. \r\n +9 PM: muda a execução para 1 hora, a duração para permanente e adiciona componente material (incenso e óleos no valor de T$ 1.000). Requer 4º círculo.`
            },
            {
                meta: {
                    nome: "Projetar Consciência",
                    escola: "Adivinhação",
                    ciclo: "Universal 5",
                    execucao: "padrão",
                    alcance: "ilimitado (veja texto)",
                    alvo: "local ou criatura conhecidos",
                    duracao: "sustentada",
                    resitencia: ""
                },
                desc: `Esta magia faz com que sua consciência deixe seu corpo e se transporte instantaneamente para um local ou para perto de uma criatura alvo. Se escolher um local, ele precisa ser conhecido por você e ter um nome (A Estalagem do Macaco Caolho Empalhado, por exemplo) e não pode ser muito abrangente, como uma cidade ou reino. Se escolher uma criatura, você transporta sua consciência até onde a criatura estiver, contanto que estejam no mesmo plano. \r\nVocê adquire uma forma fantasmagórica invisível, mas pode se mostrar usando uma ação de movimento. Pode se mover em qualquer direção com deslocamento de voo 18m e, por ser incorpóreo, é capaz de atravessar objetos sólidos, mas fica limitado a se mover dentro dos limites do local, ou dentro de alcance curto da criatura alvo. Você pode ver e ouvir como se estivesse presente no local e pode falar mentalmente com qualquer criatura que possa ver, contanto que tenham um idioma em comum.`,
                custo: `\r\n +5 PM: além do normal, sua projeção é capaz de lançar magias que não precisem de componentes materiais e tenham duração diferente de sustentada.`
            },
            {
                meta: {
                    nome: "Proteção contra Magia",
                    escola: "Abjuração",
                    ciclo: "Divina 3",
                    execucao: "padrão",
                    alcance: "toque",
                    alvo: "1 criatura",
                    duracao: "cena",
                    resitencia: ""
                },
                desc: `Você protege o alvo contra efeitos mágicos nocivos. O alvo recebe +5 em testes de resistência contra magias.`,
                custo: `\r\n +4 PM: muda o bônus para +10. Requer 4º círculo. \r\n +4 PM: em vez do normal, o alvo fica imune a uma escola de magia a sua escolha. Requer 4º Círculo. \r\n +9 PM: em vez do normal, o alvo fica imune a duas escolas de magia a sua escolha. Requer 5º Círculo.`
            },
            {
                meta: {
                    nome: "Proteção Divina",
                    escola: "Abjuração",
                    ciclo: "Divina 1",
                    execucao: "padrão",
                    alcance: "toque",
                    alvo: "1 criatura",
                    duracao: "cena",
                    resitencia: ""
                },
                desc: `Esta magia cria uma barreira mística invisível que fornece ao alvo +2 em testes de resistência.`,
                custo: `\r\n +2 PM: aumenta o bônus concedido em +1. \r\n +2 PM: muda a execução para reação, o alcance para curto e a duração para 1 rodada. \r\n +2 PM: muda o alvo para área de círculo com 3m de raio. Todos os aliados dentro do círculo recebem o bônus da magia. Requer 2º círculo. \r\n +2 PM: também torna o alvo imune a efeitos de encantamento. Requer 2º círculo.`
            },
            {
                meta: {
                    nome: "Purificação ",
                    escola: "Evocação",
                    ciclo: "Divina 2",
                    execucao: "padrão",
                    alcance: "toque",
                    alvo: "1 criatura",
                    duracao: "instantânea",
                    resitencia: ""
                },
                desc: `Seu toque purifica a criatura tocada. Esta magia remove uma das seguintes condições: abalado, apavorado, alquebrado, atordoado, cego, confuso, debilitado, enjoado, envenenado, esmorecido, exausto, fascinado, fatigado, fraco, frustrado, lento, ofuscado, paralisado, pasmo ou surdo.`,
                custo: `\r\n +2 PM: também cura todo o dano causado por venenos. \r\n +2 PM: em vez de uma, remove todas as condições listadas. \r\n +3 PM: também permite que o alvo solte qualquer item amaldiçoado que esteja segurando (mas não remove a maldição do item em si). \r\n +7 PM: também dissipa magias e efeitos prejudiciais de encantamento, necromancia e transmutação afetando o alvo. Requer 3º círculo.`
            },
            {
                meta: {
                    nome: "Queda Suave",
                    escola: "Transmutação",
                    ciclo: "Arcana 1",
                    execucao: "reação",
                    alcance: "curto",
                    alvo: "1 criatura ou objeto com até 200kg",
                    duracao: "até chegar ao solo ou cena, o que vier primeiro",
                    resitencia: ""
                },
                desc: `O alvo cai lentamente. A velocidade da queda é reduzida para 18m por rodada — o suficiente para não causar dano. \r\n Como lançar esta magia é uma reação, você pode lançá-la rápido o bastante para salvar a si ou um aliado de quedas inesperadas. \r\n Lançada sobre um projétil — como uma flecha ou uma rocha largada do alto de um penhasco —, a magia faz com que ele cause metade do dano normal, devido à lentidão. \r\n Queda Suave só funciona em criaturas e objetos em queda livre; a magia não vai frear um golpe de espada ou o mergulho rasante de um atacante voador.`,
                custo: `\r\n Truque: muda o alvo para objeto com até 5kg. Em vez do normal, você pode gastar uma ação de movimento para levitar o alvo até 4,5m em qualquer direção. \r\n +2 PM: muda o alvo para até 10 criaturas ou objetos.`
            },
            {
                meta: {
                    nome: "Raio do Enfraquecimento",
                    escola: "Necromancia",
                    ciclo: "Arcana 1",
                    execucao: "padrão",
                    alcance: "curto",
                    alvo: "1 criatura",
                    duracao: "cena",
                    resitencia: "Fortitude parcial"
                },
                desc: `Você dispara um raio púrpura que drena as forças do alvo. Se falhar na resistência, o alvo fica fatigado. Se passar, fica vulnerável.`,
                custo: `\r\n Truque: muda o alcance para toque e a resistência para Fortitude anula. Em vez do normal, ao tocar o alvo, sua mão emana um brilho púrpura. O alvo fica fatigado. Uma criatura só pode ser afetada por este truque uma vez por cena. \r\n +2 PM: em vez do normal, se falhar na resistência o alvo fica exausto. Se passar, fica fatigado. Requer 2º círculo. \r\n +5 PM: em vez do normal, se falhar na resistência o alvo fica inconsciente. Se passar, fica exausto. Requer 3º círculo.`
            },
            {
                meta: {
                    nome: "Raio Polar",
                    escola: "Evocação",
                    ciclo: "Arcana 4",
                    execucao: "padrão",
                    alcance: "médio",
                    alvo: "1 criatura",
                    duracao: "instantânea",
                    resitencia: "Fortitude parcial"
                },
                desc: `Você dispara um raio azul esbranquiçado de gelo e ar congelante. O alvo sofre 10d8 pontos de dano e fica preso em um bloco de gelo (paralisado). Se passar no teste de resistência, o alvo sofre metade do dano e fica lento por uma rodada. \r\n É possível quebrar o gelo para libertar uma criatura presa: o bloco tem 20 PV, resistência a dano 10 e é vulnerável a fogo. Uma criatura presa pode usar uma ação completa para fazer um teste de Força e tentar se libertar do gelo; cada vez que passar no teste causa 10 pontos de dano ao bloco, ignorando a RD.`,
                custo: `\r\n +3 PM: aumenta o dano em +2d8. \r\n +5 PM: muda o alvo para área de explosão de 6m de raio. Em vez de um raio, você dispara uma esfera de gelo que explode, causando o efeito da magia em todas as criaturas na área.`
            },
            {
                meta: {
                    nome: "Raio Solar",
                    escola: "Evocação",
                    ciclo: "Divina 2",
                    execucao: "padrão",
                    alcance: "médio",
                    alvo: "linha",
                    duracao: "instantânea",
                    resitencia: "Reflexos (veja texto)"
                },
                desc: `Você canaliza uma poderosa rajada de energia positiva que ilumina o campo de batalha. Criaturas na área sofrem 4d8 pontos de dano de eletricidade (ou 4d12, se forem mortos-vivos) e ficam ofuscadas por uma rodada. Se passarem na resistência, sofrem metade do dano e não ficam ofuscadas.`,
                custo: `\r\n Truque: muda a duração para cena e a resistência para nenhuma. Em vez do normal, cria um facho de luz que ilumina a área da magia. Uma vez por rodada, você pode mudar a direção do facho como uma ação livre. \r\n +2 PM: aumenta o dano ou cura em +1d8 (ou +1d12 em mortos-vivos). \r\n +3 PM: em vez do normal, criaturas vivas a sua escolha na área curam 4d8 pontos de vida; o restante sofre o dano normalmente. \r\n +3 PM: criaturas que falhem na resistência ficam cegas por 1d4 rodadas.`
            },
            {
                meta: {
                    nome: "Reanimação Impura",
                    escola: "Necromancia",
                    ciclo: "Divina 5",
                    execucao: "completa",
                    alcance: "toque",
                    alvo: "1 criatura",
                    duracao: "cena",
                    resitencia: ""
                },
                desc: `Você reanima uma criatura morta recentemente (dentro da mesma cena), trazendo sua alma de volta ao corpo de forma forçada. O tipo da criatura muda para morto-vivo, mas ela retém suas memórias e habilidades de quando estava viva, podendo inclusive lançar magias. A criatura pode pensar e falar livremente, mas obedece cegamente a seus comandos. Quando a cena termina, a criatura volta a ficar morta, mas muitos necromantes malignos usam meios para guardar e preservar o corpo de criaturas poderosas para serem reanimadas dessa forma quando necessário. Se for destruída, a criatura não pode ser reanimada novamente com esta magia.`,
                custo: `não tem`
            },
            {
                meta: {
                    nome: "Refúgio",
                    escola: "Abjuração",
                    ciclo: "Arcana 2",
                    execucao: "completa",
                    alcance: "curto",
                    alvo: "Efeito, domo com 6m de raio",
                    duracao: "1 dia",
                    resitencia: ""
                },
                desc: `Esta magia cria um domo imóvel e quase opaco por fora, mas transparente pelo lado de dentro. Ele protege contra calor, frio e forças pequenas, mas não contra qualquer coisa capaz de causar dano. Assim, o domo protege contra neve e vento comuns, mas não contra uma flecha ou Bola de Fogo. Porém, como o domo é quase opaco, qualquer criatura dentro dele tem camuflagem total contra ataques vindos de fora. Criaturas podem entrar e sair do domo livremente. Descansar dentro do Refúgio concede recuperação normal de PV e PM.`,
                custo: `\r\n +1 PM: além do normal, os limites do domo são envoltos por uma fumaça negra e espessa, que impede criaturas do lado de fora de enxergar ou ouvir o que está dentro. Criaturas do lado de dentro enxergam e ouvem normalmente o que está do lado de fora. A fumaça também bloqueia magias de adivinhação. \r\n +3 PM: em vez do normal, cria uma cabana que comporta até 10 criaturas confortavelmente. Descansar nesse espaço concede recuperação de PV e PM igual ao dobro do nível. Para todos os efeitos é uma cabana normal, com paredes de madeira, telhado, uma porta, duas janelas e alguma mobília (camas, uma mesa com bancos e uma lareira). A porta e as janelas têm 15 PV, RD 5 e são protegidas por um efeito idêntico à magia Tranca Arcana. As paredes têm 200 PV e RD 5. \r\n Veja a magia completa na pagina 197 ou na wiki do t20 https://tsrd.fandom.com/pt-br/wiki/Magias_2%C2%B0_C%C3%ADrculo_T20#Ref.C3.BAgio`
            },
            {
                meta: {
                    nome: "Relâmpago",
                    escola: "Evocação",
                    ciclo: "Arcana 2",
                    execucao: "padrão",
                    alcance: "médio",
                    alvo: "linha",
                    duracao: "instantânea",
                    resitencia: "Reflexos reduz à metade"
                },
                desc: `Você dispara um poderoso raio que causa 6d6 pontos de dano de eletricidade em todas as criaturas e objetos livres na área.`,
                custo: `\r\n +2 PM: aumenta o dano em +2d6. \r\n +3 PM: muda a área para alvo (criaturas escolhidas). Em vez do normal, você dispara vários relâmpagos, um para cada alvo escolhido, causando 6d6 pontos de dano de eletricidade. Requer 3º círculo.`
            },
            {
                meta: {
                    nome: "Relâmpago Flamejante de Reynard",
                    escola: "Evocação",
                    ciclo: "Arcana 4",
                    execucao: "duas rodadas",
                    alcance: "médio",
                    alvo: "Efeito, bolas de fogo e relâmpagos",
                    duracao: "sustentada",
                    resitencia: "Reflexos reduz à metade"
                },
                desc: `Esta é uma magia poderosa, mas lenta, desenvolvida pelo metódico e impassível arquimago Reynard. Na primeira rodada de execução, você invoca as energias elementais do fogo e uma de suas mãos fica em chamas. Na segunda rodada, invoca as energias elementais dos relâmpagos, ficando com a outra mão eletrificada. Então, pela duração da magia, pode usar uma ação de movimento para disparar bolas de fogo (6d6 pontos de dano de fogo numa explosão de 3m de raio) ou relâmpagos (6d6 pontos de dano de eletricidade numa linha). Você também pode, como uma ação padrão, usar as duas mãos num ataque de energia mista (12d12 pontos de dano, metade de fogo e metade de eletricidade, numa explosão de 6m de raio). Você precisa estar com as duas mãos livres para invocar o efeito misto e isso consome toda a energia da magia, terminando-a imediatamente.`,
                custo: `\r\n +4 PM: aumenta o dano das rajadas em +1d6 e o dano da rajada mista em +2d12.`
            },
            {
                meta: {
                    nome: "Réquiem",
                    escola: "Ilusão",
                    ciclo: "Arcana 5",
                    execucao: "completa",
                    alcance: "curto",
                    alvo: "criatura escolhidas",
                    duracao: "sustentada",
                    resitencia: "Vontade parcial"
                },
                desc: `Esta magia cria uma ilusão particular para cada uma das criaturas que atingir. Enquanto a magia durar, no início de cada um de seus turnos, cada criatura afetada deve fazer um teste de Vontade; se falhar, acha que não tomou as ações que realmente fez no turno anterior e é obrigada a repetir as mesmas ações neste turno, com uma penalidade cumulativa de –5 em todos os testes para cada vez que se repetir (a penalidade não se aplica ao teste de Vontade contra esta magia). Por exemplo, se a criatura se aproximou de um alvo e o atacou, precisa se aproximar desse mesmo alvo e atacar novamente. A ação repetida consome PM e recursos normalmente e, caso exija um teste de resistência, qualquer alvo faz esse teste com um bônus igual ao da penalidade desta magia.`,
                custo: `não tem.`
            },
            {
                meta: {
                    nome: "Resistência a Energia",
                    escola: "Abjuração",
                    ciclo: "Universal 1",
                    execucao: "padrão",
                    alcance: "toque",
                    alvo: "1 criatura",
                    duracao: "cena",
                    resitencia: ""
                },
                desc: `Ao lançar a magia, escolha entre ácido, eletricidade, fogo, frio, luz ou trevas. O alvo recebe resistência 10 contra a energia escolhida. Por exemplo, uma criatura com Resistência a Fogo que receba 16 pontos de dano de uma Bola de Fogo perde apenas 6 PV.`,
                custo: `\r\n +2 PM: aumenta a resistência em +5. \r\n +2 PM: muda a duração para 1 dia. Requer 2º círculo. \r\n +5 PM: muda o alcance para curto e o alvo para criaturas escolhidas. Requer 3º círculo. \r\n +5 PM: muda o efeito para resistência a dano de todos os tipos de energia. Requer 3º círculo. \r\n +9 PM: muda o efeito para imunidade a um tipo de dano de energia. Requer 4º círculo.`
            },
            {
                meta: {
                    nome: "Rogar Maldição ",
                    escola: "Necromancia",
                    ciclo: "Divina 2",
                    execucao: "padrão",
                    alcance: "curto",
                    alvo: "1 criatura",
                    duracao: "sustentada",
                    resitencia: "Fortitude anula"
                },
                desc: `Você entoa cânticos maléficos que amaldiçoam uma vítima, criando efeitos variados. Ao lançar a magia, escolha entre os seguintes. \r\n Debilidade: o alvo fica esmorecido e não pode se comunicar ou lançar magias. Ainda reconhece seus aliados e pode segui-los e ajudá-los, mas sempre de maneira simplória. \r\n Doença: muda a duração para instantânea. O alvo contrai uma doença a sua escolha, que o afeta imediatamente (sem período de incubação). \r\n Fraqueza: o alvo fica debilitado e lento. \r\n Isolamento: o alvo perde o uso de um de seus cinco sentidos a sua escolha. Se perder a visão, fica cego. Se perder a audição, fica surdo. Se perder o olfato ou paladar, não pode usar a habilidade faro. Se perder o tato, fica caído e não pode se levantar. \r\n Você também pode inventar sua própria maldição, usando estes exemplos como sugestões, mas o mestre tem a palavra final sobre o efeito.`,
                custo: `\r\n +3 PM: aumenta o número de efeitos que você pode escolher em +1. Requer 3º círculo. \r\n +7 PM: muda a duração para permanente e resistência para Fortitude parcial. Se passar, a criatura ainda sofre os efeitos da maldição, mas por 1 rodada. Requer 4º círculo.`
            },
            {
                meta: {
                    nome: "Roubar a Alma",
                    escola: "Necromancia",
                    ciclo: "Universal 5",
                    execucao: "padrão",
                    alcance: "curto",
                    alvo: "1 criatura",
                    duracao: "permanente",
                    resitencia: "Vontade parcial"
                },
                desc: `Você rouba a alma da vítima, armazenando-a em um objeto. Se o alvo passar no teste de resistência, sente o impacto de sua alma ser puxada para fora do corpo e fica pasmo por 1 rodada. Se falhar, seu corpo fica caído, inconsciente e inerte, enquanto sua alma é transportada para dentro do objeto. O corpo não envelhece nem se decompõe, permanecendo em estase. Ele pode ser atacado e destruído normalmente. O objeto escolhido deve custar T$ 1.000 por nível da criatura. Um objeto que não seja valioso o bastante se quebrará quando a magia for lançada (embora personagens não conheçam o conceito de “nível” dentro do mundo de jogo, podem ter noção do poder geral de uma criatura específica, estimando assim o valor do objeto). Se o objeto for destruído, a magia se esvai. Se o corpo ainda estiver disponível, a alma retorna para ele. Caso contrário, escapa para os Reinos dos Deuses.`,
                custo: `\r\n Custo adicional: sacrifício de 1 PM. \r\n +5 PM: o objeto que abriga a alma detém os mesmos PM totais que o alvo. Se estiver empunhando o objeto, você pode usar esses PM para lançar magias no lugar dos seus. O objeto recupera PM por dia como se o personagem estivesse em descanso normal. \r\n +10 PM: como uma reação ao lançar esta magia, você possui o corpo sem alma do alvo, como na magia Possessão (mesmo que não conheça a magia).`
            },
            {
                meta: {
                    nome: "Runa de Proteção",
                    escola: "Abjuração",
                    ciclo: "Universal 2",
                    execucao: "completa",
                    alcance: "toque",
                    alvo: "1 objeto ou passagem de até 6m de largura",
                    duracao: "permanente até ser descarregada",
                    resitencia: " nenhum ou Reflexos reduz à metade (veja o texto)"
                },
                desc: `Esta magia protege um objeto que possa ser aberto ou uma passagem de até 6m de largura. Quando uma criatura abre o objeto ou passa pela passagem, a runa explode, causando 6d6 pontos de dano em todos os alvos a até 3m. A criatura que ativa a runa não tem direito a teste de resistência; outras criaturas na área têm direito a um teste de Reflexos para reduzir o dano à metade. Quando lança a magia, você escolhe o tipo de dano, entre ácido, eletricidade, fogo, frio, luz ou trevas. \r\n Você pode determinar que a runa se ative apenas em condições específicas — por exemplo, apenas por goblins ou apenas por mortos-vivos. Você também pode criar uma palavra mágica que impeça a runa de se ativar. \r\n Um personagem pode encontrar a runa com um teste de Investigação e desarmá-la com um teste de Ladinagem (ambos CD 28). \r\n Componente material: pó de diamante no valor de T$ 200, com o qual o conjurador desenha a runa, que brilha por alguns instantes e depois se torna praticamente invisível.`,
                custo: `\r\n +1 PM: aumenta o dano em +2d6. \r\n +1 PM: muda o alvo para 1 objeto que possa ser lido, como um livro, pergaminho ou mapa. A runa explode quando o objeto é lido. O objeto também sofre o dano (possivelmente sendo destruído). \r\n +1 PM: este aprimoramento exige que você lance uma magia de até 2º círculo como parte da execução da Runa de Proteção. Quando a runa é ativada, em vez do efeito normal, lança esta magia sobre a criatura que o ativou (se for uma magia de área, a área é centrada na criatura). \r\n +3 PM: como o aprimoramento acima, mas além de lançar a magia, a runa também causa o dano do efeito normal.`
            },
            {
                meta: {
                    nome: "Salto Dimensional",
                    escola: "Convocação",
                    ciclo: "Arcana 2",
                    execucao: "padrão",
                    alcance: "curto",
                    alvo: "você",
                    duracao: "instantânea",
                    resitencia: ""
                },
                desc: `Esta magia transporta você para outro lugar dentro do alcance. Você não precisa de linha de efeito e pode simplesmente imaginar seu destino. Por exemplo, pode se transportar 3m adiante para ultrapassar uma porta fechada. Uma vez transportadas, criaturas não podem agir até a rodada seguinte. Esta magia não permite que você apareça dentro de um corpo sólido; se o ponto de chegada não tem espaço livre, você ressurge na área vazia mais próxima.`,
                custo: `\r\n+1 PM: muda o alcance para médio. \r\n+1 PM: muda o alvo para você e uma criatura voluntária. Você pode escolher este aprimoramento mais vezes para aumentar o número de alvos adicionais em +1, mas deve estar tocando todos os alvos. \r\n+2 PM: muda a execução para reação. Em vez do normal, você salta para um espaço adjacente (1,5m), recebendo +5 na Defesa e em testes de Reflexos contra um ataque ou efeito que esteja prestes a atingi-lo. \r\n+3 PM: muda o alcance para longo.`
            },
            {
                meta: {
                    nome: "Santuário",
                    escola: "Abjuração",
                    ciclo: "Divina 1",
                    execucao: "padrão",
                    alcance: "toque",
                    alvo: "1 criatura",
                    duracao: "cena",
                    resitencia: "Vontade anula"
                },
                desc: `Qualquer criatura que tente fazer uma ação hostil contra o alvo deve fazer um teste de Vontade. Se falhar, não consegue atacar e não pode tentar novamente até o fim da cena. Santuário não protege o alvo de efeitos de área. Além disso, o próprio alvo também não pode fazer ações hostis, ou a magia é dissipada — mas pode usar outras habilidades e magias de cura e suporte (como Curar Ferimentos, Bênção e assim por diante).`,
                custo: `\r\n +1 PM: além do normal, escolha um tipo de criatura entre animal, construto ou morto-vivo. Você não pode ser percebido por criaturas do tipo escolhido, não importando o sentido usado. \r\n +9 PM: também protege o alvo contra efeitos de área. Uma criatura que tente atacar uma área que inclua o alvo deve fazer o teste de Vontade; se falhar, não pode atacar aquela área a menos que o alvo tenha saído dela.`
            },
            {
                meta: {
                    nome: "Segunda Chance",
                    escola: "Evocação",
                    ciclo: "Divina 5",
                    execucao: "padrão",
                    alcance: "toque",
                    alvo: "1 criatura",
                    duracao: "instantânea",
                    resitencia: ""
                },
                desc: `Um brilho alaranjado, na forma de asas de fênix, emana do alvo. Ele recupera 200 pontos de vida e se cura de qualquer das seguintes condições: abalado, apavorado, alquebrado, atordoado, cego, confuso, debilitado, enjoado, envenenado, esmorecido, exausto, fascinado, fatigado, fraco, frustrado, lento, ofuscado, paralisado, pasmo ou surdo.`,
                custo: `\r\n +1 PM: aumenta a cura em +20 PV. \r\n +2 PM: muda o alcance para curto e o alvo para até 5 criaturas. \r\n +5 PM: muda o alvo para uma criatura que tenha morrido há até uma rodada. Esta magia pode curá-la.`
            },
            {
                meta: {
                    nome: "Selo de Mana",
                    escola: "Encantamento",
                    ciclo: "Universal 3",
                    execucao: "padrão",
                    alcance: "toque",
                    alvo: "1 criatura",
                    duracao: "cena",
                    resitencia: "Vontade parcial"
                },
                desc: `Seu toque manifesta um selo mágico na pele do alvo, que atrapalha o fluxo de mana. Pela duração da magia, sempre que o alvo realizar qualquer ação que gaste PM, deve fazer um teste de Vontade; se passar, faz a ação normalmente. Se falhar, o efeito da ação é anulado (mas os PM são gastos mesmo assim).`,
                custo: `\r\n +4 PM: muda o alcance para curto e o alvo para criaturas dentro do alcance. Requer 4º círculo.`
            },
            {
                meta: {
                    nome: "Semiplano ",
                    escola: "Convocação",
                    ciclo: "Arcana 5",
                    execucao: "completa",
                    alcance: "curto",
                    alvo: "Efeito, semiplano com 30m de lado",
                    duracao: "1 dia",
                    resitencia: ""
                },
                desc: `Você cria um semiplano — uma dimensão particular. Você pode entrar no semiplano gastando uma ação padrão e 1 PM, desaparecendo do plano material como se tivesse se teletransportado. Você pode levar criaturas voluntárias que esteja tocando, ao custo de 1 PM por criatura extra. Você também pode levar objetos que esteja tocando, ao custo de 1 PM por 200kg. Uma vez no semiplano, você pode voltar ao plano material, no mesmo local onde estava, gastando uma ação completa (mas sem custo em PM), ou pode lançar Viagem Planar para voltar para outro local. \r\n Você escolhe a forma e aparência do semiplano — uma caverna, um asteroide que singra o éter, um palacete de cristal etc. Ele contém ar, luz e calor, mas além disso é vazio. Entretanto, você pode levar itens (mobília, ferramentas etc.) a cada viagem.`,
                custo: `\r\n +2 PM: adiciona alvo (1 criatura). Você cria uma semiplano labiríntico e expulsa o alvo para ele. A cada rodada, a vítima tem direito a um teste de Inteligência (CD 30), com bônus cumulativo de +1 para cada teste já realizado, para escapar do labirinto. Quando o alvo escapa, a magia termina e o alvo reaparece no plano material no mesmo local onde estava quando a magia foi lançada. Magias como Salto Dimensional e Teletransporte não ajudam a escapar do labirinto, mas Viagem Planar, sim. \r\n +5 PM: muda a duração para permanente e adiciona componente material (diorama do semiplano feito de materiais preciosos no valor de T$ 5.000). Você pode lançar a magia diversas vezes para aumentar as dimensões do semiplano em +30m de lado a cada vez.`
            },
            {
                meta: {
                    nome: "Servo Divino",
                    escola: "Convocação",
                    ciclo: "Divina 3",
                    execucao: "padrão",
                    alcance: "curto",
                    alvo: "Efeito, criatura conjurada",
                    duracao: "cena ou até ser descarregada",
                    resitencia: ""
                },
                desc: `Você pede a sua divindade que envie um espírito para ajudá-lo. Esse espírito realiza uma tarefa a sua escolha que possa ser realizada dentro de até uma hora — desde algo simples como “use suas asas para nos levar até o topo da montanha” até algo complexo como “escolte esses camponeses até o castelo”. A magia é descarregada quando a criatura cumpre a tarefa, retornando a seu plano natal. O tipo de criatura é escolhido pelo mestre, de acordo com as necessidades da tarefa. \r\nComponente material: um pagamento de T$ 100 ao espírito. A forma de pagamento varia — doações a um templo, um item mágico ou mesmo dinheiro.`,
                custo: `\r\n +4 PM: muda a duração para 1 dia ou até ser descarregada. O espírito realiza uma tarefa a sua escolha que exija até um dia. O custo do pagamento aumenta para T$ 500. O resto segue normal. \r\n +9 PM: muda a duração para 1 semana ou até ser descarregada. O espírito realiza uma tarefa que exija até uma semana. O custo do pagamento aumenta para T$ 1.000. O resto segue normal.`
            },
            {
                meta: {
                    nome: "Servo Morto-Vivo",
                    escola: "Necromancia",
                    ciclo: "Universal 3",
                    execucao: "completa",
                    alcance: "toque",
                    alvo: "1 cadáver",
                    duracao: "instantânea",
                    resitencia: ""
                },
                desc: `Esta magia transforma o cadáver de um humanoide, animal ou monstro em um esqueleto ou zumbi (conforme o estado de conservação do corpo). O morto-vivo então obedece a todos os seus comandos, mesmo suicidas. Se quiser que o morto-vivo o acompanhe, ele funciona como um aliado iniciante, de um tipo a sua escolha entre ajudante, atirador, combatente, fortão, guardião ou montaria. \r\n Se não quiser usar o morto-vivo como aliado, pode ordenar que ele proteja um local específico, atacando invasores (nesse caso, use as estatísticas no Apêndice). O número máximo de mortos-vivos que você pode ter sob seu comando ao mesmo tempo é igual ao seu nível, mas você só pode receber os benefícios de um deles como aliado por vez. Eles duram até serem destruídos (um morto-vivo destruído não pode ser reanimado).`,
                custo: `\r\n Componente material: um ônix negro (T$ 100), inserido na boca ou olho do cadáver. \r\n +3 PM: muda o componente material para pó de ônix negro (T$ 500). Em vez de um zumbi ou esqueleto, cria um carniçal. Ele pode funcionar como um aliado veterano, escolhido entre ajudante, atirador, combatente, fortão ou guardião. O resto segue normal. \r\n +3 PM: muda o componente material para pó de ônix negro (T$ 500). Em vez de um zumbi ou esqueleto, cria uma sombra. Ela pode funcionar como um aliado veterano, escolhido entre assassino, combatente ou perseguidor. O restante da magia segue normal. \r\n +7 PM: muda o componente material para ferramentas de embalsamar (T$ 1.000). Em vez de um zumbi ou esqueleto, cria uma múmia. Ela pode funcionar como um aliado mestre, escolhido entre ajudante, curandeiro, destruidor ou guardião. O restante da magia segue normal. Requer 4º círculo`
            },
            {
                meta: {
                    nome: "Servos Invisíveis",
                    escola: "Convocação",
                    ciclo: "Arcana 2",
                    execucao: "padrão",
                    alcance: "longo",
                    alvo: "Efeito, até 5 criaturas conjuradas",
                    duracao: "1 dia",
                    resitencia: ""
                },
                desc: `Você cria até cinco servos invisíveis e silenciosos, capazes de realizar tarefas simples como apanhar lenha, colher frutos, varrer o chão ou alimentar um cavalo. Em geral, os servos são capazes de manter arrumada e organizada uma mansão ou pequena torre. Eles também podem ajudá-lo em tarefas mais complexas, como fazer uma pesquisa ou preparar uma poção. Cada servo pode oferecer +1 num teste de perícia a sua escolha, como se estivesse prestando ajuda (veja o Capítulo 5). Esse bônus não se aplica a testes de ataque ou resistência. Os servos não são criaturas reais; não podem lutar, nem resistir a qualquer dano ou efeito que exija um teste de resistência — falharão automaticamente no teste e serão destruídos.`,
                custo: `\r\n +1 PM: aumenta o número de servos em +1. \r\n +3 PM: em vez do normal, a magia conjura apenas um servo, capaz de realizar tarefas mais complexas. Ele pode falar qualquer idioma que você saiba e pode fazer testes de qualquer perícia com bônus de +10 (exceto Fortitude, Iniciativa, Luta, Pontaria, Reflexos e Vontade). Assim, pode realizar missões de espionagem (Furtividade), roubar um item (Ladinagem), atuar como escriba (Ofício) ou encontrar um livro específico para suas pesquisas (Misticismo).`
            },
            {
                meta: {
                    nome: "Seta Infalível de Talude",
                    escola: "Evocação",
                    ciclo: "Arcana 1",
                    execucao: "padrão",
                    alcance: "médio",
                    alvo: "até 2 criaturas",
                    duracao: "instantânea",
                    resitencia: ""
                },
                desc: `Favorita entre magos iniciantes, esta magia lança duas setas de energia que acertam automaticamente, causando 1d4+1 pontos de dano de essência cada. Você pode disparar contra alvos diferentes ou concentrar as setas num mesmo alvo. Caso você possua um bônus no dano de magias, como pela habilidade Arcano de Batalha, ele é aplicado em apenas uma seta (o bônus vale para a magia, não cada alvo).`,
                custo: `\r\n +2 PM: muda as setas para lanças de energia, que causam 1d8+1 pontos de dano de essência cada. Requer 2º círculo. \r\n +2 PM: muda o número de setas/lanças para três. \r\n +4 PM: muda o número de setas/lanças para cinco. Requer 2º círculo. \r\n +9 PM: muda o número de setas/lanças para dez. Requer 4º círculo.`
            },
            {
                meta: {
                    nome: "Silêncio",
                    escola: "Ilusão",
                    ciclo: "Divina 2",
                    execucao: "padrão",
                    alcance: "médio",
                    alvo: "Área, esfera com 6m de raio",
                    duracao: "sustentada",
                    resitencia: ""
                },
                desc: `Um silêncio sepulcral recai sobre a área e nenhum som é produzido ali. Enquanto estiverem na área, todas as criaturas ficam surdas. Além disso, como lançar magias exige palavras mágicas, normalmente nenhuma magia pode ser lançada dentro da área.`,
                custo: `\r\n +1 PM: muda a área para alvo de 1 objeto. Em vez do normal, o alvo emana uma área de silêncio com 3m de raio. \r\n +2 PM: muda a duração para cena. Em vez do normal, nenhum som pode deixar a área, mas criaturas dentro da área podem falar, ouvir, emitir sons e lançar magias com palavras mágicas normalmente.`
            },
            {
                meta: {
                    nome: "Soco de Arsenal",
                    escola: "Convocação",
                    ciclo: "Divina 2",
                    execucao: "padrão",
                    alcance: "médio",
                    alvo: "1 criatura",
                    duracao: "instantânea",
                    resitencia: "Fortitude reduz à metade"
                },
                desc: `Ninguém sabe se Mestre Arsenal foi realmente o criador desta magia — mas ele foi o primeiro a utilizá-la. Você fecha o punho e gesticula como se estivesse golpeando o alvo, causando 4d6 + mod. Força pontos de dano de impacto. A vítima é empurrada 3m na direção oposta a sua (ou 1,5m se passar na resistência).`,
                custo: `\r\n +1 PM: muda o alcance para pessoal, o alvo para você, a duração para cena e a resistência para nenhuma. Em vez do normal, seus ataques corpo a corpo passam a acertar inimigos distantes. Seu alcance natural aumenta em 3m; uma criatura Média pode atacar adversários a até 4,5m, por exemplo. \r\n +2 PM: aumenta o dano em +1d6. \r\n +4 PM: aumenta a distância do efeito de empurrar em +3m. \r\n +5 PM: muda o tipo do dano para essência.`
            },
            {
                meta: {
                    nome: "Sombra Assassina",
                    escola: "Ilusão",
                    ciclo: "Arcana 5",
                    execucao: "padrão",
                    alcance: "curto",
                    alvo: "1 criatura",
                    duracao: "cena",
                    resitencia: "Vontade parcial"
                },
                desc: `Esta magia cria uma duplicata ilusória do alvo na forma de uma silhueta, ligada a ele como se fosse uma manifestação sólida de sua própria sombra. A duplicata de sombras segue automaticamente o alvo. Sempre que o alvo faz uma ação hostil — fazer um ataque, usar uma habilidade, lançar uma magia — a sombra imediatamente realiza a mesma ação contra o alvo, usando as mesmas estatísticas e rolagens. A sombra pode ser atacada, tem as mesmas estatísticas do alvo e é destruída quando chega a 0 PV. Se o alvo passar no teste de resistência, a sombra desaparece no final do turno do alvo, depois de copiar sua ação dessa rodada.`,
                custo: `\r\n +10 PM: muda o alvo para criaturas na área.`
            },
            {
                meta: {
                    nome: "Sonho",
                    escola: "Adivinhação",
                    ciclo: "Arcana 4",
                    execucao: "10 minutos",
                    alcance: "ilimitado",
                    alvo: "1 criatura viva",
                    duracao: "veja texto",
                    resitencia: ""
                },
                desc: `Você entra nos sonhos de uma criatura. Uma vez lá, pode conversar com o alvo até que ele acorde. Se a criatura não estiver dormindo quando você lançar a magia, você pode permanecer em transe até que ela adormeça. Durante o transe você fica indefeso e sem consciência dos arredores. Você pode sair do transe quando quiser, mas a magia termina.`,
                custo: `\r\n+2 PM: você transforma o sonho do alvo em um pesadelo terrível. A vítima deve fazer um teste de Vontade. Se falhar, não recupera nenhum PV ou PM pela noite, sofre 1d10 pontos de dano de trevas e acorda fatigada. A vítima recebe bônus ou penalidades em seu teste de resistência, dependendo do conhecimento que você tiver dela. Use os mesmos modificadores da magia Vidência. \r\n+1 PM: aumenta o número de alvos em +1. Todos os alvos compartilham um mesmo sonho (ou pesadelo) entre si e com você.`
            },
            {
                meta: {
                    nome: "Sono",
                    escola: "Encantamento",
                    ciclo: "Arcana 1",
                    execucao: "padrão",
                    alcance: "curto",
                    alvo: "1 criatura de até 4º nível",
                    duracao: "cena",
                    resitencia: "Vontade parcial"
                },
                desc: `Um sono místico recai sobre o alvo. Se passar na resistência, fica fatigado por uma rodada. Se falhar, fica inconsciente e caído.`,
                custo: `\r\n+2 PM: muda o alvo para área de quadrado com 3m de lado. Todas as criaturas na área dentro do limite de nível são afetadas. \r\n+2 PM: afeta alvos de até 8º nível. Requer 2º círculo. \r\n+5 PM: afeta alvos de até 12º nível. Requer 3º círculo. \r\n+5 PM: muda o alvo para criaturas escolhidas. Todas as criaturas no alcance dentro do limite de nível são afetadas. \r\n+9 PM: afeta alvos de até 16º nível. Requer 4º círculo. \r\n+14 PM: muda o alvo para 1 criatura de qualquer nível. Requer 5º círculo.`
            },
            {
                meta: {
                    nome: "Sopro da Salvação",
                    escola: "Evocação",
                    ciclo: "Divina 3",
                    execucao: "padrão",
                    alcance: "pessoal",
                    alvo: "Área, cone de 9m",
                    duracao: "instantânea",
                    resitencia: ""
                },
                desc: `Você enche seus pulmões de energia positiva e sopra um cone de poeira reluzente. O sopro afeta apenas seus aliados na área, curando 2d8+4 pontos de vida e removendo uma das seguintes condições de todos os alvos: abalado, atordoado, apavorado, alquebrado, cego, confuso, debilitado, enjoado, esmorecido, exausto, fascinado, fatigado, fraco, frustrado, lento, paralisado, pasmo e surdo.`,
                custo: `\r\n +2 PM: aumenta a quantidade de cura em 1d8+2. \r\n +4 PM: além do normal, se um aliado estiver com PV negativos, seus PV são levados a 0 e então a cura é aplicada. \r\n +4 PM: remove todas as condições listadas, em vez de apenas uma.`
            },
            {
                meta: {
                    nome: "Sopro das Uivantes",
                    escola: "Evocação",
                    ciclo: "Arcana 2",
                    execucao: "padrão",
                    alcance: "6m",
                    alvo: "Área, cone",
                    duracao: "instantânea",
                    resitencia: "Fortitude parcial"
                },
                desc: `Você sopra uma onda gélida, causando 4d6 pontos de dano de frio (Fortitude reduz à metade). Criaturas de tamanho Médio ou menor que falhem na resistência são empurradas 6m na direção oposta. Se houver uma parede ou outro objeto sólido (mas não uma criatura) no caminho, a criatura para de se mover, mas sofre 1d6 pontos de dano de impacto.`,
                custo: `\r\n +2 PM: aumenta o dano de frio em +2d6. \r\n +3 PM: aumenta o tamanho máximo das criaturas afetadas em uma categoria. Requer 3º círculo. \r\n +3 PM: além do normal, criaturas que falhem no teste de Fortitude ficam caídas.`
            },
            {
                meta: {
                    nome: "Suporte Ambiental",
                    escola: "Abjuração",
                    ciclo: "Divina 1",
                    execucao: "padrão",
                    alcance: "toque",
                    alvo: "1 criatura",
                    duracao: "1 dia",
                    resitencia: ""
                },
                desc: `Esta magia garante a sobrevivência em ambientes hostis. O alvo fica imune aos efeitos de calor e frio extremos, pode respirar na água se respirar ar (ou vice-versa) e não sufoca em fumaça densa.`,
                custo: `\r\n +5 PM: muda o alcance para curto e o alvo para criaturas escolhidas.`
            },
            {
                meta: {
                    nome: "Sussurros Insanos",
                    escola: "Encantamento",
                    ciclo: "Arcana 2",
                    execucao: "padrão",
                    alcance: "curto",
                    alvo: "1 humanoide",
                    duracao: "cena",
                    resitencia: "Vontade anula"
                },
                desc: `Você murmura palavras desconexas que afetam a mente do alvo. O alvo fica confuso. No fim de cada um de seus turnos, o alvo pode fazer um teste de Vontade. Se passar, a magia é dissipada.`,
                custo: `\r\n +2 PM: aumenta o número de alvos em +1. \r\n +3 PM: muda o alvo para 1 criatura. \r\n +12 PM: muda o alvo para criaturas escolhidas. Requer 5º círculo.`
            },
            {
                meta: {
                    nome: "Talho Invisível de Edauros",
                    escola: "Evocação",
                    ciclo: "Arcana 4",
                    execucao: "padrão",
                    alcance: "curto",
                    alvo: "Área, cone",
                    duracao: "instantânea",
                    resitencia: "Fortitude parcial"
                },
                desc: `Esta magia cruel foi desenvolvida pelo mago de combate Edauros, quando ainda era um bípede. Você faz um gesto rápido e dispara uma lâmina de ar em alta velocidade. Criaturas na área sofrem 8d8 pontos de dano de corte e ficam sangrando. Alvos que passem no teste de resistência sofrem metade do dano e não ficam sangrando.`,
                custo: `\r\n +2 PM: aumenta o dano em +2d8. \r\n +2 PM: muda o alvo para você e a duração para sustentada. Uma vez por rodada, como uma ação padrão, você pode disparar uma lâmina de ar contra um alvo em alcance médio, causando 6d8 pontos de dano de corte (Fortitude reduz à metade).`
            },
            {
                meta: {
                    nome: "Teia ",
                    escola: "Convocação",
                    ciclo: "Arcana 1",
                    execucao: "padrão",
                    alcance: "curto",
                    alvo: "Área, cubo com 6m de lado",
                    duracao: "cena",
                    resitencia: "Reflexos anula"
                },
                desc: `Teia cria várias camadas de fibras entrelaçadas e pegajosas na área. Qualquer criatura na área que falhar na resistência fica enredada. Uma vítima pode se libertar com uma ação padrão e um teste de Acrobacia ou Atletismo (CD igual à da magia). Além disso, a área ocupada por Teia é considerada terreno difícil. \r\n A Teia é inflamável. Qualquer ataque que cause dano de fogo destrói as teias por onde passar, libertando as criaturas enredadas mas deixando-as em chamas (veja Condições, no Apêndice B).`,
                custo: `\r\n +1 PM: além do normal, criaturas que falhem na resistência também ficam imobilizadas. \r\n +2 PM: além do normal, no início de seus turnos a magia afeta novamente qualquer criatura na área, exigindo um novo teste de Reflexos. Requer 2º círculo. \r\n +2 PM: aumenta a área em +1 cubo de 1,5m.`
            },
            {
                meta: {
                    nome: "Telecinesia",
                    escola: "Transmutação",
                    ciclo: "Arcana 3",
                    execucao: "padrão",
                    alcance: "médio",
                    alvo: "veja texto",
                    duracao: "varia (veja texto)",
                    resitencia: ""
                },
                desc: `Você move objetos ou criaturas se concentrando. Ao lançar a magia, escolha uma das opções a seguir. \r\n Força Contínua: você move uma criatura ou objeto com até 200kg, a até 6m por rodada. Uma criatura pode anular o efeito sobre ela, ou sobre um objeto que possua, passando num teste de Vontade. O peso pode ser movido em qualquer direção dentro do alcance. Ele cai no chão se sair do alcance ou a magia terminar. Duração: sustentada. \r\n Empurrão Violento: nesta versão a energia mágica é expelida de uma única vez e você pode arremessar até 10 objetos, ou um peso total de 200kg, o que for menor. Os objetos devem estar a até 3m uns dos outros. \r\n Objetos arremessados podem atingir criaturas em seu caminho, causando de 1 ponto de dano por 10kg (objetos macios, sem pontas ou sem fio) até 1d6 pontos de dano por 10kg (objetos duros, pontudos ou afiados). Criaturas atingidas têm direito a um teste de Reflexos para reduzir o dano à metade. \r\nVeja a magia completa na pagina 202 ou na wiki do t20 https://tsrd.fandom.com/pt-br/wiki/Magias_3%C2%B0_C%C3%ADrculo_T20#Telecinesia`,
                custo: `\r\n+3 PM: aumenta o limite de peso em 100kg`
            },
            {
                meta: {
                    nome: "Teletransporte",
                    escola: "Convocação",
                    ciclo: "Arcana 3",
                    execucao: "padrão",
                    alcance: "toque",
                    alvo: "até 5 criaturas voluntárias",
                    duracao: "instantânea",
                    resitencia: ""
                },
                desc: `Esta magia transporta os alvos para um lugar a sua escolha a até 1.000km.Você precisa fazer um teste de Misticismo,com dificuldade que depende de seu conhecimento sobre o local de destino. CD 20. Um lugar familiar, que você visita com frequência. CD 30. Um lugar conhecido, que você já visitou pelo menos uma vez. CD 40. Um lugar desconhecido, que você nunca visitou e só conhece a partir da descrição de outra pessoa que esteve lá. Você não pode se teletransportar para um lugar que nunca visitou sem a descrição de alguém. Ou seja, não pode se transportar para a “sala de tesouro do rei” se nunca esteve nela nem falou com alguém que esteve.Se passar no teste,os alvos chegam ao lugar desejado. Se falhar, os alvos surgem 1d10 x 10km afastados em qualquer direção (se o destino é uma cidade costeira, você pode surgir em alto-mar). Se falhar por 5 ou mais você chega em um lugar parecido, mas errado. E se você rolar 1 natural no teste a magia falha, mas você gasta PM normalmente e fica atordoado por 1d4 rodadas.`,
                custo: `\r\n+2 PM: aumenta o número de alvos em +5. \r\n+2 PM: em vez do normal, a magia teletransporta os alvos para seu santuário — um local familiar e previamente preparado. A magia pode ser usada sem limite de distância ou necessidade de testes, mas apenas dentro do mesmo plano. Preparar um local como seu santuário exige um ritual de um dia e o gasto de T$ 1.000. Você só pode ter um santuário por vez. Veja a magia completa na pagina 197 ou na wiki do t20 https://tsrd.fandom.com/pt-br/wiki/Magias_3%C2%B0_C%C3%ADrculo_T20#Teletransporte`
            },
            {
                meta: {
                    nome: "Tempestade Divina",
                    escola: "Evocação",
                    ciclo: "Divina 2",
                    execucao: "completa",
                    alcance: "longo",
                    alvo: "Área, cilindro com 9m de raio e 9m de altura",
                    duracao: "cena",
                    resitencia: ""
                },
                desc: `Esta magia só pode ser usada em ambientes abertos. A área fica sujeita a um vendaval — ataques à distância sofrem penalidade de –5, chamas são apagadas e névoas e fumaças são dissipadas em 1 rodada. Você também pode causar chuva (–5 em testes de Percepção), neve (a área fica escorregadia e exige testes de Acrobacia para equilíbrio) ou granizo (1 ponto de dano de impacto por rodada, no início de seus turnos). Criaturas na área recebem uma penalidade de –15m no deslocamento de voo`,
                custo: `\r\n +1 PM: muda a duração para sustentada. Além do normal, uma vez por rodada, como uma ação de padrão, você pode fazer um relâmpago cair sobre um alvo na área, causando 3d8 pontos de dano de eletricidade (Reflexos reduz à metade). \r\n +1 PM: se escolheu causar granizo, muda o dano para 1d6. \r\n +2 PM: aumenta o dano em +1 dado do mesmo tipo. \r\n +3 PM: se escolheu causar chuva, ela revela criaturas e objetos invisíveis na área. \r\n +7 PM: se escolheu causar neve, criaturas na área sofrem 2d6 pontos de dano de frio no início de seus turnos.`
            },
            {
                meta: {
                    nome: "Tentáculos de Trevas",
                    escola: "Necromancia",
                    ciclo: "Arcana 3",
                    execucao: "padrão",
                    alcance: "médio",
                    alvo: "Área, círculo com 6m de raio",
                    duracao: "cena",
                    resitencia: ""
                },
                desc: `Um círculo de energias sombrias se abre no chão, de onde surgem tentáculos feitos de treva viscosa. Ao lançar a magia e no início de cada um de seus turnos, você faz um teste da manobra agarrar (usando seu bônus de Misticismo) contra cada criatura na área. Se você passar, a criatura é agarrada; se a vítima já está agarrada, é esmagada, sofrendo 4d6 pontos de dano de trevas. A área conta como terreno difícil. Os tentáculos são imunes a dano.`,
                custo: `\r\n +2 PM: aumenta o raio da área em +3m. \r\n +2 PM: aumenta o dano dos tentáculos em +2d6.`
            },
            {
                meta: {
                    nome: "Terremoto",
                    escola: "Evocação",
                    ciclo: "Divina 4",
                    execucao: "padrão",
                    alcance: "longo",
                    alvo: "Área, dispersão com 30m de raio",
                    duracao: "1 rodada",
                    resitencia: "veja texto"
                },
                desc: `Esta magia cria um tremor de terra que rasga o solo. O terremoto dura uma rodada, durante a qual criaturas sobre o solo não podem se mover, atacar ou lançar magias. \r\n O efeito exato depende do terreno. \r\n Veja a magia completa na pagina 203 ou na wiki do t20 https://tsrd.fandom.com/pt-br/wiki/Magias_4%C2%B0_C%C3%ADrculo_T20#Terremoto`,
                custo: `não tem.`
            },
            {
                meta: {
                    nome: "Toque Chocante",
                    escola: "Evocação",
                    ciclo: "Arcana 1",
                    execucao: "padrão",
                    alcance: "toque",
                    alvo: "1 criatura",
                    duracao: "instantânea",
                    resitencia: "Fortitude reduz à metade"
                },
                desc: `Arcos elétricos envolvem sua mão, causando 2d8+2 pontos de dano de eletricidade. Se o alvo usa armadura de metal (ou carrega muito metal, a critério do mestre), sofre uma penalidade de –5 no teste de resistência.`,
                custo: `\r\n+1 PM: aumenta o dano em 1d8+1. \r\n+2 PM: como parte da execução da magia, você faz um ataque corpo a corpo contra o alvo. Se acertar, causa o dano do ataque e da magia. \r\n +2 PM: muda o alcance para pessoal e o alvo para área de explosão com 6m de raio. Você dispara raios pelas pontas dos dedos que afetam todas as criaturas na área.`
            },
            {
                meta: {
                    nome: "Toque da Morte",
                    escola: "Necromancia",
                    ciclo: "Universal 5",
                    execucao: "padrão",
                    alcance: "toque",
                    alvo: "1 criatura",
                    duracao: "instantânea",
                    resitencia: "Fortitude parcial"
                },
                desc: `Sua mão exala energias letais. Se a criatura tocada falhar no teste de Fortitude, seus PV são reduzidos a –10; se passar, sofre 10d8 pontos de dano de trevas.`,
                custo: `\r\n +2 PM: muda o alcance para curto. Em vez de tocar no alvo, você dispara um raio púrpura da ponta de seu dedo indicador. \r\n +5 PM: muda o alcance para curto e o alvo para inimigos no alcance. Em vez de tocar no alvo, você dispara raios púrpuras da ponta de seus dedos.`
            },
            {
                meta: {
                    nome: "Toque Vampírico",
                    escola: "Necromancia",
                    ciclo: "Arcana 2",
                    execucao: "padrão",
                    alcance: "toque",
                    alvo: "1 criatura",
                    duracao: "instantânea",
                    resitencia: "Fortitude reduz à metade"
                },
                desc: `Sua mão brilha com energia sombria, causando 6d6 pontos de dano de trevas. Você recupera pontos de vida iguais à metade do dano causado.`,
                custo: `\r\n +1 PM: como parte da execução da magia, você pode fazer um ataque corpo a corpo contra o alvo. Se acertar, causa o dano do ataque e da magia, e recupera pontos de vida iguais à metade do dano da magia. \r\n +2 PM: aumenta o dano em +2d6. \r\n +2 PM: muda o alcance para pessoal, o alvo para você e a duração para cena. Em vez do normal, a cada rodada você pode gastar uma ação padrão para tocar 1 criatura e causar 3d6 pontos de dano. Você recupera pontos de vida iguais à metade do dano causado. Requer 3º círculo.`
            },
            {
                meta: {
                    nome: "Tranca Arcana",
                    escola: "Abjuração",
                    ciclo: "Arcana 1",
                    execucao: "padrão",
                    alcance: "toque",
                    alvo: "1 objeto Grande ou menor",
                    duracao: "permanente",
                    resitencia: ""
                },
                desc: `Esta magia tranca uma porta ou outro item que possa ser aberto ou fechado (como um baú, caixa etc.), aumentando a CD de testes de Força ou Ladinagem para abri-lo em +10. Você pode abrir livremente sua própria tranca sem problemas.`,
                custo: `\r\n Componente material: chave de bronze no valor de T$ 25. \r\n Truque: muda o alcance para curto. Em vez do normal, pode abrir ou fechar um objeto de tamanho Médio ou menor, como uma porta ou baú. Não afeta objetos trancados. \r\n +1 PM: muda o alcance para curto e a duração para instantânea. Em vez do normal, a magia abre portas, baús e janelas trancadas, presas, barradas ou protegidas por outra Tranca Arcana (neste caso, o efeito é dissipado). Ela também afrouxa grilhões e solta correntes. \r\n +5 PM: aumenta a CD para abrir o alvo em +5. \r\n +5 PM: muda o alvo para 1 objeto de qualquer tamanho, podendo afetar até mesmo os portões de um castelo. Requer 3º círculo.`
            },
            {
                meta: {
                    nome: "Tranquilidade",
                    escola: "Encantamento",
                    ciclo: "Divina 1",
                    execucao: "padrão",
                    alcance: "curto",
                    alvo: "1 animal ou humanoide",
                    duracao: "cena",
                    resitencia: "Vontade parcial"
                },
                desc: `Você emana ondas de serenidade. Se falhar na resistência, o alvo tem sua atitude mudada para indiferente (veja Diplomacia no Capítulo 2) e não pode atacar ou realizar qualquer tipo de ação agressiva. Se passar, recebe –2 em testes de ataque. Qualquer ação hostil contra o alvo anula a magia e ele retorna à atitude que tinha antes (ou piorada, de acordo com o mestre).`,
                custo: `\r\n +1 PM: muda o alvo para 1 criatura. \r\n +1 PM: aumenta o número de alvos em +1. \r\n +2 PM: aumenta a penalidade em –1. \r\n +5 PM: muda o alcance para médio e o alvo para criaturas escolhidas. Requer 3º círculo.`
            },
            {
                meta: {
                    nome: "Transformação de Guerra",
                    escola: "Transmutação",
                    ciclo: "Arcana 3",
                    execucao: "padrão",
                    alcance: "pessoal",
                    alvo: "você",
                    duracao: "sustentada",
                    resitencia: ""
                },
                desc: `Você se torna uma máquina de combate, ficando mais forte, rápido e resistente. Você recebe +6 na Defesa, testes de ataque e rolagens de dano corpo a corpo, e 30 PV temporários. Durante a Transformação de Guerra você não pode lançar magias, mas se torna proficiente em todas as armas.`,
                custo: `\r\n +2 PM: aumenta os bônus na Defesa, testes de ataque e rolagens de dano corpo a corpo em +1, e os PV temporários em +10. + \r\n 2 PM: adiciona componente material (uma barra de adamante no valor de T$ 100). Sua forma de combate ganha um aspecto metálico e sem expressões. Você recebe resistência a dano 15/adamante e imunidade a atordoamento, dano não letal, doenças, encantamento, fadiga, paralisia, necromancia, sangramento, sono e veneno, e não precisa respirar.`
            },
            {
                meta: {
                    nome: "Transmutar Objetos",
                    escola: "Transmutação",
                    ciclo: "Arcana 1",
                    execucao: "padrão",
                    alcance: "toque",
                    alvo: "matéria-prima, como madeira, rochas, ossos",
                    duracao: "cena",
                    resitencia: ""
                },
                desc: `A magia transforma matéria bruta para moldar um novo objeto. Você pode usar matéria-prima mundana para criar um objeto de tamanho Pequeno ou menor e preço máximo de T$ 25, como um balde ou uma espada. O objeto reverte à matéria-prima no final da cena, ou se for tocado por um objeto feito de chumbo. Esta magia não pode ser usada para criar objetos consumíveis, como alimentos, itens alquímicos ou venenos, nem objetos com mecanismos complexos, como bestas ou armas de fogo. Transmutar Objetos anula Despedaçar.`,
                custo: `\r\n Truque: muda o alvo para 1 objeto mundano e a duração para instantânea. Em vez do normal, você pode alterar as propriedades físicas do objeto, como colorir, limpar ou sujar itens pequenos (incluindo peças de roupa), aquecer, esfriar e/ou temperar (mas não produzir) até 0,5kg de material inanimado (incluindo comida), ou curar 1 PV do objeto, consertando pequenas falhas como colar um frasco de cerâmica quebrado, unir os elos de uma corrente ou costurar uma roupa rasgada. Um objeto só pode ser afetado por este truque uma vez por dia. \r\n +2 PM: aumenta o limite de tamanho do objeto em uma categoria. \r\n +1 PM: aumenta o preço máximo do objeto criado em + T$ 25. \r\n +1 PM: muda o alcance para toque, o alvo para 1 construto e a duração para instantânea. Ao invés do normal, cura 2d8 PV do alvo. Você pode gastar 2 PM adicionais para aumentar a cura em +1d8. \r\n Veja a magia completa na pagina 204 ou na wiki do t20 https://tsrd.fandom.com/pt-br/wiki/Magias_1%C2%B0_C%C3%ADrculo_T20#Transmutar_Objetos`
            },
            {
                meta: {
                    nome: "Velocidade",
                    escola: "Transmutação",
                    ciclo: "Arcana 2",
                    execucao: "padrão",
                    alcance: "curto",
                    alvo: "1 criatura",
                    duracao: "cena",
                    resitencia: ""
                },
                desc: `O alvo pode realizar uma ação padrão ou de movimento adicional por turno. Esta ação não pode ser usada para lançar magias.`,
                custo: `\r\n+7 PM: muda o alvo para criaturas no alcance. Requer 4º círculo. \r\n+7 PM: muda o alcance para pessoal e o alvo para você. Você acelera sua mente, além de seu corpo. A ação adicional pode ser usada para lançar magias. Requer 4º círculo.`
            },
            {
                meta: {
                    nome: "Vestimenta da Fé",
                    escola: "Abjuração",
                    ciclo: "Divina 2",
                    execucao: "padrão",
                    alcance: "toque",
                    alvo: "1 traje, armadura ou escudo",
                    duracao: "1 dia",
                    resitencia: ""
                },
                desc: `Você fortalece uma indumentária com o poder de sua fé. Isso aumenta o bônus de Defesa de uma armadura ou escudo em +2 (isso é uma melhoria no item, portanto é cumulativa com outras magias). No caso de um traje, ele passa a oferecer +2 na Defesa e continua contando como se você não estivesse usando armadura.`,
                custo: `\r\n +3 PM: o objeto também oferece o mesmo bônus em testes de resistência. Requer 3º círculo. \r\n +4 PM: aumenta o bônus em +1. \r\n +7 PM: o objeto também oferece resistência a dano 5. Requer 4º círculo.`
            },
            {
                meta: {
                    nome: "Viagem Arbórea",
                    escola: "Convocação",
                    ciclo: "Divina 3",
                    execucao: "completa",
                    alcance: "pessoal",
                    alvo: "você",
                    duracao: "cena",
                    resitencia: ""
                },
                desc: `Ao lançar essa magia, você pode entrar em uma árvore adjacente que seja maior do que você. Você pode permanecer dentro da árvore livremente, percebendo os arredores de forma normal (mas sem poder fazer ações). Você pode gastar uma ação de movimento para sair da mesma árvore, ou de qualquer outra dentro de 1km. Se estiver dentro de uma árvore que seja destruída, a magia termina e você sofre 10d6 pontos de dano. Enquanto a magia durar você pode gastar ações de movimento para entrar em outras árvores.`,
                custo: `\r\n +2 PM: muda o alcance para toque, o alvo para até cinco criaturas e a duração para instantânea. Os alvos entram em uma planta (de tamanho Médio ou maior) e saem em outra planta do mesmo tamanho a até 100km de distância, especificada em direção e distância aproximadas (como “50km ao norte daqui”).`
            },
            {
                meta: {
                    nome: "Viagem Planar",
                    escola: "Convocação",
                    ciclo: "Universal 4",
                    execucao: "completa",
                    alcance: "toque",
                    alvo: "pessoal",
                    duracao: "instantânea",
                    resitencia: ""
                },
                desc: `Você viaja instantaneamente para outro plano de existência. Dentro do outro plano, você chega de 10 a 1.000km do destino pretendido (role 1d100 e multiplique por 10km).`,
                custo: `\r\nComponente material: um bastão de metal precioso em forma de forquilha (no valor de T$ 1.000). O tipo de metal determina para qual plano de existência você será enviado. Os metais que levam a dimensões específicas podem ser difíceis de encontrar, de acordo com o mestre. \r\n+2 PM: muda o alvo para até cinco criaturas voluntárias que você esteja tocando.`
            },
            {
                meta: {
                    nome: "Vidência",
                    escola: "Adivinhação",
                    ciclo: "Universal 3",
                    execucao: "completa",
                    alcance: "ilimitado",
                    alvo: "1 criatura",
                    duracao: "sustentada",
                    resitencia: "Vontade anula"
                },
                desc: `Através de uma superfície reflexiva (bacia de água benta para clérigos, lago para druidas, bola de cristal para magos, espelho para feiticeiros etc.) você pode ver e ouvir uma criatura escolhida e seus arredores (cerca de 6m em qualquer direção), mesmo que ela se mova. O alvo pode estar a qualquer distância, mas se passar em um teste de Vontade, a magia falha. \r\n A vítima recebe bônus ou penalidades em seu teste de resistência, dependendo do conhecimento que você tiver dela. \r\n • Não conhece o alvo: +10. \r\n • Ouviu falar do alvo: +5. \r\n • O alvo está em outro plano ou mundo: +5. \r\n • Já encontrou o alvo pessoalmente: +0. \r\n • Tem uma pintura, escultura ou outra representação do alvo: –2. \r\n • Conhece bem o alvo: –5. \r\n • Tem um pertence pessoal ou peça de roupa do alvo: –5. \r\n • Tem uma parte do corpo do alvo (unhas, cabelos...): –10.`,
                custo: `não tem.`
            },
            {
                meta: {
                    nome: "Visão da Verdade",
                    escola: "Adivinhação",
                    ciclo: "Universal 4",
                    execucao: "movimento",
                    alcance: "pessoal",
                    alvo: "você",
                    duracao: "cena",
                    resitencia: ""
                },
                desc: `Você passa a enxergar a forma real das coisas. Você pode ver através de camuflagem (normal e total), escuridão (normal e mágica) e magias de ilusão e transmutação (enxergando a verdade como formas translúcidas ou sobrepostas).`,
                custo: `\r\n +1 PM: muda o alcance para toque e o alvo para 1 criatura. \r\n +1 PM: além do normal, o alvo fica com sentidos apurados; ele recebe +10 em todos os testes de Percepção. \r\n +2 PM: além do normal, o alvo escuta falsidades; ele recebe +10 em todos os testes de Intuição. \r\n +4 PM: além do normal, o alvo enxerga através de paredes e barreiras com 30cm de espessura ou menos (as paredes e barreiras parecem translúcidas).`
            },
            {
                meta: {
                    nome: "Visão Mística",
                    escola: "Adivinhação",
                    ciclo: "Universal 1",
                    execucao: "padrão",
                    alcance: "pessoal",
                    alvo: "você",
                    duracao: "cena",
                    resitencia: ""
                },
                desc: `Seus olhos brilham com uma luz azul e passam a enxergar auras mágicas. Este efeito é similar ao uso de Misticismo para detectar magia, mas você detecta todas as auras mágicas em alcance médio e recebe todas as informações sobre elas sem gastar ações. Além disso, você pode gastar uma ação de movimento para descobrir se uma criatura que possa perceber em alcance médio é capaz de lançar magias e qual a aura gerada pelas magias de círculo mais alto que ela pode lançar.`,
                custo: `\r\n +1 PM: recebe visão no escuro. \r\n +1 PM: também pode enxergar objetos e criaturas invisíveis. Eles aparecem como formas translúcidas. \r\n +2 PM: muda a duração para 1 dia.`
            },
            {
                meta: {
                    nome: "Vitalidade Fantasma",
                    escola: "Necromancia",
                    ciclo: "Arcana 1",
                    execucao: "padrão",
                    alcance: "pessoal",
                    alvo: "você",
                    duracao: "instantânea",
                    resitencia: ""
                },
                desc: `Você suga energia vital da terra, recebendo 2d8 pontos de vida temporários. Os PV temporários desaparecem ao final da cena.`,
                custo: `\r\n +2 PM: aumenta os PV temporários recebidos em +1d8. \r\n +5 PM: muda o alvo para área (esfera de 6m de raio) e a resistência para Fortitude reduz à metade. Em vez do normal, você suga energia das criaturas vivas na área, causando 1d8 pontos de dano de trevas e recebendo PV temporários iguais ao dano total causado. Os PV temporários desaparecem ao final da cena. Requer 2º círculo.`
            },
            {
                meta: {
                    nome: "Voo ",
                    escola: "Transmutação",
                    ciclo: "Arcana 3",
                    execucao: "padrão",
                    alcance: "pessoal",
                    alvo: "você",
                    duracao: "cena",
                    resitencia: ""
                },
                desc: `Você recebe deslocamento de voo 12m. Voar por meio desta magia é simples como andar — por isso, você pode atacar e lançar magias normalmente enquanto voa. Quando a magia termina, você desce lentamente até o chão, como se estivesse sob efeito de Queda Suave.`,
                custo: `\r\n +1 PM: muda o alcance para toque e o alvo para 1 criatura. \r\n +4 PM: muda a duração para 1 dia. Requer 4º círculo. \r\n +4 PM: muda o alcance para curto e o alvo para até 10 criaturas. Requer 4° círculo.`
            },
            {
                meta: {
                    nome: "Voz Divina",
                    escola: "Adivinhação",
                    ciclo: "Divina 2",
                    execucao: "padrão",
                    alcance: "pessoal",
                    alvo: "você",
                    duracao: "cena",
                    resitencia: ""
                },
                desc: `Você pode conversar com criaturas de qualquer tipo: animal, construto, espírito, monstro ou morto-vivo. Pode fazer perguntas e entende suas respostas, mesmo sem um idioma em comum ou se a criatura não for capaz de falar, mas respeitando os limites da Inteligência da criatura. A atitude dessas criaturas não é alterada, mas você pode usar a perícia Diplomacia para tentar mudar sua atitude.`,
                custo: `\r\n +1 PM: você concede um pouco de vida a um cadáver, suficiente para que ele responda a suas perguntas. O conhecimento do corpo é limitado ao que ele tinha enquanto vivo e suas respostas são curtas e enigmáticas. Um corpo só pode ser alvo desta magia uma vez. Ela também não funciona em um corpo cuja cabeça tenha sido destruída.`
            },



        ]
    };
    const Poderesdata = {
        podereslist: [
            {
                nome: "Acuidade com Arma",
                classe: "Combate",
                descrição: `Quando usa uma arma leve de corpo a corpo ou uma arma de arremesso, você pode usar seu modificador de Destreza em vez de Força nos testes de ataque e rolagens de dano. Pré-requisito: Des 13.`
            },
            {
                nome: "Arma Secundária Grande",
                classe: "Combate",
                descrição: `Você pode usar duas armas de uma mão com o poder Estilo de Duas Armas. Pré-requisito: Estilo de Duas Armas.`
            },
            {
                nome: "Arremesso Potente",
                classe: "Combate",
                descrição: `Quando usa uma arma de arremesso, você pode usar seu modificador de Força em vez de Destreza nos testes de ataque. Se você possuir o poder Ataque Poderoso, poderá usá-lo com armas de arremesso. Pré-requisitos: For 13, Estilo de Arremesso.`
            },
            {
                nome: "Ataque Pesado",
                classe: "Combate",
                descrição: `Quando faz um ataque corpo a corpo com uma arma de duas mãos, você pode pagar 1 PM. Se fizer isso e acertar o ataque, além do dano você faz uma manobra derrubar ou empurrar contra o alvo como uma ação livre (use o resultado do ataque como o teste de manobra). Pré-requisito: Estilo de Duas Mãos.`
            },
            {
                nome: "Ataque Poderoso",
                classe: "Combate",
                descrição: `Declare que está usando este poder antes de fazer um ataque corpo a corpo. Você sofre –2 no teste de ataque, mas recebe +5 na rolagem de dano. Pré-requisito: For 13.`
            },
            {
                nome: "Ataque Preciso",
                classe: "Combate",
                descrição: `Se estiver usando uma arma corpo a corpo em uma das mãos e nada na outra, você recebe +2 na margem de ameaça e +1 no multiplicador de crítico.Pré-requisito: Estilo de Uma Arma.`
            },
            {
                nome: "Bloqueio com Escudo",
                classe: "Combate",
                descrição: `Quando é atingido por um ataque, habilidade ou magia, você pode gastar 1 PM para receber resistência a dano contra este ataque igual ao bônus na Defesa que seu escudo fornece. Você só pode usar este poder se estiver usando um escudo. Pré-requisito: Estilo de Arma e Escudo.`
            },
            {
                nome: "Carga de Cavalaria",
                classe: "Combate",
                descrição: `Quando faz uma investida montada, você causa +2d8 pontos de dano. Além disso, pode continuar se movendo depois do ataque. Você deve se mover em linha reta e seu movimento máximo ainda é o dobro do seu deslocamento. Pré-requisito: Ginete.`
            },
            {
                nome: "Combate Defensivo",
                classe: "Combate",
                descrição: `Quando usa a ação atacar, você pode usar este poder. Se fizer isso, até seu próximo turno, sofre –2 em todos os testes de ataque, mas recebe +5 na Defesa. Pré-requisito: Int 13.`
            },
            {
                nome: "Derrubar Aprimorado",
                classe: "Combate",
                descrição: `Você recebe +2 em testes de ataque para derrubar. Quando derruba uma criatura com essa manobra, pode gastar 1 PM para fazer um ataque extra contra ela. Pré-requisito: Combate Defensivo.`
            },
            {
                nome: "Desarmar Aprimorado",
                classe: "Combate",
                descrição: `Você recebe +2 em testes de ataque para desarmar. Quando desarma uma criatura, pode gastar 1 PM para arremessar a arma dela para longe. Para definir onde a arma cai, role 1d8 para a direção (sendo “1” diretamente à sua frente, “2” à frente e à direita e assim por diante, em sentido horário) e 1d6 para a distância (medida em quadrados de 1,5m a partir da criatura desarmada). Pré-requisito: Combate Defensivo.`
            },
            {
                nome: "Disparo Preciso",
                classe: "Combate",
                descrição: `Você pode fazer ataques à distância contra oponentes envolvidos em combate corpo a corpo sem sofrer a penalidade padrão de –5 no teste de ataque. Pré-requisito: Estilo de Disparo ou Estilo de Arremesso.`
            },
            {
                nome: "Disparo Rápido",
                classe: "Combate",
                descrição: `Se estiver usando uma arma de ataque à distância e gastar uma ação completa para atacar, você pode fazer um ataque adicional com ela (se puder recarregá-la como ação livre). Se fizer isso, sofre –2 em todos os testes de ataque até o seu próximo turno. Pré-requisito: Des 13, Estilo de Disparo ou Estilo de Arremesso.`
            },
            {
                nome: "Empunhadura Poderosa",
                classe: "Combate",
                descrição: `Ao usar uma arma feita para uma categoria de tamanho maior que a sua, a penalidade que você sofre nos testes de ataque diminui para –2 (normalmente, uma criatura que use uma arma feita para uma categoria de tamanho maior sofre uma penalidade de –5 nos testes de ataque). Pré-requisito: For 17.`
            },
            {
                nome: "Encouraçado",
                classe: "Combate",
                descrição: `Ao usar uma arma feita para uma categoria de tamanho maior que a sua, a penalidade que você sofre nos testes de ataque diminui para –2 (normalmente, uma criatura que use uma arma feita para uma categoria de tamanho maior sofre uma penalidade de –5 nos testes de ataque). Pré-requisito: For 17.`
            },
            {
                nome: "Esquiva",
                classe: "Combate",
                descrição: `Você recebe +2 em Defesa e Reflexos. Pré-requisito: Des 13.`
            },
            {
                nome: "Estilo de Arma e Escudo",
                classe: "Combate",
                descrição: `Se você estiver usando um escudo, o bônus na Defesa que ele fornece aumenta em +2. Pré-requisitos: treinado em Luta, proficiência com escudos.`
            },
            {
                nome: "Estilo de Arremesso",
                classe: "Combate",
                descrição: `Você pode sacar armas de arremesso como uma ação livre e recebe +2 nas rolagens de dano com elas. Pré-requisito: treinado em Pontaria.`
            },
            {
                nome: "Estilo de Disparo",
                classe: "Combate",
                descrição: `Se estiver usando uma arma de disparo, você soma o bônus de Destreza nas rolagens de dano. Pré-requisito: treinado em Pontaria.`
            },
            {
                nome: "Estilo de Duas Armas",
                classe: "Combate",
                descrição: `Se estiver usando duas armas (e pelo menos uma delas for leve) e fizer a ação atacar, você pode fazer dois ataques, um com cada arma. Se fizer isso, sofre –2 em todos os testes de ataque até o seu próximo turno. Se você possuir Ambidestria, não sofre essa penalidade. Pré-requisito: Des 15, treinado em Luta.`
            },
            {
                nome: "Estilo de Duas Mãos",
                classe: "Combate",
                descrição: `Se estiver usando uma arma corpo a corpo com as duas mãos, você recebe +5 nas rolagens de dano. Este poder não pode ser usado com armas leves. Pré-requisitos: For 15, Treinado em Luta.`
            },
            {
                nome: "Estilo de Uma Arma",
                classe: "Combate",
                descrição: `Se estiver usando uma arma corpo a corpo em uma das mãos e nada na outra, você recebe +2 na Defesa e nos testes de ataque com essa arma (exceto ataques desarmados). Pré-requisito: treinado em Luta.`
            },
            {
                nome: "Estilo Desarmado",
                classe: "Combate",
                descrição: `Seus ataques desarmados causam 1d6 pontos de dano e podem causar dano letal ou não letal (sem penalidades). Pré-requisito: treinado em Luta.`
            },
            {
                nome: "Fanático",
                classe: "Combate",
                descrição: `Seu deslocamento não é reduzido por usar armaduras pesadas. Pré-requisitos: 12º nível de personagem, Encouraçado.`
            },
            {
                nome: "Finta Aprimorada",
                classe: "Combate",
                descrição: `Você recebe +2 em testes de Enganação para fintar e pode fintar como uma ação de movimento. Pré-requisitos: treinado em Enganação e Luta.`
            },
            {
                nome: "Foco em Arma",
                classe: "Combate",
                descrição: `Escolha uma arma. Você recebe +2 em testes de ataque com essa arma. Você pode escolher este poder outras vezes para armas diferentes. Pré-requisito: proficiência com a arma.`
            },
            {
                nome: "Ginete",
                classe: "Combate",
                descrição: `Você passa automaticamente em testes de Cavalgar para não cair da montaria quando sofre dano. Além disso, não sofre penalidades para atacar à distância ou lançar magias quando montado. Pré-requisito: treinado em Cavalgar.`
            },
            {
                nome: "Inexpugnável",
                classe: "Combate",
                descrição: `Se estiver usando uma armadura pesada, você recebe +2 em todos os testes de resistência. Pré requisitos: Encouraçado, 6º nível de personagem.`
            },
            {
                nome: "Mira Apurada",
                classe: "Combate",
                descrição: `Você pode gastar uma ação de movimento para mirar. Se fizer isso, recebe +2 em testes de ataque e na margem de ameaça com ataques à distância até o fim do turno. Pré-requisitos: Sab 13, Disparo Preciso.`
            },
            {
                nome: "Presença Aterradora",
                classe: "Combate",
                descrição: `Você pode gastar uma ação padrão e 1PM para assustar todas as criaturas a sua escolha em alcance curto. Veja a perícia Intimidação para as regras de assustar. Pré-requisito: treinado em Intimidação.`
            },
            {
                nome: "Proficiência",
                classe: "Combate",
                descrição: `Escolha uma proficiência: armas marciais, armas de fogo, armaduras pesadas ou escudos (se for proficiente em armas marciais, você também pode escolher armas exóticas). Você recebe essa proficiência. Você pode escolher este poder outras vezes para proficiências diferentes.`
            },
            {
                nome: "Quebrar Aprimorado",
                classe: "Combate",
                descrição: `Você recebe +2 em testes de ataque para quebrar. Quando reduz os PV de uma arma para 0 ou menos, você pode gastar 1 PM para realizar um ataque extra contra o usuário dela. O ataque adicional usa os mesmos valores de ataque e dano, mas os dados devem ser rolados novamente. Pré-requisito: Ataque Poderoso.`
            },
            {
                nome: "Reflexos de Combate",
                classe: "Combate",
                descrição: `Você ganha uma ação de movimento extra no seu primeiro turno de cada combate. Pré-requisito: Des 13.`
            },
            {
                nome: "Saque Rápido",
                classe: "Combate",
                descrição: `Você recebe +2 em Iniciativa e pode sacar ou guardar itens como uma ação livre (em vez de ação de movimento). Além disso, a ação que você gasta para recarregar uma arma de disparo diminui em uma categoria (ação completa para padrão, padrão para movimento, movimento para livre). Pré-requisito: treinado em Iniciativa.`
            },
            {
                nome: "Trespassar",
                classe: "Combate",
                descrição: `Quando você faz um ataque corpo a corpo e reduz os pontos de vida do alvo para 0 ou menos, pode gastar 1 PM para fazer um ataque adicional contra outra criatura dentro do seu alcance. O ataque adicional usa os mesmos valores de ataque e dano, mas os dados devem ser rolados novamente. Pré requisito: Ataque Poderoso.`
            },
            {
                nome: "Vitalidade",
                classe: "Combate",
                descrição: `Você recebe +1 PV por nível de personagem e +2 em Fortitude. Pré-requisito: Con 13.`
            },
            {
                nome: "Acrobático",
                classe: "Destino",
                descrição: `Você pode usar seu modificador de Destreza em vez de Força em testes de Atletismo. Além disso, terreno difícil não reduz seu deslocamento nem o impede de realizar investidas. Pré-requisito: Des 15.`
            },
            {
                nome: "Ao Sabor do Destino",
                classe: "Destino",
                descrição: `Você recebe diversos benefícios, de acordo com seu nível de personagem e a tabela abaixo. pagina 135`
            },
            {
                nome: "Aparência Inofensiva",
                classe: "Destino",
                descrição: `A primeira criatura inteligente (Int 3 ou mais) que atacar você em uma cena deve fazer um teste de Vontade (CD Car). Se falhar, perderá sua ação. Este poder só funciona uma vez por cena; independentemente de a criatura falhar ou não no teste, poderá atacá-lo nas rodadas seguintes. Pré-requisito: Car 13.`
            },
            {
                nome: "Atlético",
                classe: "Destino",
                descrição: `Você recebe +2 em Atletismo e +3m em seu deslocamento. Pré-requisito: For 15.`
            },
            {
                nome: "Atraente",
                classe: "Destino",
                descrição: `Você recebe +2 em testes de perícias baseadas em Carisma contra criaturas que possam se sentir fisicamente atraídas por você. Pré-requisito: Car 13.`
            },
            {
                nome: "Comandar",
                classe: "Destino",
                descrição: `Você pode gastar uma ação de movimento e 1 PM para gritar ordens para seus aliados em alcance médio. Eles recebem +1 em testes de perícia até o fim da cena. Pré-requisito: Car 13.`
            },
            {
                nome: "Foco em Perícia",
                classe: "Destino",
                descrição: `Escolha uma perícia. Quando faz um teste dessa perícia, você pode gastar 1 PM para rolar dois dados e usar o melhor resultado. Você pode escolher este poder outras vezes para perícias diferentes. Este poder não pode ser aplicado em Luta e Pontaria (mas veja Foco em Arma). Pré-requisito: treinado na perícia escolhida.`
            },
            {
                nome: "Investigador",
                classe: "Destino",
                descrição: `Você recebe +2 em Investigação e soma seu bônus de Inteligência em Intuição. Pré-requisito: Int 13.`
            },
            {
                nome: "Lobo Solitário",
                classe: "Destino",
                descrição: `Você recebe +1 em testes de perícia e Defesa se estiver sem nenhum aliado em alcance curto. Você não sofre penalidade por usar a perícia Cura em si mesmo.`
            },
            {
                nome: "Medicina",
                classe: "Destino",
                descrição: `Você pode gastar uma ação completa para fazer um teste de Cura (CD 15) em uma criatura. Se você passar, ela recupera 1d6 PV, mais 1d6 para cada 5 pontos pelos quais o resultado do teste exceder a CD (2d6 com um resultado 20, 3d6 com um resultado 25 e assim por diante). Você só pode usar este poder uma vez por dia numa mesma criatura. Pré-requisitos:Sab 13, treinado em Cura.`
            },
            {
                nome: "Parceiro",
                classe: "Destino",
                descrição: `Você possui um parceiro animal ou humanoide que o acompanha em aventuras. Escolha os detalhes\ndele, como nome, aparência e personalidade. Em termos de jogo, é um aliado iniciante de um tipo a sua escolha (veja a página 246). O parceiro obedece às suas ordens e se arrisca para ajudá-lo. Entretanto, se for maltratado, pode parar de segui-lo (de acordo com o mestre). Se perder seu parceiro, você recebe outro no início da próxima aventura. Pré-requisitos: treinado em Adestramento (parceiro animal) ou Diplomacia (parceiro humanoide), 6º nível de personagem.`
            },
            {
                nome: "Sentidos Aguçados",
                classe: "Destino",
                descrição: `Você recebe +2 em Percepção, não fica desprevenido contra inimigos que não possa ver e, sempre que erra um ataque devido a camuflagem ou camuflagem total, pode rolar mais uma vez o dado da chance de falha. Pré-requisitos: Sab 13, treinado em Percepção.`
            },
            {
                nome: "Sortudo",
                classe: "Destino",
                descrição: `Você pode gastar 3 PM para rolar novamente um teste recém realizado (apenas uma vez por teste).`
            },
            {
                nome: "Surto Heroico",
                classe: "Destino",
                descrição: `Uma vez por rodada, você pode gastar 5 PM para realizar uma ação padrão ou de movimento adicional.`
            },
            {
                nome: "Torcida",
                classe: "Destino",
                descrição: `Você recebe +2 em testes de perícia e Defesa quando tem a torcida a seu favor. Entenda-se por “torcida” qualquer número de criaturas inteligentes em alcance médio que não esteja realizando nenhuma ação além de torcer por você. Pré-requisito: Car 13`
            },
            {
                nome: "Treinamento em Perícia",
                classe: "Destino",
                descrição: `Você se torna treinado em uma perícia a sua escolha. Você pode escolher este poder outras vezes para perícias diferentes.`
            },
            {
                nome: "Venefício",
                classe: "Destino",
                descrição: `Quando usa um veneno, você não corre risco de se envenenar acidentalmente. Além disso, a CD para resistir aos seus venenos aumenta em +2. Pré-requisito: treinado em Ofício (alquimia).`
            },
            {
                nome: "Vontade de Ferro",
                classe: "Destino",
                descrição: `Você recebe +1 PM para cada dois níveis de personagem e +2 em Vontade. Pré-requisito: Sab 13.`
            },
            {
                nome: "Celebrar Ritual",
                classe: "Magia",
                descrição: `Você pode lançar magias na forma de rituais. Isso dobra seu limite de PM, mas muda a execução para 1 hora (ou o dobro, o que for maior). Você gasta T$ 10 em incensos, oferendas etc. por PM do custo total. Após esse gasto, paga apenas metade do custo em PM da magia (após aplicar quaisquer outros efeitos de redução). Assim, um arcanista de 8º nível pode lançar uma magia de 16 PM gastando T$ 160 e 8 PM. Pré-requisitos: treinado em Misticismo ou Religião, 8º nível de personagem.`
            },
            {
                nome: "Escrever Pergaminho",
                classe: "Magia",
                descrição: `Você pode usar a perícia Ofício (escriba) para fabricar pergaminhos com magias que conheça. Veja a página 121 para a regra de fabricar itens e a página 327 para a regra de pergaminhos. De acordo com o mestre, você pode usar outros objetos similares, como runas, tabuletas de argila etc. Pré-requisitos: habilidade de classe Magias, treinado em Ofício (escriba).`
            },
            {
                nome: "Foco em Magia",
                classe: "Magia",
                descrição: `Escolha uma magia. Seu custo diminui em –1 PM (cumulativo com outras reduções de custo). Você pode escolher este poder outras vezes para magias diferentes.`
            },
            {
                nome: "Magia Acelerada",
                classe: "Magia",
                descrição: `Muda a execução da magia para ação livre. Você só pode aplicar este aprimoramento em magias com execução de movimento, padrão ou completa e só pode lançar uma magia como ação livre por rodada. Custo: +4 PM. Pré-requisito: lançar magias de 2º círculo.`
            },
            {
                nome: "Magia Ampliada",
                classe: "Magia",
                descrição: `Aumenta o alcance da magia em um passo (de curto para médio, de médio para longo) ou dobra a área de efeito da magia. Por exemplo, uma Bola de Fogo ampliada tem seu alcance aumentado para longo ou sua área aumentada para 12m de raio. Custo: +2 PM.`
            },
            {
                nome: "Magia Discreta",
                classe: "Magia",
                descrição: `Você lança a magia sem gesticular e falar, usando apenas concentração. Isso permite lançar magias com as mãos presas, amordaçado etc. Também permite lançar magias arcanas usando armadura sem teste de Misticismo. Outros personagens só percebem que você lançou uma magia se passarem num teste de Misticismo (CD 20). Custo: +2 PM.`
            },
            {
                nome: "Magia Ilimitada",
                classe: "Magia",
                descrição: `Você soma seu modificador do atributo-chave no limite de PM que pode gastar numa magia. Por exemplo, um mago de 5º nível com Int 18 (+4) e este poder pode gastar até 9 PM em cada magia.`
            },
            {
                nome: "Preparar Poção",
                classe: "Magia",
                descrição: `Você pode usar a perícia Ofício (alquimia) para fabricar poções com magias que conheça de 1º e 2º círculos. Veja a página 121 para a regra de fabricar itens e a página 327 para a regra de poções. Pré-requisitos: Habilidade de classe Magias, treinado em Ofício (alquimia).`
            },
            {
                nome: "Afinidade co a Tormenta",
                classe: "Concedidos",
                descrição: `Você recebe +10 em testes de resistência contra efeitos da Tormenta e de suas criaturas.`
            },
            {
                nome: "Anfíbio",
                classe: "Concedidos",
                descrição: `Você pode respirar embaixo d’água e adquire deslocamento de natação igual a seu deslocamento terrestre.`
            },
            {
                nome: "Armas da ambição",
                classe: "Concedidos",
                descrição: `Você recebe +1 em testes de ataque com armas nas quais é proficiente.`
            },
            {
                nome: "Arsenal das profundezas",
                classe: "Concedidos",
                descrição: `Você recebe +2 nas rolagens de dano com azagaias, lanças e tridentes.`
            },
            {
                nome: "Astúcia da Serpente",
                classe: "Concedidos",
                descrição: `Você recebe +2 em Enganação e Intuição.`
            },
            {
                nome: "Ataque Piedoso",
                classe: "Concedidos",
                descrição: `Você pode usar armas de corpo a corpo para causar dano não letal sem sofrer a penalidade de –5 no teste de ataque.`
            },
            {
                nome: "Aura de Medo",
                classe: "Concedidos",
                descrição: `Você pode gastar 2 PM para gerar uma aura de medo com alcance curto e duração até o fim da cena. Todos os inimigos que entrem na aura devem fazer um teste de Vontade (CD Car) ou ficam abalados até o fim da cena. Uma criatura que passe no teste de Vontade fica imune a esta habilidade por um dia.`
            },
            {
                nome: "Aura de Paz",
                classe: "Concedidos",
                descrição: `Você pode gastar 2 PM para gerar uma aura de paz com alcance curto e duração de uma cena. Qualquer inimigo dentro da aura que tente fazer uma ação hostil contra você deve fazer um teste de Vontade (CD Car). Se falhar, perderá sua ação. Se passar, fica imune a esta habilidade por um dia.`
            },
            {
                nome: "Aura Restauradora",
                classe: "Concedidos",
                descrição: `Você e seus aliados em alcance curto recuperam duas vezes mais pontos de vida por descanso.`
            },
            {
                nome: "Bênção do Mana",
                classe: "Concedidos",
                descrição: `Você recebe +3 pontos de mana.`
            },
            {
                nome: "Carícia Sombria",
                classe: "Concedidos",
                descrição: `Você pode gastar 1 PM e uma ação padrão para cobrir sua mão com energia negativa e tocar uma criatura em alcance corpo a corpo. A criatura sofre 2d6 pontos de dano de trevas (Fortitude CD Sab reduz à metade) e você recupera PV iguais à metade do dano causado. Você pode aprender Toque Vampírico como uma magia divina. Se fizer isso, o custo dela diminui em –1 PM.`
            },
            {
                nome: "Centelha Mágica",
                classe: "Concedidos",
                descrição: `Escolha uma magia arcana ou divina de 1º círculo. Você aprende e pode lançar essa magia. Pré-requisito: não possuir a habilidade de classe Magias.`
            },
            {
                nome: "Conhecimento Enciclopédico",
                classe: "Concedidos",
                descrição: `Você se torna treinado em duas perícias baseadas em Inteligência a sua escolha.`
            },
            {
                nome: "Conjurar Arma",
                classe: "Concedidos",
                descrição: `Você pode gastar 1 PM para invocar uma arma corpo a corpo ou de arremesso com a qual seja proficiente. A arma surge em sua mão, recebe um bônus de +1 em testes de ataque e rolagens de dano e dura pela cena. Você não pode criar armas de disparo, mas pode criar 20 projéteis (flechas, virotes etc.).`
            },
            {
                nome: "Coragem Total",
                classe: "Concedidos",
                descrição: `Você é imune a efeitos de medo, mágicos ou não. Este poder não elimina fobias raciais (como o medo de altura dos minotauros).`
            },
            {
                nome: "Cura Gentil ",
                classe: "Concedidos",
                descrição: `Você adiciona seu bônus de Carisma (mínimo +1) aos PV restaurados por suas magias de cura.`
            },
            {
                nome: "Curandeira Perfeita",
                classe: "Concedidos",
                descrição: `Você sempre pode escolher 10 em testes de Cura. Além disso, pode usar essa perícia mesmo sem um kit de medicamentos. Se usar o kit, recebe +2 no teste de Cura.`
            },
            {
                nome: "Dedo Verde",
                classe: "Concedidos",
                descrição: `Você aprende e pode lançar Controlar Plantas.`
            },
            {
                nome: "Descanso Natural",
                classe: "Concedidos",
                descrição: `Para você, dormir ao relento conta como uma estalagem confortável.`
            },
            {
                nome: "Dom da Imortalidade",
                classe: "Concedidos",
                descrição: `Você é imortal. Sempre que morre, não importando o motivo, volta à vida após 3d6 dias. Você não perde níveis de experiência. Apenas paladinos podem escolher este poder. Um personagem pode ter Dom da Imortalidade ou Dom da Ressurreição, mas não ambos. `
            },
            {
                nome: "Dom da Profecia",
                classe: "Concedidos",
                descrição: `Você pode lançar Augúrio. Você também pode gastar 2 PM para receber +2 em um teste.`
            },
            {
                nome: "Dom da Ressurreição",
                classe: "Concedidos",
                descrição: `Você pode gastar uma ação completa e todos os PM que possui (mínimo 1 PM) para tocar o corpo de uma criatura morta há menos de um ano e ressuscitá-la. A criatura volta à vida com 1 PV e 0 PM, e perde 2 pontos de Constituição permanentemente. Este poder só pode ser usado uma vez em cada criatura. Apenas clérigos podem escolher este poder. Um personagem pode ter Dom da Imortalidade ou Dom da Ressurreição, mas não ambos.`
            },
            {
                nome: "Dom da Verdade",
                classe: "Concedidos",
                descrição: `Você pode pagar 1 PM para receber +5 em testes de Intuição até o fim da cena.`
            },
            {
                nome: "Escamas Dracônicas",
                classe: "Concedidos",
                descrição: `Você recebe +1 na Defesa.`
            },
            {
                nome: "Escudo Mágico",
                classe: "Concedidos",
                descrição: `Quando lança uma magia, você recebe +2 na Defesa até o início do seu próximo turno.`
            },
            {
                nome: "Espada Justiceira",
                classe: "Concedidos",
                descrição: `Você pode gastar 1 PM para encantar sua espada (ou outra arma corpo a corpo de corte que esteja empunhando). Ela recebe +1 em testes de ataque e rolagens de dano até o fim da cena.`
            },
            {
                nome: "Espada Solar",
                classe: "Concedidos",
                descrição: `Você pode gastar 1 PM para fazer uma arma corpo a corpo de corte que esteja empunhando causar +1d6 de dano por fogo até o fim da cena.`
            },
            {
                nome: "Farsa do Fingidor",
                classe: "Concedidos",
                descrição: `Você aprende e pode lançar Criar Ilusão.`
            },
            {
                nome: "Forma de Macaco",
                classe: "Concedidos",
                descrição: `Você pode gastar uma ação completa e 2 PM para se transformar em um macaco. Você adquire tamanho Minúsculo (o que fornece +5 em Furtividade e –5 em testes de manobra) e recebe deslocamento de escalar 9m. Seu equipamento desaparece (e você perde seus benefícios) até você voltar ao normal, mas suas outras estatísticas não são alteradas. A transformação dura indefinidamente, mas termina caso você faça um ataque, lance uma magia ou sofra dano.`
            },
            {
                nome: "Fúria Divina",
                classe: "Concedidos",
                descrição: `Você pode gastar 2 PM para invocar uma fúria selvagem, tornando-se temível em combate. Você recebe +2 em testes de ataque e rolagens de dano corpo a corpo, mas não pode executar nenhuma ação que exija paciência ou concentração (como usar a perícia Furtividade ou lançar magias). A Fúria Divina termina se, ao fim da rodada, você não tiver atacado nem sido alvo de um efeito hostil.`
            },
            {
                nome: "Golpista Divino",
                classe: "Concedidos",
                descrição: `Você recebe +2 em Enganação e Ladinagem.`
            },
            {
                nome: "Habitante do Deserto",
                classe: "Concedidos",
                descrição: `Você recebe resistência a fogo 5 e pode pagar 1 PM para criar água pura e potável suficiente para um odre (ou outro recipiente pequeno).`
            },
            {
                nome: "Inimigo de Tenebra",
                classe: "Concedidos",
                descrição: `Seus ataques e habilidades causam +1d6 pontos de dano contra mortos-vivos.`
            },
            {
                nome: "Kiai Divino",
                classe: "Concedidos",
                descrição: `Quando faz um ataque corpo a corpo, você pode pagar 2 PM. Se acertar o ataque, causa dano máximo.`
            },
            {
                nome: "Liberdade Divina",
                classe: "Concedidos",
                descrição: `Você pode gastar 2 PM e uma reação para lançar Libertação com alcance pessoal e duração de 1 rodada.`
            },
            {
                nome: "Manto da Penumbra",
                classe: "Concedidos",
                descrição: `Você aprende e pode lançar Escuridão.`
            },
            {
                nome: "Mente Analítica",
                classe: "Concedidos",
                descrição: `Você recebe +2 em Intuição e Vontade.`
            },
            {
                nome: "Mente Vazia",
                classe: "Concedidos",
                descrição: `Você recebe +2 em Iniciativa e Vontade.`
            },
            {
                nome: "Mestre dos Mares",
                classe: "Concedidos",
                descrição: `Você pode falar com animais aquáticos (como o efeito da magia Voz Divina) e aprende e pode lançar Acalmar Animal, mas só contra criaturas aquáticas.`
            },
            {
                nome: "Olhar Amedrontador",
                classe: "Concedidos",
                descrição: `Você aprende e pode lançar Amedrontar.`
            },
            {
                nome: "Palavras de Bondade ",
                classe: "Concedidos",
                descrição: `Você aprende e pode lançar Enfeitiçar.`
            },
            {
                nome: "Percepção Temporal",
                classe: "Concedidos",
                descrição: `Você pode gastar 3 PM para adicionar seu bônus de Sabedoria (mínimo +1, limitado por seu nível) a seus ataques, Defesa e testes de Reflexos até o fim da cena.`
            },
            {
                nome: "Poder Oculto",
                classe: "Concedidos",
                descrição: `Você pode gastar uma ação de movimento e 2 PM para invocar a força, a rapidez ou o vigor dos loucos. Role 1d6 para receber +4 em Força (1 ou 2), Destreza (3 ou 4) ou Constituição (5 ou 6) até o fim da cena. Você pode usar este poder várias vezes, cada vez gastando uma ação de movimento e 2 PM. `
            },
            {
                nome: "Presas venenosas",
                classe: "Concedidos",
                descrição: `Você pode gastar uma ação de movimento e 1 PM para envenenar uma arma corpo a corpo que esteja empunhando. Em caso de acerto, a arma causa 1d12 pontos de dano de veneno. A arma permanece envenenada até atingir uma criatura ou até o fim da cena, o que acontecer primeiro.`
            },
            {
                nome: "Rejeição Divina",
                classe: "Concedidos",
                descrição: `Você recebe +5 em testes de resistência contra magias divinas.`
            },
            {
                nome: "Sangue de Ferro",
                classe: "Concedidos",
                descrição: `Você pode pagar 2 PM para receber +2 em rolagens de dano e resistência a dano 5 até o fim da cena.`
            },
            {
                nome: "Sangue Ofídico",
                classe: "Concedidos",
                descrição: `Você recebe resistência a veneno 5 e a CD para resistir aos seus venenos aumenta em +2.`
            },
            {
                nome: "Servos do Dragão",
                classe: "Concedidos",
                descrição: `Você pode gastar uma ação completa e 2 PM para invocar 2d4+1 kobolds em espaços desocupados em alcance curto. Você pode usar uma ação de movimento para fazer os kobolds andarem (eles têm deslocamento 9m) ou uma ação padrão para fazê-los causar dano a criaturas adjacentes (1d6–1 pontos de dano de perfuração cada). Os kobolds têm For 8, Des 14, 1 PV, não têm valor de Defesa ou testes de resistência e falham automaticamente em qualquer teste oposto. Eles desaparecem quando morrem ou no fim da cena. Os kobolds não agem sem receber uma ordem. Usos criativos para criaturas invocadas fora de combate ficam a critério do mestre.`
            },
            {
                nome: "Sorte dos loucos",
                classe: "Concedidos",
                descrição: `Você pode pagar 1 PM para rolar novamente um teste recém realizado. Se ainda assim falhar no teste, você perde 1d6 PM.`
            },
            {
                nome: "Talento Artístico",
                classe: "Concedidos",
                descrição: `Você recebe +2 em Atuação e Diplomacia.`
            },
            {
                nome: "Teurgista Místico",
                classe: "Concedidos",
                descrição: `Até uma magia de cada círculo que você aprender poderá ser escolhida entre magias divinas (se você for um conjurador arcano) ou entre magias arcanas (se for um conjurador divino). Pré-requisito: habilidade de classe Magias.`
            },
            {
                nome: "Transmissão da Loucura",
                classe: "Concedidos",
                descrição: `Você pode lançar Sussurros Insanos (CD Car).`
            },
            {
                nome: "Tropas Duyshidakk",
                classe: "Concedidos",
                descrição: `Você pode gastar uma ação completa e 2 PM para invocar 1d4+1 goblinoides em espaços desocupados em alcance curto. Você pode usar uma ação de movimento para fazer os goblinoides andarem (eles têm deslocamento 9m) ou uma ação padrão para fazê-los causar dano a criaturas adjacentes (1d6+1 pontos de dano de corte cada). Os goblinoides têm For 14, Des 14, 1 PV, não têm valor de Defesa ou testes de resistência e falham automaticamente em qualquer teste oposto. Eles desaparecem quando morrem ou no fim da cena. Os goblinoides não agem sem receber uma ordem. Usos criativos para criaturas invocadas fora de combate ficam a critério do mestre. `
            },
            {
                nome: "Urro Divino",
                classe: "Concedidos",
                descrição: `Quando faz um ataque ou lança uma magia, você pode pagar 1 PM para somar seu modificador de Constituição (mínimo +1) à rolagem de dano desse ataque ou magia.`
            },
            {
                nome: "Visão nas Trevas",
                classe: "Concedidos",
                descrição: `Você enxerga perfeitamente no escuro, incluindo em magias de escuridão.`
            },
            {
                nome: "Voz da Civilização",
                classe: "Concedidos",
                descrição: `Você está sempre sob efeito de Compreensão.`
            },
            {
                nome: "Voz da Natureza",
                classe: "Concedidos",
                descrição: `Você pode falar com animais (como o efeito da magia Voz Divina) e aprende e pode lançar Acalmar Animal, mas só contra animais.`
            },
            {
                nome: "Voz dos Monstros ",
                classe: "Concedidos",
                descrição: `Você conhece os idiomas de todos os monstros inteligentes (criaturas do tipo monstro com Int 3 ou mais) e pode se comunicar livremente com monstros não inteligentes (Int 1 ou 2), como se estivesse sob efeito da magia Voz Divina.`
            },
            {
                nome: "Anatomia Insana",
                classe: "Tormenta",
                descrição: `Você tem 25% de chance (resultado “1” em 1d4) de ignorar o dano adicional de um acerto crítico ou ataque furtivo. A chance aumenta em +25% para cada dois outros poderes da Tormenta que você possui.`
            },
            {
                nome: "Antenas",
                classe: "Tormenta",
                descrição: `Você recebe +1 em Iniciativa, Percepção e Vontade. Este bônus aumenta em +1 para cada dois outros poderes da Tormenta que você possui.`
            },
            {
                nome: "Armamento Aberrante",
                classe: "Tormenta",
                descrição: `Você pode gastar uma ação de movimento e 1 PM para produzir uma arma orgânica macabra — ela brota do seu braço, ombro ou costas como uma planta grotesca e então se desprende. Você pode produzir qualquer arma corpo a corpo ou de arremesso com a qual seja proficiente. O dano da arma aumenta em um passo para cada dois outros poderes da Tormenta que você possui. A arma dura pela cena, então se desfaz numa poça de gosma. Pré-requisito: outro poder da Tormenta.`
            },
            {
                nome: "Articulações Flexíveis",
                classe: "Tormenta",
                descrição: `Você recebe +1 em Acrobacia, Furtividade e Reflexos. Este bônus aumenta em +1 para cada dois outros poderes da Tormenta que você possui.`
            },
            {
                nome: "Asas Insetoides",
                classe: "Tormenta",
                descrição: `Você pode gastar 1 PM para receber deslocamento de voo 9m até o fim da rodada. O deslocamento aumenta em 1,5m para cada outro poder da Tormenta que você possui. Pré-requisitos: quatro outros poderes da Tormenta.`
            },
            {
                nome: "Carapaça",
                classe: "Tormenta",
                descrição: `Sua pele é recoberta por placas quitinosas. Você recebe +1 na Defesa. Este bônus aumenta em +1 para cada dois outros poderes da Tormenta que você possui.`
            },
            {
                nome: "Corpo Aberrante",
                classe: "Tormenta",
                descrição: `Crostas vermelhas em várias partes de seu corpo tornam seus ataques mais perigosos. Seu dano desarmado aumenta em um passo, mais um passo para cada quatro outros poderes da Tormenta que você possui. Pré-requisito: outro poder da Tormenta.`
            },
            {
                nome: "Dentes Afiados",
                classe: "Tormenta",
                descrição: `Você recebe uma arma natural de mordida (dano 1d4, crítico x2, corte). Quando usa a ação atacar, pode gastar 1 PM para fazer um ataque corpo a corpo extra com a mordida.`
            },
            {
                nome: "Empunhadura Rubra",
                classe: "Tormenta",
                descrição: `Você pode gastar 1 PM para cobrir suas mãos com uma carapaça rubra. Até o final da cena, você recebe +1 em Luta. Este bônus aumenta em +1 para cada dois outros poderes da Tormenta que você possui.`
            },
            {
                nome: "Mãos Membranosas",
                classe: "Tormenta",
                descrição: `Você recebe +1 em Atletismo, Fortitude e testes de agarrar. Este bônus aumenta em +1 para cada dois outros poderes da Tormenta que você possui`
            },
            {
                nome: "Membros extras",
                classe: "Tormenta",
                descrição: `Você possui um par de patas insetoides que saem de suas costas, ombros ou flancos. Quando usa a ação atacar, pode gastar 2 PM para fazer um ataque corpo a corpo extra com cada um (dano 1d4, crítico x2, corte). Se possuir Ambidestria ou Estilo de Duas Armas, pode empunhar armas leves em suas patas insetoides (mas ainda precisa pagar 2 PM para atacar com elas e sofre a penalidade de –2 em todos os ataques). Pré-requisitos: quatro outros poderes da Tormenta.`
            },
            {
                nome: "Olhos Vermelhos",
                classe: "Tormenta",
                descrição: `Você recebe visão no escuro e +1 em Intimidação. Este bônus aumenta em +1 para cada dois outros poderes da Tormenta que você possui.`
            },
            {
                nome: "Pele Corrompida",
                classe: "Tormenta",
                descrição: `Sua carne foi mesclada à matéria vermelha. Você recebe resistência a ácido, eletricidade, fogo, frio, luz e trevas 2. Esta RD aumenta em +2 para cada dois outros poderes da Tormenta que você possui.`
            },
            {
                nome: "Sangue Ácido",
                classe: "Tormenta",
                descrição: `Quando você sofre dano por um ataque corpo a corpo, o atacante sofre 1 ponto de dano de ácido. Este dano aumenta em +1 para cada outro poder da Tormenta que você possui`
            },
            {
                nome: "Visco Rubro",
                classe: "Tormenta",
                descrição: `Você pode gastar 1 PM para expelir um líquido escuro, grosso e corrosivo. Até o final da cena, você recebe +1 nas rolagens de dano corpo a corpo. Este bônus aumenta em +1 para cada dois outros poderes da Tormenta que você possui.`
            },
            {
                nome: "Arcano de Batalha",
                classe: "Arcanista",
                descrição: `Você soma o bônus de seu atributo-chave nas rolagens de dano para magias e para seu Raio Arcano (caso possua).`
            },
            {
                nome: "Aumento de Atributo",
                classe: "Arcanista Bárbaro Bardo Bucaneiro Caçador Cavaleiro Clérigo Druida Guerreiro Inventor Ladino Lutador Nobre Paladino",
                descrição: `Você recebe +2 em um atributo a sua escolha. Você pode escolher este poder várias vezes. A partir da segunda vez que escolhê-lo para o mesmo atributo, o aumento diminui para +1.`
            },
            {
                nome: "Caldeirão do Bruxo.",
                classe: "Arcanista",
                descrição: `Você pode criar poções, como se tivesse o poder geral Preparar Poção. Se tiver ambos, você pode criar poções de 3º círculo.Pré-requisitos: Bruxo, treinado em Ofício (alquimia).`
            },
            {
                nome: "Conhecimento Mágico",
                classe: "Arcanista",
                descrição: `Você aprende duas magias de qualquer círculo que possa lançar. Você pode escolher este poder quantas vezes quiser.`
            },
            {
                nome: "Contramágica Aprimorada",
                classe: "Arcanista",
                descrição: `Uma vez por rodada, você pode fazer uma contramágica como uma reação (veja a página 164). Pré-requisito: Dissipar Magia.`
            },
            {
                nome: "Envolto em Mistério",
                classe: "Arcanista",
                descrição: `Sua aparência e postura assombrosas o permitem manipular e assustar pessoas ignorantes ou supersticiosas. O mestre define o que exatamente você pode fazer e quem se encaixa nessa descrição. Como regra geral, você recebe +5 em Enganação e Intimidação contra pessoas não treinadas em Conhecimento ou Misticismo.`
            },
            {
                nome: "Escriba Arcano",
                classe: "Arcanista",
                descrição: `Você pode aprender magias copiando os textos de pergaminhos e grimórios de outros magos. Aprender uma magia dessa forma exige um dia de trabalho e T$ 250 em matérias-primas por PM necessário para lançar a magia. Assim, aprender uma magia de 3º círculo (6 PM) exige 6 dias de trabalho e o gasto de T$ 1.500. Pré-requisitos: Mago, treinado em Conhecimento.`
            },
            {
                nome: "Especialista em Escola",
                classe: "Arcanista",
                descrição: `Escolha uma escola de magia. A CD para resistir a suas magias dessa escola aumenta em +2. Pré-requisitos: Bruxo ou Mago.`
            },
            {
                nome: "Familiar.",
                classe: "Arcanista",
                descrição: `Você possui um animal de estimação mágico. Veja o quadro na pagina 44 para detalhes.`
            },
            {
                nome: "Fluxo de Mana",
                classe: "Arcanista",
                descrição: `Você pode manter dois efeitos sustentados ativos simultaneamente com apenas uma ação livre, pagando o custo de cada efeito separadamente. Pré-requisito: 10º nível de arcanista.`
            },
            {
                nome: "Foco Vital",
                classe: "Arcanista",
                descrição: `Se você estiver segurando seu foco e sofrer dano que o levaria a 0 PV ou menos, você fica com 1 PV e o foco perde pontos de vida igual ao valor excedente, até ser destruído. Pré-requisito: Bruxo.`
            },
            {
                nome: "Fortalecimento Arcano",
                classe: "Arcanista",
                descrição: `A CD para resistir a suas magia aumenta em +1. Se você puder lançar magias de 4º círculo, em vez disso ela aumenta em +2. Pré-requisito: 5º nível de arcanista.`
            },
            {
                nome: "Herança Aprimorada",
                classe: "Arcanista",
                descrição: `Você recebe a herança aprimorada de sua linhagem sobrenatural. Pré-requisitos: Feiticeiro, 6º nível de arcanista.`
            },
            {
                nome: "Herança Superior",
                classe: "Arcanista",
                descrição: `Você recebe a herança superior de sua linhagem sobrenatural. Pré-requisitos: Herança Aprimorada, 11º nível de arcanista.`
            },
            {
                nome: "Magia Pungente",
                classe: "Arcanista",
                descrição: `Quando lança uma magia, você pode pagar 1 PM para aumentar em +2 a CD para resistir a ela.`
            },
            {
                nome: "Mestre em Escola",
                classe: "Arcanista",
                descrição: `Escolha uma escola de magia. O custo para lançar magias dessa escola diminui em –1 PM. Pré-requisitos: Especialista em Escola com a escola escolhida, 8º nível de arcanista.`
            },
            {
                nome: "Poder Mágico",
                classe: "Arcanista",
                descrição: `Você recebe +1 ponto de mana por nível de arcanista. Quando sobe de nível, os PM que recebe por este poder aumentam de acordo. Por exemplo, se escolher este poder no 4º nível, recebe 4 PM. Quando subir para o 5º nível, recebe +1 PM e assim por diante. Você pode escolher este poder uma segunda vez, para um total de +2 PM por nível.`
            },
            {
                nome: "Raio Arcano",
                classe: "Arcanista",
                descrição: `Você pode gastar uma ação padrão para disparar um raio num alvo em alcance curto que causa 1d6 pontos de dano de essência. Esse dano aumenta em +1d6 para cada círculo de magia acima do 1º que você puder lançar. O alvo pode fazer um teste de Reflexos (CD atributo-chave) para reduzir o dano à metade.`
            },
            {
                nome: "Raio Elemental",
                classe: "Arcanista",
                descrição: `Quando usa Raio Arcano, você pode pagar 1 PM para que ele cause dano de um tipo de energia a sua escolha, entre ácido, eletricidade, fogo, frio ou trevas. Se o alvo falhar no teste de Reflexos, sofre uma condição, de acordo com o tipo de energia. Veja a descrição das condições no Apêndice. Ácido: vulnerável por uma rodada. Eletricidade: ofuscado por uma rodada. Fogo: fica em chamas. Frio: lento por uma rodada. Trevas: não pode ser curado por uma rodada. Pré-requisito: Raio Arcano. `
            },
            {
                nome: "Raio Poderoso",
                classe: "Arcanista",
                descrição: `Os dados de dano do seu Raio Arcano aumentam para d8 e o alcance dele aumenta para médio. Pré-requisito: Raio Arcano.`
            },
            {
                nome: "Tinta do Mago",
                classe: "Arcanista",
                descrição: `Você pode criar pergaminhos, como se tivesse o poder Escrever Pergaminho. Se tiver ambos, seu custo para criar pergaminhos é reduzido à metade. Pré-requisitos: Mago, treinado em Conhecimento.`
            },
            {
                nome: "Alma de Bronze",
                classe: "Bárbaro",
                descrição: `Quando entra em fúria, você recebe uma quantidade de pontos de vida temporários igual a metade do seu nível + mod. Força.`
            },
            {
                nome: "Brado Assustador",
                classe: "Bárbaro",
                descrição: `Você pode gastar uma ação de movimento e 1 PM para soltar um berro feroz. Todos os inimigos em alcance curto devem fazer um teste de Vontade (CD Car). Um inimigo que falhe fica abalado até o fim da cena. Um inimigo que passe se torna imune a esta habilidade até o fim do dia.Pré-requisito: treinado em Intimidação.`
            },
            {
                nome: "Crítico Brutal",
                classe: "Bárbaro",
                descrição: `Seu multiplicador de crítico com ataques corpo a corpo aumenta em +1. Por exemplo, se fizer um crítico com um machado de batalha, seu multiplicador será x4, em vez de x3.Pré-requisito: 6º nível de bárbaro.`
            },
            {
                nome: "Destruidor",
                classe: "Bárbaro",
                descrição: `Quando causa dano com uma arma corpo a corpo de duas mãos, você pode rolar novamente qualquer resultado 1 ou 2 das rolagens de dano da arma. Pré-requisito: For 13.`
            },
            {
                nome: "Espírito Inquebrável",
                classe: "Bárbaro",
                descrição: `Enquanto está em fúria, você não fica inconsciente por estar com 0 ou menos pontos de vida (você ainda morre se chegar em um valor negativo igual à metade de seus PV máximos). Pré-requisito: Alma de Bronze.`
            },
            {
                nome: "Esquiva Sobrenatural",
                classe: "Bárbaro",
                descrição: `Seus instintos ficam tão apurados que você consegue reagir ao perigo antes que seus sentidos percebam. Você nunca fica surpreendido.`
            },
            {
                nome: "Força Indomável",
                classe: "Bárbaro",
                descrição: `Você pode gastar 1 PM para somar seu nível em um teste de Força ou Atletismo.Você pode usar esta habilidade depois de rolar o dado, mas deve usá-la antes de o mestre dizer se você passou ou não.`
            },
            {
                nome: "Frenesi",
                classe: "Bárbaro",
                descrição: `Se estiver em fúria e usar a ação atacar para fazer um ataque corpo a corpo, você pode gastar 2 PM para fazer um ataque adicional.`
            },
            {
                nome: "Fúria da Savana",
                classe: "Bárbaro",
                descrição: `Seu deslocamento aumenta em +3m. Quando usa Fúria, você aplica o bônus em ataque e dano também a armas de arremesso`
            },
            {
                nome: "Fúria Raivosa",
                classe: "Bárbaro",
                descrição: `Se sua Fúria for terminar por você não ter atacado nem sido alvo de um efeito hostil, você pode pagar 1 PM para continuar em fúria nesta rodada. Se você atacar ou for atacado na rodada seguinte, sua fúria continua normalmente.`
            },
            {
                nome: "Golpe Poderoso",
                classe: "Bárbaro",
                descrição: `Ao acertar um ataque corpo a corpo, você pode gastar 1 PM para causar um dado de dano extra do mesmo tipo (por exemplo, com um montante, causa +1d6, para um dano total de 3d6; com um machado de guerra, causa +1d12).`
            },
            {
                nome: "Ímpeto",
                classe: "Bárbaro",
                descrição: `Você pode gastar 1 PM para aumentar seu deslocamento em +6m por uma rodada.`
            },
            {
                nome: "Investida Imprudente",
                classe: "Bárbaro",
                descrição: `Quando faz uma investida, você pode aumentar sua penalidade em Defesa pela investida para –5 para receber um bônus de +1d8 na rolagem de dano deste ataque.`
            },
            {
                nome: "Pele de Aço",
                classe: "Bárbaro",
                descrição: `O bônus de Pele de Ferro aumenta para +5. Pré-requisitos: Pele de Ferro, 8º nível de bárbaro.`
            },
            {
                nome: "Pele de Ferro",
                classe: "Bárbaro",
                descrição: `Você recebe +2 na Defesa, mas apenas se não estiver usando armadura pesada.`
            },
            {
                nome: "Sangue dos Inimigos",
                classe: "Bárbaro",
                descrição: `Enquanto está em fúria, quando faz um acerto crítico ou reduz um inimigo a 0 PV, você recebe um bônus cumulativo de +1 em testes de ataque e rolagens de dano, limitado pelo seu nível, até o fim da cena.`
            },
            {
                nome: "Superstição",
                classe: "Bárbaro",
                descrição: `Você odeia magia, o que faz com que seja mais resistente a ela. Você recebe resistência a magia +2.`
            },
            {
                nome: "Totem Espiritual",
                classe: "Bárbaro",
                descrição: `Você soma seu bônus de Sabedoria no seu total de pontos de mana. Escolha um animal totêmico (veja o quadro na pagina 48). Você pode lançar uma magia definida pelo animal escolhido (atributo-chave Sabedoria). Pré-requisitos: Sab 13, 4º nível de bárbaro.`
            },
            {
                nome: "Vigor Primal",
                classe: "Bárbaro",
                descrição: `Você pode gastar uma ação de movimento e 1 PM para recuperar 1d12 pontos de vida. Para cada 2 PM extras que você gastar, cura +1d12 PV (pode gastar 3 PM para recuperar 2d12 PV, 5 PM para recuperar 3d12 PV e assim por diante).`
            },
            {
                nome: "Armadura Brilhante",
                classe: "Nobre",
                descrição: `Você pode somar o modificador de Carisma na Defesa quando usa armadura pesada. Se fizer isso, não pode somar o modificador de Destreza, mesmo que outras habilidades ou efeitos permitam isso. Pré-requisito: 8º nível de nobre.`
            },
            {
                nome: "Autoridade Feudal",
                classe: "Nobre",
                descrição: `Você pode gastar 2 PM para conclamar o povo a realizar uma tarefa para você. Em termos de jogo, passa automaticamente em um teste de perícia com CD máxima igual ao seu nível +5. O tempo necessário para conclamar o povo é o tempo do uso da perícia em questão. Esta habilidade só pode ser usada em locais onde sua posição carregue alguma influência (a critério do mestre). Pré-requisito:6º nível de nobre`
            },
            {
                nome: "Educação Privilegiada",
                classe: "Nobre",
                descrição: `Você se torna treinado em duas perícias de nobre a sua escolha.`
            },
            {
                nome: "Estrategista",
                classe: "Nobre",
                descrição: `Você pode direcionar aliados em alcance curto. Gaste uma ação padrão e 1 PM por aliado que quiser direcionar (limitado pelo seu modificador de Carisma). No próximo turno do aliado, ele ganha uma ação de movimento. Pré-requisitos: Int 13, treinado em Guerra, 6º nível de nobre`
            },
            {
                nome: "Favor",
                classe: "Nobre",
                descrição: `Você pode usar sua influência para pedir favores a pessoas poderosas. Pedir favores gasta 5 PM e exige pelo menos uma hora de conversa e bajulação — ou mais, de acordo com o mestre. Faça um teste de Diplomacia. A CD do teste depende do que você está pedindo: 10 para algo simples (como um convite para uma festa particular), 20 para algo caro ou complicado (como uma carona de barco até Galrasia) e 30 para algo perigoso ou ilegal (como acesso aos planos militares do reino)`
            },
            {
                nome: "General",
                classe: "Nobre",
                descrição: `Quando você usa o poder Estrategista, os aliados direcionados recebem 1d4 pontos de mana temporários. Esses PM duram até o fim do turno do aliado e não podem ser usados em efeitos que concedam PM. Pré-requisitos: Estrategista, 12º nível de nobre`
            },
            {
                nome: "Grito Tirânico",
                classe: "Nobre",
                descrição: `Quando usa a habilidade Palavras Afiadas, você pode gastar +2 PM. Se fizer isso, seus dados de dano aumentam para d8 e você atinge todos os inimigos em alcance curto. Pré-requisitos:Palavras Afiadas, 8º nível de nobre.`
            },
            {
                nome: "Inspirar Confiança",
                classe: "Nobre",
                descrição: `Sua presença faz as pessoas darem o melhor de si. Você pode gastar 2 PM para fazer um aliado em alcance curto rolar novamente um teste recém realizado.`
            },
            {
                nome: "Inspirar Glória",
                classe: "Nobre",
                descrição: `A presença de um nobre motiva as pessoas a realizarem façanhas impressionantes. Você pode gastar 5 PM para fazer um aliado em alcance curto ganhar uma ação padrão adicional no próximo turno dele. Você só pode usar esta habilidade uma vez por cena em cada aliado. Pré-requisitos: Inspirar Confiança, 8º nível de nobre.`
            },
            {
                nome: "Jogo da Corte",
                classe: "Nobre",
                descrição: `Você pode gastar 1 PM para rolar novamente um teste recém realizado de Diplomacia,Intuição ou Nobreza.`
            },
            {
                nome: "Liderar pelo Exemplo",
                classe: "Nobre",
                descrição: `Você pode pagar 2 PM para servir de inspiração. Até o início de seu próximo turno, sempre que você passar em um teste de perícia, aliados em alcance curto que fizerem um teste da mesma perícia podem usar o resultado total do seu teste em vez de rolar o dado. Pré-requisito: 6º nível de nobre.`
            },
            {
                nome: "Língua de Ouro",
                classe: "Nobre",
                descrição: `Você pode gastar uma ação padrão e 6 PM para gerar o efeito da magia Enfeitiçar com os aprimoramentos de sugerir ação e afetar todas as criaturas dentro do alcance (CD Car). Esta não é uma habilidade mágica e provém de sua capacidade de influenciar outras pessoas. Pré-requisitos: Língua de Prata, 8º nível de nobre.`
            },
            {
                nome: "Língua de Prata",
                classe: "Nobre",
                descrição: `Quando faz um teste de perícia baseada em Carisma, você pode gastar 2 PM para receber um bônus no teste igual a metade do seu nível.`
            },
            {
                nome: "Língua Rápida",
                classe: "Nobre",
                descrição: `Quando faz um teste de Diplomacia para mudar atitude como uma ação completa, você sofre uma penalidade de –5, em vez de –10.`
            },
            {
                nome: "Palavras Afiadas",
                classe: "Nobre",
                descrição: `Você pode gastar uma ação padrão e 1 PM para submeter a sua vontade uma criatura inteligente (Int 3 ou mais) em alcance curto. Faça um teste de Diplomacia ou Intimidação (a sua escolha) oposto ao teste de Vontade da criatura. Se vencer, você causa 2d6 pontos de dano mental não letal à criatura. Se perder, causa metade deste dano. Para cada PM extra que você gastar quando ativar o poder, o dano aumenta em +1d6. Caso a criatura seja reduzida a 0 ou menos PV, rende-se (caso você tenha usado Diplomacia) ou fica apavorada (caso tenha usado Intimidação), em vez de cair inconsciente.`
            },
            {
                nome: "Presença Aristocrática",
                classe: "Nobre",
                descrição: `Sempre que uma criatura inteligente (Int 3 ou mais) tentar machucá-lo (causar dano com um ataque, magia ou habilidade) você pode gastar 2 PM. Se fizer isso, a criatura deve fazer um teste de Vontade (CD Car). Se falhar, não conseguirá machucá-lo e perderá a ação. Você só pode usar esta habilidade uma vez por cena contra cada criatura.`
            },
            {
                nome: "Presença Majestosa",
                classe: "Nobre",
                descrição: `Você impõe respeito a todos. A habilidade Presença Aristocrática passa a funcionar contra criaturas com Int 1 ou mais (passa a afetar até mesmo animais, embora continue não funcionando contra criaturas sem valor de Inteligência). Além disso, você pode usá-la mais de uma vez contra uma mesma criatura na mesma cena. Pré-requisitos: Presença Aristocrática, 16º nível de nobre.`
            },
            {
                nome: "Título",
                classe: "Nobre",
                descrição: `Você adquire um título de nobreza. Converse com o mestre para definir os benefícios exatos de seu título. Como regra geral, você recebe 10 TO por nível de nobre no início de cada aventura (rendimentos dos impostos) ou a ajuda de um aliado veterano (um membro de sua corte). Pré-requisito: Autoridade Feudal, 10º nível de nobre.`
            },
            {
                nome: "Voz Poderosa",
                classe: "Nobre",
                descrição: `Você recebe +2 em Diplomacia e Intimidação. Suas habilidades de nobre com alcance curto passam para alcance médio.`
            },
            {
                nome: "Arma Sagrada",
                classe: "Paladino",
                descrição: `Se estiver empunhando a arma preferida de seu deus, o dado de dano que você rola por Golpe Divino aumenta para d12. Pré-requisito: devoto de uma divindade (exceto Lena e Marah).`
            },
            {
                nome: "Aura Antimagia",
                classe: "Paladino",
                descrição: `Enquanto sua aura estiver ativa, você e os aliados dentro da aura podem rolar novamente qualquer teste de resistência contra magia recém realizado. Pré-requisito: 14° nível de paladino.`
            },
            {
                nome: "Aura Ardente",
                classe: "Paladino",
                descrição: `Enquanto sua aura estiver ativa, no início de cada um de seus turnos, espíritos e mortos-vivos a sua escolha dentro dela sofrem dano de luz igual a 5 + seu bônus de Carisma. Pré-requisito: 10° nível de paladino.`
            },
            {
                nome: "Aura de Cura",
                classe: "Paladino",
                descrição: `Enquanto sua aura estiver ativa, no início de seus turnos, você e os aliados a sua escolha dentro dela curam um número de PV igual a 5 + seu bônus de Carisma. Pré-requisito: 6° nível de paladino.`
            },
            {
                nome: "Aura de Invencibilidade",
                classe: "Paladino",
                descrição: `Enquanto sua aura estiver ativa, você ignora o primeiro dano que sofrer na cena. O mesmo se aplica a seus aliados dentro da aura. Pré-requisito: 18° nível de paladino.`
            },
            {
                nome: "Aura Poderosa",
                classe: "Paladino",
                descrição: `O alcance da sua aura aumenta para médio. Pré-requisito: 6° nível de paladino. `
            },
            {
                nome: "Fulgor Divino",
                classe: "Paladino",
                descrição: `Quando usa Golpe Divino, todos os inimigos em alcance curto ficam ofuscados até o início do seu próximo turno.`
            },
            {
                nome: "Julgamento Divino:Arrependimento",
                classe: "Paladino",
                descrição: `Você pode gastar 2 PM para marcar um inimigo em alcance curto. Na próxima vez que esse inimigo acertar um ataque em você ou em um de seus aliados, deve fazer um teste de Vontade (CD Car). Se falhar, fica atordoado no próximo turno dele. Você só pode proferir este julgamento uma vez por cena contra cada criatura.`
            },
            {
                nome: "Julgamento Divino: Autoridade",
                classe: "Paladino",
                descrição: `Você pode gastar 1 PM para comandar uma criatura em alcance curto. Faça um teste de Diplomacia oposto pelo teste de Vontade da criatura. Se você passar, ela obedece a um comando simples como “pare” ou “largue a arma”. Se a criatura passar, fica imune a esse efeito por um dia`
            },
            {
                nome: "Julgamento Divino: Coragem",
                classe: "Paladino",
                descrição: `Você pode gastar 2 PM para inspirar coragem em uma criatura em alcance curto, incluindo você mesmo. A criatura fica imune a efeitos de medo e recebe +2 em testes de ataque contra alvos de ND maior que o nível dela.`
            },
            {
                nome: "Julgamento Divino: Iluminação",
                classe: "Paladino",
                descrição: `Você pode marcar um inimigo em alcance curto. Quando acerta um ataque corpo a corpo nesse inimigo, você recebe 2 PM temporários. Você só pode proferir este julgamento uma vez por cena.`
            },
            {
                nome: "Julgamento Divino: Justiça",
                classe: "Paladino",
                descrição: `Você pode gastar 2 PM para marcar um inimigo em alcance curto. A próxima vez que esse inimigo causar dano em você ou em um de seus aliados, deve fazer um teste de Vontade (CD Car). Se falhar, sofre dano de luz igual à metade do dano que causou.`
            },
            {
                nome: "Julgamento Divino: Libertação",
                classe: "Paladino",
                descrição: `Você pode gastar 5 PM para cancelar uma condição negativa qualquer (como abalado, paralisado etc.) que esteja afetando uma criatura em alcance curto.`
            },
            {
                nome: "Julgamento Divino: Salvação",
                classe: "Paladino",
                descrição: `Você pode gastar 2 PM para marcar um inimigo em alcance curto. Até o fim da cena, quando você acerta um ataque corpo a corpo nesse inimigo, recupera 5 pontos de vida.`
            },
            {
                nome: "Julgamento Divino: Vindicação",
                classe: "Paladino",
                descrição: `Você pode gastar 2 PM para marcar um inimigo que tenha causado dano a você ou a seus aliados na cena. Você recebe +1 em testes de ataque e +1d8 em rolagens de dano contra o inimigo escolhido, mas sofre –5 em testes de ataque contra quaisquer outros alvos. No 5º nível, e a cada cinco níveis seguintes, você pode pagar +1 PM para aumentar o bônus de ataque em +1 e o bônus de dano em +1d8. O efeito termina caso o alvo fique inconsciente.`
            },
            {
                nome: "Julgamento Divino: Zelo",
                classe: "Paladino",
                descrição: `Você pode gastar 1 PM para marcar um alvo em alcance longo. Pelo restante da cena, sempre que se mover na direção desse alvo, você se move com o dobro de seu deslocamento`
            },
            {
                nome: "Orar",
                classe: "Paladino",
                descrição: `Você aprende e pode lançar uma magia divina de 1º círculo a sua escolha. Seu atributo-chave para esta magia é Sabedoria. Você pode escolher este poder quantas vezes quiser.`
            },
            {
                nome: "Virtude Paladinesca: Caridade",
                classe: "Paladino",
                descrição: `O custo de suas habilidades de paladino que tenham um aliado como alvo é reduzido em 1 PM`
            },
            {
                nome: "Virtude Paladinesca: Castidade",
                classe: "Paladino",
                descrição: `Você se torna imune a efeitos de encantamento e recebe +5 em testes de Intuição para perceber blefes.`
            },
            {
                nome: "Virtude Paladinesca: Compaixão",
                classe: "Paladino",
                descrição: `Você pode usar Cura pelas Mãos em alcance curto e, para cada PM que gastar, cura 2d6+1 (em vez de 1d8+1).`
            },
            {
                nome: "Virtude Paladinesca: Humildade",
                classe: "Paladino",
                descrição: `Na primeira rodada de um combate, você pode gastar uma ação completa para rezar e pedir orientação. Você recebe uma quantidade de PM temporários igual ao seu bônus de Carisma.`
            },
            {
                nome: " Virtude Paladinesca: Temperança",
                classe: "Paladino",
                descrição: `Quando ingere um alimento, item alquímico ou poção, você consome apenas metade do item. Na prática, cada item desses rende duas “doses” para você.`
            },

        ]
    };
    const CondicaoData = {
        listcond:[
            {
                nome:"Abalado",
                desc:`O personagem sofre –2 em testes de perícia. Se ficar abalado novamente, em vez disso fica apavorado`,
                tipo:"medo."
            },
            {
                nome:"Agarrado",
                desc:`o. O personagem fica desprevenido e imóvel, sofre –2 em testes de ataque e só pode atacar com armas leves. Um personagem fazendo um ataque à distância contra um alvo envolvido na manobra agarrar tem 50% de chance de acertar o alvo errado.`,
                tipo:"paralisia."
            },
            {
                nome:"Alquebrado",
                desc:`O custo em pontos de mana das habilidades e magias do personagem aumenta em +1.`,
                tipo:"mental."
            },
            {
                nome:"Apavorado",
                desc:`O personagem sofre –5 em testes de perícia e deve fugir da fonte do medo da maneira mais eficiente possível. Se não puder, poderá agir, mas não poderá se aproximar voluntariamente da fonte do medo.`,
                tipo:"medo."
            },
            {
                nome:"Atordoado",
                desc:`O personagem fica desprevenido e não pode fazer ações.`,
                tipo:"mental."
            },
            {
                nome:"Caído",
                desc:`Deitado no chão. O personagem sofre –5 em ataques corpo a corpo e seu deslocamento é reduzido a 1,5m. Além disso, sofre –5 de Defesa contra ataques corpo a corpo, mas recebe +5 de Defesa contra ataques à distância.`,
                tipo:"geral"
            },
            {
                nome:"Cego",
                desc:`O personagem fica desprevenido e lento, não pode fazer testes de Percepção para observar e sofre –5 em testes de perícias baseadas em Força ou Destreza. Todos os alvos de seus ataques recebem camuflagem total.`,
                tipo:"sentidos."
            },
            {
                nome:"Confuso",
                desc:`O personagem comporta-se de modo aleatório. Role 1d6 no início de seus turnos: 1) Movimenta-se em uma direção escolhida por uma rolagem de 1d8; 2-3) Não pode fazer ações, exceto reações, e fica balbuciando incoerentemente; 4-5) Usa a arma que estiver empunhando para atacar a criatura mais próxima, ou a si mesmo se estiver sozinho (nesse caso, apenas role o dano); 6) A condição termina e pode agir normalmente.`,
                tipo:"mental."
            },
            {
                nome:"Debilitado",
                desc:`O personagem sofre –5 em testes de atributos físicos (Força, Destreza e Constituição) e de perícias baseadas nesses atributos. Se o personagem ficar debilitado novamente, em vez disso fica inconsciente.`,
                tipo:"geral"
            },
            {
                nome:"Desprevenido",
                desc:`Despreparado para reagir. O personagem sofre –5 na Defesa e em Reflexos. Você fica desprevenido contra inimigos que não possa ver.`,
                tipo:"geral"
            },
            {
                nome:"Doente",
                desc:`Sob efeito de uma doença.`,
                tipo:"geral"
            },
            {
                nome:"Em Chamas",
                desc:`O personagem está pegando fogo. No início de seus turnos, sofre 1d6 pontos de dano de fogo. O personagem pode gastar uma ação padrão para apagar o fogo com as mãos. Imersão em água também apaga as chamas.`,
                tipo:"geral"
            },
            {
                nome:"Enjoado",
                desc:`O personagem só pode realizar uma ação padrão ou de movimento (não ambas) por rodada. Ele pode gastar uma ação padrão para fazer uma investida, mas pode avançar no máximo seu deslocamento (e não o dobro).`,
                tipo:"geral"
            },
            {
                nome:"Enredado",
                desc:`O personagem fica lento, vulnerável e sofre –2 em testes de ataque.`,
                tipo:"paralisia."
            },
            {
                nome:"Envenenado",
                desc:`O efeito desta condição varia de acordo com o veneno. Pode ser outra condição (por exemplo, fraco ou enjoado) ou dano recorrente (por exemplo, 1d12 pontos de dano por rodada). A descrição do veneno determina a duração dele (caso nada seja dito, a condição dura pela cena).`,
                tipo:"geral"
            },
            {
                nome:"Esmorecido",
                desc:`O personagem sofre –5 em testes de atributos mentais (Inteligência, Sabedoria e Carisma) e de perícias baseadas nesses atributos.`,
                tipo:"mental."
            },
            {
                nome:"Exausto",
                desc:`O personagem fica debilitado, lento e vulnerável. Se ficar exausto novamente, em vez disso fica inconsciente.`,
                tipo:"fadiga"
            },
            {
                nome:"Fascinado",
                desc:`Com a atenção presa em alguma coisa. O personagem sofre –5 em Percepção e não pode fazer ações, exceto observar aquilo que o fascinou. Qualquer ação hostil contra o personagem anula esta condição. Balançar uma criatura fascinada para tirá-la desse estado gasta uma ação padrão.`,
                tipo:"mental."
            },
            {
                nome:"Fatigado",
                desc:`O personagem fica fraco e vulnerável. Se o personagem ficar fatigado novamente, em vez disso fica exausto.`,
                tipo:"fadiga."
            },
            {
                nome:"Fraco",
                desc:`O personagem sofre –2 em testes de atributos físicos (Força, Destreza e Constituição) e de perícias baseadas nesses atributos. Se ficar fraco novamente, em vez disso fica debilitado.`,
                tipo:"geral"
            },
            {
                nome:"Frustrado",
                desc:`O personagem sofre –2 em testes de atributos mentais (Inteligência, Sabedoria e Carisma) e de perícias baseadas nesses atributos. Se ficar frustrado novamente, em vez disso fica esmorecido.`,
                tipo:"mental."
            },
            {
                nome:"Imóvel",
                desc:`Todas as formas de deslocamento do personagem são reduzidas a 0m.`,
                tipo:"paralisia."
            },
            {
                nome:"Inconsciente",
                desc:`O personagem fica indefeso e não pode fazer ações. Balançar uma criatura para acordá-la gasta uma ação padrão.`,
                tipo:"geral"
            },
            {
                nome:"Indefeso",
                desc:`O personagem é considerado desprevenido, mas sofre –10 na Defesa, falha automaticamente em testes de Reflexos e pode sofrer golpes de misericórdia.`,
                tipo:"geral"
            },
            {
                nome:"Lento",
                desc:`Todas as formas de deslocamento do personagem são reduzidas à metade (arredonde para baixo para o primeiro incremento de 1,5m) e ele não pode correr ou fazer investidas. `,
                tipo:"paralisia."
            },
            {
                nome:"Ofuscado",
                desc:`O personagem sofre –2 em testes de ataque e de Percepção.`,
                tipo:"sentidos."
            },
            {
                nome:"Paralisado",
                desc:`O personagem fica imóvel e indefeso e só pode realizar ações puramente mentais.`,
                tipo:"paralisia."
            },
            {
                nome:"Pasmo",
                desc:`O personagem não pode fazer ações, exceto reações.`,
                tipo:"mental."
            },
            {
                nome:"Petrificado",
                desc:`O personagem fica inconsciente e recebe resistência a dano 8.`,
                tipo:"geral"
            },
            {
                nome:"Sangrando",
                desc:`Com um ferimento aberto. No início de seus turnos, o personagem deve fazer um teste de Constituição (CD 15). Se passar, estabiliza e remove essa condição. Se falhar, sofre 1d6 pontos de dano e continua sangrando.`,
                tipo:"geral"
            },
            {
                nome:"Surdo",
                desc:`O personagem não pode fazer testes de Percepção para ouvir e sofre –5 em testes de Iniciativa. Além disso, é considerado em condição ruim para lançar magias.`,
                tipo:"sentidos."
            },
            {
                nome:"Surpreendido",
                desc:` Não ciente de seus inimigos. O personagem fica desprevenido e não pode fazer ações, exceto reações.`,
                tipo:"geral"
            },
            {
                nome:"Vulnerável",
                desc:`O personagem sofre –2 na Defesa.`,
                tipo:"geral"
            },
        ]
    }
      await CriarJSON.Escrever("./database/json/T20Magia.json", Magiadata);
  //  await CriarJSON.Escrever("./database/json/t20poderes.json", Poderesdata);
 //  await CriarJSON.Escrever("./database/json/t20condicao.json", CondicaoData);
    console.log("json criado") 


}


CriarJSON()
// magia molde
/*
{
                meta: {
                    nome: "",
                    escola: "",
                    ciclo:"Arcana 1",
                    execucao: "",
                    alcance: "",
                    alvo: "",
                    duracao: "",
                    resitencia: ""
                },
                desc: ``,
                continue:[{nome:'Descrição', content:''}, {nome:'Custo', content:''}]
            },
*/
// poder molde
/*
 {
                nome: "",
                classe: "Paladino",
                descrição: ``
            },

{
    nome:"",
    desc:``,
    tipo:""
},
             */
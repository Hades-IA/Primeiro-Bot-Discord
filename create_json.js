
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
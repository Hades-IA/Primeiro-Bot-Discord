
const cardsMeta = require("./database/json/cardsdata.json");
const Arithmetic = require("./util/Arithmetics");
const T20MagiasData = require("./database/json/T20Magia.json");
const roll = new Arithmetic();
function test(msgContent) {
    /*  const cards = cardsMeta;
      var word = "magmon r".replace(/[^a-zA-Z ]| /g, "").replace(" ", "");
      let regExp = new RegExp(word, "gi");
  
      let cardFilter = cards.filter(card => {
          let cardName = card.name.replace(/[^a-zA-Z ]| /g, "").replace(" ", "").toLowerCase();
          let res = cardName.match(regExp) || [];
          return res.length > 0;
      })
      let cardMap = cardFilter.map(data => {
          return {
              name: `\r\n${data.name}`,
              url: data.url,
              bodybr: data.bodybr
          };
      })
      let list = ""
      cardMap.forEach(card => list += card.name)
      console.log(list)
  */
    const magias = T20MagiasData.magialist;
    var word = msgContent.split("-magia")[1].replace(/[^a-zA-Z ]| /g, "").toLowerCase();

    let result = magias.filter(magia => {
        let magiaNome = magia.meta.nome.replace(/[^a-zA-Z ]| /g, "").toLowerCase();
        let res = magiaNome.indexOf(word);
        return res === 0;
    });


    if (result.length === 0) { console.log("nenhuma magia encontrada"); return; }
    let meta = `Meta\r\nEscola:${result[0].meta.escola}\r\nCíclo:${result[0].meta.ciclo}\r\nExecução:${result[0].meta.execucao}\r\nAlcance:${result[0].meta.alcance}\r\nAlvo:${result[0].meta.alvo}\r\nDuração:${result[0].meta.duracao}\r\nResitência:${result[0].meta.resitencia}\r\n`;
    console.log(result[0].meta.nome + "\r\n", "\r\n" + meta, `\r\nDescrição\r\n${result[0].desc}\r\n`);
    if(result[0].continue.length > 0){
        result[0].continue.forEach(data =>{
            console.log(`${data.nome}${data.content}`)
        })
    }
    return;


};


test("!t20 -magia aca");

function roller(number) {
    for (let i = 0; i < number; i++) {
        let result = roll.getRandomIntInclusive(1, 6);
        console.log(result)

    }
    return;
}
function cardType(){
    const cards = cardsMeta;
    const cardslist = cards.filter(card =>{
       const types =card.cardtype.filter(type => type.title === 'chieftain');
        return types.length > 0;
    }
    );
    console.log(cardslist.length);
}
// cardType()
// roller(2)

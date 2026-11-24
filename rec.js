const nome = "Mario";
const jogo = "Super Mario World";
const level = 5;
const temSuperPoder = true;
//Array com 4 elementos
const itens = ["Cogumelo", "Flor de Fogo", "Pena", "Estrela"];

  console.log(`O personagem ${Mario}, do Jogo: ${Super Mario World},  está no level ${5} e seu status de superpoder é ${temSuperPoder}.`);
// condional usando uma das variáveis
if (temSuperPoder) {
  console.log(`${Mario} está poderoso e pronto para enfrentar o chefe!`);
} else {
  console.log(`${Mario} precisa pegar um ${itens[0]} para ficar mais forte.`);
}

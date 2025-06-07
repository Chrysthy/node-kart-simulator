const player1 = {
    name: "Mario",
    speed: 4,
    handling: 3,
    power: 3,
    score: 0
};

const player2 = {
    name: "Luigi",
    speed: 3,
    handling: 4,
    power: 4,
    score: 0
};

async function rollDice() {
    return Math.floor(Math.random() * 6) + 1;
}


//Função auto-invocada
(async function main() {
    console.log(
        `🏁 Bem vindo(a) ao jogo de corrida!\n`
    )

    console.log(`👥 Corredores: ${player1.name} vs ${player2.name} \n`);

    console.log(`🚦Começando a corrida...`);
        
})();


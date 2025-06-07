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

async function getRandomBlock() {
    let random = Math.random();
    let result;

    switch (true) {
        case random < 0.33:
            result = "RETA";
            break;

        case random < 0.66:
            result = "CURVA";
            break;

        default:
            result = "CONFRONTO"
            break;
    }

    return result;
}

async function playRaceEngine(character1, character2) {
    for (let i = 1; i <= 5; i++) {
        console.log(`🏁 Rodada ${i}`);

        
        //sortear bloco
        let block = await getRandomBlock();
        console.log(`🎲 Bloco Sorteado: ${block} \n`);


        //rolar os dados
        let diceResult1 = await rollDice();
        let diceResult2 = await rollDice();


        //teste de habilidade
        let totalTestSkill1 = 0;
        let totalTestSkill2 = 0;
    }
}


//Função auto-invocada
(async function main() {
    console.log(
        `🏁 Bem vindo(a) ao jogo de corrida!\n`
    )

    console.log(`✨ Corredores: ${player1.name} vs ${player2.name} \n`);

    console.log(`🚦Começando a corrida... \n`);

    await playRaceEngine(player1, player2);

})();


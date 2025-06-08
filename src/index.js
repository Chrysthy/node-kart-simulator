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


async function logRollResult(chacaracterName, block, diceResult, attribute) {

    console.log(`${chacaracterName} 🎲 rolou o dado de ${block}: ${diceResult}. Ponto de habilidade: ${attribute}. Somatório Final = ${diceResult + attribute}`);
    //passando uma expressão (cálculo) dentro do template string
}


async function playRaceEngine(character1, character2) {
    for (let i = 1; i <= 5; i++) {
        console.log(`\n 🏁 Rodada ${i} \n`);


        //sortear bloco
        let block = await getRandomBlock();
        console.log(`🥁 Bloco Sorteado: ${block} \n`);


        //rolar os dados
        let diceResult1 = await rollDice();
        let diceResult2 = await rollDice();


        //teste de habilidade
        let totalTestSkill1 = 0;
        let totalTestSkill2 = 0;


        if (block === "RETA") {
            totalTestSkill1 = diceResult1 + character1.speed;
            totalTestSkill2 = diceResult2 + character2.speed;

            await logRollResult(
                character1.name,
                "velocidade",
                diceResult1,
                character1.speed
            );

            await logRollResult(
                character2.name,
                "velocidade",
                diceResult2,
                character2.speed
            );

        };

        if (block === "CURVA") {
            totalTestSkill1 = diceResult1 + character1.handling;
            totalTestSkill2 = diceResult2 + character2.handling;

            await logRollResult(
                character1.name,
                "manobrabilidade",
                diceResult1,
                character1.handling
            );

            await logRollResult(
                character2.name,
                "manobrabilidade",
                diceResult2,
                character2.handling
            );

        };

        if (block === "CONFRONTO") {
            let powerResult1 = diceResult1 + character1.power;
            let powerResult2 = diceResult2 + character2.power;

            console.log(`${character1.name} confrontou ${character2.name}! 🧤`);

            await logRollResult(
                character1.name,
                "poder",
                diceResult1,
                character1.power
            );

            await logRollResult(
                character2.name,
                "poder",
                diceResult2,
                character2.power
            );

            if (powerResult1 > powerResult2 && character2.score > 0) {
                character2.score--;
                console.log(`\n⚔️  ${character1.name} venceu o confronto e fez ${character2.name} perder um ponto! 🐢`);
            }

            if (powerResult2 > powerResult1 && character1.score > 0) {
                character1.score--;
                console.log(`\n⚔️  ${character2.name} venceu o confronto e fez ${character1.name} perder um ponto! 🐢`);
            }

            console.log(powerResult1 === powerResult2 ? `🤝 Empate no confronto! Nenhum ponto foi perdido.` : "");

        };


        //Verificando o vencedor 
        if (totalTestSkill1 > totalTestSkill2) {
            console.log(`\n⚔️  ${character1.name} marcou um ponto!`);
            character1.score++;

        } else if (totalTestSkill2 > totalTestSkill1) {
            console.log(`\n⚔️  ${character2.name} marcou um ponto!`);
            character2.score++;

        }

        console.log("_______________________________________________________");
    };
};



async function declareWinner(character1, character2) {
    console.log(`\n🏁 A corrida terminou! 🏁\n`);
    console.log("Resultados finais:");
    console.log(`${character1.name}: ${character1.score} ponto(s)`);
    console.log(`${character2.name}: ${character2.score} ponto(s)`);

    if (character1.score > character2.score) {
        console.log(`\n🏆 ${character1.name} é o grande vencedor! 🎉\n`);

    } else if (character2.score > character1.score) {
        console.log(`\n🏆 ${character2.name} é o grande vencedor! 🎉\n`);

    } else {
        console.log(`\n🤝 A corrida terminou em empate! Dispute novamente a corrida! 🏁\n`);
    }

}


//Função auto-invocada
(async function main() {
    console.log(
        `🏁 Bem vindo(a) ao jogo de corrida!\n`
    )

    console.log(`✨ Corredores: ${player1.name} vs ${player2.name} \n`);

    console.log(`🚦 Começando a corrida... \n`);

    await playRaceEngine(player1, player2);

    await declareWinner(player1, player2);

})();


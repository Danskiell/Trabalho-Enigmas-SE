const enigmas = [
    {
        dica: "Sou filho de um deus, mas vivo entre os mortais. Tenho força extraordinária e já enfrentei 12 tarefas impossíveis. Quem sou?",
        correta: "src/images/hercules.jpg",
        opcoes: [
            "src/images/hercules.jpg",
            "src/images/zeus.jpg",
            "src/images/perseu.jpg",
            "src/images/aquiles.jpg",
        ]
    },
    {
        dica: "Sou pequeno, mas tenho um grande destino. Vivo em uma terra cheia de aventuras e carrego um objeto que deve ser destruído. Quem sou?",
        correta: "src/images/frodo.jpg",
        opcoes: [
            "src/images/frodo.jpg",
            "src/images/aragorn.jpg",
            "src/images/sam.jpg",
            "src/images/harry.jpg",
        ]
    },
    {
        dica: "Tenho um raio na testa e carrego um fardo que só eu posso cumprir. Minha luta é contra o mal, e minha escola é mágica. Quem sou?.",
        correta: "src/images/harry.jpg",
        opcoes: [
            "src/images/harry.jpg",
            "src/images/hermione.jpg",
            "src/images/frodo.jpg",
            "src/images/percy.jpg",
        ]
    },
    {
        dica: "Eu não sou um herói comum. Sou de um país escondido e sou um guerreiro com tecnologia avançada. Quem sou?.",
        correta: "src/images/pantera.jpg",
        opcoes: [
            "src/images/pantera.jpg",
            "src/images/batman.jpg",
            "src/images/ironman.jpg",
            "src/images/capitao.jpg",
        ]
    },
    {
        dica: "Meu rosto é verde e assustador, mas eu uso a máscara para a diversão. Quem sou?.",
        correta: "src/images/mascara.jpg",
        opcoes: [
            "src/images/mascara.jpg",
            "src/images/hulk.jpg",
            "src/images/carioca.jpg",
            "src/images/shrek.jpg",
        ]
    },
];

let currentEnigma = 0;
let errorCount = 0;
let startTime = Date.now(); // Marca o tempo de início do jogo

function loadEnigma() {
    const enigma = enigmas[currentEnigma];
    document.getElementById('dica').innerText = enigma.dica;
    document.getElementById('numeroEnigma').innerText = currentEnigma + 1;

    const container = document.getElementById('imageContainer');
    container.innerHTML = ''; // Limpar as imagens anteriores

    const shuffledOptions = enigma.opcoes.sort(() => Math.random() - 0.5);
    shuffledOptions.forEach(src => {
        const img = document.createElement('img');
        img.src = src;
        img.alt = "Opção do Enigma";
        img.addEventListener('click', () => checkAnswer(src));
        container.appendChild(img);
    });
}

function checkAnswer(selectedImage) {
    const correctImage = enigmas[currentEnigma].correta;
    if (selectedImage === correctImage) {
        currentEnigma++;
        if (currentEnigma < enigmas.length) {
            loadEnigma();
        } else {
            showInputForRanking();
        }
    } else {
        alert("Você errou! Tente novamente.");
        errorCount++;
    }
}

function showInputForRanking() {
    // Esconde o título do enigma e a dica
    document.getElementById('tituloEnigma').style.display = 'none';
    document.getElementById('dica').style.display = 'none';

    // Exibe o conteúdo final
    const container = document.getElementById('imageContainer');
    container.innerHTML = `
        <div class="final-screen"> <!-- Adicionando a classe final-screen -->
            <h2>Parabéns, você completou todos os enigmas!</h2>
            <p>Insira seu nome para registrar no ranking:</p>
            <div class="input-container">
                <input type="text" id="playerName" placeholder="Seu nome">
                <button onclick="submitRanking()">Enviar</button>
            </div>
            <div id="discoveredLetters" class="discovered-letters"></div> <!-- Letra descoberta -->
            <p>Senha Final: 01000010 01101001 01101100 01101100 01111001</p> <!-- Senha Final -->
        </div>
    `;
}

function submitRanking() {
    const name = document.getElementById('playerName').value;
    if (!name) {
        alert("Por favor, insira seu nome!");
        return;
    }

    // Calculando o tempo total de jogo
    const timeTaken = Date.now() - startTime; // Tempo em milissegundos
    const timeInSeconds = Math.round(timeTaken / 1000); // Convertendo para segundos

    const ranking = JSON.parse(localStorage.getItem('ranking')) || [];
    ranking.push({ name, errors: errorCount, time: timeInSeconds });
    ranking.sort((a, b) => a.errors - b.errors || a.time - b.time); // Ordena por erros e tempo

    localStorage.setItem('ranking', JSON.stringify(ranking));

    window.location.href = "ranking.html";
}

window.onload = loadEnigma;

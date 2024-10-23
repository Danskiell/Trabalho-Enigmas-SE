let enigmas = [
    {
        dica: "Dica 1: Primeiro texto pro Jigsaw dar a dica.",
        correta: "images/img1.jpg",
        opcoes: [
            "img/enigma.jpg",
            "images/img2.jpg",
            "images/img3.jpg",
            "images/img4.jpg",
            "images/img5.jpg",
            "images/img6.jpg"
        ]
    },
    {
        dica: "Dica 2: Segundo texto pro Jigsaw dar a dica.",
        correta: "images/img2.jpg",
        opcoes: [
            "images/img2.jpg",
            "images/img3.jpg",
            "images/img4.jpg",
            "images/img5.jpg",
            "images/img6.jpg",
            "images/img7.jpg"
        ]
    },
    {
        dica: "Dica 3: Terceiro texto pro Jigsaw dar a dica.",
        correta: "images/img3.jpg",
        opcoes: [
            "images/img3.jpg",
            "images/img4.jpg",
            "images/img5.jpg",
            "images/img6.jpg",
            "images/img7.jpg",
            "images/img8.jpg"
        ]
    },

    {
        dica: "Dica 4: Quarto texto pro Jigsaw dar a dica.",
        correta: "images/img4.jpg",
        opcoes: [
            "images/img4.jpg",
            "images/img5.jpg",
            "images/img6.jpg",
            "images/img7.jpg",
            "images/img8.jpg",
            "images/img9.jpg"
        ]
    }

    
];

let currentEnigma = 0;

// Carregar o enigma atual
function loadEnigma() {
    const enigma = enigmas[currentEnigma];
    document.getElementById('dica').innerText = enigma.dica;

    const options = enigma.opcoes;
    const shuffledOptions = options.sort(() => Math.random() - 0.5);

    const container = document.getElementById('imageContainer');
    container.innerHTML = '';

    shuffledOptions.forEach(src => {
        const img = document.createElement('img');
        img.src = src;
        img.alt = "Imagem";
        img.className = 'img-option';
        img.addEventListener('click', () => checkAnswer(src));
        container.appendChild(img);
    });
}

// Função para verificar a resposta do usuário
function checkAnswer(selectedImage) {
    const correctImage = enigmas[currentEnigma].correta;
    if (selectedImage === correctImage) {
        alert("Você acertou!");
        currentEnigma++;
        if (currentEnigma < enigmas.length) {
            loadEnigma();
        } else {
            alert("Parabéns! Você completou todos os enigmas.");
            window.location.href = "index.html";  // Retornar ao início ou exibir resultados
        }
    } else {
        alert("Tente novamente!");
    }
}

// Iniciar o primeiro enigma quando a página carregar
window.onload = loadEnigma;

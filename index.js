const yesBtn = document.querySelector("#yesBtn");
const noBtn = document.querySelector("#noBtn");

// Botón SÍ
yesBtn.addEventListener("click", function () {
    const audio = new Audio("https://cdn.pixabay.com/audio/2022/02/08/audio_a848a65d72.mp3");
    audio.loop = true;
    audio.volume = 0.3; // volumen suave

    audio.play().then(() => {
        alert("Sabía que ibas a decir que sí 💘");
    }).catch((e) => {
        console.error("El navegador no dejó reproducir el audio:", e);
        alert("¡Dijiste que sí! (pero el navegador bloqueó la música 😭)");
    });
});

// Botón NO
noBtn.addEventListener("mouseover", function () {
    const offset = 100; // máximo movimiento

    const currentLeft = noBtn.offsetLeft;
    const currentTop = noBtn.offsetTop;

    let newLeft = currentLeft + (Math.random() * offset - offset / 2);
    let newTop = currentTop + (Math.random() * offset - offset / 2);

    const maxX = window.innerWidth - noBtn.offsetWidth;
    const maxY = window.innerHeight - noBtn.offsetHeight;

    newLeft = Math.max(0, Math.min(maxX, newLeft));
    newTop = Math.max(0, Math.min(maxY, newTop));

    noBtn.style.position = "absolute";
    noBtn.style.left = `${newLeft}px`;
    noBtn.style.top = `${newTop}px`;
});

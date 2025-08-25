// Lógica para reproducir audios y pausar todos

// Reproducir audio al hacer clic en cualquier botón con data-audio
document.querySelectorAll('button[data-audio]').forEach(btn => {
    btn.addEventListener('click', function() {
        const audioId = this.getAttribute('data-audio');
        const audio = document.getElementById(audioId);
        if (audio) {
            audio.currentTime = 0;
            audio.play();
        }
    });
});

// Pausar todos los audios al hacer clic en el botón "SILENCIAR"
document.getElementById('pausar-todos').addEventListener('click', function() {
    document.querySelectorAll('audio').forEach(audio => {
        audio.pause();
        audio.currentTime = 0;
    });
});
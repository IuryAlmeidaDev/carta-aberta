document.addEventListener("DOMContentLoaded", function() {
    // Esconde todas as seções exceto o botão de música
    const allSections = document.querySelectorAll("section");
    allSections.forEach(section => {
        section.style.display = "none";
    });
    
    // Deixa apenas o botão de música visível
    const musicContainer = document.querySelector(".music-container");
    musicContainer.style.display = "block";
    
    // Seleciona o botão e o áudio
    const playButton = document.getElementById("playButton");
    const backgroundMusic = document.getElementById("backgroundMusic");
    
    // Função para revelar ao rolar
    function revealOnScroll() {
        const sections = document.querySelectorAll("section");
        
        sections.forEach((section) => {
            const sectionTop = section.getBoundingClientRect().top;
            const isVisible = sectionTop < window.innerHeight - 50;
            
            // Se a seção estiver no viewport e não estiver visível
            if (isVisible && !section.classList.contains("visible")) {
                section.classList.add("visible");
            }
        });
    }
    
    // Quando o botão de coração for clicado
    playButton.addEventListener("click", function() {
        if (backgroundMusic.paused) {
            backgroundMusic.play();
            
            // Esconde o container de música após iniciar
            setTimeout(() => {
                musicContainer.style.opacity = "0";
                setTimeout(() => {
                    musicContainer.style.display = "none";
                }, 1000);
            }, 500);
            
            // Mostra todas as seções, mas elas só ficarão visíveis ao rolar
            allSections.forEach(section => {
                section.style.display = "block";
                section.classList.remove("visible"); // Garante que estejam invisíveis
            });
            
            // Mostra a introdução imediatamente
            const intro = document.querySelector(".intro");
            setTimeout(() => {
                intro.classList.add("visible");
            }, 1000);
            
            // Adiciona o evento de scroll
            window.addEventListener("scroll", revealOnScroll);
            // Chama uma vez para verificar o que já está visível
            revealOnScroll();
        }
    });
});
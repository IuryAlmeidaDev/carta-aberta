document.addEventListener("DOMContentLoaded", function() {
    const allSections = document.querySelectorAll("section");
    allSections.forEach(section => {
        section.style.display = "none";
    });
    
    const musicContainer = document.querySelector(".music-container");
    musicContainer.style.display = "block";
    
    const playButton = document.getElementById("playButton");
    const backgroundMusic = document.getElementById("backgroundMusic");
    
    function revealOnScroll() {
        const sections = document.querySelectorAll("section");
        
        sections.forEach((section) => {
            const sectionTop = section.getBoundingClientRect().top;
            const isVisible = sectionTop < window.innerHeight - 50;
            
            if (isVisible && !section.classList.contains("visible")) {
                section.classList.add("visible");
            }
        });
    }
    
    playButton.addEventListener("click", function() {
        if (backgroundMusic.paused) {
            backgroundMusic.play();
            
            setTimeout(() => {
                musicContainer.style.opacity = "0";
                setTimeout(() => {
                    musicContainer.style.display = "none";
                }, 1000);
            }, 500);
            
            allSections.forEach(section => {
                section.style.display = "block";
                section.classList.remove("visible");
            });
            
            const intro = document.querySelector(".intro");
            setTimeout(() => {
                intro.classList.add("visible");
            }, 1000);
            
            window.addEventListener("scroll", revealOnScroll);
            revealOnScroll();
        }
    });
});

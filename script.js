(function() {
    document.addEventListener('DOMContentLoaded', function() {
        // Inicialização do carrossel
        initCarousel();
        
        // Inicialização do menu hamburger
        initHamburgerMenu();
        
        // Função de mensagem
        window.msg = function() {
            alert("Enviado Com Sucesso, Descodificadas");
        }
    });

    // Função para inicializar o carrossel
    function initCarousel() {
        const carousel = document.querySelector('#carousel');
        if (!carousel) return;

        const carouselContainer = carousel.querySelector('.carousel-container');
        const carouselItems = carousel.querySelectorAll('.carousel-item');
        const prevBtn = carousel.querySelector('.prev-btn');
        const nextBtn = carousel.querySelector('.next-btn');

        let currentIndex = 0;
        const totalItems = carouselItems.length;

        function showSlide(index) {
            currentIndex = (index + totalItems) % totalItems;
            carouselContainer.style.transform = `translateX(-${currentIndex * 100}%)`;
        }

        function autoAdvanceSlide() {
            showSlide(currentIndex + 1);
        }

        let autoAdvanceInterval = setInterval(autoAdvanceSlide, 5000);

        if (nextBtn) {
            nextBtn.addEventListener('click', function() {
                clearInterval(autoAdvanceInterval);
                showSlide(currentIndex + 1);
                autoAdvanceInterval = setInterval(autoAdvanceSlide, 5000);
            });
        }

        if (prevBtn) {
            prevBtn.addEventListener('click', function() {
                clearInterval(autoAdvanceInterval);
                showSlide(currentIndex - 1);
                autoAdvanceInterval = setInterval(autoAdvanceSlide, 5000);
            });
        }
    }

    // Função para inicializar o menu hamburger
    function initHamburgerMenu() {
        const hamburger = document.querySelector('.hamburger');
        const navMenu = document.querySelector('.nav-menu');
        
        if (!hamburger || !navMenu) return;

        hamburger.addEventListener('click', function(e) {
            e.stopPropagation();
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });

        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });

        document.addEventListener('click', (e) => {
            if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            }
        });
    }
})();


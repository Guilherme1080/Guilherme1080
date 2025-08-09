    let menuIcon = document.querySelector('#menu-icon');
    let navbar = document.querySelector('.navbar');
    menuIcon.onclick = () => {
        menuIcon.classList.toggle('bx-x');
        navbar.classList.toggle('active');
    };


    let sections = document.querySelectorAll('section');
    let navLinks = document.querySelectorAll('header nav a');

    window.onscroll = () => {
        sections.forEach(sec => {
            let top = window.scrollY;
            let offset = sec.offsetTop - 150;
            let height = sec.offsetHeight;
            let id = sec.getAttribute('id');

            if(top >= offset && top < offset + height) {
                navLinks.forEach(links => {
                    links.classList.remove('active');
                    document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
                });
            };
        });
        let header = document.querySelector('header');

        header.classList.toggle('sticky', window.scrollY > 100);

        menuIcon.classList.remove('bx-x');
        navbar.classList.remove('active');

    };

    ScrollReveal({
        reset: true,
        distance: '80px',
        duration: 2000,
        delay: 200
    });

    ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
    ScrollReveal().reveal('.home-img, .projeto-content, .recentes-box, .contato form', { origin: 'bottom' });
    ScrollReveal().reveal('.home-content h1, .sobre-img img', { origin: 'left' });
    ScrollReveal().reveal('.home-content p, .sobre-content', { origin: 'right' });
    ScrollReveal().reveal('.formacao-content, .formacao-box', { origin: 'bottom' });


    const typed = new Typed('.multiple-text', {
        strings: ['Desenvolvedor web','web designer','Desenvolvedor back-end'],
        typeSpeed: 100,
        backSpeed: 100,
        backDelay: 1000,
        loop: true
    });

    document.querySelector("form").addEventListener("submit", async function(e){
        e.preventDefault();

        const form = e.target;
        const formData = new FormData(form);

        const response = await fetch("contato_composer.php", {
            method: "POST",
            body: formData
        });

        const result = await response.json();

        const modal = document.getElementById("modal");
        const modalMsg = document.getElementById("modal-message");

        if(result.success){
            modalMsg.innerText = result.message;
            form.reset();
        } else {
            modalMsg.innerText = "Erro ao enviar: " + result.message;
        }

        modal.style.display = "flex";
    });

    function closeModal(){
        document.getElementById("modal").style.display = "none";
    }

const imagens = [
    './img/Imagem do WhatsApp de 2025-08-08 à(s) 17.25.41_2dab2280.jpg',
    './img/Imagem do WhatsApp de 2025-08-08 à(s) 17.25.46_76bbba5c.jpg',
    './img/Imagem do WhatsApp de 2025-08-08 à(s) 17.25.42_7b541ac9.jpg',
    // coloque aqui outras imagens que quiser
];

let indice = 0;
const imgElemento = document.getElementById('carousel-image');

setInterval(() => {
    indice++;
    if(indice >= imagens.length) indice = 0;
    imgElemento.src = imagens[indice];
}, 10000); // troca a cada 2000 ms (2 segundos)

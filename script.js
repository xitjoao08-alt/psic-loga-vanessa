// Ano automático
document.getElementById("year").textContent =
    new Date().getFullYear();


// MENU MOBILE
const menuBtn = document.getElementById("menuBtn");
const menu = document.getElementById("menu");

menuBtn.addEventListener("click", () => {

    menu.classList.toggle("active");

    if (menu.classList.contains("active")) {
        menuBtn.textContent = "✕";
    } else {
        menuBtn.textContent = "☰";
    }

});


// FECHAR MENU AO CLICAR
document.querySelectorAll("#menu a").forEach(link => {

    link.addEventListener("click", () => {

        menu.classList.remove("active");
        menuBtn.textContent = "☰";

    });

});


// ANIMAÇÕES
const observer = new IntersectionObserver(
    (entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }

        });

    },
    {
        threshold: 0.12
    }
);


document
    .querySelectorAll(
        ".card, .product, .section-image, .section-text, .contact-card"
    )
    .forEach(element => {

        element.classList.add("fade-element");

        observer.observe(element);

    });

// ==============================
// ANO DO RODAPÉ
// ==============================

const year = document.getElementById("year");

if (year) {
    year.textContent = new Date().getFullYear();
}


// ==============================
// MENU MOBILE
// ==============================

const menuButton = document.getElementById("menuButton");
const navigation = document.getElementById("navigation");

if (menuButton && navigation) {

    menuButton.addEventListener("click", () => {

        navigation.classList.toggle("active");

        if (navigation.classList.contains("active")) {

            menuButton.textContent = "✕";

        } else {

            menuButton.textContent = "☰";

        }

    });


    const links = navigation.querySelectorAll("a");

    links.forEach(link => {

        link.addEventListener("click", () => {

            navigation.classList.remove("active");

            menuButton.textContent = "☰";

        });

    });

}


// ==============================
// ANIMAÇÃO AO ROLAR
// ==============================

const animatedElements = document.querySelectorAll(
    ".area-card, .book-card, .about-card, .about-text, .contact-box"
);

const observer = new IntersectionObserver(
    entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("visible");

            }

        });

    },
    {
        threshold: 0.12
    }
);


animatedElements.forEach(element => {

    element.classList.add("animate");

    observer.observe(element);

});

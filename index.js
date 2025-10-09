let burgerElement = document.querySelector(".burger");

if (burgerElement) {
    burgerElement.addEventListener("click", function () {
        this.classList.toggle("active");
        document.querySelector(".header__menu-container").classList.toggle("active");
        document.body.classList.toggle("lock");
    })
}

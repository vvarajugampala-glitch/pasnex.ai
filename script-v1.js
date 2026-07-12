const button = document.querySelector("button");
const contact = document.querySelector("#contact");

button.addEventListener("click", function () {
    contact.scrollIntoView({
        behavior: "smooth"
    });
});
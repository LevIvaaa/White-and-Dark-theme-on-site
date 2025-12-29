let root = document.querySelector(":root");
let button = document.querySelector("#ToggleButton");

let savedTheme = localStorage.getItem("theme");

if(savedTheme === "dark") {
    root.classList.add("dark");
    ToggleButton.textContent = "Перейти на светлую тему";
} else {
    ToggleButton.textContent = "Перейти на темную тему";
}

button.addEventListener('click', (event) => {
    event.preventDefault();

    root.classList.toggle("dark");

    if(ToggleButton.textContent === "Перейти на темную тему") {
        localStorage.setItem("theme", "dark");
        ToggleButton.textContent = "Перейти на светлую тему";
    } else {
        localStorage.setItem("theme", "light");
        ToggleButton.textContent = "Перейти на темную тему";
    }
})
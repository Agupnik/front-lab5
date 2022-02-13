"use strict"
const films_header = document.getElementById('films-header');
const image = document.querySelector('#city-image');
const film = document.querySelector('li.film');
films_header.addEventListener("click", () => elemChangeColor(films_header));
film.addEventListener("click", () => elemChangeColor(film));
document.querySelector('#increase').addEventListener("click", () => increase());
document.querySelector('#decrease').addEventListener("click", () => decrease());
document.querySelector('#add').addEventListener("click", () => add());
document.querySelector('#delete').addEventListener("click", () => remove());

function elemChangeColor(elem) {
    let text_color = getRandomColor();
    let bg_color = getRandomColor();
    while (text_color === bg_color) {
        text_color = getRandomColor();
    }
    elem.style.backgroundColor = bg_color;
    elem.style.color = text_color;
}

function increase() {
    if(image.classList.contains("smaller-size")){
        image.classList.remove("smaller-size");
        image.classList.add("small-size");
        return;
    }
    else if (image.classList.contains("small-size")) {
        image.classList.remove("small-size");
        image.classList.add("default-size");
        return;
    }
    else if (image.classList.contains("default-size")) {
        image.classList.remove("default-size");
        image.classList.add("big-size");
        return;
    }
    else if (image.classList.contains("big-size")) {
        image.classList.remove("big-size");
        image.classList.add("bigger-size");
        return;
    }
    else {
        alert("Не можна більше збільшувати!");
        return;
    }
}

function decrease() {
    if(image.classList.contains("bigger-size")){
        image.classList.remove("bigger-size");
        image.classList.add("big-size");
        return;
    }
    else if (image.classList.contains("big-size")) {
        image.classList.remove("big-size");
        image.classList.add("default-size");
        return;
    }
    else if (image.classList.contains("default-size")) {
        image.classList.remove("default-size");
        image.classList.add("small-size");
        return;
    }
    else if (image.classList.contains("small-size")) {
        image.classList.remove("small-size");
        image.classList.add("smaller-size");
        return;
    }
    else {
        alert("Не можна більше зменшувати!");
        return;
    }
}

function remove() {
    if(image.classList.contains("show")){
        image.classList.remove("show");
        image.classList.add("delete");
    }
}

function add() {
    if(image.classList.contains("delete")){
        image.classList.remove("delete");
        image.classList.add("show");
    }
}

function getRandomColor() {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
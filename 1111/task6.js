let images = [
"gallery/IMG_6881.JPG",
"gallery/IMG_6882.JPG",
"gallery/IMG_6889.JPG",
"gallery/IMG_6932.JPG",
"gallery/IMG_6976.JPG",
"gallery/IMG_6981.JPG",
"gallery/oysters.jpg",
"gallery/P9036737.JPG",
"gallery/P9086894.JPG",
"gallery/P9086903.JPG",
"gallery/P9096983.JPG",
"gallery/P9096999.JPG",
"gallery/P9117086.JPG",
"gallery/P9117097.JPG",
"gallery/P9117105.JPG",
"gallery/P9117109.JPG",
"gallery/P9127135.JPG",
"gallery/P9137164.JPG",
"gallery/P9177257.JPG",
"gallery/P9207338.JPG",
"gallery/P9207345.JPG",
"gallery/P9237376.JPG"
];

let index = 0;

let carusel = document.getElementById("carusel");

const prevButton = document.querySelector(".prev");
const nextButton = document.querySelector(".next");


prevButton.addEventListener("click", () => {
    index--;
    if (index < 0) {
    index = images.length - 1; 
    }
    carusel.src = images[index];
});



nextButton.addEventListener("click", () => {
    index++;
    if (index >= images.length) {
    index = 0; 
    }
    carusel.src = images[index];
});


carusel.src = images[index];
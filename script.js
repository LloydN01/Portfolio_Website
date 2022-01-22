const images = [
    "portfolio0.jpg",
    "portfolio1.jpg",
    "portfolio2.jpg"
];

let index = 0;

const backArrow = () => {
    if(index === 0){
        index = images.length - 1;
    } else{
        index -= 1;
    }
    document.getElementById("portfolioImages").src = images[index];
}

const nextArrow = () => {
    if(index === images.length - 1){
        index = 0;
    } else{
        index += 1;
    }
    document.getElementById("portfolioImages").src = images[index];
}
const images = [
    "0.jpg",
    "1.jpg",
    "2.jpg",
    "3.jpg"
];

let index = 0;

const backArrow = () => {
    if(index === 0){
        index = images.length - 1;
    } else{
        index -= 1;
    }
    document.getElementById("placeholderImg").src = images[index];
}

const nextArrow = () => {
    if(index === images.length - 1){
        index = 0;
    } else{
        index += 1;
    }
    document.getElementById("placeholderImg").src = images[index];
}
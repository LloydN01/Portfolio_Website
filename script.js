const images = [
    "cherryMXMain.png",
    "g&t_main.png"
];

const descriptions = [
    "A webpage created with HTML and CSS that displays my skills as a web developer who can employ responsive web design techniques.",
    "A simple board game created with Java that allows a human user to play against the computer in a game of Tigers and Goats."
];

let index = 0;

const backArrow = () => {
    if(index === 0){
        index = images.length - 1;
    } else{
        index -= 1;
    }

    document.getElementById("portfolioImages").src = images[index];
    document.getElementById("description").innerHTML = descriptions[index];
}

const nextArrow = () => {
    if(index === images.length - 1){
        index = 0;
    } else{
        index += 1;
    }

    document.getElementById("portfolioImages").src = images[index];
    document.getElementById("description").innerHTML = descriptions[index];
}
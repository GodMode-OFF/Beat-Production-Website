
for(var j=0; j<7;j++){
    document.querySelectorAll(".drum")[j].addEventListener("click", function(){
        var nameDrum = this.innerHTML; 
        makeSound(nameDrum);
        animshun(nameDrum);
        })}

document.addEventListener("keypress", function(event){
    makeSound(event.key);
    animshun(event.key);
})

function makeSound(key){
    switch (key) {
        case "w":
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;
        case "a":
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;
        case "s":
            var tom3 = new Audio("sounds/tom-3.mp3"); 
            tom3.play();
            break;
        case "d":
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;
        
        case "j":
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;
        case "k":
            var kickBass = new Audio("sounds/kick-bass.mp3");
            kickBass.play();
            break;
        case "l":
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;


        default:
            console.log(nameDrum);
            break;
}}

function animshun(kiPress){
    document.querySelector("." + kiPress).classList.add("pressed");
    setTimeout(function(){
        document.querySelector("." + kiPress).classList.remove("pressed");
    }, 50);
}


































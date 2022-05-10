let socket = io()

let inRoom = true
let inComputer = false
let inBiblio = false
let PC_is_lock = true

let PC = document.querySelector('#PC')
let PClock = document.querySelector('#PClock')
PClock.style.display = "none"

let Room = document.querySelector('#Room')
Room.style.display = "none"

let Ordi = document.querySelector('#Ordi')
let ClickOrdi = document.querySelector('.OrdiClick')
let Biblio = document.querySelector('#Biblio')
let ClickBiblio = document.querySelector('.BiblioClick')

let canvas = document.getElementById("myCanvas");
let ctx = canvas.getContext('2d');
ctx.translate(0.5, 0.5);
  
// Set display size (vw/vh).
var sizeWidth = 90 * window.innerWidth / 100;
var sizeHeight = 92 * window.innerHeight / 100;
  
//Setting the canvas site and width to be responsive 
canvas.width = sizeWidth;
canvas.height = sizeHeight;
canvas.style.width = sizeWidth;
canvas.style.height = sizeHeight;



let DownPressed = false;
let UpPressed = false;
let LeftPressed = false;
let RightPressed = false;

let x = window.innerWidth/3;
let y = window.innerHeight/2;
let ballRadius = window.innerHeight*0.03294892915;

function drawBall() {
    ctx.beginPath();
    ctx.arc(x, y, ballRadius, 0, Math.PI*2);
    ctx.fillStyle = "black";
    ctx.globalCompositeOperation='destination-over';
    ctx.fill();
    ctx.closePath();
}

document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);

function keyDownHandler(e) {
    if(e.key == "ArrowDown") {
        DownPressed = true;
        console.log("x :" + x + "y :" + y)
    }
    else if(e.key == "ArrowUp") {
        UpPressed = true;
        console.log("x :" + x + "y :" + y)
    }
    if(e.key == "ArrowLeft") {
        LeftPressed = true;
        console.log("x :" + x + "y :" + y)
    }
    else if(e.key == "ArrowRight") {
        RightPressed = true;
        console.log("x :" + x + "y :" + y)
    }
}

function keyUpHandler(e) {
    if(e.key == "ArrowDown") {
        DownPressed = false;
        console.log("ArrowUp")
    }
    else if(e.key == "ArrowUp") {
        UpPressed = false;
        console.log("ArrowUp")
    }
    if(e.key == "ArrowLeft") {
        LeftPressed = false;
        console.log("ArrowUp")
    }
    else if(e.key == "ArrowRight") {
        RightPressed = false;
        console.log("ArrowUp")
    }
}

function updatePersonnage() {
    if(inRoom == true){


        ctx.clearRect(0, 0, canvas.width, canvas.height);
        drawBall();
        
        if(DownPressed) {
            y += 5;
            if((y >= window.innerHeight*0.8813838550245) || ((x >= window.innerWidth*0.6811023622) && ( y >= window.innerHeight*0.535))){
                y -=5
            }
        }
        if(UpPressed) {
            y -= 5;
            if((y <= window.innerHeight*0.29654036244 ) || ((x >= window.innerWidth*0.67) && (y <= window.innerHeight*0.38714991762))){
                y +=5
            }
        }
        if(LeftPressed) {
            x -= 5;
            if(x <= window.innerWidth*0.13779527559){
                x += 5;
            }
        }
        if(RightPressed) {
            x += 5;
            if(((x >= window.innerWidth*0.6775) && ( y >= window.innerHeight*0.535)) || ( x>= window.innerWidth*0.875) || ((y<=window.innerHeight*0.38714991762) && (x >=window.innerWidth*0.67))){
                x -= 5;
            }
        }

        //Test si je suis devant l'odinateur
        if((x>=window.innerWidth*0.30314960629) && (x<=window.innerWidth*0.37401574803) && (y<=window.innerHeight*0.36243822075)){
            inComputer = true
        }
        else{
            inComputer = false
        }
        
        //Affiche la description de l'ordi
        if(inComputer){
            Ordi.style.backgroundColor = "red"
            ClickOrdi.style.display = "block"
        }
        else{
            Ordi.style.backgroundColor = "gray"
            ClickOrdi.style.display = "none"
        }

        //Test si je suis devant la bibliothèque
        if((y >= window.innerHeight*0.52718286655) && (y <= window.innerHeight*0.62602965403) && (x <=window.innerWidth*0.1653543307)){
            inBiblio = true
        }
        else{
            inBiblio = false
        }

        if(inBiblio){
            Biblio.style.backgroundColor = "red"
            ClickBiblio.style.display = "block"
        }
        else{
            Biblio.style.backgroundColor = "gray"
            ClickBiblio.style.display = "none"
        }
    }   
}




$(document).ready(function() {
    
    setInterval(updatePersonnage, 25);

    $(ClickOrdi).click(function() {
        if(PC_is_lock){
            PClock.style.display = "block"
            Room.style.display = "none"
            socket.emit('whichMission',(1))
        }
        else{
            PC.style.display = "block"
            Room.style.display = "none"
        }
        inRoom = false
    })

    $(".ComeBackRoom").click(function(){
        PC.style.display = "none"
        PClock.style.display = "none"
        Room.style.display = "block"
        inRoom = true
    })

    $('#PCpassword')[0].onkeypress = function(e){
        var e=window.event || e;
		var touche=e.charCode || e.keyCode;
		if((touche==13) && (this.value == "YO")){
            PClock.style.display = "none"
            PC.style.display = "block"
            PC_is_lock = false
            socket.emit('whichMission',(2))
		}
	}
})

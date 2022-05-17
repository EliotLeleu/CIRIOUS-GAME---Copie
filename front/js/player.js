let socket = io();

let inRoom = true
let inComputer = false
let inBiblio = false
let inTV = false
let inFrigo = false
let inConsole = false
let PC_is_lock = true

let PC = document.querySelector('#PC')
let PClock = document.querySelector('#PClock')
PClock.style.display = "none"

let FondBureau = document.querySelector('#fondBureau')
let FondPC = document.querySelector('#fondPC')
FondBureau.style.display = "none"
FondPC.style.display = "none"

let Room = document.querySelector('#Room')
Room.style.display = "block"
setTimeout(function(){Room.style.backgroundImage = 'url("front/image/MeublesTransp/canapeTranspa.png")'},200)
setTimeout(function(){Room.style.backgroundImage = 'url("front/image/MeublesTransp/entreeTranspa.png")'},400)
setTimeout(function(){Room.style.backgroundImage = 'url("front/image/MeublesTransp/planteTranspa.png")'},600)
setTimeout(function(){Room.style.backgroundImage = 'url("front/image/MeublesTransp/tableChevetTranspa.png")'},800)
setTimeout(function(){Room.style.backgroundImage = 'url("front/image/MeublesTransp/teleTranspa.png")'},1000)
setTimeout(function(){Room.style.backgroundImage = 'url("front/image/room.png")'},1200)
console.log("new image")
let waiter = document.querySelector('#waiter')
waiter.style.display = "none"

let ClickBureau = document.querySelector('.BureauClick')
let Ordi = document.querySelector('#Ordi')  
let ClickPC = document.querySelector('.clickPC')
let Biblio = document.querySelector('#Biblio')
let ClickBiblio = document.querySelector('.BiblioClick')
let TV = document.querySelector('#TV')
let ClickTV = document.querySelector('.TVClick')
let Frigo = document.querySelector('#Frigo')
let ClickFrigo = document.querySelector('.FrigoClick')
let Console = document.querySelector('#Console')
let ClickConsole = document.querySelector('.ConsoleClick')

let canvas = document.querySelector(".myCanvas");
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

let x = window.innerWidth/2;
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
            if((y >= window.innerHeight*0.8813838550245) || 
              ((x >= window.innerWidth*0.6811023622) && ( y >= window.innerHeight*0.535)) ||
              ((y >= window.innerHeight*0.6455172413793103) && (x >= window.innerWidth*0.291015625) && (x <= window.innerWidth*0.335)) ||
              ((y >= window.innerHeight*0.84) && (x <= window.innerWidth*0.291015625)) ||
              ((x <= window.innerWidth*0.26171875) && (y >= window.innerHeight*0.74)) ||
              ((x <= window.innerWidth*0.16) && (y >= window.innerHeight*0.6524137931034483)) ||
              ((y >= window.innerHeight*0.6) && (x <= window.innerWidth*0.4537760416) && (x >= window.innerWidth*0.374) && (y <= window.innerHeight*0.775)) ||
              ((y <= window.innerHeight*0.635) && (x >= window.innerWidth*0.52) && (y >= window.innerHeight*0.4868965517241379) && (x <= window.innerWidth*0.671875)) ||
              ((x >= window.innerWidth*0.543) && (y <= window.innerHeight*0.7558620689655172) && (x <= window.innerWidth*0.6355) && (y >= window.innerHeight*0.4868965517241379)) ||
              ((x >= window.innerWidth*0.54) && (y >= window.innerHeight*0.8317241379310345) && (x <= window.innerWidth*0.649)) ||
              ((x >= window.innerWidth*0.72) && (y >= window.innerHeight*0.4937931034482759)) ||
              ((y >= window.innerHeight*0.3627586206896552) && (x >= window.innerWidth*0.245) && (y <= window.innerHeight*0.568) && (x <= window.innerWidth*0.3561197916))){
                y -=5
            }
        }
        if(UpPressed) {
            y -= 5;
            if((y <= window.innerHeight*0.29654036244 ) || 
              ((x >= window.innerWidth*0.665) && (y <= window.innerHeight*0.38714991762)) ||
              ((y >= window.innerHeight*0.6) && (x <= window.innerWidth*0.4537760416) && (x >= window.innerWidth*0.374) && (y <= window.innerHeight*0.775)) ||
              ((y <= window.innerHeight*0.635) && (x >= window.innerWidth*0.52) && (y >= window.innerHeight*0.4868965517241379) && (x <= window.innerWidth*0.667)) ||
              ((x >= window.innerWidth*0.543) && (y <= window.innerHeight*0.7558620689655172) && (x <= window.innerWidth*0.6355) && (y >= window.innerHeight*0.4868965517241379)) ||
              ((x >= window.innerWidth*0.438) && (y <= window.innerHeight*0.34)) ||
              ((y <= window.innerHeight*0.3351724137931034) && (x <= window.innerWidth*0.3235677083)) ||
              ((x <= window.innerWidth*0.195) && (y <= window.innerHeight*0.385)) ||
              ((x <= window.innerWidth*0.3561197916) && (y <= window.innerHeight*0.568) && (x >= window.innerWidth*0.29105)) ||
              ((x >= window.innerWidth*0.796) && (y <= window.innerHeight*0.41)) ||
              ((y >= window.innerHeight*0.3627586206896552) && (x >= window.innerWidth*0.245) && (y <= window.innerHeight*0.568) && (x <= window.innerWidth*0.3561197916))){
                y +=5
            }
        }
        if(LeftPressed) {
            x -= 5;
            if((x <= window.innerWidth*0.125) ||
              ((x <= window.innerWidth*0.335) && (y >= window.innerHeight*0.6455172413793103) && (x >= window.innerWidth*0.291015625)) ||
              ((x <= window.innerWidth*0.26171875) && (y >= window.innerHeight*0.74)) ||
              ((x <= window.innerWidth*0.16) && (y >= window.innerHeight*0.6524137931034483)) ||
              ((y >= window.innerHeight*0.6) && (x <= window.innerWidth*0.4537760416) && (x >= window.innerWidth*0.374) && (y <= window.innerHeight*0.775)) ||
              ((y <= window.innerHeight*0.635) && (x >= window.innerWidth*0.52) && (y >= window.innerHeight*0.4868965517241379) && (x <= window.innerWidth*0.667)) ||
              ((x >= window.innerWidth*0.543) && (y <= window.innerHeight*0.7558620689655172) && (x <= window.innerWidth*0.6355) && (y >= window.innerHeight*0.4868965517241379)) ||
              ((x >= window.innerWidth*0.54) && (y >= window.innerHeight*0.8317241379310345) && (x <= window.innerWidth*0.649)) ||
              ((x <= window.innerWidth*0.195) && (y <= window.innerHeight*0.385)) ||
              ((x <= window.innerWidth*0.3561197916) && (y <= window.innerHeight*0.568) && (x >= window.innerWidth*0.29105))) {
                x += 5;
            }
        }
        if(RightPressed) {
            x += 5;
            if(((x >= window.innerWidth*0.665) && ( y >= window.innerHeight*0.535)) || 
              (x >= window.innerWidth*0.875) || 
              ((y <= window.innerHeight*0.38714991762) && (x >= window.innerWidth*0.67)) ||
              ((y >= window.innerHeight*0.6455172413793103) && (x >= window.innerWidth*0.291015625) && (x <= window.innerWidth*0.335)) ||
              ((y >= window.innerHeight*0.6) && (x <= window.innerWidth*0.4537760416) && (x >= window.innerWidth*0.374) && (y <= window.innerHeight*0.775)) ||
              ((y <= window.innerHeight*0.635) && (x >= window.innerWidth*0.52) && (y >= window.innerHeight*0.4868965517241379) && (x <= window.innerWidth*0.667)) ||
              ((x >= window.innerWidth*0.543) && (y <= window.innerHeight*0.7558620689655172) && (x <= window.innerWidth*0.6355) && (y >= window.innerHeight*0.4868965517241379)) ||
              ((x >= window.innerWidth*0.54) && (y >= window.innerHeight*0.8317241379310345) && (x <= window.innerWidth*0.649)) ||
              ((x >= window.innerWidth*0.438) && (y <= window.innerHeight*0.34)) ||
              ((x <= window.innerWidth*0.3561197916) && (y <= window.innerHeight*0.568) && (x >= window.innerWidth*0.29105)) ||
              ((x >= window.innerWidth*0.828125)) ||
              ((x >= window.innerWidth*0.796) && (y <= window.innerHeight*0.41)) ||
              ((x >= window.innerWidth*0.72) && (y >= window.innerHeight*0.4937931034482759)) ||
              ((y >= window.innerHeight*0.3627586206896552) && (x >= window.innerWidth*0.245) && (y <= window.innerHeight*0.568) && (x <= window.innerWidth*0.3561197916))) {

                x -= 5;
            }
        }

        setTimeout(function(){
            if((x >= window.innerWidth*0.5227864583333333) && (y >= window.innerHeight*0.4524137931034483) && (x <= window.innerWidth*0.6627604166666667) && (y <= window.innerHeight*0.583448275862069)){
                Room.style.backgroundImage = 'url("front/image/MeublesTransp/canapeTranspa.png")'
            }
            //Test si je suis derrière la plante
            else if((x >= window.innerWidth*0.2428385416666667) && (y <= window.innerHeight*0.376551724137931) && (x <= window.innerWidth*0.30)){
                Room.style.backgroundImage = 'url("front/image/MeublesTransp/planteTranspa.png")'
            }
            //Test si je suis derrière la télé
            else if ((x >= window.innerWidth * 0.548828125) && (y >= window.innerHeight * 0.7972413793103448) && (x <= window.innerWidth * 0.6497395833333333)) {
                Room.style.backgroundImage = 'url("front/image/MeublesTransp/teleTranspa.png")'
            }
            //Test si je suis derrière la table de chevet
            else if((x <= window.innerWidth*0.1549479166666667) && (y >= window.innerHeight*0.6248275862068966)){
                Room.style.backgroundImage = 'url("front/image/MeublesTransp/tableChevetTranspa.png")'
            }
            //Test si je suis derrière meuble d'entrée'
            else if ((x >= window.innerWidth * 0.7213541666666667) && (y >= window.innerHeight * 0.485)){ 
                Room.style.backgroundImage = 'url("front/image/MeublesTransp/entreeTranspa.png")'
            }
            else {
                Room.style.backgroundImage = 'url("front/image/room.png")'
            }
        },1200)

        //Test si je suis devant l'odinateur
        if((x>=window.innerWidth*0.195) && (x<=window.innerWidth*0.22) && (y<=window.innerHeight*0.38)){
            inComputer = true
        }
        else{
            inComputer = false
        }
        
        //Affiche la description de l'ordi
        if(inComputer){
            ClickBureau.style.display = "block"
        }
        else{
            ClickBureau.style.display = "none"
        }

        //Test si je suis devant la table
        if((x >= window.innerWidth*0.32421875) && (y <= window.innerHeight*0.5144827586206897) && (x <=window.innerWidth*0.373046875) && (y >= window.innerHeight*0.4110344827586207)){
            inBiblio = true
        }
        else{
            inBiblio = false
        }

        //Affiche la description de la table
        if(inBiblio){
            ClickBiblio.style.display = "block"
        }
        else{
            ClickBiblio.style.display = "none"
        }

        //Test si je suis devant la TV
        if((x >= window.innerWidth*0.545) && (y >= window.innerHeight*0.8041379310344828) && (x <= window.innerWidth*0.6432291666666667)){
            inTV = true
        }
        else{
            inTV = false
        }

         //Affiche la description de la TV
         if(inTV){
            ClickTV.style.display = "block"
        }
        else{
            ClickTV.style.display = "none"
        }


        //Test si je suis devant le Frigo
        if ((x >= window.innerWidth * 0.63) && (y <= window.innerHeight * 0.3627586206896552)) {
            inFrigo = true
        }
        else {
            inFrigo = false
        }

        //Affiche la description du Frigo
        if (inFrigo) {
            ClickFrigo.style.display = "block"
        }
        else {
            ClickFrigo.style.display = "none"
        }

         //Test si je suis devant la Console
         if ((x >= window.innerWidth*0.7506510416666667) && (y >= window.innerHeight*0.4662068965517241)) {
            inConsole = true
        }
        else {
            inConsole = false
        }

        //Affiche la description de la Console
        if (inConsole) {
            ClickConsole.style.display = "block"
        }
        else {
            ClickConsole.style.display = "none"
        } 
    }   
}




$(document).ready(function() {
    
    setInterval(updatePersonnage, 25);

    $(ClickBureau).click(function(){
        FondBureau.style.display = "block"
        Room.style.display = "none"
        inRoom = false
    })

    $(ClickPC).click(function() {
        if(PC_is_lock){
            PClock.style.display = "block"
            FondPC.style.display = "block"
            FondBureau.style.display = "none"
            socket.emit('whichMission',(1))
        }
        else{
            FondBureau.style.display = "none"
            PC.style.display = "block"
            FondPC.style.display = "block"
        }
    })

    $(".ComeBackBureau").click(function(){
        PC.style.display = "none"
        PClock.style.display = "none"
        FondPC.style.display = "none"
        FondBureau.style.display = "block"
    })

    $(".ComeBackRoom").click(function(){
        FondBureau.style.display = "none"
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
		}
	}
})

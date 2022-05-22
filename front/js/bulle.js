let Dialogue = document.querySelector('#dialogue')

let TabDialogue = ["Tu t'appelles Naikté Paco et tu es un étudiant de Venomous, une école d'informatique. Cet environnement du virtuel est nouveau pour toi et tu as commis certaines erreurs mettant en danger ton identité numérique et tu veux corriger ça.",
"Ton identité numérique constitue tout ce que tu peux laisser paraître sur internet via tous tes réseaux sociaux, sites internet, forum et tout ce qui touche au numérique.",
"Ici c’est ton appartement : pour te déplacer, tu utiliseras tes flèches et tu pourras interagir avec certains objets en cliquant avec ta souris. Tu as accès à un bloc note où tu pourras te souvenir plus facilement des mots de passe, ainsi qu’à une liste de tes missions (Regarde la liste assez souvent).",
"Et si on découvrait cet appart ? Va-t'en explorer tout ça ! ",
"Il semblerait que tu aies besoin de ton mot de passe… Où tu aurais pu le ranger ? Regarde autour de toi, tu l'as peut-être noté quelque part.",
"Regarde sur ton bureau, il n'y a pas un papier ?",
"Toutes tes applis sont bloquées par des mots de passe…tu ne les aurais pas notés quelque part ? ",
"Ton mot de passe n'est pas assez sécurisé… tu devrais le changer...",
"Le mot de passe que tu proposes ne convient pas… Si tu veux, il y a des documents que ton père t'a donné ; regarde un peu dans l'appartement.",
"Voilà qui est intéressant… ce tableau indique combien de temps un hacker mettra pour trouver ton mot de passe… Un mot de passe qui resiste 3 semaines devrait faire l'affaire pour FaceJunia.",
"Le mot de passe que tu proposes n'est pas suffisamment sécurisé… Il faudrait qu'il résiste à au moins 5 ans celui-là… Rappelle-toi tu as des documents si besoin.",
"C’est bien de ne pas utiliser les mêmes mots de passe partout",
"oula il y a beaucoup d’infos là ! il y en a que tu ne devrais peut-être pas partager.",
"Le McObèse d'à côté ? Pas super sécurisé ça... tu ferais mieux de te connecter à ta box, le mot de passe est dessus.",
"Le mot de passe que tu proposes n’est pas suffisamment sécurisé… Il faudrait qu'il résiste à au moins 800 000 ans celui-là… Rappelle-toi t'as des documents si besoin.",
"Le mot de passe que tu proposes n'est pas suffisamment sécurisé… Il ne doit pas pouvoir se faire hacker lui. Rappelle-toi t'as des documents si besoin.",
"Tu savais que les e-mails étaient polluants ? En fait, un mail représente 4 g d'équivalent CO2 (émissions liées au fonctionnement de l'ordinateur et des serveurs, ainsi qu'à une partie de leur fabrication). 65 mails émettent ainsi autant qu'un kilomètre en voiture. Un mail avec une pièce jointe volumineuse peut atteindre 50 g. Un spam non lu coûte à la planète 0,3 g.",
"Il me semble que le mots de passe de Faux-Rom est aknjshu",
"Regarde sur le post-it à cotê du stylo",
"Il me semble que le mots de passe de Imail est cR0u$",
"Bravo tu as fini le jeu ! Tu en sais maintenant un petit peu plus sur l'identité numérique ! N'hésites pas à mettre en application ce que tu as appris ici ! "]


let i = 0
let speed = 10
let encours = false
let fin = false
let count = 0
let stopFunction = false

function typeWriter(nb) {
    Dialogue.style.visibility = 'visible'
    count = nb
    if (i < TabDialogue[nb].length) {
        if(stopFunction){
            return;
        }
        Dialogue.innerHTML += TabDialogue[nb][i];
        i++;
        encours = true
        setTimeout(typeWriter, speed,nb);
    }else{
        encours = false
    }
}

socket.on('updateDialogue', ({nb,time}) => {
    setTimeout(function(){

        console.log(TabDialogue[nb])
        Dialogue.style.visibility = 'visible'
        count = nb
        if (i < TabDialogue[nb].length) {
            if(stopFunction){
                return;
            }
            Dialogue.innerHTML += TabDialogue[nb][i];
            i++;
            encours = true
            setTimeout(typeWriter, speed,nb);
        }else{
            encours = false
        }
    }, time)
})

setTimeout(function(){typeWriter(0)},1700)


$(Dialogue).click(function(){

    if(count == 3){
        fin = true
    }
    
    if(encours){
        Dialogue.innerHTML = ""
        stopFunction = true
        i = 0
        Dialogue.innerHTML = TabDialogue[count]
        encours = false
    }else if(fin){
            stopFunction = false
            Dialogue.innerHTML = ""
            i = 0
            inRoom = true
            Dialogue.style.visibility = "hidden"
        }
        else{
            stopFunction = false
            Dialogue.innerHTML = ""
            i = 0
            typeWriter(count+1)
        }
})
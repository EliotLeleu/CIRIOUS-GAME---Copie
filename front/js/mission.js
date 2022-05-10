//Compteur pour l'afficheur de mission
let MissionCout = 0

//Test mission FaceJunia
let FaceJunia_mission_1 = false
let FaceJunia_mission_2 = false
let FaceJunia_mission_3 = false

//Test mission Faux-Rom
let FauxRom_mission_1 = false
let FauxRom_mission_2 = false
let FauxRom_mission_3 = false

//Test mission Instagroove
let Instagroove_mission_1 = false
let Instagroove_mission_2 = false
let Instagroove_mission_3 = false

//Test mission Imail
let Imail_mission_1 = false
let Imail_mission_2 = false
let Imail_mission_3 = false

//Confirmation MDP FaceJunia
$('.ConfirmerMdpFaceJunia').click(function (){
    var oldpassword = document.getElementById('oldPassword').value;
    var newpassword = document.getElementById('newPassword').value;
    var confirmpassword = document.getElementById('confirmPassword').value;
    if (oldpassword == "" || newpassword == "" || confirmpassword == "") {
        alert('Veuillez remplir tous les champs');
    }
    else if (oldpassword == newpassword) {
        alert("L'ancien et le nouveau mot de passe ne peuvent être identique");
    }
    else if (newpassword != confirmpassword) {
        alert("Les mots de passe ne correspondent pas");
    }
    else {
        if ((newpassword.match( /[0-9]/g) && 
                newpassword.match( /[A-Z]/g) && 
                newpassword.match(/[a-z]/g) && 
                newpassword.match( /[^a-zA-Z\d]/g) &&
                newpassword.length == 9) || (newpassword.match(/[a-z]/g) && newpassword.length == 12)) {
            msg = "<p style='color:green'>Mot de passe fort.</p>"; 
            document.querySelector('.bigboxFaceJunia_changeMdp').style.display = "none";
            document.querySelector('.bigboxFaceJunia_para').style.display = "block";
            alert("Le mot de passe a été correctement modifié")
            FaceJunia_mission_1 = true
            socket.emit('newMdp',newpassword, 0)
            if((FaceJunia_mission_1 == true) && (FaceJunia_mission_2 == true) && (FaceJunia_mission_3 == true)){
                socket.emit('whichMission',(4))
                console.log("FaceJunia Fini")
            }
        }
        else {
            msg = "<p style='color:red'>Mot de passe faible.</p>";
        }
        document.getElementById("msg").innerHTML= msg; 
    }
})

//Confirmation Info FaceJunia
$('.ConfirmerInfoFaceJunia').click(function (){

    let statueaffectif = document.getElementById('StatueAffectif').value;
    let statueaffectifstate = document.getElementById('StatueAffectifState').value;
    document.getElementById('co').innerHTML = statueaffectif + " ( " +statueaffectifstate + " )"; 

    let ecole = document.getElementById('ecoleinfo').value
    let ecolestate = document.getElementById('ecolestate').value
    document.getElementById('etu').innerHTML = ecole + " ( " + ecolestate + " )"; 

    let habitat = document.getElementById('habitatinfo').value
    let habitatstate = document.getElementById('habitatstate').value
    document.getElementById('hab').innerHTML = habitat + " ( " + habitatstate + " )"; 

    let telephone = document.getElementById('telinfo').value
    let telephonestate = document.getElementById('telstate').value
    document.getElementById('tel').innerHTML = telephone + " ( " + telephonestate + " )"; 


    alert("Changement correctement effectué ! ")
    FaceJuniascreen_changeInfo.style.display = "none"
    FaceJuniascreen_Para.style.display = "block"

    if(habitat == "JuniaCity"){
        FaceJunia_mission_2 = true
    }

    if(statueaffectifstate && ecolestate && habitatstate && telephonestate == "prive"){
        FaceJunia_mission_3 = true
    }

    if((FaceJunia_mission_1 == true) && (FaceJunia_mission_2 == true) && (FaceJunia_mission_3 == true)){
        socket.emit('whichMission',(4))
        console.log("FaceJunia Fini")
    }
})

//Confirmation MDP FaceJunia
$('.ConfirmerMdpFaux-Rom').click(function (){
        
    var oldpassword = document.getElementById('oldPasswordFaux-Rom').value;
    var newpassword = document.getElementById('newPasswordFaux-Rom').value;
    var confirmpassword = document.getElementById('confirmPasswordFaux-Rom').value;
    if (oldpassword == "" || newpassword == "" || confirmpassword == "") {
        alert('Veuillez remplir tous les champs');
    }
    else if (oldpassword == newpassword) {
        alert("L'ancien et le nouveau mot de passe ne peuvent être identique");
    }
    else if (newpassword != confirmpassword) {
        alert("Les mots de passe ne correspondent pas");
    }
    else {
        if ((newpassword.match( /[0-9]/g) && newpassword.match( /[A-Z]/g) && newpassword.match(/[a-z]/g) && newpassword.match( /[^a-zA-Z\d]/g) && newpassword.length == 10) || (newpassword.match(/[a-z]/g) && newpassword.match( /[A-Z]/g) && newpassword.length == 11)) {
            msg = "<p style='color:green'>Votre mot de passe fort, il resiste 5 ans !</p>"; 
            document.querySelector(".bigboxFaux-Rom_changeMdp").style.display = "none";
            document.querySelector(".bigboxFaux-Rom_para").style.display = "block";
            alert("Le mot de passe a été correctement modifié")
            FauxRom_mission_1 = true
            socket.emit('newMdp',newpassword, 1)
            if((FauxRom_mission_1 == true) && (FauxRom_mission_2 == true) && (FauxRom_mission_3 == true)){
                socket.emit('whichMission',(6))
                console.log("FauxRom Fini")
            }
        }
        else {
            msg = "<p style='color:red'>Mot de passe trop faible pour ce niveau.</p>";
        }
        document.getElementById("msgFaux-Rom").innerHTML= msg; 
    }
})

//Confirmation Info Faux-Rom
$('.ConfirmerInfoFauxRom').click(function (){

    let Desc = document.getElementById('descvalue')
    let pseudo = document.getElementById('pseudoinfo').value;
    document.getElementById('pseudovalue').innerHTML = "Pseudo : " + pseudo

    let desc = document.getElementById('descinfo').value;
    Desc.innerHTML = "Description : "+ desc

    alert("Les informations ont été enregistrés, vous êtes désormais connectés.")

    if(Desc.textContent.includes("soeur de 16 ans") || Desc.textContent.includes("Mathilde") || Desc.textContent.includes("parents") || Desc.textContent.includes("Tesla")){}
    else{
        FauxRom_mission_2 = true
        if((FauxRom_mission_1 == true) && (FauxRom_mission_2 == true) && (FauxRom_mission_3 == true)){
            socket.emit('whichMission',(6))
            console.log("FauxRom Fini")
        }
    }

})

$('.EnvoieReponseFauxRom').click(function (){
    console.log("yo")
    let message = document.createElement('div')
    let reponse = document.querySelector("#reponseBastiens").value
    let discution = document.querySelector(".discutionBastiens")

    message.innerHTML = reponse
    discution.appendChild(message)

    if((message.textContent.includes("qwant")) || ((message.textContent.includes("Qwant")))){
        FauxRom_mission_3 = true
        if((FauxRom_mission_1 == true) && (FauxRom_mission_2 == true) && (FauxRom_mission_3 == true)){
            socket.emit('whichMission',(6))
            console.log("FauxRom Fini")
        }
    }


})


socket.on('thisMission', (nb) => {
    if (MissionCout < nb){
        MissionCout = nb
    }
    
});


$('.clickMission').click(function (){

    let listeMission = document.getElementById('listeMission')
    let TitreMission = document.querySelector('#TitreMission')

    while(listeMission.firstChild){
        listeMission.removeChild(listeMission.lastChild)
    }
    switch(MissionCout){
        //CHAMBRE
        case 0:
            //On arrive
            var li = document.createElement('li');
            li.innerHTML = "Explore la chambre";
            listeMission.appendChild(li);
            
            break;
        case 1:
            //On trouve l'ordi
            var li = document.createElement('li');
            li.innerHTML = "Trouve le mot de passe de l'ordi";
            listeMission.appendChild(li);
            
            break;
        case 2:
            //FACEJUNIA
            //On arrive sur le menu du Pc
            
            TitreMission.innerHTML = "FaceJunia"
            var li = document.createElement('li');
            li.innerHTML = "Trouve le mot de passe de FaceJunia";
            listeMission.appendChild(li);
            break;
        case 3:
            //On est sur FaceJunia
            TitreMission.innerHTML = "FaceJunia"
            var li1 = document.createElement('li');
            var li2 = document.createElement('li');
            var li3 = document.createElement('li');
            li1.innerHTML = "Mets un nouveau mot de passe qui résiste pendant 3 semaine";
            li2.innerHTML = "Mets toutes tes données en privé";
            li3.innerHTML = "Mets le nom de ta nouvelle ville";
            listeMission.appendChild(li1);
            listeMission.appendChild(li2);
            listeMission.appendChild(li3);
            break;
        
        case 4:
            //FAUX-ROM
            TitreMission.innerHTML = "Faux-Rom"
            var li = document.createElement('li');
            li.innerHTML = "Ouvrir Faux-Rom";
            listeMission.appendChild(li);
            break;
        case 5:
            //FAUX-ROM
            TitreMission.innerHTML = "Faux-Rom"
            var li1 = document.createElement('li');
            var li2 = document.createElement('li');
            var li3 = document.createElement('li');
            li1.innerHTML = "Mettre un nouveau mot de passe qui résiste pendant 5 ans";
            li2.innerHTML = "Enleve tout ce qui parle de ta famille";
            li3.innerHTML = "Réponds à Bastiens";
            listeMission.appendChild(li1);
            listeMission.appendChild(li2);
            listeMission.appendChild(li3);
            break;

        case 6:
            //Evenement annexe
            var li = document.createElement('li');
            li.innerHTML = "Enleve les pops ups";
            listeMission.appendChild(li);
            break;

        case 7:
            //INSTAGROOVE
            TitreMission.innerHTML = "Instagroove"
            var li1 = document.createElement('li');
            var li2 = document.createElement('li');
            var li3 = document.createElement('li');
            li1.innerHTML = "Mettre un nouveau mot de passe qui résiste pendant 800k ans";
            li2.innerHTML = "Désactive ta localisation";
            li3.innerHTML = "Supprime les bots qui t'envois des messages ";
            listeMission.appendChild(li1);
            listeMission.appendChild(li2);
            listeMission.appendChild(li3);
            break;

        case 7:
            //INSTAGROOVE
            var li1 = document.createElement('li');
            var li2 = document.createElement('li');
            var li3 = document.createElement('li');
            li1.innerHTML = "Mettre un nouveau mot de passe qui résiste infiniment";
            li2.innerHTML = "Payer le cadeau à de ta grand mère";
            li3.innerHTML = "Supprime les mails bizarres";
            listeMission.appendChild(li1);
            listeMission.appendChild(li2);
            listeMission.appendChild(li3);
            break;
    }  
});

// $(document).ready(function() {

    
// });


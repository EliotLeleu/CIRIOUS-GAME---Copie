let PCscreen = document.querySelector('#PC')


let FaceJuniascreen = document.querySelector('#FaceJunia')
let FaceJuniascreenClose = document.querySelector('.bigboxlockFaceJunia')
let FaceJuniascreenOpen = document.querySelector('.bigboxFaceJunia')
let FaceJuniascreen_Para = document.querySelector('.bigboxFaceJunia_para')
let FaceJuniascreen_changeMdp = document.querySelector('.bigboxFaceJunia_changeMdp')

let InstaGroovescreen = document.querySelector('#InstaGroove')
let InstaGroovescreenLock = document.querySelector('#InstaGrooveLock')
let Imailscreen = document.querySelector('#Imail')
let ImailscreenLock = document.querySelector('#ImailLock')
let FauxRomscreen = document.querySelector('#Faux-Rom')
let FauxRomscreenLock = document.querySelector('#Faux-RomLock')

let FaceJunia_is_lock = true
let InstaGroove_is_lock = true
let Imail_is_lock = true
let FauxRom_is_lock = true

PCscreen.style.display = "none"
FaceJuniascreen.style.display = "none"
FaceJuniascreenClose.style.display = "none"
FaceJuniascreenOpen.style.display = "none"
FaceJuniascreen_Para.style.display = "none"
FaceJuniascreen_changeMdp.style.display = "none"

InstaGroovescreenLock.style.display = "none"
InstaGroovescreen.style.display = "none"
Imailscreen.style.display = "none"
ImailscreenLock.style.display = "none"
FauxRomscreen.style.display = "none"
FauxRomscreenLock.style.display = "none"

$(document).ready(function() {

    $('.Icon').click(function(){
        PCscreen.style.display = "none"
        let va = $(this).attr('rel')
        switch(va){
            case "FaceJunia":
                FaceJuniascreen.style.display = "block"
                if(FaceJunia_is_lock){
                $('.bigboxlock' + va)[0].style.display = "block"
                }
                else{
                    $('.bigbox' + va)[0].style.display = "block"
                }
                break;
            
            case "InstaGroove":
                console.log(InstaGroove_is_lock)
                if(InstaGroove_is_lock){
                $('#' + va + "Lock")[0].style.display = "block"
                }
                else{
                    $('#' + va)[0].style.display = "block"
                }
                break;

            case "Imail":
                if(Imail_is_lock){
                $('#' + va + "Lock")[0].style.display = "block"
                }
                else{
                    $('#' + va)[0].style.display = "block"
                }
                break;

            case "Faux-Rom":
                if(FauxRom_is_lock){
                $('#' + va + "Lock")[0].style.display = "block"
                }
                else{
                    $('#' + va)[0].style.display = "block"
                }
                break;
        }
        
        
    })

    //Pour revenir a l'écran d'accueil de l'ordi
    $('.goBack').click(function(){ 
        let va = $(this).parent().parent()[0]
        if($(this).parent().parent().attr("rel")){
            let vo = $(this).parent().parent().attr("rel")
            $('.bigbox' + vo +'_para')[0].style.display = "none"
            $('.bigbox' + vo +'_changeMdp')[0].style.display = "none"
        }
        va.style.display = "none"
        PCscreen.style.display = "block"
    })

    let motdepasseFaceJunia = "YO"
    let motdepasseInstaGroove = "YO"
    let motdepasseImail = "YO"
    let motdepasseFauxRom = "YO"


    //Test Mots de Passe pour les sites avec le bouton se connnecter
    $(".valide").click(function() {
        let va = $(this).attr('rel')
        console.log(va)
        switch(va){
            case "FaceJuniapassword" :
                if(($('#'+ va)[0].value) == motdepasseFaceJunia){
                    FaceJunia_is_lock = false
                    FaceJuniascreenClose.style.display = "none"
                    FaceJuniascreenOpen.style.display = "block"
                }
                break;
            
            case "InstaGroovepassword" :
                if(($('#'+ va)[0].value) == motdepasseInstaGroove){
                    InstaGroove_is_lock = false
                    InstaGroovescreenLock.style.display = "none"
                    InstaGroovescreen.style.display = "block"
                }
                break;
            
            case "Imailpassword" :
                if(($('#'+ va)[0].value) == motdepasseImail){
                    Imail_is_lock = false
                    ImailscreenLock.style.display = "none"
                    Imailscreen.style.display = "block"
                }
                break;
                
            case "Faux-Rompassword" :
                if(($('#'+ va)[0].value) == motdepasseFauxRom){
                    FauxRom_is_lock = false
                    FauxRomscreenLock.style.display = "none"
                    FauxRomscreen.style.display = "block"
                }
                break;
            }
    });

    //Test Mots de Passe pour les sites avec entrée
    $('#FaceJuniapassword')[0].onkeypress = function(e){
        var e=window.event || e;
		var touche=e.charCode || e.keyCode;
		if((touche==13) && (this.value == motdepasseFaceJunia)){
            FaceJunia_is_lock = false
            FaceJuniascreenClose.style.display = "none"
            FaceJuniascreenOpen.style.display = "block"  
		}
	}

    $('#InstaGroovepassword')[0].onkeypress = function(e){
        var e=window.event || e;
		var touche=e.charCode || e.keyCode;
		if((touche==13) && (this.value == motdepasseInstaGroove)){
            InstaGroove_is_lock = false
            InstaGroovescreenLock.style.display = "none"
            InstaGroovescreen.style.display = "block"
		}
	}

    $('#Imailpassword')[0].onkeypress = function(e){
        var e=window.event || e;
		var touche=e.charCode || e.keyCode;
		if((touche==13) && (this.value == motdepasseImail)){
            Imail_is_lock = false
            ImailscreenLock.style.display = "none"
            Imailscreen.style.display = "block"
		}
	}

    $('#Faux-Rompassword')[0].onkeypress = function(e){
        var e=window.event || e;
		var touche=e.charCode || e.keyCode;
		if((touche==13) && (this.value == motdepasseFauxRom)){
            FauxRom_is_lock = false
            FauxRomscreenLock.style.display = "none"
            FauxRomscreen.style.display = "block"
		}
	}


    //Parametre FaceJunia//
    $('.reglage').click(function (){
        FaceJuniascreenOpen.style.display = "none"
        FaceJuniascreen_Para.style.display = "block"
    })
    $('.changeMdp').click(function (){
        FaceJuniascreen_Para.style.display = "none"
        FaceJuniascreen_changeMdp.style.display = "block"
    })
    $('.annulerMdp').click(function (){
        FaceJuniascreen_changeMdp.style.display = "none"
        FaceJuniascreen_Para.style.display = "block"
        
    })
    $('.ConfirmerMdp').click(function (){
        
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
                FaceJuniascreen_changeMdp.style.display = "none";
                FaceJuniascreen_Para.style.display = "block";
                alert("Le mot de passe a été correctement modifié")
                motdepasseFaceJunia = newpassword;
                    }
            else {
                msg = "<p style='color:red'>Mot de passe faible.</p>";
            }
            document.getElementById("msg").innerHTML= msg; 
        }
    })

    $('.changeInfo').click(function (){
        FaceJuniascreenOpen.style.display = "none"
        FaceJuniascreen_Para.style.display = "block"
    })
    $('.deconnection').click(function (){   
        FaceJunia_is_lock = true
        FaceJuniascreen_Para.style.display = "none"
        FaceJuniascreen.style.display = "none"
        PCscreen.style.display = "block"

    })
    $('.retourProfil').click(function (){
        FaceJuniascreen_Para.style.display = "none"
        FaceJuniascreenOpen.style.display = "block"
    })

});


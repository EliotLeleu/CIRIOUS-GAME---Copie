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
FaceJuniascreen.style.display = "block"
FaceJuniascreenClose.style.display = "none"
FaceJuniascreenOpen.style.display = "none"
FaceJuniascreen_Para.style.display = "none"
FaceJuniascreen_changeMdp.style.display = "block"

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

    //Test Mots de Passe pour les sites avec le bouton se connnecter
    $(".valide").click(function() {
        let va = $(this).attr('rel')
        console.log(va)
        switch(va){
            case "FaceJuniapassword" :
                if(($('#'+ va)[0].value) == "YO"){
                    FaceJunia_is_lock = false
                    FaceJuniascreenClose.style.display = "none"
                    FaceJuniascreenOpen.style.display = "block"
                }
                break;
            
            case "InstaGroovepassword" :
                if(($('#'+ va)[0].value) == "YO"){
                    InstaGroove_is_lock = false
                    InstaGroovescreenLock.style.display = "none"
                    InstaGroovescreen.style.display = "block"
                }
                break;
            
            case "Imailpassword" :
                if(($('#'+ va)[0].value) == "YO"){
                    Imail_is_lock = false
                    ImailscreenLock.style.display = "none"
                    Imailscreen.style.display = "block"
                }
                break;
                
            case "Faux-Rompassword" :
                if(($('#'+ va)[0].value) == "YO"){
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
		if((touche==13) && (this.value == "YO")){
            FaceJunia_is_lock = false
            FaceJuniascreenClose.style.display = "none"
            FaceJuniascreenOpen.style.display = "block"  
		}
	}

    $('#InstaGroovepassword')[0].onkeypress = function(e){
        var e=window.event || e;
		var touche=e.charCode || e.keyCode;
		if((touche==13) && (this.value == "YO")){
            InstaGroove_is_lock = false
            InstaGroovescreenLock.style.display = "none"
            InstaGroovescreen.style.display = "block"
		}
	}

    $('#Imailpassword')[0].onkeypress = function(e){
        var e=window.event || e;
		var touche=e.charCode || e.keyCode;
		if((touche==13) && (this.value == "YO")){
            Imail_is_lock = false
            ImailscreenLock.style.display = "none"
            Imailscreen.style.display = "block"
		}
	}

    $('#Faux-Rompassword')[0].onkeypress = function(e){
        var e=window.event || e;
		var touche=e.charCode || e.keyCode;
		if((touche==13) && (this.value == "YO")){
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
        console.log("Il faut faire la fonction qui change le mots de passe") 
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

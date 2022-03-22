window.onload=function(){

    var messaggio;
    var checkinformativa = document.querySelector(".checkinformativa");
        checkinformativa.style.color="#ff0000";
    
    //variabili login
    var loginvoce= document.querySelector("#loginvoce");
    var loginmodulo = document.querySelector("#login");
    var chiusuralogin = document.querySelector(".chiudi");
    
    var body=document.querySelector("body");
    var enter= document.querySelector("login button")
    //APPARIZIONE LOGIN:
    function gestionelogin(){
    loginvoce.onclick=function(){
      $("#login").animate({"margin-top":"50px"},800);
               loginmodulo.style.display="block";
        
              //  body.style.overflow="hidden";
            
            }
             chiusuralogin.onclick=function(){
               loginmodulo.style.display="none";
                //  body.style.overflow="scroll";
            }
        
    }
    gestionelogin();

    //variabili registrazione
var moduloregistrazione= document.querySelector("#registrazione")
var registrati= document.querySelector("#creaccount")
var chiudiregistrazione = document.querySelector(".chiudiregistrazione");
//APPARIZIONE REGISTRAZIONE:
function gestioneregistrazione(){
registrati.onclick=function(){
  $("#registrazione").animate({"margin-top":"50px"},800);
           moduloregistrazione.style.display="block";
           loginmodulo.style.display="none";
          //  body.style.overflow="hidden";
        
        }
chiudiregistrazione.onclick=function(){
   moduloregistrazione.style.display="none";
          //  body.style.overflow="scroll";
}
    
}
 gestioneregistrazione(); 
    
}    



document.addEventListener("DOMContentLoaded", function(){
     
//dissolvenza immagine cover inizializzazione
$("#cover").fadeIn(5);
setTimeout( function(){
     $("#cover").fadeOut(1000)
          },500);

         //controlli per stabilire quale background di article impostare in Home in base al resize 
          if(window.orientation==undefined){ //se il device è un desktop
             document.getElementById("sushicontain").style.backgroundImage="url(../assets/img/sushidesktop.png)"
           }else{document.getElementById("sushicontain").style.backgroundImage="url(../assets/img/sushi.png)"}
          
           window.addEventListener("resize", function(){ //se effettuo resize sulla finestra
           if(document.documentElement.clientWidth>=1024){
              document.getElementById("sushicontain").style.backgroundImage="url(../assets/img/sushidesktop.png)"
             }else{
              document.getElementById("sushicontain").style.backgroundImage="url(../assets/img/sushi.png)"
                }
           })  
           document.querySelector("#homevoce").addEventListener("click", function(){//se clicco su voce Home
               if(window.orientation==undefined){ 
                    document.getElementById("sushicontain").style.backgroundImage="url(../assets/img/sushidesktop.png)"
                  }else{document.getElementById("sushicontain").style.backgroundImage="url(../assets/img/sushi.png)"} 

                  if(document.documentElement.clientWidth>=1024){
                    document.getElementById("sushicontain").style.backgroundImage="url(../assets/img/sushidesktop.png)"
                   }else{
                    document.getElementById("sushicontain").style.backgroundImage="url(../assets/img/sushi.png)"
                      }  

                  window.addEventListener("resize", function(){
                  if(document.documentElement.clientWidth>=1024){
                     document.getElementById("sushicontain").style.backgroundImage="url(../assets/img/sushidesktop.png)"
                    }else{
                     document.getElementById("sushicontain").style.backgroundImage="url(../assets/img/sushi.png)"
                       }
                  })   
           })

          
           //////////////////////////////////////////////////////////////////////////////////////////////////
              
//GESTIONE DELL'EVENTO SCROLL CON CONSEGUENZE SULLA DISSOLVENZA DEL BACKGROUND MENU X PICCOLI DISPOSITIVI
     window.onscroll = function(event){
      var scrolltopvar = document.documentElement.scrollTop || document.body.scrollTop
      if(scrolltopvar>=200){
          document.querySelector("#navheader").style.background="rgba(82, 82, 82, 0)";
           document.querySelector("#navheader").style.borderBottom="solid orange 0px"
          
          
      }else if(scrolltopvar<=200){
          document.querySelector("#navheader").style.background="rgba(0, 0, 0, 0.88)";
           document.querySelector("#navheader").style.borderBottom="solid orange 2px"
         
      }
   }
   
          //SLIDESHOW:
               $(document).ready(function(){     
                    slideshow(5,1000,5000);     
                 });
                      
                      /* Argomenti funzione: 
                      n -> il numero totale di foto
                      t1 -> il tempo in millisecondi di transizione
                      t2 -> il tempo in millisecondi di intervallo
               */
                function slideshow(n,t1,t2){
                    /* inizializzo le variabili e gli elementi */
                    var x = 0;
                    var txt = 0;
                    var stato = 1;
                    $("#foto2").animate({"opacity":"0"},0);
                    $("#foto2").animate({"left":"100%"},0);
                    $("#foto2").animate({"opacity":"1"},0);      
                    $("#foto1").attr("src",fotografie(x,n));
                    $("#slide p").html(scritte(txt,n));
                    x++;
                    $("#foto2").attr("src",fotografie(x,n));
                    
                    /* eseguo l'intervallo dello slide */
                    var intervallo = setInterval(function(){
                      x++;txt++;
                      if(x>n-1){x=0;}
                      if(txt>n-1){txt=0;}
                      stato = cambiaSlide(x,n,stato,t1,txt);
                    },t2);
                   }
                      
                       /* Argomenti funzione: 
                      x -> la foto che si sta visualizzando 
                      n -> il numero totale di foto
                      stato -> la posizione dello slide
                      t -> il tempo in millisecondi di transizione
                      txt -> il testo che si sta visualizzando
               */ 
                   function cambiaSlide(x,n,stato,t,txt){
                    if(stato==1){
                     var elemento1 = "#foto1";
                     var elemento2 = "#foto2";
                    }else{
                     var elemento1 = "#foto2";
                     var elemento2 = "#foto1";
                    }
                    $(elemento2).animate({"left":"0px"},t);
                    $(elemento1).animate({"left":"-100%"},t,function(){
                     $("#slide p").html(scritte(txt,n));
                     $(elemento1).animate({"opacity":"0"},0);
                     $(elemento1).animate({"left":"100%"},0);
                     $(elemento1).animate({"opacity":"1"},0,function(){
                       $(elemento1).attr("src",fotografie(x,n));        
                     });
                    });
                    
                    if(stato==1){stato=0;}else{stato=1;}
                    return stato;
                   }
                      
                      /*
                    Argomenti funzione:
                      x -> la foto che si sta visualizzando
                      n -> il numero totale di foto
               */
                   function fotografie(x,n){
                    var foto = new Array(n);
                    /* scrivere il path ed il nome delle foto che volere usare */
                    foto[0] = "./assets/img/friends.jpeg" ;
                    foto[1] = "./assets/img/condivisione2.jpg";
                    foto[2] = "./assets/img/friends.jpg";
                       foto[3] = "./assets/img/friends2.jpeg";
                    foto[4] = "./assets/img/condivisione.jpg";
                    
                    return foto[x];
                   }
                   
               /*
                    Argomenti funzione:
                      x -> la foto che si sta visualizzando
                      n -> il numero totale di foto
               */
                   function scritte(x,n){
                    var testi = new Array(n);
                    /* scrivere il testo che vuoi far apparire sulle foto */
                    testi[0] = "";
                    testi[1] = "";
                    testi[2] = "";
                    testi[3] = "";
                    testi[4] = "";
                    
                    return testi[x];
                   }
               
})
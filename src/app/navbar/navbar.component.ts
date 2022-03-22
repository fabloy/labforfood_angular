import { Component, OnInit } from '@angular/core';
import {ValidateService} from '../angular_services/validate.service';
import {Router} from "@angular/router"//risorsa service esterno nativo di angular che ti permette di cambiare rotte automaticamente


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private validateService:ValidateService, private router:Router) { }

  ngOnInit(): void {
  }
  username:string=""; //value del two way binding
  password:string=""; //value del two way binding
  msg_error:string="";
  msg_Ok:string="";
  isLogged:boolean=true
  
  password2:string="";
  informativa:boolean=false;
  email:string="";
  nominativo:string="";
  msg_informativa:string="accetto le condizioni";
  msg_errorR:string="";
  msg_OkR:string="";


  onLoginSubmit(event:any){
    event.preventDefault();
    
    const user={
      username:this.username, // valore che deriva da doppio binding
      password:this.password
    }
    console.log(this.validateService.validateForm(user))
   if(this.validateService.validateForm(user)===true){
     
    this.msg_Ok="Dati validi, procedo con autenticazione";
    this.msg_error="";
    // this.router.navigate(["/dashboard"])

    this.validateService.checkUser(user).subscribe(
      (data)=>{
        console.log("!!!!!!!!!",data.message + data.IdUtente)
        if(data.loggedIn===true){
         
          setTimeout(
            () => {
              this.msg_Ok=data.message;
              this.isLogged=false
              //debbo settare nel localStorage data.loggedIn
              //data.IdUtente

              localStorage.setItem('my_usr', data.IdUtente.toString()) //data.idutente viene dal database, ovvero dalla risposta chiamata asincrona
              this.router.navigate(['/dashboard', data.IdUtente])
          },1500) 
        }
      },
      (error)=>{
        console.log("ERROR! ",error.message)
      }
    )

   }else{
    this.msg_Ok="";
    this.msg_error="Dati errati, inserire dati validi";
   }
  }
  
//////registrazione/////////////////////////////////////
  onRegisterSubmit(event:any){
    event.preventDefault();
    const userR={
      username:this.username, // valore che deriva da doppio binding
      password:this.password,
      password2:this.password2,
      informativa:this.informativa,
      email:this.email,
      nominativo:this.nominativo
    }
    
console.log(userR)
   if(this.validateService.validateFormR(userR) == true ){
    this.msg_OkR="Dati formalmente corretti, procedo con la registrazione";
    this.msg_errorR="";
    this.msg_informativa="";
    // location.href = '/index.html';

    this.validateService.registerUser(userR).subscribe(
      (data)=>{
        console.log("success registrazione",data);

        setTimeout( ()=>{
          this.msg_OkR=data.message;
          // this.router.navigate(['/dashboard', 98])
        },1500)
        // localStorage.setItem('my_usr', data.IdUtente.toString()) //data.idutente viene dal database, ovvero dalla risposta chiamata asincrona
        // this.router.navigate(['/dashboard', data.IdUtente])
      },
      (error)=>{
        console.log("erore registrazione",error)
      }
    )
   }else{
    this.msg_OkR="";
    this.msg_errorR="l'email deve contenere almeno 8 caratteri, le due password devono coincidere e devi accettare l'informativa";
    
  }

   
  }
  
}

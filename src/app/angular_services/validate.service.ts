import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";//localmente per gestione chiamate http
import {HttpHeaders} from "@angular/common/http";//per gestire chiamate http globalmente, come voglio che mi vengano restituiti i dati?
import {Observable} from "rxjs"; //per gestire l'effettiva richiesta GET/POST

@Injectable({
  providedIn: 'root'
})
export class ValidateService {

  constructor(private http:HttpClient) { }

  //Controllo dati login
  validateForm(user:any):boolean{
    const emailPattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const passwordPattern= new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
    //pswd: almeno un carattere numerico, un carattere minuscolo e uno maiuscolo, almeno 8 caratteri e un simbolo !@#\$%\^&\*
   
    if(user.username==""||user.username==undefined || user.password==""
    || user.password==undefined || !passwordPattern.test(user.password)){
       return false;
    }else{
      return true;
  }
  }

  //Autenticazione login
  wsCheckUser:string ="http://l4com.labforweb.it/backend/web/test/ws/users/checkUser.php";
  httpOptions={
    headers: new HttpHeaders({'content-type':'application/json'})//intestazioni del http: il contenuto sarà di tipo json
  }
  checkUser(user:any):Observable<any>{ //chiamata asincrona
   return this.http.post(this.wsCheckUser, user, this.httpOptions )//post() vuole: a CHI faccio chiamata, quali sono i DATI DA INVIARE(post), e INTESTAZIONI (in che formato voglio la response)
  }

   //Controllo dati registrazione
  validateFormR(userR:any):boolean{
    const emailPattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const passwordPattern= new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
    //pswd: almeno un carattere numerico, un carattere minuscolo e uno maiuscolo, almeno 8 caratteri e un simbolo !@#\$%\^&\*
   
    if(userR.username=="" ||userR.username==undefined 
    || !emailPattern.test(userR.email) 
    || userR.password2=="" || userR.password==""
    || userR.password2==undefined || userR.password==undefined 
    ||userR.password2!==userR.password
    || !passwordPattern.test(userR.password2) || !passwordPattern.test(userR.password) ){
       return false;
    }else if(userR.informativa===false){
      return false
    }else{
      return true;
  
  }
  }

  //chiamata asincrona post per registrazione utente
  wsRegisterUser:string ="http://l4com.labforweb.it/backend/web/test/ws/users/addUser.php";
  registerUser(userR:any):Observable<any>{
    return this.http.post(this.wsRegisterUser, userR, this.httpOptions)
  }
}

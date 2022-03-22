import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";//localmente per gestione chiamate http
import {Observable} from "rxjs"; //per gestire l'effettiva richiesta GET/POST

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }

  urlDashboard:string="http://l4com.labforweb.it/backend/web/index.php?r=utenti/profile&id_usr="
  urlOrdini:string="http://l4com.labforweb.it/backend/web/index.php?r=utenti/ordini&id_usr="
  getUser(id_user:string){
    return this.http.get(this.urlDashboard + id_user)
  }

  getOrdini(id_user:string){
    return this.http.get(this.urlOrdini + id_user)
  }
}

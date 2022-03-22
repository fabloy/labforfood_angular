import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";//localmente per gestione chiamate http

import {Observable} from "rxjs"; //per gestire l'effettiva richiesta GET/POST
import {HttpParams} from "@angular/common/http"; //>-- gestione parametri http di querystring nelle GET
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Injectable({
  providedIn: 'root'
})
export class RistorantiService {

  constructor(private http:HttpClient) { }

  listaRistoranti:string="http://l4com.labforweb.it/backend/web/index.php?r=ristoranti/list";
  immaginiLoghi:any="http://l4com.labforweb.it/backend/web/img/ristoranti/";
  listaMenu:string="http://l4com.labforweb.it/backend/web/index.php?r=ristoranti/ristoranti-prodotti&IdRistorante=";
  
  getRistoranti():Observable<any>{
    return this.http.get(this.listaRistoranti)
  }
  // getLoghi():Observable<any>{
  //   return this.http.get(this.immaginiLoghi)
  // }

  getMenu(request:string):Observable<any>{//Request Get con rotta parametrizzata che restituisce menu
    let params = request;
    // let params = new HttpParams().set('ristorante', request); 
    return this.http.get(this.listaMenu + params )
  }
  

}

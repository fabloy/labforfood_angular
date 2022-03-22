import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from '../angular_services/user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor( private router:Router,
               private route:ActivatedRoute,
               private userService: UserService,) { }

  ngOnInit(): void {
    this.myUsrId = this.route.snapshot.params.id;
  
    console.log(this.route.snapshot)
    this.getUser(this.myUsrId)
    this.getOrdini(this.myUsrId)
  }

  isProfiloVisible:boolean=true;
  myUsrId:string=""; //L'id dell'utente loggato
  myUsr:any = {}; //l'oggetto associato all'utente loggato
  myOrd:any = ["ciao"]; //l'oggetto associato all'utente loggato

  getUser(id_usr:string){
    console.log(id_usr);
        return this.userService.getUser(id_usr)
        .subscribe(
          (data) => {
            console.log(data);
            this.myUsr = data;
           
          }
        )
    }

    esci(){
      localStorage.clear();
      window.location.reload();
      location.href="/";
    } 
   vediProfilo(){
    this.isProfiloVisible=true;
    //this.isOrdiniVisible=false;
    console.log(this.myUsr);
   }

   getOrdini(id_usr:string){
    return this.userService.getOrdini(id_usr).subscribe(
      (data)=>{
        console.log(data)
        this.myOrd=data
      },
      (error)=>{
        console.log(error)
      }
    )
   }
   vediOrdini(){
     
     this.isProfiloVisible=false
   }
}

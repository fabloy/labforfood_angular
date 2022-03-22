import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RistorantiService } from '../angular_services/ristoranti.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(private route:ActivatedRoute, 
              private ristorantiService:RistorantiService
              ) { }

  ngOnInit(): void {
    
this.myRistoranteMenu=this.route.snapshot.params.nome; //<-- associazione tra segnaposto per rotta parametrica e valore prelevato
    console.log("id passato",this.route.snapshot.params)
    
    this.getMenu(this.myRistoranteMenu)
   
  }
  
  myRistoranteMenu:any="";
  piatti:any[]=[];
  
  
  getMenu(request:string){
    this.ristorantiService.getMenu(request).subscribe(
      (data)=>{
        console.log(data)
        this.piatti=data
      },
      (error)=>{
        console.log(error)
      }
    )
  }
}

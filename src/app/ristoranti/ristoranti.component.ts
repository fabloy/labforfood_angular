import { Component, OnInit } from '@angular/core';
import { RistorantiService } from '../angular_services/ristoranti.service';
@Component({
  selector: 'app-ristoranti',
  templateUrl: './ristoranti.component.html',
  styleUrls: ['./ristoranti.component.css']
})
export class RistorantiComponent implements OnInit {

  constructor(private ristorantiService:RistorantiService) { }

  ngOnInit(): void {
    this.getRistoranti();
    // this.getLoghi();
  }

  ristoranti:any[]=[];

  // loghi:any[]=[
  //   "http://l4com.labforweb.it/backend/web/img/ristoranti/Antica%20Schiacciata%20Romana.gif",
  //   "http://l4com.labforweb.it/backend/web/img/ristoranti/Biondo%20Grano%20Roma.gif",
  //   "http://l4com.labforweb.it/backend/web/img/ristoranti/Burger%20King.gif",
  //   "http://l4com.labforweb.it/backend/web/img/ristoranti/BurgerLandia.gif",
  //   "http://l4com.labforweb.it/backend/web/img/ristoranti/Food%20Delivery%20-%20Hamburger%20&%20Tex%20Mex.gif",
  //   "http://l4com.labforweb.it/backend/web/img/ristoranti/Gado%20Sushi%20-%20Italian%20Sushi.gif",
  //   "http://l4com.labforweb.it/backend/web/img/ristoranti/La%20Gianicolense.gif",
  //   "http://l4com.labforweb.it/backend/web/img/ristoranti/McDonald's.gif",
  //   "http://l4com.labforweb.it/backend/web/img/ristoranti/MISS%20SUSHI.gif",
  //   "http://l4com.labforweb.it/backend/web/img/ristoranti/Neko%20Sushi%20Monteverde.gif",
  //   "http://l4com.labforweb.it/backend/web/img/ristoranti/Nonna%20che%20Pizza!.gif",
  //   "http://l4com.labforweb.it/backend/web/img/ristoranti/Oishi%20Restaurant.gif",
  //   "http://l4com.labforweb.it/backend/web/img/ristoranti/PalaPizza%20Pisana.gif",
  //   "http://l4com.labforweb.it/backend/web/img/ristoranti/Sushami.gif",
  //   "http://l4com.labforweb.it/backend/web/img/ristoranti/Veri%20Peri%20Peri.gif"
  // ];
   
  tipologia:any[]=["Pizzeria","Ristorante","Fastfood"]
 
  getRistoranti(){
    this.ristorantiService.getRistoranti().subscribe( 
      (data)=>{
      console.log(data)
      
      this.ristoranti=data
    },
    (error)=>{
      console.log(error)
    })
  }

  // getLoghi(){
  //   this.ristorantiService.getLoghi().subscribe(
  //     (data)=>{
  //       console.log(data)
  //     },
  //     (error)=>{
  //       console.log(error)
  //     })
  // }
}

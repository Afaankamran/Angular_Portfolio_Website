import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent {

 

  visible1:boolean = false;
  visible2:boolean = false;
  visible3:boolean = false;
  visible4:boolean = false;
  visible5:boolean = false;
  visible6:boolean = false;
 

  showDialog(id:number) {
    this.visible1 = false;
    this.visible2 = false;
    this.visible3 = false;
    this.visible4 = false;
    this.visible5 = false;
    this.visible6 = false;
    switch (id) {
      case 1:
        this.visible1 = true;
        break;
      case 2:
        this.visible2 = true;
        break;
      case 3:
        this.visible3 = true;
        break;
      case 4:
        this.visible4 = true;
        break;
      case 5:
        this.visible5 = true;
        break;
      case 6:
        this.visible6 = true;
        break;
      default:
     
        break;
    }
  }



}

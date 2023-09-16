import { Component } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {

  currentYear: any;

  constructor() {
    this.currentYear = this.getCurrentYear();
  }

  getCurrentYear() {
    return moment().format('YYYY');
  }
}

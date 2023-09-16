import { Component } from '@angular/core';

interface User {
  name: string;
  email: string;
  id: number;
}

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
 
}

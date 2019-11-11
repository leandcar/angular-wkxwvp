import { Component } from '@angular/core';
import {AccordionModule} from 'primeng/accordion';
import {MenuItem} from 'primeng/api';  

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ 
                './node_modules/primeicons/primeicons.css', 
                './node_modules/primeng/resources/themes/nova-light/theme.css', 
                './node_modules/primeng/resources/primeng.min.css' ]
})
export class AppComponent  {
  name = 'Angular';
}

import { Component } from '@angular/core';
import { InfoPageService } from './services/info-page.service';
import 'animate.css';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.less'
})
export class AppComponent {
  title = 'portfolio';

  constructor( public _infoPageService: InfoPageService ){
    
  }
}

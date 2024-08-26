import { Component } from '@angular/core';
import { InfoPageService } from '../../services/info-page.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  constructor( public infoPageService: InfoPageService ){}
}

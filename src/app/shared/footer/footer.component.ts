import { Component } from '@angular/core';
import { InfoPageService } from '../../services/info-page.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  anio: number = new Date().getFullYear();
  constructor( public infoPageService: InfoPageService ){}
}

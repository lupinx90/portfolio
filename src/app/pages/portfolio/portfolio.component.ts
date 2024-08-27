import { Component } from '@angular/core';
import { InfoPageService } from '../../services/info-page.service';
@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss'
})
export class PortfolioComponent {
  constructor( public infoService: InfoPageService ){}
}

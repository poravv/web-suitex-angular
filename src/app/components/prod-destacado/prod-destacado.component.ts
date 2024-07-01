import { Component } from '@angular/core';
import { JscriptsService } from 'src/app/utils/jscripts.service';

@Component({
  selector: 'app-prod-destacado',
  templateUrl: './prod-destacado.component.html',
  styleUrls: ['./prod-destacado.component.scss']
})
export class ProdDestacadoComponent {
  constructor(private jscriptService: JscriptsService) { }

  posicionInicial() { 
    this.jscriptService.scrollToTop();
  }

}

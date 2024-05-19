import { AfterViewInit, Component } from '@angular/core';
import { JscriptsService } from 'src/app/utils/jscripts.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent  implements AfterViewInit{
  constructor(private jscriptService: JscriptsService) { }
  posicionInicial() {
    
    this.jscriptService.scrollToTop();
  }
  ngAfterViewInit(): void {
    const yearElement = document.getElementById('current-year');
    if (yearElement) {
      console.log("Entra en yearElement")
      yearElement.textContent=new Date().getFullYear().toString();
    }
  }
}

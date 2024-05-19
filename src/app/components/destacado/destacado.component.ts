import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-destacado',
  templateUrl: './destacado.component.html',
  styleUrls: ['./destacado.component.scss']
})
export class DestacadoComponent {
@Input() title!:string;
@Input() text!:string;
@Input() image!:string;
}

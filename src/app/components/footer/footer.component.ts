import { AfterViewInit, Component } from '@angular/core';
import { FormGroup, NonNullableFormBuilder, Validators } from '@angular/forms';
import { MailService } from 'src/app/services/mail/mail.service';
import { JscriptsService } from 'src/app/utils/jscripts.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent  implements AfterViewInit{
  validateForm!: FormGroup;

  constructor(private jscriptService: JscriptsService,private fb: NonNullableFormBuilder, private mailService: MailService) { 
    this.validateForm = this.fb.group({
      correo: ['', [Validators.required]]
    });
  }

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


  submitForm(): void {
    const formData = {
      to: `marketing@suitex.com.py`,
      subject: `marketing@suitex.com.py`,
      text: `El usuario ${this.validateForm.get("correo")?.value} quiere suscribirse`
    };

    this.mailService.setMail(formData).subscribe();
    this.validateForm.reset();
  }

}

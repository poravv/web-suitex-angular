import { Component } from '@angular/core';
import { FormGroup, NonNullableFormBuilder, Validators } from '@angular/forms';
import { MailService } from 'src/app/services/mail/mail.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {

  validateForm!: FormGroup;

  constructor(private fb: NonNullableFormBuilder, private mailService: MailService) {
    this.validateForm = this.fb.group({
      nombre: ['', [Validators.required]],
      apellido: ['', [Validators.required]],
      correo: ['', [Validators.required]],
      mensaje: ['', [Validators.required]],
    });
  }

  submitForm(): void {
    const formData = {
      to: `marketing@suitex.com.py`,
      subject: `marketing@suitex.com.py`,
      text: `El usuario ${this.validateForm.get('nombre')?.value} ${this.validateForm.get('apellido')?.value} con correo ${this.validateForm.get('correo')?.value} dice ${this.validateForm.get('mensaje')?.value}`
    };

    this.mailService.setMail(formData).subscribe();
    this.validateForm.reset();
  }
}

import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule, FormBuilder } from '@angular/forms';

// Importes de Angular Material
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';  // Opcional si quieres usar íconos
import { MatCardModule } from '@angular/material/card';  // Opcional
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, HttpClientModule, MatFormFieldModule, MatButtonModule, MatInputModule, MatIconModule, MatCardModule],
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.scss'
})
export class ContactFormComponent {
  contactForm: FormGroup;

  constructor(private fb: FormBuilder, private http:HttpClient) {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      message: ['', [Validators.required, Validators.minLength(10)]],
    });
  }

  onSubmit(): void {
    if (this.contactForm.valid) {
      const formData = this.contactForm.value;
      console.log('Formulario enviado:', formData);

    // Aquí haces la solicitud HTTP para enviar los datos
      this.http.post('https://email-api-3n5v.vercel.app/send-email', formData).subscribe(response => {
        console.log("Response: ", response)
        window.location.reload();
      }, error => {
        console.log('Error: ', error)
      })
    }
  }
}
import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ContactFormComponent } from '../contact-form/contact-form.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, ContactFormComponent, CommonModule,  ReactiveFormsModule, FooterComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  contactForm!: FormGroup;
  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: [''],
      message: ['', Validators.required]
    });
  }

  services:{name:string, desc:string, path:string}[] = [
    {name: "Construcción", desc: "Ofrecemos servicios de construcción completos, desde la planificación hasta la finalización.", path: "../../../assets/icons/construction.svg"},
    {name: "Eficiencia Energética", desc: "Instalamos colectores solares y ofrecemos soluciones para mejorar la eficiencia energética.", path: "../../../assets/icons/solar.svg"},
    {name: "Retiros de Asbestos", desc: "Especialistas en la eliminación segura y eficiente de asbestos.", path: "../../../assets/icons/truck.svg"},

  ]

  viewMore(){

  }

  onSubmit(){

  }
}

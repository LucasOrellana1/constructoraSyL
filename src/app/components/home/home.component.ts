import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ContactFormComponent } from '../contact-form/contact-form.component';
import { FooterComponent } from '../footer/footer.component';
import { WhButtonComponent } from '../wh-button/wh-button.component';

import { environment } from '../../../env/enviroment';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, ContactFormComponent, CommonModule,  ReactiveFormsModule, FooterComponent, WhButtonComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  contactForm!: FormGroup;
  gallery: number | null = null;
  currentService:any
  selectedImage:string = ''

  // prefix asses

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: [''],
      message: ['', Validators.required]
    });
  }

  services:{name:string, desc:string, svg:string}[] = [
    { name: "Construcción", 
      desc: "Ofrecemos servicios de construcción completos, desde la planificación hasta la finalización.", 
      svg: `${environment.assetPrefix}/assets/icons/construction.svg`,
    },
    { name: "Eficiencia Energética", 
      desc: "Instalamos colectores solares y ofrecemos soluciones para mejorar la eficiencia energética.", 
      svg: `${environment.assetPrefix}/assets/icons/solar.svg`,
    },
    { name: "Retiros de Asbestos",
       desc: "Especialistas en la eliminación segura y eficiente de asbestos.",
       svg: `${environment.assetPrefix}/assets/icons/truck.svg`,
    },

  ]

  scrolltoGallery(){
    setTimeout(() => {
      document.getElementById('gallery')!.scrollIntoView({
        behavior: 'smooth'  // Hace que el scroll sea suave
      });  
    }, 200)
  }

  async viewMore(type: number){
    this.gallery = type
    
    switch(this.gallery){
      case 0:
        this.currentService = {
          name: this.services[0].name,
          img: this.loadImages('consImg/cons')
        }
        this.selectedImage = this.currentService.img[0]
        this.scrolltoGallery()
        break
      case 1:
        this.currentService = {
          name: this.services[1].name,
          img: this.loadImages('solImg/sol')
        }
        this.selectedImage = this.currentService.img[0]
        this.scrolltoGallery()
        break
      case 2:
        this.currentService = {
          name: this.services[2].name,
          img: this.loadImages('asbImg/asb')
        }
        this.selectedImage = this.currentService.img[0]
        this.scrolltoGallery()
        break
      }
  }

  loadImages(route:string) {
    const imageCount = 2; // Cambia esto según el número de imágenes
    const images = []
    for (let i = 1; i <= imageCount; i++) {
      images.push(`${environment.assetPrefix}/assets/img/${route}${i}.jpg`);
    }
    return images
  } 

  onThumbnailClick(image: string): void {
    this.selectedImage = image;
  }

  close(){
    this.gallery = null;   
  }

  onSubmit(){

  }
}

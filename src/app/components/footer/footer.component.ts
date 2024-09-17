import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {

  services:any = [
    {name: "Instagram", link: "https://facebook.com", svg: "assets/icons/ins.svg"},
    {name: "facebook", link: "https://instagram.com", svg: "assets/icons/face.svg"},
  ]


  scrollto(element:string){
    setTimeout(() => {
      document.getElementById(element)!.scrollIntoView({
        behavior: 'smooth'  // Hace que el scroll sea suave
      });  
    }, 200)
  }

}

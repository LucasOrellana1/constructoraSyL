import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  isMenuOpen:boolean = false; 

  toggleMenu(){
    if(this.isMenuOpen){
      this.isMenuOpen = false
      return
    }
    this.isMenuOpen = true

    console.log(this.isMenuOpen)
  }

  scrollTo(element:string){
    document.getElementById(element)!.scrollIntoView({
      behavior: 'smooth'  // Hace que el scroll sea suave
    });  
  }

}

import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { environment } from '../../../env/enviroment';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  isMenuOpen:boolean = false; 
  imgBanner:string = `${environment.assetPrefix}/assets/img/bannerS.png`;
  
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

import { Component } from '@angular/core';

@Component({
  selector: 'app-wh-button',
  standalone: true,
  imports: [],
  templateUrl: './wh-button.component.html',
  styleUrl: './wh-button.component.scss'
})
export class WhButtonComponent {

  openWhatsAppChat(phoneNumber:string, message?:string) {
    if(!message){
      message = ''
    }
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  }
  

}

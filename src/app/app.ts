import { Component } from '@angular/core';
import { RecaptchaModule } from 'ng-recaptcha'; 

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RecaptchaModule], 
  templateUrl: './app.html',
  styleUrls: ['./app.scss']
})
export class AppComponent {
  captchaResuelto: boolean = false;

  // Se ejecuta cuando el usuario marca el "No soy un robot"
  onCaptchaResolved(token: string | null) {
    if (token) {
      this.captchaResuelto = true;
    } else {
      this.captchaResuelto = false;
    }
  }

  // Función para descargar el archivo
  descargarCV() {
    if (this.captchaResuelto) {
      
      window.open('/ALEXANDRU RAUL HORA CV.pdf', '_blank');
    }
  }
}
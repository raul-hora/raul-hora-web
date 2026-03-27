import { AfterViewInit, Component } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { RecaptchaModule } from 'ng-recaptcha';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RecaptchaModule],
  templateUrl: './app.html',
  styleUrls: ['./app.scss']
})
export class App{
  captchaResuelto = false;


  onCaptchaResolved(token: string | null) {
    this.captchaResuelto = !!token;
  }

  descargarCV() {
  if (this.captchaResuelto) {
    window.open('/cv-raul.pdf', '_blank');
  }
}
}
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  check = true;
  expression = true;

  register() {
    this.check = false;
    this.expression=false;
    setTimeout(() => {
      this.check = true;
      this.expression=true;
    }, 15000);

  }
}

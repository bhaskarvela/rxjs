import 'zone.js/dist/zone';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';
import { of, from } from 'rxjs';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h1>Hello from {{name}}!</h1>
    <a target="_blank" href="https://angular.io/start">
      Learn more about Angular 
    </a>
  `,
})
export class App implements OnInit {
  name = 'Angular';

  ngOnInit() {
    of(2, 4, 6, 8).subscribe((x) => console.log(x));

    from([2, 4, 6, 8]).subscribe({
      next: (item) => console.log(`Item emitted ${item}`),
      error: (err) => console.error(`Error occured ${err}`),
      complete: () => console.log(`data completed`),
    });
  }
}

bootstrapApplication(App);

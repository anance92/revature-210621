import { Component } from '@angular/core';

@Component({
  selector: '.app-first',
  templateUrl: './app.component.html',
  // template: `
  //   <div>
  //     Content from inline
  //   </div>
  // `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';
  active = false;

  submit(){
    console.log('Submitting form!');
  }
}

// Component
// selector types

// Class Selectors
// .app-first
// <div class="app-first"></div>

// [app-first]
// <div app-first></div>


// Element Selectors
// app-first
// <app-first></app-first>
import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink],
  template: `
    <header>
  <h1>Welcome to {{title}}!</h1>
    <nav>
      <a routerLink="/">Home</a>
    </nav>
    </header>
    <router-outlet/>
    <footer>
      <p>© 2025</p>
    </footer>
  `,
  styles: [],
})
export class AppComponent {
  title = 'ng-pokedex';
}

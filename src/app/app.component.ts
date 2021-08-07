import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'developer-profile';
  route: string = '';

  constructor(private router: Router) {
    router.events.subscribe((x) => {
      if (x instanceof NavigationEnd) {
        this.route = x.url;
      }
    });
  }
}

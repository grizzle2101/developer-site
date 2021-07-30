import { Component } from '@angular/core';
import { Router, RouterEvent, NavigationEnd } from '@angular/router';
import { TestBed } from '@angular/core/testing';

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

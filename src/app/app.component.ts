import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit {
  title = 'desafioSprints';

  constructor(
    private router: Router,
  ) { }

ngOnInit() {

}

  navigate(url) {
    this.router.navigateByUrl(url);
  }

  includes(arrayRoutes) {
    for (const route of arrayRoutes) {
      if (this.router.url.includes(route)) {
        return true;
      }
    }
  }
}

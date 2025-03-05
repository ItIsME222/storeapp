import { Router } from '@angular/router';
import { Component } from '@angular/core';


@Component({

  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'

})
export class AppComponent {
  constructor(private router: Router)
  {

  }
  title = 'storeapp';

  displayProductsList()
  {
    alert('Display list here');
    this.router.navigate(['/listProduct']);
  }
  createProduct()
  {
    alert('Create a product here');
    this.router.navigate(['/createProduct']);
  }
}


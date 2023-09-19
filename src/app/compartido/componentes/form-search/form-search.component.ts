import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-search',
  template: `
    <input
      #inputSearch
      autofocus
      type="text"
      class="form-search"
      placeholder="Search"
      (keyup)="onSearch(inputSearch.value)"
    />
  `,
  styleUrls: ['./form-search.component.scss']
})
export class FormSearchComponent implements OnInit {

  constructor(private router: Router) {}
  
  ngOnInit(): void {}

  onSearch(value: string) {
    if (value && value.length > 3) {
      this.router.navigate(['/lista-localidades'], {
        queryParams: {q: value}
      })
    }
  }

}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-thank-you-page',
  templateUrl: './thank-you-page.component.html',
  styleUrls: ['./thank-you-page.component.css']
})
export class ThankYouPageComponent implements OnInit {

  timer = 5;

  constructor(private router: Router) { }

  ngOnInit(): void {

    setInterval(() => {
      if (this.timer !== 0){
        this.timer--;
      }
    }, 1000);

    setTimeout(() => {
      this.router.navigate(['']);
    }, 5000);

  }

}

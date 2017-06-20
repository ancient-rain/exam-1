import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params } from "@angular/router";

@Component({
  selector: 'app-random',
  templateUrl: './random.component.html',
  styleUrls: ['./random.component.scss']
})
export class RandomComponent implements OnInit, OnDestroy {
  message = 'Your random value is ';
  max = 0;
  randomNumber = 0;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    document.getElementById('random-btn').classList.add('active');
    this.route.params.subscribe((routeParams: Params) => {
      const num = routeParams['number'];

      if (`${num}` === '2') {
        this.randomNumber = Math.floor(Math.random() * 2);

        if (this.randomNumber === 0) {
          this.message = 'False';
        } else {
          this.message = 'True';
        }
      } else {
          this.max = parseInt(`${num}`);
          this.randomNumber = Math.floor(Math.random() * this.max);
          this.message = 'Your random value is ' + this.randomNumber + '.';
      }
    });
  }

  ngOnDestroy() {
    document.getElementById('random-btn').classList.remove('active');
  }
}

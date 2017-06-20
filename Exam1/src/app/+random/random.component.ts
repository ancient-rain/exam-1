import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params } from "@angular/router";

@Component({
  selector: 'app-random',
  templateUrl: './random.component.html',
  styleUrls: ['./random.component.scss']
})
export class RandomComponent implements OnInit, OnDestroy {

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    document.getElementById('random-btn').classList.add('active');
    this.route.params.subscribe((routeParams: Params) => {
      const num = routeParams['number'];
    });
  }

  ngOnDestroy() {
    document.getElementById('random-btn').classList.remove('active');
  }
}

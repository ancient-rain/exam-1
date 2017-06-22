import { Component, OnInit } from '@angular/core';

interface word {
  abbr: string;
  name: string;
  $key?: string;
}

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  word: any = {
    'abbr': '',
    'name': ''
  }

  constructor() { }

  ngOnInit() {
  }

}

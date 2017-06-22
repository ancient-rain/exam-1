import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

interface Word {
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

  readonly wordPath = 'words';

  word: any = {
    'abbr': '',
    'name': ''
  }

  wordStream: FirebaseListObservable<Word[]>;

  constructor(db: AngularFireDatabase) {
    this.wordStream = db.list(this.wordPath);
  }

  ngOnInit() {
  }

  onSubmit(): void {
    try {
      if (this.word.$key) {
        this.wordStream.update(this.word.$key, this.word);
      } else {
        this.wordStream.push(this.word);
      }

      this.word = {
        'abbr': '',
        'name': ''
      }
    } catch (e) {
      console.log('Form error', e);
    }
  }

  remove(wordKey: string): void {
    this.wordStream.remove(wordKey);
  }
}

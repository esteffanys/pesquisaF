import { Storage } from '@ionic/storage';
import { Component } from '@angular/core';


@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
favoritos:any[] = [];
  constructor(private storage: Storage) {}

  ver() {
    this.storage.get('favoritos')
      .then((Filmes) => {
        this.favoritos = Filmes || [];
      });
  }
}

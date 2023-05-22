import { Component } from '@angular/core';
import { OmdbService } from '../services/omdb.service';
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
 resultado='';
 filmes: any[] = [];

  constructor(private OmdbService: OmdbService) {}
  procurar() {
    this.OmdbService.procurarfilmes(this.resultado)
      .subscribe((response: any) => {
        this.filmes = response.procurar;
      });
  }

}

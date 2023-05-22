import { OmdbService } from './../services/omdb.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
 titulo=''
 filme:any
  constructor(private omdbService:OmdbService) {}
  procurar() {
    this.omdbService.buscartitulo(this.titulo)
      .subscribe((response: any) => {
        this.filme = response;
      });
  }
}

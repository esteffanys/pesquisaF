import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Filmes } from './filmes';

@Injectable({
  providedIn: 'root'
})
export class FilmesService {
  url: string;
  apikey: string;
  favoritos: any[]
  constructor(private http: HttpClient) {
    this.apikey = "1c5281b2"
    this.url = "https://www.omdbapi.com/?";
    this.favoritos = []
  }

  obterFilmeExato(text: string): Observable<Filmes>{
    return this.http.get<Filmes>(`${this.url}apikey=${this.apikey}&t=${text}`);
   }

  obterFilmeGeral(text: string): Observable<Filmes>{
    return this.http.get<Filmes>(`${this.url}apikey=${this.apikey}&s=${text}`);
   }

  obterFavoritos(){
    return this.favoritos
  }

  verificarDuplicidade(filmes: Filmes): boolean{
    if (this.favoritos.find((element) => element === filmes)) {
      return true;
    }
    return false;
   }

  setFavoritos(filmes: any){
    !this.verificarDuplicidade(filmes) ? this.favoritos.push(filmes) : null;
  }
}

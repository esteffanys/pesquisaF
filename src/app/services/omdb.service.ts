import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class OmdbService {
  private apiUrl = 'https://www.omdbapi.com/';
  private apiKey = 'YOUR_API_KEY';

  constructor(private http:HttpClient) {}

    procurarfilmes(query: string) {
      const url = `${this.apiUrl}?apikey=${this.apiKey}&s=${query}`;
      return this.http.get(url);
    }
    buscartitulo(title: string) {
      const url = `${this.apiUrl}?apikey=${this.apiKey}&t=${title}`;
      return this.http.get(url);
    }

   }

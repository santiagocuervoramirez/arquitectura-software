import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.component.html',
  styleUrls: ['./pokemons.component.sass']
})
export class PokemonsComponent implements OnInit {

  constructor(private http: HttpClient) {

  }

  pokemonList = [];
  readonly ROOT_URL = 'https://pokeapi.co/api/v2/pokemon/';
  getPokemons() {
    return this.http.get(this.ROOT_URL);
  }


  ngOnInit() {
    this.getPokemons().subscribe((data: any[]) => {
      console.log(data['results']);
      this.pokemonList = data['results'];
    });
  }

}

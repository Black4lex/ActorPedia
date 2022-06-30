import { Component } from '@angular/core';
import { Details } from './details.module';
import { Select } from './select.module';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent 
{
  keyword = 'name';
  actor = 'name';

  moviesWill: Details[] =
  [
    {
      image: 'https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/styles/1200/public/media/image/2018/04/soy-leyenda_0.jpg?itok=NS58nujY',
      director: 'Francis Lawrence',
      age: 2007,
    },
    {
      image: 'https://m.media-amazon.com/images/I/61yQ30qZrbL._AC_SL1000_.jpg',
      director: 'Gabriele Muccino',
      age: 2006,
    },
    {
      image: 'https://www.themoviedb.org/t/p/original/1RyxguCK81Ni29wuadvLdNnFU5j.jpg',
      director: 'Reinaldo Marcus Green',
      age: 2021,
    }
  ]

  moviesLeo =
  [
    {
      mLeo:"https://m.media-amazon.com/images/I/51mTtUGvUCL.jpg",
      mLeo2:"https://pics.filmaffinity.com/El_lobo_de_Wall_Street-333927390-large.jpg",
      mLeo3:"https://m.media-amazon.com/images/M/MV5BMDE5OWMzM2QtOTU2ZS00NzAyLWI2MDEtOTRlYjIxZGM0OWRjXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_.jpg"
    }
  ]

  data: Select[] = 
  [
    {
      id: 1,
      name: 'Will Smith'
    },
    {
      id: 2,
      name: 'Leonardo Di Caprio'
    },
    {
      id: 3,
      name: 'Tom Cruise'
    }
  ];

  actorSelection(name:string)
  {
    this.actor = name;
  }
}
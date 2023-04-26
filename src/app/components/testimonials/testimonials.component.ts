import { Component, OnInit } from '@angular/core';
import { Slider } from 'src/app/interfaces/slider.interface';



@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styles: [
  ]
})



export class TestimonialsComponent implements OnInit {

  slides: Slider[] = [
    {
      img: 'assets/works/heroes-app.jpg',
      comment: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto corporis velit tempora laudantium optio facilis tempore unde numquam esse! Quo aspernatur voluptate quibusdam cum esse quae, voluptatem vero aliquid nobis?',
      name: 'Richard Aleixo',
      work: 'Ceo Ecoelite'
    },
   
  ]

  constructor() { }

  ngOnInit(): void {
  }

  
  
}

import { Component } from '@angular/core';
import { Zoo } from './zoo.model';

@Component({
  selector: 'app-root',
  template: `
  <h1>Seattle Zoo -- Animal Tracker</h1>

   <animal-list [childAnimalList]="masterZoo"></animal-list>

  `
})

export class AppComponent {

  masterZoo: Zoo[] = [
    new Zoo('Artic Fox', 'Moon', 2, 'Carnivore', 'Northern Trail', 5, 'Female', 'Cool Shades', 'Loud Noises'),
    new Zoo('Ocelot', 'Prince', 4, 'Carnivore', 'Tropical RainForest Building', 6, 'Male', 'Laying in the sunshine', 'Toys that are not rope-based'),
    new Zoo('NorthWest Black Tailed Deer', 'Tinkerbell', 8, 'Herbivore', 'Northern Train', 2, 'Female', 'Delicate roots and leaves', 'Loud Noises')
  ];
}

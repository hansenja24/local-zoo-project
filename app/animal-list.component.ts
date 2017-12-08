import { Component, Input,Output, EventEmitter } from '@angular/core';
import { Zoo } from './zoo.model';

@Component({
  selector: 'animal-list',
  template: `

  <ul>
    <li *ngFor="let currentAnimal of childAnimalList">
      Species: {{currentAnimal.species}} <br>
      Name: {{currentAnimal.name}} <br>
      Age: {{currentAnimal.age}} <br>
      Diet: {{currentAnimal.diet}} <br>
      Location: {{currentAnimal.location}} <br>
      Caretaker: {{currentAnimal.caretaker}} <br>
      Sex: {{currentAnimal.sex}} <br>
      Likes: {{currentAnimal.likes}} <br>
      Dislikes: {{currentAnimal.dislikes}} <br><br>
    </li>
  </ul>
  `
})

export class AnimalListComponent {
  @Input() childAnimalList: Zoo[];

}

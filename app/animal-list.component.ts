import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Zoo } from './zoo.model';

@Component({
  selector: 'animal-list',
  template: `

  <select (change)="onChange($event.target.value)">
      <option value = "allAge"> All Animals</option>
      <option value = "mature">Age of Animal More Than or Equal 2 Years</option>
      <option value = "young">Age of Animal Less Than 2 Years</option>
  </select>

  <ul>
    <li *ngFor="let currentAnimal of childAnimalList | age: filteredByAge">
      Species: {{currentAnimal.species}} <br>
      Name: {{currentAnimal.name}} <br>
      Age: {{currentAnimal.age}} <br>
      Diet: {{currentAnimal.diet}} <br>
      Location: {{currentAnimal.location}} <br>
      Caretaker: {{currentAnimal.caretaker}} <br>
      Sex: {{currentAnimal.sex}} <br>
      Likes: {{currentAnimal.likes}} <br>
      Dislikes: {{currentAnimal.dislikes}} <br>
      <button (click)="EditAnimalList(currentAnimal)">Edit</button> <br> <br>
    </li>
  </ul>
  `
})

export class AnimalListComponent {
  @Input() childAnimalList: Zoo[];
  @Output() EditAnimalSender = new EventEmitter();
  filteredByAge: string = "allAge";

  EditAnimalList(currentAnimal){
    this.EditAnimalSender.emit(currentAnimal);
  }

  onChange(optionFromMenu) {
    this.filteredByAge = optionFromMenu;
  }

}

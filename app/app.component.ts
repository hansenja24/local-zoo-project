import { Component } from '@angular/core';
import { Zoo } from './zoo.model';

@Component({
  selector: 'app-root',
  template: `
  <h1>Seattle Zoo -- Animal Tracker</h1>

   <animal-list (EditAnimalSender) = "AnimalToEdit($event)" [childAnimalList]="masterZoo"></animal-list>

   <div *ngIf="openForm ==false">
      <button (click)="updateOpenForm()">Add New Animal</button>
   </div>

   <div *ngIf="openForm == true">
      <animal-form (newSender) = "addAnimal($event)"></animal-form>
   </div>

   <div *ngIf="selectedAnimal != null">
      <animal-edit [ChildAnimal] = "selectedAnimal" (doneButtonClickedSender)="finishedEditing($event)"></animal-edit>
   </div>



  `
})

export class AppComponent {

  masterZoo: Zoo[] = [
    new Zoo('Artic Fox', 'Moon', 2, 'Carnivore', 'Northern Trail', 5, 'Female', 'Cool Shades', 'Loud Noises'),
    new Zoo('Ocelot', 'Prince', 4, 'Carnivore', 'Tropical RainForest Building', 6, 'Male', 'Laying in the sunshine', 'Toys that are not rope-based'),
    new Zoo('NorthWest Black Tailed Deer', 'Tinkerbell', 8, 'Herbivore', 'Northern Train', 2, 'Female', 'Delicate roots and leaves', 'Loud Noises')
  ];

  selectedAnimal = null;
  openForm: boolean = false;

  addAnimal(newAnimal: Zoo){
    this.masterZoo.push(newAnimal);
    this.openForm = false;
  }

  updateOpenForm(){
    this.openForm = true;
  }

  AnimalToEdit(currentAnimal){
    this.selectedAnimal = currentAnimal;
  }

  finishedEditing(result) {
    this.selectedAnimal.species = result[0];
    this.selectedAnimal.name = result[1];
    this.selectedAnimal.age = result[2];
    this.selectedAnimal.diet = result[3];
    this.selectedAnimal.location = result[4];
    this.selectedAnimal.caretaker = result[5];
    this.selectedAnimal.likes = result[6];
    this.selectedAnimal.dislikes = result[7];
    this.selectedAnimal = null;
}
}

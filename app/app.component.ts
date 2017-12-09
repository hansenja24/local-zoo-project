import { Component } from '@angular/core';
import { Zoo } from './zoo.model';

@Component({
  selector: 'app-root',
  template: `

  <h1>Seattle Zoo -- Animal Tracker</h1>

  <div class = "container">
   <div class= "row">
     <div class = "col-md-6">
       <animal-list (EditAnimalSender) = "AnimalToEdit($event)" [childAnimalList]="masterZoo" [childEdit] = "editButton"></animal-list>

       <div *ngIf="openForm ==false">
          <button (click)="updateOpenForm()" class = "btn btn-info">Add New Animal</button>
          <button (click)="editAnimalButton()" class = "btn btn-info">Edit Animals</button>
          <br><br>
       </div>
     </div>
     <div class = "col-md-6">
       <div *ngIf="openFormButton == true">
          <animal-form (newSender) = "addAnimal($event)"></animal-form>
       </div>

       <div *ngIf="selectedAnimal != null">
          <animal-edit [ChildAnimal] = "selectedAnimal" (doneButtonClickedSender)="finishedEditing($event)"></animal-edit>
       </div>
     </div>
   </div>
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
  editButton: boolean = false;
  openFormButton: boolean = false;

  addAnimal(newAnimal: Zoo){
    this.masterZoo.push(newAnimal);
    this.openForm = false;
    this.openFormButton = false;
  }

  updateOpenForm(){
    this.openForm = true;
    this.openFormButton = true;
  }

  editAnimalButton(){
    this.editButton = true;
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
    this.selectedAnimal.sex = result[6];
    this.selectedAnimal.likes = result[7];
    this.selectedAnimal.dislikes = result[8];
    this.selectedAnimal = null;
    this.editButton = false;
    this.openForm = false;
}
}

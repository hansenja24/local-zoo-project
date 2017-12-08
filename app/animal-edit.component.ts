import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Zoo } from './zoo.model';

@Component({
  selector: 'animal-edit',
  template: `
  <form class = "form-horizontal">
    <div style="white-space:nowrap">
      <label class = "control-label">Edit Species:</label>
      <input class = "form-control" type="text" value="{{ChildAnimal.species}}" #species><br>
    </div>
    <div style="white-space:nowrap">
      <label class = "control-label">Edit Name:</label>
      <input class = "form-control" type="text" value="{{ChildAnimal.name}}" #name><br>
    </div>
    <div style="white-space:nowrap">
      <label class = "control-label">Edit Age:</label>
      <input class = "form-control" type="text" value="{{ChildAnimal.age}}" #age><br>
    </div>
    <div style="white-space:nowrap">
      <label class = "control-label">Edit Diet:</label>
      <select class = "form-control" #diet>
        <option [value]="Carnivore"> Carnivore </option>
        <option [value]="Herbivore"> Herbivore </option>
        <option [value]="Omnivore"> Omnivore </option>
      </select> <br>
    </div>
    <div style="white-space:nowrap">
      <label class = "control-label">Edit Location:</label>
      <input class = "form-control" type="text" value="{{ChildAnimal.location}}" #location><br>
    </div>
    <div style="white-space:nowrap">
      <label class = "control-label">Edit Caretaker:</label>
      <input class = "form-control" type="text" value="{{ChildAnimal.caretaker}}" #caretaker><br>
    </div>
    <div style="white-space:nowrap">
      <label class = "control-label">Edit Sex:</label>
      <select class = "form-control" #sex>
        <option [value]="Male"> Male </option>
        <option [value]="Female"> Female </option>
      </select> <br>
    </div>
    <div style="white-space:nowrap">
      <label class = "control-label">Edit Likes:</label>
      <input class = "form-control" type="text" value="{{ChildAnimal.likes}}" #likes><br>
    </div>
    <div style="white-space:nowrap">
      <label class = "control-label">Edit Dislikes:</label>
      <input class = "form-control" type="text" value="{{ChildAnimal.dislikes}}" #dislikes><br>
    </div>
    <button class = "btn btn-info" (click) = "EditAnimal(species.value, name.value, age.value, diet.value, location.value, caretaker.value, sex.value, likes.value, dislikes.value)">Edit</button>
  </form>
  `
})

export class AnimalEditComponent {
  @Input() ChildAnimal: Zoo;
  @Output() doneButtonClickedSender = new EventEmitter();

  EditAnimal(species: string, name: string, age: number, diet: string, location: string, caretaker: number, sex: string, likes: string, dislikes: string){
    var result = [species, name, age, diet, location, caretaker, sex, likes, dislikes];
    this.doneButtonClickedSender.emit(result);
  }
}

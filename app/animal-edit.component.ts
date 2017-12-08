import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Zoo } from './zoo.model';

@Component({
  selector: 'animal-edit',
  template: `
  <form>
    Edit Species:
    <input type="text" value="{{ChildAnimal.species}}" #species><br>
    Edit Name:
    <input type="text" value="{{ChildAnimal.name}}" #name><br>
    Edit Age:
    <input type="text" value="{{ChildAnimal.age}}" #age><br>
    Edit Diet:
    <select #diet>
      <option [value]="Carnivore"> Carnivore </option>
      <option [value]="Herbivore"> Herbivore </option>
      <option [value]="Omnivore"> Omnivore </option>
    </select> <br>
    Edit Location:
    <input type="text" value="{{ChildAnimal.location}}" #location><br>
    Edit Caretaker:
    <input type="text" value="{{ChildAnimal.caretaker}}" #caretaker><br>
    Edit Sex:
    <select #sex>
      <option [value]="Male"> Male </option>
      <option [value]="Female"> Female </option>
    </select> <br>
    Edit Likes:
    <input type="text" value="{{ChildAnimal.likes}}" #likes><br>
    Edit Dislikes:
    <input type="text" value="{{ChildAnimal.dislikes}}" #dislikes><br>
    <button (click) = "EditAnimal(species.value, name.value, age.value, diet.value, location.value, caretaker.value, sex.value, likes.value, dislikes.value)">Edit</button>
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

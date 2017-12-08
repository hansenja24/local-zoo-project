import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Zoo } from './zoo.model';

@Component({
  selector: 'animal-form',
  template: `
  <form>
    Species:
    <input type="text" #species><br>
    Name:
    <input type="text" #name><br>
    Age:
    <input type="text" #age><br>
    Diet:
    <select #diet>
      <option [value]="Carnivore"> Carnivore </option>
      <option [value]="Herbivore"> Herbivore </option>
      <option [value]="Omnivore"> Omnivore </option>
    </select> <br>
    Location:
    <input type="text" #location><br>
    Caretaker:
    <input type="text" #caretaker><br>
    Sex:
    <select #sex>
      <option [value]="Male"> Male </option>
      <option [value]="Female"> Female </option>
    </select> <br>
    Likes:
    <input type="text" #likes><br>
    Dislikes:
    <input type="text" #dislikes><br>
    <button (click) = "NewAnimal(species.value, name.value, age.value, diet.value, location.value, caretaker.value, sex.value, likes.value, dislikes.value); species.value='';name.value='';age.value='';diet.value='';location.value='';caretaker.value='';sex.value='';likes.value='';dislikes.value='';">Add</button>
  </form>
  `
})

export class AnimalFormComponent {
  @Output() newSender = new EventEmitter();

  NewAnimal(species: string, name: string, age: number, diet: string, location: string, caretaker: number, sex: string, likes: string, dislikes: string){
    this.newSender.emit(new Zoo(species, name, age, diet, location, caretaker, sex, likes, dislikes));
  }
}

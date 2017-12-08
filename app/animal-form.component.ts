import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Zoo } from './zoo.model';

@Component({
  selector: 'animal-form',
  template: `
  <form class = "form-horizontal">
    <div style="white-space:nowrap">
      <label class = "control-label">Species:</label>
      <input class = "form-control" type="text" #species><br>
    </div>
    <div style="white-space:nowrap">
      <label class = "control-label">Name:</label>
      <input class = "form-control" type="text" #name><br>
    </div>
    <div style="white-space:nowrap">
      <label class = "control-label">Age:</label>
      <input class = "form-control" type="text" #age><br>
    </div>
    <div style="white-space:nowrap">
    <label class = "control-label">Diet:</label>
      <select class = "form-control" #diet>
        <option [value]="Carnivore"> Carnivore </option>
        <option [value]="Herbivore"> Herbivore </option>
        <option [value]="Omnivore"> Omnivore </option>
      </select> <br>
    </div>
    <div style="white-space:nowrap">
      <label class = "control-label">Location:</label>
      <input class = "form-control" type="text" #location><br>
    </div>
    <div style="white-space:nowrap">
      <label class = "control-label">Caretaker:</label>
      <input class = "form-control" type="text" #caretaker><br>
    </div>
    <div style="white-space:nowrap">
    <label class = "control-label">Sex:</label>
      <select class = "form-control" #sex>
        <option [value]="Male"> Male </option>
        <option [value]="Female"> Female </option>
      </select> <br>
    </div>
    <div style="white-space:nowrap">
      <label class = "control-label">Likes:</label>
      <input class = "form-control" type="text" #likes><br>
    </div>
    <div style="white-space:nowrap">
      <label class = "control-label">Dislikes:</label>
      <input class = "form-control" type="text" #dislikes><br>
    </div>
    <button class = "btn btn-info" (click) = "NewAnimal(species.value, name.value, age.value, diet.value, location.value, caretaker.value, sex.value, likes.value, dislikes.value); species.value='';name.value='';age.value='';diet.value='';location.value='';caretaker.value='';sex.value='';likes.value='';dislikes.value='';">Add</button>
  </form>
  `
})

export class AnimalFormComponent {
  @Output() newSender = new EventEmitter();

  NewAnimal(species: string, name: string, age: number, diet: string, location: string, caretaker: number, sex: string, likes: string, dislikes: string){
    this.newSender.emit(new Zoo(species, name, age, diet, location, caretaker, sex, likes, dislikes));
  }
}

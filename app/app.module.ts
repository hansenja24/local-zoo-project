import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import { FormsModule }  from '@angular/forms';
import { AnimalListComponent } from './animal-list.component';
import { AnimalFormComponent } from './animal-form.component';
import { AnimalEditComponent } from './animal-edit.component';
import { AgePipe } from './age.pipe';


@NgModule({
  imports: [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, AnimalListComponent, AnimalFormComponent, AnimalEditComponent, AgePipe ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }

import {Pipe, PipeTransform} from '@angular/core';
import {Zoo} from './zoo.model';

@Pipe({
  name: "age",
  pure: false
})

export class AgePipe implements PipeTransform {


  transform(input: Zoo[], desiredAge) {
    var output: Zoo[] = [];
    if(desiredAge == "mature") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].age >= 2) {
          output.push(input[i]);
        }
      }
      return output;
    } else if (desiredAge == "young") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].age < 2) {
          output.push(input[i]);
        }
      }
      return output;
    } else {
      return input;
    }
  }


}

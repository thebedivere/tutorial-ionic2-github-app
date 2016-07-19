import { Injectable, Pipe } from '@angular/core';

/*
  Generated class for the Capitalize pipe.

  See https://angular.io/docs/ts/latest/guide/pipes.html for more info on
  Angular 2 Pipes.
*/
@Pipe({
  name: 'capitalize'
})
@Injectable()
export class Capitalize {
  /*
    Takes a value and makes it lowercase.
   */
  transform(value: string, args: string[]): any {
    if (!value) return value;

    return value.replace(/\w\S*/g, function(txt) {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
  }
}

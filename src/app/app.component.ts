import { Component } from '@angular/core';
import { Car } from './car';
@Component({
selector: 'app-root',
template: `

<table>
  <tr *ngFor = "let car of _cars">
    <td>{{car.make}}</td>
    <td>{{car.model}}</td>
    <td><button (click)="showCar(car)">Click me !</button></td>
    <!-- <td><button (click)="showCar(car)">showPHOTO !</button></td> -->
  </tr>
<table>

`,
styles: []
})


export class AppComponent{
_cars = [new Car('car1', 2002, 'bmw', 'm3', 'https://en.wikipedia.org/wiki/BMW_M3'),

  new Car('car2', 2017, 'acura', 'nsx','https://en.wikipedia.org/wiki/Honda_NSX'),
  new Car('car3', 2016, 'chevy', 'camaro', 'https://en.wikipedia.org/wiki/Chevrolet_Camaro')];

   showCar(Car: any){
    const desc = Car.make;
    if (window.confirm('click "ok" to be redirected to ' + Car.article)){
      window.location=Car.article;
      }

    }
        
}
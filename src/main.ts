import 'zone.js/dist/zone';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';
import convert from 'convert';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h1>Hello from {{name}}!</h1>
    <a target="_blank" href="https://angular.io/start">
      Learn more about Angular 16.1.1 
    </a>
    <p>Distance(miles): 1.6145 kilometers = {{m}} miles</p>
    <p>Weight(ounces): 12 pounds = {{g}} ounces</p>
    <p>Digit(KiB): 8192 bytes = {{d}} KiB</p>
    <p>Pressure(kPa): 10 atmospheres = {{a}} kPa</p>
    <p>Temperature(fahrenheit): 0 celsius = {{t}} fahrenheit</p>
    <p>Temperature(kelvin): 32 fahrenheit = {{k}} kelvin</p>
  `,
})
export class App {
  name = 'Angular';

  // m = convert(5, 'kilometers').to('nautical miles');
  m = Math.round(convert(1.6145, 'kilometers').to('miles'));
  g = convert(12, 'pounds').to('ounces');
  d = convert(8192, 'bytes').to('KiB');
  a = convert(10, 'atmospheres').to('kPa');
  t = Math.round(convert(0, 'celsius').to('fahrenheit'));
  k = Math.round(convert(32, 'fahrenheit').to('kelvin'));
}

bootstrapApplication(App);

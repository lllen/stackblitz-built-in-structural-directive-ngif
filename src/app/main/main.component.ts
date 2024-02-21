import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {
  arr = [1, 4, 62, 5, 2, 5];

  generateNewNumber() {
    this.arr.push(Math.floor(Math.random() * 100));
  }
}

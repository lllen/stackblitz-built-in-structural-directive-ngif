import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SomeFeatureModule } from "../feature.module";

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [CommonModule, SomeFeatureModule],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {
}

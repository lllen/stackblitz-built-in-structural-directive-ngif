import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';


interface TextStylesModel {
  backgroundColor: string;
  textColor: string;
  fontStyle: string;
}

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent implements OnInit {
  // ngClass example
  isErrorMessage = true;
  message = 'This is simple example';

  // ngStyle example
  isDefaultStyles = true;
  backgroundColor = ''; 
  textColor = ''; 
  fontStyle = '';

  defaultStyles: TextStylesModel = {
    backgroundColor: 'white',
    textColor: 'brown',
    fontStyle: 'normal',
  };

  customStyles: TextStylesModel = {
    backgroundColor: 'cyan',
    textColor: 'black',
    fontStyle: 'italic',
  };

  ngOnInit(): void {
    this.toggleStyles();
  }

  toggleClass() {
    this.isErrorMessage = !this.isErrorMessage;
  }
  
  toggleStyles() {
    this.isDefaultStyles = !this.isDefaultStyles;
    this.isDefaultStyles ? this.setStyles(this.defaultStyles) : this.setStyles(this.customStyles);
  }

  setStyles(styles: TextStylesModel) {
    this.backgroundColor = styles.backgroundColor;
    this.textColor = styles.textColor;
    this.fontStyle = styles.fontStyle;
  }
}

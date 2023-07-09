import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {

  text: string = '';
  characterCount: number = 0;

  updateText(value: string): void {
    this.text = value;
    this.characterCount = this.text.length;
  }
}

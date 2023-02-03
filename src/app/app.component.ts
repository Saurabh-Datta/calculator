import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'calculator';
  value = '0';
  current = '';
  addToInput(item:string) {
    if(item=='.' && this.current.slice(-1)=='.')
      return;
    this.current += item;
    this.value = this.current;
  }
  evaluate() {
    if (this.value=='0')
      return;
    this.value = eval(this.current);
    this.current = this.value;
  }
  clear() {
    this.current = '';
    this.value = '0';
  }
  remove() {
    this.current = this.current.slice(0,-1);
    this.value = this.current==''?'0':this.current;
  }
}

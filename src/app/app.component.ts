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
    if(this.current == '0')
      this.current = this.value;
    if(item=='.' && this.current.slice(-1)=='.')
      return;
    if(this.current != '0')
      this.current += item;
    this.value = this.current;
  }
  evaluate() {
    if (this.value=='0')
      return;
    try {
      this.value = eval(this.current);
      this.current = this.value;
    }
    catch {
      this.value = 'Invalid';
      this.current = '';
    }

  }
  clear() {
    this.current = '';
    this.value = '0';
  }
  remove() {
    this.current = this.current.slice(0,-1);
    this.value = this.current;
    this.value = this.value==''?'0':this.value;
  }
  calculate(operation:any) {
    if(operation.charAt(0) == '0')
      operation = operation.slice(1,);
    try {
      this.value = eval(operation);
    } catch {
      this.value = 'Invalid';
    }
  }

}

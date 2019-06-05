import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'iteam-timer';
  buttons = ['Start', 'Stop', 'Wait', 'Reset'];
  isCurrent = false;
  stateTime = 0;
  index = 0;
  isWait = false;
  waitFirstClick: Date;
  waitDeltaInterval: number;
  clicked() {
    const checked = event.target as HTMLTextAreaElement;
    switch (checked.innerText) {
    case 'Start':
      {
        this.isCurrent = true;
      }
      break;
    case 'Stop':
      {
        this.isCurrent = false;
        this.isWait = false;
        this.index = 0;
        this.stateTime = 0;
      }
      break;
    case 'Wait':
      {
        if (this.isWait) {
          this.waitDeltaInterval = +(new Date()) - (+this.waitFirstClick);
          if (this.waitDeltaInterval < 300) {
            console.log('wait<300', this.waitDeltaInterval);
            this.stateTime = this.index + 1;
            this.isCurrent = false;
          }
          this.isWait = false;
        }
        this.waitFirstClick = new Date();
        this.isWait = true;

      }
      break;

    case 'Reset':
      {
        this.index = 0;
        this.isWait = false;
        this.isCurrent = true;
      }
      break;
    default:
  }
  }
  eventTic(num) {
    this.index =  num;
  }
}

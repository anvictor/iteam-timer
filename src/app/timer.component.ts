import {EventEmitter, Component, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {Observable, Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';

@Component({
  selector: 'app-timer',
  template: `{{index}}`,
})
export class AppTimerComponent implements OnInit, OnDestroy {
  i: number;
  timer: Observable<number>;
  private unsubscribe: Subject<void> = new Subject();
  @Input() index: number;
  @Output() eventTic = new EventEmitter<number>();
  tic(num: number) {
    this.eventTic.emit(num);
  }
  ngOnInit() {
    this.timer = new Observable<number>(observer => {
      const interval = setInterval(() => {
        observer.next(this.index);
        this.tic(this.index);
        this.index++;
      }, 500);
      return () => {
        clearInterval(interval);
      };
    });
    this.timer
      .pipe(takeUntil(this.unsubscribe))
      .subscribe(
        (value) => this.i = value,
        (error) => console.error(error),
        () => console.log('complete')
      );
  }

  ngOnDestroy() {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }
}

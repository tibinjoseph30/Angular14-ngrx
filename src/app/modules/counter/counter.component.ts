import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Counter } from 'src/app/models/counter.model';
import { counterDecrement, counterIncrement, counterReset, customIncrement } from 'src/app/store/actions/counter.actions';
import { AppState } from 'src/app/store/app.reducer';
import { getCounter } from 'src/app/store/selector/counter.selector';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})

export class CounterComponent implements OnInit {

  constructor(private store: Store<AppState>) { }

  counter!: Observable<Counter>;
  value!:number

  ngOnInit(): void {
    this.counter = this.store.select(getCounter);
  }

  onIncrement() {
    this.store.dispatch(counterIncrement());
  }

  onDecrement() {
    this.store.dispatch(counterDecrement());
  }

  onReset() {
    this.store.dispatch(counterReset());
  }

  onAdd() {
    this.store.dispatch(customIncrement({count:+this.value}));
  }

}

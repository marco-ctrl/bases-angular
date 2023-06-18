import { Component } from "@angular/core";
//import { AppComponent } from "../app.component";

@Component({
    selector: 'app-counter',
    template: `<p>Counter: {{counter}}</p>
                <button (click)="increasBy(1)">+1</button>
               <button (click)="reset()">Reset</button>
               <button (click)="increasBy(-1)">-1</button>`
})
export class CounterComponent {
    counter: number = 10;

    increasBy(value: number): void {
        this.counter += value;
    }
    reset(): void {
        this.counter = 10;
    }
}
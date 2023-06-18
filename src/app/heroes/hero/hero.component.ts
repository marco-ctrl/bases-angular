import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {
  public name: string = 'Ironman';
  public ege: number = 25;

  get capitalizedName():string {
    return this.name.toUpperCase();
  }

  getHeroDescription(): string{
    return `${this.name} - ${this.ege}`; 
  }

  changeName(name: string): void{
    this.name = name;
  }

  changeEge(ege: number): void{
    this.ege = ege;
  }

  resetForm(): void{
    this.name = 'Ironman';
    this.ege = 25;
  }
}

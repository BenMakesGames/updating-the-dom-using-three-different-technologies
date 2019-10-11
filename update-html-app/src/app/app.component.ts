import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  gameState: any = {};

  constructor()
  {
    this.gameState.playerName = 'Ben';
    this.gameState.playerStrength = 5;
  }

  doDrinkStrengthPotion()
  {
    this.gameState.playerStrength++;
  }
}

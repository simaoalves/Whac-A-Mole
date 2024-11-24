import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, startWith } from 'rxjs';
import { selectGameState } from '../store/game.selectors';
import { GameState } from '../store/game.reducer';
import { endRound, startGame, whackMole } from '../store/game.actions';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-game',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css'],
})
export class GameComponent {
  gameState$: Observable<GameState>;

  constructor(private store: Store) {
    // Select the game state from the store
    this.gameState$ = this.store.select(selectGameState);
  }

  startGame(): void {
    this.store.dispatch(startGame());

    // Automatically end the round after 30 seconds
    setTimeout(() => {
      this.store.dispatch(endRound());
    }, 30000);
  }

  whack(index: number): void {
    this.store.dispatch(whackMole({ index }));
  }
}

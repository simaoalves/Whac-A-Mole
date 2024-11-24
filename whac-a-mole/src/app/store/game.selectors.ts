import { createFeatureSelector, createSelector } from '@ngrx/store';
import { GameState } from './game.reducer';

export const selectGameState = createFeatureSelector<GameState>('game');

export const selectCurrentScore = createSelector(
  selectGameState,
  (state: GameState) => state.currentScore
);

export const selectHighestScore = createSelector(
  selectGameState,
  (state: GameState) => state.highestScore
);

export const selectMolePositions = createSelector(
  selectGameState,
  (state: GameState) => state.molePositions
);

export const selectIsGameActive = createSelector(
  selectGameState,
  (state: GameState) => state.isGameActive
);

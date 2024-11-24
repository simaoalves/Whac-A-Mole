import { createAction, props } from '@ngrx/store';

export const startGame = createAction('[Game] Start Game');
export const whackMole = createAction(
  '[Game] Whack Mole',
  props<{ index: number }>()
);
export const endRound = createAction('[Game] End Round');

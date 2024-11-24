import { createReducer, on } from '@ngrx/store';
import { startGame, whackMole, endRound } from './game.actions';

export interface GameState {
  currentScore: number;
  highestScore: number;
  isGameActive: boolean;
  molePositions: boolean[]; // 6 holes
}

export const initialState: GameState = {
  currentScore: 0,
  highestScore: 0,
  isGameActive: false,
  molePositions: [false, false, false, false, false, false],
};

export const gameReducer = createReducer(
  initialState,
  on(startGame, (state) => ({
    ...state,
    isGameActive: true,
    currentScore: 0,
    molePositions: randomMolePositions(),
  })),
  on(whackMole, (state, { index }) => {
    const isHit = state.molePositions[index];
    const updatedScore = isHit
      ? state.currentScore + 1
      : state.currentScore - 1;
    return {
      ...state,
      currentScore: updatedScore,
      molePositions: randomMolePositions(),
    };
  }),
  on(endRound, (state) => ({
    ...state,
    isGameActive: false,
    highestScore: Math.max(state.highestScore, state.currentScore),
  }))
);

function randomMolePositions(): boolean[] {
  const positions = Array(6).fill(false);
  positions[Math.floor(Math.random() * 6)] = true; // Randomly display one mole
  return positions;
}

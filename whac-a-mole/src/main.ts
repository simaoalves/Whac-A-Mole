import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideStore } from '@ngrx/store';
import { gameReducer } from './app/store/game.reducer';

bootstrapApplication(AppComponent, {
  providers: [
    provideStore({ game: gameReducer }), // Provide the NgRx store
  ],
}).catch((err) => console.error(err));

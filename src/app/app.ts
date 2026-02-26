import { Component, signal } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterOutlet } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { contractsReducer } from './features/contracts/store/contracts.reducer';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { ContractsEffects } from './features/contracts/store/contracts.effects';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,
    BrowserModule,
    StoreModule,
    EffectsModule,
    StoreDevtoolsModule
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('imr');
}

import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { tap, withLatestFrom } from 'rxjs';
import { Store } from '@ngrx/store';
import * as ContractsActions from './contracts.actions';
import { selectAllContracts } from './contracts.selectors';

@Injectable()
export class ContractsEffects {
    saveContracts$ = createEffect(
        () =>
            this.actions$.pipe(
                ofType(ContractsActions.addContract, ContractsActions.updateContract),
                withLatestFrom(this.store.select(selectAllContracts)),
                tap(([action, contracts]) => {
                    localStorage.setItem('contracts', JSON.stringify(contracts));
                })
            ),
        { dispatch: false }
    );

    constructor(private actions$: Actions, private store: Store) { }
}
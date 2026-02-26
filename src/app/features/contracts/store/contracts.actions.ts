import { createAction, props } from '@ngrx/store';
import { Contract } from './contracts.state';

export const loadContracts = createAction('[Contracts] Load Contracts');

export const loadContractsSuccess = createAction(
    '[Contracts] Load Contracts Success',
    props<{ contracts: Contract[] }>()
);

export const addContract = createAction(
    '[Contracts] Add Contract',
    props<{ contract: Contract }>()
);

export const updateContract = createAction(
    '[Contracts] Update Contract',
    props<{ contract: Contract }>()
);
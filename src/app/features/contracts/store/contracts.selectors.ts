import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ContractsState } from './contracts.state';

export const selectContractsState = createFeatureSelector<ContractsState>('contracts');

export const selectAllContracts = createSelector(
    selectContractsState,
    (state) => state.contracts
);

export const selectContractsLoading = createSelector(
    selectContractsState,
    (state) => state.loading
);
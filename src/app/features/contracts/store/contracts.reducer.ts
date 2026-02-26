import { createReducer, on } from '@ngrx/store';
import { initialContractsState } from './contracts.state';
import * as ContractsActions from './contracts.actions';

export const contractsReducer = createReducer(
    initialContractsState,
    on(ContractsActions.loadContracts, (state) => ({ ...state, loading: true })),
    on(ContractsActions.loadContractsSuccess, (state, { contracts }) => ({
        ...state,
        contracts,
        loading: false,
    })),
    on(ContractsActions.addContract, (state, { contract }) => ({
        ...state,
        contracts: [...state.contracts, contract],
    })),
    on(ContractsActions.updateContract, (state, { contract }) => ({
        ...state,
        contracts: state.contracts.map((c) =>
            c.id === contract.id ? { ...c, ...contract } : c
        ),
    }))
);
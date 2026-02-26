export interface Contract {
    id: string;
    name: string;
    regional: string;
    startDate: Date;
    endDate: Date;
    percentage: number;
}

export interface ContractsState {
    contracts: Contract[];
    loading: boolean;
    error?: string;
}

export const initialContractsState: ContractsState = {
    contracts: [],
    loading: false,
};
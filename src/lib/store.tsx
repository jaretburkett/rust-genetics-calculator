import { createGlobalState } from 'react-global-hooks';

export const availableGeneticsStore = createGlobalState([] as string[]);
export const breedingGeneticsStore = createGlobalState([] as string[]);
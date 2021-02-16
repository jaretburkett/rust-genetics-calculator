import { createGlobalState } from 'react-global-hooks';

export const availableGenetics = createGlobalState([] as string[]);
export const breedingGenetics = createGlobalState([] as string[]);
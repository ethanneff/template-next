import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux';
import {RootDispatch, RootState} from 'root-types';

export const useRootDispatch = (): RootDispatch => useDispatch<RootDispatch>();
export const useRootSelector: TypedUseSelectorHook<RootState> = useSelector;

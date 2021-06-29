/// <reference types="next" />
/// <reference types="next/types/global" />
/// <reference types="next/image-types/global" />

declare module 'root-types' {
  export type RootState = ReturnType<
    typeof import('./src/redux').store.getState
  >;
  export type RootDispatch = typeof import('./src/redux').store.dispatch;
}

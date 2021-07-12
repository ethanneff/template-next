import {Provider} from 'react-redux';
import {store} from './store';

type Props = {
  children: JSX.Element;
};

export const ReduxProvider = ({children}: Props): JSX.Element => {
  return <Provider store={store}>{children}</Provider>;
};

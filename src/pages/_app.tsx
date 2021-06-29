import {AppProps} from 'next/app';
import 'normalize.css';
import {ReduxProvider} from '../redux';
import '../styles/global.css';

/* eslint-disable react/jsx-props-no-spreading */
const AppRoute = ({Component, pageProps}: AppProps): JSX.Element => {
  return (
    <ReduxProvider>
      <Component {...pageProps} />
    </ReduxProvider>
  );
};

export default AppRoute;

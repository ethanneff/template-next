import {AppProps} from 'next/app';
import 'normalize.css';
import '../styles/global.css';

/* eslint-disable react/jsx-props-no-spreading */
const AppRoute = ({Component, pageProps}: AppProps): JSX.Element => {
  return <Component {...pageProps} />;
};

export default AppRoute;

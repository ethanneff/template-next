import {AppProps} from 'next/app';
import 'normalize.css';
import {ReactElement} from 'react';
import '../styles/global.css';

/* eslint-disable react/jsx-props-no-spreading */
const AppRoute = ({Component, pageProps}: AppProps): ReactElement => {
  return <Component {...pageProps} />;
};

export default AppRoute;

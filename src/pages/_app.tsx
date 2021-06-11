import {AppProps} from 'next/app';
import 'normalize.css';
import '../styles/global.css';

const AppRoute = ({Component, pageProps}: AppProps) => {
  return <Component {...pageProps} />; // eslint-disable-line react/jsx-props-no-spreading
};

export default AppRoute;

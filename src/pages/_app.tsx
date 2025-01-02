import { AppProps } from 'next/app';
import { RecoilRoot } from 'recoil';

import '@/styles/globals.css';
import '@/public/styles.css';

function MyApp({ Component, pageProps: { ...pageProps } }: AppProps): JSX.Element {
  return (
    <RecoilRoot>
      <Component {...pageProps} />
    </RecoilRoot>
  );
}
export default MyApp;

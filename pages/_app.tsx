import '../styles/globals.css';
import type { AppProps } from 'next/app';
import CssBaseline from '@mui/material/CssBaseline';
import { initializeApp } from 'firebase/app';
import { ThemeProvider } from '@mui/material/styles';

import theme from '../theme';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAfkI7jCNsF82itUTZeGUcYfDUNU4lycFM',
  authDomain: 'my-bowl-of-rice.firebaseapp.com',
  projectId: 'my-bowl-of-rice',
  storageBucket: 'my-bowl-of-rice.firebasestorage.app',
  messagingSenderId: '701587916589',
  appId: '1:701587916589:web:a8d018c17cbaff914075a4'
};

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
      <CssBaseline />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;

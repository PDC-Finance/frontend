import '../styles/globals.css';
import '@rainbow-me/rainbowkit/styles.css';
// import { AppProps } from 'next/app';
import { RainbowKitProvider, getDefaultWallets } from '@rainbow-me/rainbowkit';
import { chain, configureChains, createClient, WagmiConfig } from 'wagmi';
import { alchemyProvider } from 'wagmi/providers/alchemy';
import { publicProvider } from 'wagmi/providers/public';
import Layout from '../components/Layout';
import { MoralisProvider } from "react-moralis";
import 'antd/dist/antd.css';
import 'react-datetime-picker/dist/DateTimePicker.css';
import 'react-calendar/dist/Calendar.css';
import 'react-clock/dist/Clock.css';

const MORALIS_APP_ID = process.env.MORALIS_APP_ID
const MORALIS_SERVER_URL = process.env.MORALIS_SERVER_URL


// const { chains, provider, webSocketProvider } = configureChains(
//   [
//     chain.mainnet,
//     chain.polygon,
//     chain.optimism,
//     chain.arbitrum,
//     ...(process.env.NEXT_PUBLIC_ENABLE_TESTNETS === 'true'
//       ? [chain.goerli, chain.kovan, chain.rinkeby, chain.ropsten]
//       : []),
//   ],
//   [
//     alchemyProvider({
//       // This is Alchemy's default API key.
//       // You can get your own at https://dashboard.alchemyapi.io
//       apiKey: '_gg7wSSi0KMBsdKnGVfHDueq6xMB9EkC',
//     }),
//     publicProvider(),
//   ]
// );

const { provider, chains, webSocketProvider } = configureChains(
  [chain.goerli, chain.polygonMumbai, chain.optimismGoerli],
  [publicProvider()]
);


const { connectors } = getDefaultWallets({
  appName: 'RainbowKit App',
  chains,
});

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider,
  webSocketProvider,
});

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <MoralisProvider appId={MORALIS_APP_ID} serverUrl={MORALIS_SERVER_URL}>

      <WagmiConfig client={wagmiClient}>
        <RainbowKitProvider chains={chains}>
            <Component {...pageProps} />
          
        </RainbowKitProvider>
      </WagmiConfig>
      </MoralisProvider>
    </Layout>
  );
}

export default MyApp;

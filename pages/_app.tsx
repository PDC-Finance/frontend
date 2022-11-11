import '../styles/globals.css';
import '@rainbow-me/rainbowkit/styles.css';
import type { AppProps } from 'next/app';
import { chain, configureChains, createClient, WagmiConfig, useNetwork, useSwitchNetwork, useConnect } from "wagmi";
import { InjectedConnector } from "wagmi/connectors/injected";

import { RainbowKitProvider, getDefaultWallets, connectorsForWallets, Chain } from "@rainbow-me/rainbowkit";
import { argentWallet, trustWallet, ledgerWallet } from "@rainbow-me/rainbowkit/wallets";

import { publicProvider } from 'wagmi/providers/public';
import { jsonRpcProvider } from "wagmi/providers/jsonRpc";
import { MoralisProvider } from "react-moralis";
import Layout from '../components/layout'
import { useRouter } from 'next/router';
import { ethers } from 'ethers';
declare var window:any;

const bscMainnet: Chain = {
  id: 56,
  name: "BNB",
  network: "BSC Mainnet",
  iconUrl: "https://s2.coinmarketcap.com/static/img/coins/64x64/1839.png",
  iconBackground: "#fff",
  nativeCurrency: {
    decimals: 18,
    name: "Binance Chain Native Token (BNB)",
    symbol: "BNB",
  },
  rpcUrls: {
    default: "https://bsc-dataseed.binance.org/",
  },
  blockExplorers: {
    default: { name: "SnowTrace", url: "https://bscscan.com/" },
  },
  testnet: false,
};
const polygonMainnet: Chain = {
  id: 137,
  name: "MATIC",
  network: "MATIC Mainnet",
  /*  iconUrl: "https://example.com/icon.svg", */
  iconBackground: "#fff",
  nativeCurrency: {
    decimals: 18,
    name: "Polygon Matic Token (MATIC)",
    symbol: "MATIC",
  },
  rpcUrls: {
    default: "https://polygon-rpc.com",
  },
  blockExplorers: {
    default: { name: "SnowTrace", url: "https://polygonscan.com/" },
  },
  testnet: false,
};
const fantomMainnet: Chain = {
  id: 250,
  name: "FTM",
  network: "Fantom Opera",
  iconUrl: "https://s2.coinmarketcap.com/static/img/coins/64x64/3513.png",
  iconBackground: "#fff",
  nativeCurrency: {
    decimals: 18,
    name: "FTM Token (FTM)",
    symbol: "FTM",
  },
  rpcUrls: {
    default: "https://rpc.ftm.tools/",
  },
  blockExplorers: {
    default: { name: "SnowTrace", url: "https://ftmscan.com/" },
  },
  testnet: false,
};
const { provider, chains, webSocketProvider } = configureChains(
  [bscMainnet, fantomMainnet, chain.polygonMumbai],
  [jsonRpcProvider({ rpc: (chain) => ({ http: chain.rpcUrls.default }) })]
);

const { wallets } = getDefaultWallets({
  appName: "PDC Finance",
  chains,
});

const connectors = connectorsForWallets([
  ...wallets,
  {
    groupName: "Other",
    wallets: [argentWallet({ chains }), trustWallet({ chains }), ledgerWallet({ chains })],
  },
]);


const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider,
  webSocketProvider
});

function MyApp({ Component, pageProps }: AppProps) {
 
  var Moralis_Server_Url:any = '';
  var MORALIS_APP_ID:any = '';

  const { chain, chains } = useNetwork();
  if (chain && chain.id == 80001) {
    Moralis_Server_Url = process.env.NEXT_PUBLIC_MORALIS_TESTNET_API_SERVER_URL;
    MORALIS_APP_ID = process.env.NEXT_PUBLIC_MORALIS_TESTNET_APP_ID;
  } else {
    Moralis_Server_Url = process.env.NEXT_PUBLIC_MORALIS_MAINNET_API_SERVER_URL;
    MORALIS_APP_ID = process.env.NEXT_PUBLIC_MORALIS_MAINNET_APP_ID;
  }

  //console.log("Moralis_Server_Url:   ", Moralis_Server_Url);
  //console.log("MORALIS_APP_ID:   ", MORALIS_APP_ID);

  const router = useRouter();
  console.log(router.pathname);
  return (
    <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider chains={chains}>
        <MoralisProvider serverUrl={Moralis_Server_Url} appId={MORALIS_APP_ID}>
          <Layout isHomePage={router.pathname !== "/app" ? true : false}>
            <Component {...pageProps} />
          </Layout>
        </MoralisProvider>
      </RainbowKitProvider>
    </WagmiConfig>
  );
}

export default MyApp;

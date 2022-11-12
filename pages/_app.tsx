import '../styles/globals.css';
import '@rainbow-me/rainbowkit/styles.css';
import type { AppProps } from 'next/app';
import { RainbowKitProvider, getDefaultWallets, Chain } from "@rainbow-me/rainbowkit";
import { chain, configureChains, createClient, useNetwork, WagmiConfig } from 'wagmi';
import { jsonRpcProvider } from "wagmi/providers/jsonRpc";
import Layout from "../components/layout";
import { useRouter } from "next/router";
import { MoralisProvider } from "react-moralis";


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

const { connectors } = getDefaultWallets({
  appName: 'PDC Finance',
  chains,
});

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider,
  webSocketProvider,
});

function MyApp({ Component, pageProps }: AppProps) {
  const { chain, chains } = useNetwork();
  var Moralis_Server_Url:any = '';
  var MORALIS_APP_ID:any = '';
  if (chain && chain.id == 80001) {
    Moralis_Server_Url = process.env.NEXT_PUBLIC_MORALIS_TESTNET_API_SERVER_URL;
    MORALIS_APP_ID = process.env.NEXT_PUBLIC_MORALIS_TESTNET_APP_ID;
  } else {
    Moralis_Server_Url = process.env.NEXT_PUBLIC_MORALIS_MAINNET_API_SERVER_URL;
    MORALIS_APP_ID = process.env.NEXT_PUBLIC_MORALIS_MAINNET_APP_ID;
  }

  //console.log("Moralis_Server_Url:  ", Moralis_Server_Url);
  //console.log("MORALIS_APP_ID:  ", MORALIS_APP_ID);
  const router = useRouter();
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

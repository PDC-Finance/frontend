import Link from 'next/link';
import { NextPage } from 'next/types'
import React, { useEffect, useState } from "react";
import { useAccount, useNetwork } from "wagmi";
import { fetchNftListFromMoralis, formatDate } from "../utils/web3";
import axios from "axios";

const Marketplace: NextPage = () => {
  const [nftList, setNftList] = useState([]);
  const [createChainIdMiddleware, setChainId] = useState([]);
  const { chain, chains } = useNetwork();

  const getTransactions = async (address:string) => {
    const url = `/api/NFTBalance?chainId=${chain?.id}&walletAddress=${address}&contractAddress=${process.env.NEXT_PUBLIC_EURO_FIAT_TOKEN_ADDRESS}`;
    const response = await axios.get(url);
    console.log(response)
    var list:any = []
    const data = response.data.items.map((item:any) => {
      if (item && item.nft_data && item.contract_ticker_symbol == 'PDC') {
        list.push(...item.nft_data);
        return item;
      } else {
        return;
      }
    })
    setNftList(list);
    //console.log("nft_list:  ", list);
    //console.log("nft_data:  ", data);
    
    // console.log(response);
  };
  const { address, isConnected } = useAccount();
    useEffect(() => {
      if (isConnected && address) {
        getTransactions(address);
        /* fetchNftListFromMoralis(address, (response: any) => {
          console.log("nft-respinse: ", response);
          
          if (response && response.total > 0) {
            const nftData = response?.result?.filter((item: any) => item.token_address == "0x91b7bb1497c0642c43a54d36321bb54e53fa65e6");
            setNftList(nftData);
          }
        }); */
      }
    }, [address, isConnected]);
  
  
  return (
    <div className="mt-5 p-0 flex flex-col justify-center items-center">
      <h1 className="text-2xl font-bold font-sans">My Received PDCs</h1>

      <div className="overflow-x-scroll lg:overflow-hidden w-full">
        <table className="overflow-x-scroll table table-compact w-full mt-5">
          <thead>
            <tr>
              <th>#</th>
              <th>Issued Date</th>
              <th>Payment Date</th>
              <th>Payer</th>
              <th>Token</th>
              <th>Amount</th>
              <th>Check at OpenSea</th>
            </tr>
          </thead>
          <tbody>
            {nftList &&
              nftList.length > 0 &&
              nftList.map((item: any, index: number) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{formatDate(item.external_data.attributes[0].value)}</td>
                  <td>{formatDate(item.external_data.attributes[1].value)}</td>
                  <td>{item.external_data.attributes[2].value}</td>
                  <td>{item.external_data.attributes[3].value}</td>
                  <td>{item.external_data.attributes[4].value / 10 ** 18}</td>
                  <td>
                    <Link href={"https://testnets.opensea.io/assets/mumbai/0x91b7bb1497c0642c43a54d36321bb54e53fa65e6/" + item.token_id}>
                      <a target="_blank">Check your NFT</a>
                    </Link>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Marketplace;
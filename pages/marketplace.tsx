import { NextPage } from 'next/types'
import React, { useEffect, useState } from "react";
import { useMoralisQuery } from "react-moralis";
import { useAccount, useNetwork } from "wagmi";
import { fetchNftListFromMoralis, fetchTokenBalancesFromMoralis, formatDate, convertDate } from "../utils/web3";
const Marketplace: NextPage = () => {
  const [nftList, setNftList] = useState([]);
  const { chain } = useNetwork();

  
  const { address, isConnected } = useAccount();
    useEffect(() => {
      if (isConnected) {
        fetchNftListFromMoralis(address, (response: any) => {
          console.log("nft-respinse: ", response);
          
          if (response && response.total > 0) {
            const nftData = response?.result?.filter((item: any) => item.token_address == "0x91b7bb1497c0642c43a54d36321bb54e53fa65e6");
            setNftList(nftData);
          }
        });
      }
    }, [isConnected]);
  
  
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
            
            {nftList && nftList.length > 0 && nftList.map((item: any, index: number) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{formatDate(item.normalized_metadata.attributes[0].value)}</td>
                <td>{formatDate(item.normalized_metadata.attributes[1].value)}</td>
                <td>{item.normalized_metadata.attributes[2].value}</td>
                <td>{item.normalized_metadata.attributes[3].value}</td>
                <td>{item.normalized_metadata.attributes[4].value / 10 ** 18}</td>
                <td>
                  <a href={"https://testnets.opensea.io/assets/mumbai/" + item.token_address + "/" + item.token_id} target="_blank">
                    Check your NFT
                  </a>
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
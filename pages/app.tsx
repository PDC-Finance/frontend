import { NextPage } from 'next/types';
import React, { useEffect, useState } from 'react';
import { useAccount, useBalance, useContractWrite, usePrepareContractWrite } from "wagmi";
import {useNetwork } from "wagmi";
import CreateFantomPDC from "../components/Fantom_Chain/createFANTOMPDC";
import CreateBnbPDC from "../components/BNB_Chain/createBNBPDC";
import CreateMumbaiPDC from "../components/Mumbai_Chain/createMUMBAIPDC";
import ShowPdcList from "../components/showPdcList";
import { useMoralisQuery } from "react-moralis";
import pdcContractInterface from "../abi/pdc.json";
import { fetchNftListFromMoralis, fetchTokenBalancesFromMoralis, formatDate, convertDate } from "../utils/web3";
import CreateBnbPdcContaract from '../components/BNB_Chain/createBnbPdcContract';
import CreateFantomPdcContaract from '../components/Fantom_Chain/createFantomPdcContract';
import CreateMumbaiPdcContaract from '../components/Mumbai_Chain/createMumbaiPdcContract';

const App: NextPage = () => {
 
  const [tabState, setTabState] = useState("1");
  const [isCreatingPDC, setIsCreatingPDC] = useState(false);
  const [pdcAccountAddress, setPdcAccountAddress] = useState('');
  const [tokenBalanceList, setTokenBalanceList] = useState([]);
  const [selectedToken, setSelectedToken] = useState("0x92D8AD8dEf363CEbdBEf14A428a23edF2Bfd7F64");
  const [recipientAddress, setrecipientAddress] = useState('');
  const [pdcAmount, setPdcAmount] = useState('');
  const [pdcDateTime, setPdcDateTime] = useState('');
  const [nativeBalance, setNativeBalance] = useState("0");
  const [currentChain, setCurrentChain] = useState<any>(null);
  const { address, isConnected } = useAccount();

  const [isAvailablePDC, setIsAvailablePDC] = useState(false);
  const [pdcList, setPdcList] = useState([]);
 
  const [IsConnected, setIsConnected] = useState(false);


  const { chain, chains } = useNetwork();

  useEffect(() => { 
   
    if (chain != null || chain != 'null') { 
      
       setCurrentChain(chain?.id);
        console.log(currentChain)
    }
   
  }, [chain])
  
  const dateTime = Math.floor(new Date(pdcDateTime).getTime() / 1000);
  const { config } = usePrepareContractWrite({
    addressOrName: pdcAccountAddress,
    contractInterface: pdcContractInterface,
    functionName: "withdraw",
    args: [selectedToken],
  });
  const { data, isLoading, isSuccess, write } = useContractWrite(config);
  //console.log("data: ", data);
  if (data && data.hash) {
    console.log("withdraw-data:  ", data);
  }

 const { fetch } = useMoralisQuery("PDCCREATED_2", (query) => query.equalTo("owner", address?.toLowerCase()), [], { autoFetch: false });
  const fetchFromDB = async () => {
    try {
      const results = await fetch();
      //alert("Successfully retrieved " + results?.length );
      console.log("fetching from db............");
      console.log('result:  ',results)
      if (results) {
        //console.log(JSON.parse(JSON.stringify(results)));
        const data = JSON.parse(JSON.stringify(results));
        if (data && data.length > 0) {
          setPdcList([]);
          setPdcList(data);
          setIsCreatingPDC(false);
        }
      }
    } catch (error) {
      console.log(error)
    }
    
  };

  useEffect(() => {
    if (isConnected) {
      fetchFromDB();
      setIsConnected(true);
    } else {
      setIsConnected(false);
    }
  }, [isConnected]);

  
 
  
  useBalance({
    addressOrName: pdcAccountAddress,
    watch: false,
    onSettled(data, error) {
      if (data) {
        setNativeBalance(data.formatted);
      }
      console.log("native-balance: ", { data, error });
    }
  });
  if (!IsConnected) {
    return (
      <>
        <div className="w-full h-[90vh] flex justify-center items-center">
          <p>Please connect a wallet!</p>
        </div>
      </>
    );
  }
  if (!isAvailablePDC) {
    return (
      <>
        <div className="w-full h-[90vh] flex justify-center items-center">
          {/* <button disabled={!write} onClick={() => write?.()} className="bg-purple-500 px-5 py-2 rounded-xl text-white font-bold hover:bg-purple-700">
            Create PDC Contract
          </button> */}
          {currentChain == 56 ? (
            <CreateBnbPdcContaract
              address={address}
              setIsAvailablePDC={setIsAvailablePDC}
              fetchTokenBalancesFromMoralis={fetchTokenBalancesFromMoralis}
              setTokenBalanceList={setTokenBalanceList}
              setPdcAccountAddress={setPdcAccountAddress}
            />
          ) : currentChain == 250 ? (
            <CreateFantomPdcContaract
              address={address}
              setIsAvailablePDC={setIsAvailablePDC}
              fetchTokenBalancesFromMoralis={fetchTokenBalancesFromMoralis}
              setTokenBalanceList={setTokenBalanceList}
              setPdcAccountAddress={setPdcAccountAddress}
            />
          ) : currentChain == 80001 ? (
            <CreateMumbaiPdcContaract
              address={address}
              setIsAvailablePDC={setIsAvailablePDC}
              fetchTokenBalancesFromMoralis={fetchTokenBalancesFromMoralis}
              setTokenBalanceList={setTokenBalanceList}
              setPdcAccountAddress={setPdcAccountAddress}
            />
          ) : (
            <></>
          )}
        </div>
      </>
    );
  } else {
    return (
      <div className="mt-20 flex flex-col items-center justify-center">
        <div className="step1 mt-10">
          <div className="border-2 rounded-lg border-gray-50 p-5">
            <p>
              PDC smart contract address
              <a href={"https://mumbai.polygonscan.com/address/" + pdcAccountAddress} target="_blank">
                <b> {pdcAccountAddress}</b>
              </a>
            </p>
            <p>
              smart contract balances <small>( Add MATIC and Balace to the above 👆 contract using Metamask )</small>{" "}
            </p>
            <div className="mt-5">
              <div className="my-5">
                <p>
                  {currentChain == 56 ? "BNB" : currentChain == "256" ? "FTM" : currentChain == 80001 ? "MATIC" : ""} :{" "}
                  {parseFloat(nativeBalance)?.toPrecision(4)}
                </p>
                {tokenBalanceList.map(function (token: any, index) {
                  return (
                    <p key={index}>
                      {token.symbol} : {(token.balance / 10 ** token.decimals).toPrecision(4)}
                    </p>
                  );
                })}
              </div>
              <div className="flex justify-start items-center w-full">
                <select className="select select-bordered w-1/3 outline-none focus:outline-none select-sm max-w-xs" defaultValue="select">
                  <option disabled value="select">
                    Select Token
                  </option>
                  <option value="0x92D8AD8dEf363CEbdBEf14A428a23edF2Bfd7F64">TEST</option>
                  <option disabled value="usdc">
                    USDC
                  </option>
                  <option disabled value="dai">
                    DAI
                  </option>
                  <option disabled value="usdt">
                    USDT
                  </option>
                </select>
                <button
                  disabled={!write}
                  onClick={() => write?.()}
                  className="bg-rose-500 px-5 py-2 rounded-xl text-white text-xs font-bold hover:bg-rose-700 ml-5"
                >
                  {isLoading ? "withdrawing..." : "Withdraw from PDC Contract"}
                </button>
              </div>
              {/* <button className="bg-green-500 px-5 py-2 rounded-xl text-white font-bold hover:bg-green-700">Deposit to PDC Contract</button>
              <button className="bg-rose-500 px-5 py-2 rounded-xl text-white font-bold hover:bg-rose-700 ml-5">Withdraw from PDC Contract</button> */}
            </div>
            <div className="mt-5 w-1/2">
              <div className="tabs m-0 p-0 tabs-boxed">
                <a className={"tab " + (tabState == "1" ? "tab-active" : " ")} onClick={() => setTabState("1")}>
                  Make PDC Payment
                </a>
                <a className={"tab " + (tabState == "2" ? "tab-active" : " ")} onClick={() => setTabState("2")}>
                  View Created PDC
                </a>
              </div>
            </div>
          </div>
        </div>
        {tabState == "1" ? (
          <div className="tab1 flkex flex-col items-start w-5/12">
            {isCreatingPDC && (
              <div className="flex justify-center items-center w-5/12 text-black h-[30%] absolute rounded-xl bg-gray-300">
                <img alt="loading" src="loading-state.gif" height={48} width={48} />
                <p className="font-bold text-xl">Creating PDC...</p>
              </div>
            )}
            <div className="flex justify-between items-center w-full">
              <p>Token</p>
              <select className="select select-bordered w-1/2 outline-none focus:outline-none select-sm max-w-xs" defaultValue="select">
                <option disabled value="select">
                  Select Token
                </option>
                <option value="0x92D8AD8dEf363CEbdBEf14A428a23edF2Bfd7F64">TEST</option>
                <option disabled value="usdc">
                  USDC
                </option>
                <option disabled value="dai">
                  DAI
                </option>
                <option disabled value="usdt">
                  USDT
                </option>
              </select>
            </div>
            <div className="flex justify-between items-center w-full mt-3">
              <p>Recipient Address</p>
              <input
                type="text"
                onChange={(event) => setrecipientAddress(event.target.value)}
                value={recipientAddress}
                placeholder="Enter Recipient Address"
                className="input input-bordered input-sm w-1/2 max-w-xs"
              />
            </div>
            <div className="flex justify-between items-center w-full mt-3">
              <p>Amount</p>
              <input
                type="number"
                onChange={(event) => setPdcAmount(event.target.value)}
                value={pdcAmount}
                placeholder="Enter Amount"
                className="input input-bordered input-sm w-1/2 max-w-xs"
              />
            </div>
            <div className="flex justify-between items-center w-full mt-3">
              <p>Date</p>
              <input
                onChange={(event) => setPdcDateTime(event.target.value)}
                value={pdcDateTime}
                className="input input-bordered input-sm w-1/2 max-w-xs"
                type="datetime-local"
                placeholder="Please select a date"
              />
            </div>
            <div className="flex justify-center mt-8">
              {currentChain == 56 ? (
                <CreateBnbPDC
                  pdcDateTime={pdcDateTime}
                  pdcAccountAddress={pdcAccountAddress}
                  selectedToken={selectedToken}
                  recipientAddress={recipientAddress}
                  pdcAmount={pdcAmount}
                  setTabState={setTabState}
                  setIsCreatingPDC={setIsCreatingPDC}
                  fetchFromDB={fetchFromDB}
                />
              ) : currentChain == 250 ? (
                <CreateFantomPDC
                  pdcDateTime={pdcDateTime}
                  pdcAccountAddress={pdcAccountAddress}
                  selectedToken={selectedToken}
                  recipientAddress={recipientAddress}
                  pdcAmount={pdcAmount}
                  setTabState={setTabState}
                  setIsCreatingPDC={setIsCreatingPDC}
                  fetchFromDB={fetchFromDB}
                />
              ) : currentChain == 80001 ? (
                <div className="flex flex-col justify-center items-center">
                <CreateMumbaiPDC
                  pdcDateTime={pdcDateTime}
                  pdcAccountAddress={pdcAccountAddress}
                  selectedToken={selectedToken}
                  recipientAddress={recipientAddress}
                  pdcAmount={pdcAmount}
                  setTabState={setTabState}
                  setIsCreatingPDC={setIsCreatingPDC}
                  fetchFromDB={fetchFromDB}
                />
              
                  
                        <img className="w-48 h-32" src='geloato_logo1.svg' alt='logo'/>
               
                </div>
              ) : (
                <></>
              )}
            </div>
          </div>
        ) : tabState == "2" ? (
          <div className="tab2">
            <div className="overflow-x-auto mt-10">
              <ShowPdcList pdcList={pdcList} />
            </div>
          </div>
        ) : (
          <></>
        )}
      </div>
    );
  }
};

export default App
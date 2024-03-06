import React, { useEffect, useState } from "react";
import { useMoralisQuery } from "react-moralis";
import { NextPage } from "next/types";
import Link from "next/link";
import pdcContractInterface from "../abi/pdc.json";
import bnbPdcContractInterface from "../abi/bnb_testnet/pdc.json";
import ShowPdcList from "../components/showPdcList";
import CreateMumbaiPDC from "../components/createMUMBAIPDC";
import { fetchTokenBalancesFromMoralis } from "../utils/web3";
import CreateMumbaiPdcContaract from "../components/createMumbaiPdcContract";
import { useAccount, useBalance, useContractWrite, useNetwork, usePrepareContractWrite } from "wagmi";
import CreateFantomPdcContract from '../components/Fantom_Chain/createFantomPdcContract';
import CreateFantomPdc from "../components/Fantom_Chain/createFANTOMPDC";
import CreateBnbPdcContract from '../components/bnb_test_chain/createBnbTestPdcContract';
import CreateBnbPdc from '../components/BNB_Chain/createBNBPDC';
import Image from "next/image";
import CreateBnbTestPDC from "../components/bnb_test_chain/createBnbTestPdc";

const App = () => {
  const [tabState, setTabState] = useState("1");
  const [isCreatingPDC, setIsCreatingPDC] = useState(false);
  const [pdcAccountAddress, setPdcAccountAddress] = useState("");
  const [tokenBalanceList, setTokenBalanceList] = useState([]);
  const [selectedToken, setSelectedToken] = useState("0x92D8AD8dEf363CEbdBEf14A428a23edF2Bfd7F64");
  const [recipientAddress, setrecipientAddress] = useState("");
  const [pdcAmount, setPdcAmount] = useState("");
  const [pdcDateTime, setPdcDateTime] = useState("");
  const [nativeBalance, setNativeBalance] = useState("0");
  const [currentChain, setCurrentChain] = useState<any>(null);
  const { address, isConnected } = useAccount();
  const [tableName, setTableName] = useState("PDCCREATED_BNB_2");

  const [isAvailablePDC, setIsAvailablePDC] = useState(false);
  const [pdcList, setPdcList] = useState([]);

  const [IsConnected, setIsConnected] = useState(false);

  const { chain, chains } = useNetwork();
  /* if (chain && chain.id) {
    setCurrentChain(chain.id);
      if (chain && chain.id == 80001) {
        setTableName("PDCCREATED_2");
      } else if (chain && chain.id == 250) {
        setTableName("PDCCREATED_FTM");
      } else if (chain && chain.id == 56) {
        setTableName("PDCCREATED_BNB");
      }
  } */

  const dateTime = Math.floor(new Date(pdcDateTime).getTime() / 1000);
  const { config } = usePrepareContractWrite({
    addressOrName: pdcAccountAddress,
    contractInterface: currentChain == 80001 ? pdcContractInterface : bnbPdcContractInterface,
    functionName: "withdraw",
    args: [selectedToken],
  });

  const { data, isLoading, isSuccess, write } = useContractWrite(config);
  //console.log("data: ", data);
  if (data && data.hash) {
    console.log("withdraw-data:  ", data);
  }
  if (isSuccess ) {
    console.log("isSuccess:  ", isSuccess);
  }
  console.log('table-name:::::::    ',tableName);
  const { fetch } = useMoralisQuery(tableName, (query) => query.equalTo("owner", address?.toLowerCase()), [], { autoFetch: false });
  const fetchFromDB = async () => {
    try {
      const results = await fetch();
      if (results) {
        //console.log('pdc-list:  ',JSON.parse(JSON.stringify(results)));
        const data = JSON.parse(JSON.stringify(results));
        if (data && data.length > 0) {
          setPdcList([]);
          setPdcList(data);
          setIsCreatingPDC(false);
        } { 
          setIsAvailablePDC(false);
        }
      }
    } catch (error) {
      console.log(error);
    }
  };
  
  useEffect(() => {
    if (isConnected) {
      fetchFromDB();
      setIsConnected(true);
    } else {
      setIsConnected(false);
    }
    if (chain && chain.id && currentChain !== chain.id) {
      setCurrentChain(chain.id);
      if (chain && chain.id == 80001) {
        setTableName("PDCCREATED_2");
        setSelectedToken("0x92D8AD8dEf363CEbdBEf14A428a23edF2Bfd7F64");
        fetchFromDB();
      } else if (chain && chain.id == 250) {
        setTableName("PDCCREATED_FTM");
        fetchFromDB();
      } else if (chain && chain.id == 56) {
        setTableName("PDCCREATED_BNB");
        setSelectedToken("0x322182eee9Ec289F3E1B630Ce054d93a72b45ac0");
        fetchFromDB();
      } else if (chain && chain.id == 97) {
        setTableName("PDCCREATED_BNB_2");
        setSelectedToken("0x322182eee9Ec289F3E1B630Ce054d93a72b45ac0");
        fetchFromDB();
      }
      return;
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isConnected, chain, currentChain]);

  useBalance({
    addressOrName: pdcAccountAddress,
    watch: false,
    onSettled(data, error) {
      if (data) {
        setNativeBalance(data.formatted);
      }
      console.log("native-balance: ", { data, error });
    },
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
    if (currentChain == 56) {
      return (
        <div className="w-full h-[90vh] flex justify-center items-center">
          <CreateBnbPdcContract
            address={address}
            setIsAvailablePDC={setIsAvailablePDC}
            fetchTokenBalancesFromMoralis={fetchTokenBalancesFromMoralis}
            setTokenBalanceList={setTokenBalanceList}
            setPdcAccountAddress={setPdcAccountAddress}
          />
        </div>
      );
    } else if (currentChain == 250) {
      return (
        <>
          <div className="w-full h-[90vh] flex justify-center items-center">
            <CreateFantomPdcContract
              address={address}
              setIsAvailablePDC={setIsAvailablePDC}
              fetchTokenBalancesFromMoralis={fetchTokenBalancesFromMoralis}
              setTokenBalanceList={setTokenBalanceList}
              setPdcAccountAddress={setPdcAccountAddress}
            />
          </div>
        </>
      );
    } else if (currentChain == 80001) {
      return (
        <>
          <div className="w-full h-[90vh] flex justify-center items-center">
            <CreateMumbaiPdcContaract
              address={address}
              setIsAvailablePDC={setIsAvailablePDC}
              fetchTokenBalancesFromMoralis={fetchTokenBalancesFromMoralis}
              setTokenBalanceList={setTokenBalanceList}
              setPdcAccountAddress={setPdcAccountAddress}
            />
          </div>
        </>
      );
    } else if (currentChain == 97) {
      return (
        <>
          <div className="w-full h-[90vh] flex justify-center items-center">
            <CreateBnbPdcContract
              address={address}
              setIsAvailablePDC={setIsAvailablePDC}
              fetchTokenBalancesFromMoralis={fetchTokenBalancesFromMoralis}
              setTokenBalanceList={setTokenBalanceList}
              setPdcAccountAddress={setPdcAccountAddress}
            />
          </div>
        </>
      );
    }
  } else {
    return (
      <div className="mt-20 flex flex-col items-center justify-center">
        <div className="step1 mt-10">
          <div className=" rounded-lg  p-5">
            <p>
              PDC smart contract address
              <Link
                href={currentChain === 80001 ? "https://mumbai.polygonscan.com/address/" : "https://testnet.bscscan.com/address/" + pdcAccountAddress}
              >
                <a target="_blank">
                  <b> {pdcAccountAddress}</b>
                </a>
              </Link>
            </p>
            <p>
              smart contract balances <small>( Add MATIC and Balace to the above 👆 contract using Metamask )</small>{" "}
            </p>
            <small>
              Deposit at least 5 LINK tokens to the above address. You can find LINK faucet{" "}
              <Link href="https://faucets.chain.link/chapel">
                <a className="text-blue-500" target="_blank">
                  here
                </a>
              </Link>
            </small>
            <div className="mt-5">
              <div className="my-5">
                <p>
                  {currentChain === 80001 ? "MATIC" : currentChain === 250 ? "FTM" : "BNB"} : {parseFloat(nativeBalance)?.toPrecision(4)}
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
            <div className="mt-5 w-[55%]">
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
                <Image alt="loading" src="loading-state.gif" height={48} width={48} />
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
              <div className="flex flex-col justify-center items-center">
                {currentChain == 56 ? (
                  <>
                    <CreateBnbPdc />
                    <Image height={32} width={48} src="/geloato_logo1.svg" alt="logo" />
                  </>
                ) : currentChain == 250 ? (
                  <>
                    <CreateFantomPdc />
                    <Image height={32} width={48} src="/geloato_logo1.svg" alt="logo" />
                  </>
                ) : currentChain == 80001 ? (
                  <>
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
                    <Image height={32} width={48} src="/geloato_logo1.svg" alt="logo" />
                  </>
                ) : currentChain == 97 ? (
                  <>
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
                    <small>Powered by chainlink</small>
                  </>
                ) : (
                  <>
                    <p>Select another network from dropdown</p>
                  </>
                )}
              </div>
            </div>
          </div>
        ) : (
          <div className="tab2">
            <div className="overflow-x-auto mt-10">
              <ShowPdcList pdcList={pdcList} />
            </div>
          </div>
        )}
      </div>
    );
  }
};

export default App;

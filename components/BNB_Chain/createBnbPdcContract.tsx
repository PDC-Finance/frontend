import React, { useEffect } from "react";
import { useContractRead, useContractWrite, usePrepareContractWrite, useNetwork } from "wagmi";
import contractInterface from "../../abi/pdcFactory.json";

const CreateBnbPdcContaract = ({
  address,
  setIsAvailablePDC,
  fetchTokenBalancesFromMoralis,
  setTokenBalanceList,
  setPdcAccountAddress
}: any) => {
  console.log("----------------------------");
  try {
    //console.log("process.env--------:  ", process.env.NEXT_PUBLIC_BINANCE_PDC_FACTORY_CONTRACT_ADDRESS);
    useContractRead({
      addressOrName: process.env.NEXT_PUBLIC_BINANCE_PDC_FACTORY_CONTRACT_ADDRESS ? process.env.NEXT_PUBLIC_BINANCE_PDC_FACTORY_CONTRACT_ADDRESS : "",
      contractInterface: contractInterface,
      functionName: "pdcUserMapping",
      args: address,
      onSuccess(data: any) {
        console.log("Success", data);
        if (data === "0x0000000000000000000000000000000000000000") {
          setIsAvailablePDC(false);
        } else {
          setIsAvailablePDC(true);
          fetchTokenBalancesFromMoralis(data, (response: any) => {
            if (response) {
              setTokenBalanceList(response);
            }
          });
          setPdcAccountAddress(data);
        }
      },
    });
  } catch (error) {
    console.log(error);
  }

  const { config } = usePrepareContractWrite({
    addressOrName: process.env.NEXT_PUBLIC_BINANCE_PDC_FACTORY_CONTRACT_ADDRESS ? process.env.NEXT_PUBLIC_BINANCE_PDC_FACTORY_CONTRACT_ADDRESS : '',
    contractInterface: contractInterface,
    functionName: "createPDCAccount",
  });
  const { data, isLoading, isSuccess, write } = useContractWrite(config);
  console.log('loading: ',isLoading)
if (data && data.hash) { 
    console.log('data:  ',data);
  }

  return (
    <>
      <button disabled={!write} onClick={() => write?.()} className="bg-green-500 px-10 py-2 rounded-xl text-white font-bold hover:bg-green-700">
        Create BNB PDC Contract
      </button>
    </>
  );
};

export default CreateBnbPdcContaract;

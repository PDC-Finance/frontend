import React, { useEffect } from "react";
import { useContractRead, useContractWrite, usePrepareContractWrite, useNetwork, useWaitForTransaction } from "wagmi";
import contractInterface from "../../abi/pdcFactory.json";
import pdcContractInterface from "../../abi/pdc.json";

const CreateMumbaiPdcContaract = ({
  address,
  setIsAvailablePDC,
  fetchTokenBalancesFromMoralis,
  setTokenBalanceList,
  setPdcAccountAddress
}: any) => {
  try {
    //console.log("process.env--------:  ", process.env.NEXT_PUBLIC_BINANCE_PDC_FACTORY_CONTRACT_ADDRESS);
    useContractRead({
      addressOrName: process.env.NEXT_PUBLIC_MUMBAI_PDC_FACTORY_CONTRACT_ADDRESS ? process.env.NEXT_PUBLIC_MUMBAI_PDC_FACTORY_CONTRACT_ADDRESS : "",
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
      onError(error: any) { 
        console.log(error)
      }
    });
  } catch (error) {
    console.log(error);
  }

  const { config } = usePrepareContractWrite({
    addressOrName: process.env.NEXT_PUBLIC_MUMBAI_PDC_FACTORY_CONTRACT_ADDRESS ? process.env.NEXT_PUBLIC_MUMBAI_PDC_FACTORY_CONTRACT_ADDRESS : '',
    contractInterface: contractInterface,
    functionName: "createPDCAccount",
  });
  const { data, isLoading, isSuccess, write } = useContractWrite(config);
  console.log('loading: ', isLoading)
  if (isSuccess) { 
    console.log(isSuccess)

  }
if (data && data.hash) { 
  console.log('data:  ', data);
   
}
   const waitForTransaction = useWaitForTransaction({
     hash: data?.hash,
   });
  if (waitForTransaction) { 
    console.log("waitForTransaction:  ", waitForTransaction);
  }
    return (
      <>
        <button disabled={!write} onClick={() => write?.()} className="bg-green-500 px-10 py-2 rounded-xl text-white font-bold hover:bg-green-700">
          Create Mumbai PDC Contract
        </button>
        
      </>
    );
};

export default CreateMumbaiPdcContaract;

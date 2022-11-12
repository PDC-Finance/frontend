import React, { useEffect } from "react";
import { useContractRead, useContractWrite, usePrepareContractWrite, useNetwork, useWaitForTransaction } from "wagmi";
import contractInterface from "../../abi/pdcFactory.json";
import pdcContractInterface from "../../abi/pdc.json";

const CreateBnbPdcContaract = ({ address, setIsAvailablePDC, fetchTokenBalancesFromMoralis, setTokenBalanceList, setPdcAccountAddress }: any) => {
  try {
    //console.log("process.env--------:  ", process.env.NEXT_PUBLIC_BINANCE_PDC_FACTORY_CONTRACT_ADDRESS);
    useContractRead({
      addressOrName: "0x0190E2C4dB5452293733c010a72826900e26057c",
      contractInterface: contractInterface,
      functionName: "pdcUserMapping",
      args: address,
      onSuccess(data: any) {
        console.log("Success", data);
        if (data == "0x0000000000000000000000000000000000000000") {
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
        console.log(error);
      },
    });
  } catch (error) {
    console.log(error);
  }

  const { config } = usePrepareContractWrite({
    addressOrName: "0x0190E2C4dB5452293733c010a72826900e26057c",
    contractInterface: contractInterface,
    functionName: "createPDCAccount",
  });
  const { data, isLoading, isSuccess, write } = useContractWrite(config);
  console.log("loading: ", isLoading);

  if (data && data.hash) {
    console.log("data:  ", data);
    // setIsAvailablePDC(true)
  }
  if (isLoading) {
    setIsAvailablePDC(true);
    setTimeout(() => {
      window.location.reload();
    }, 5000);
  }

  return (
    <>
      <button disabled={!write} onClick={() => write?.()} className="bg-green-500 px-10 py-2 rounded-xl text-white font-bold hover:bg-green-700">
        Create Mumbai PDC Contract
      </button>
    </>
  );
};

export default CreateBnbPdcContaract;

import React, { useEffect } from "react";
import { useContractRead, useContractWrite, usePrepareContractWrite, useNetwork, useWaitForTransaction } from "wagmi";
import contractInterface from "../../abi/bnb_testnet/pdcFactory.json";

const CreateBnbTestPdcContract = ({ address, setIsAvailablePDC, fetchTokenBalancesFromMoralis, setTokenBalanceList, setPdcAccountAddress }: any) => {
  console.log("address:  ", address);
  try {
    //console.log("process.env--------:  ", process.env.NEXT_PUBLIC_BINANCE_PDC_FACTORY_CONTRACT_ADDRESS);
    useContractRead({
      addressOrName: "0x5e3b8C3553ED57Cc90122A6e7E3b43315D6676ED",
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
    addressOrName: "0x5e3b8C3553ED57Cc90122A6e7E3b43315D6676ED",
    contractInterface: contractInterface,
    functionName: "createPDCAccount",
  });
  const { data, isLoading, isSuccess, write } = useContractWrite(config);
  console.log("loading: ", isLoading);

  if (data && data.hash) {
    console.log("data:  ", data);
    // setIsAvailablePDC(true)
  }
  if (isSuccess) {
    setIsAvailablePDC(true);
    setTimeout(() => {
      // window.location.reload();
    }, 5000);
  }

  return (
    <>
      <button disabled={!write} onClick={() => write?.()} className="bg-green-500 px-10 py-2 rounded-xl text-white font-bold hover:bg-green-700">
        Create PDC Contract
      </button>
    </>
  );
};

export default CreateBnbTestPdcContract;

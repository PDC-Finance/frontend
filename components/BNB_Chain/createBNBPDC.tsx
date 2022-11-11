import React, {useEffect} from 'react'
import { usePrepareContractWrite, useContractWrite } from "wagmi";
import contractInterface from "../../abi/pdcFactory.json";
import pdcContractInterface from "../../abi/pdc.json";

const CreateBnbPDC = ({ pdcDateTime, pdcAccountAddress, selectedToken, recipientAddress, pdcAmount, setTabState, setIsCreatingPDC,fetchFromDB }: any) => {
  
  const dateTime = Math.floor(new Date(pdcDateTime).getTime() / 1000);
  const { config } = usePrepareContractWrite({
    addressOrName: pdcAccountAddress,
    contractInterface: pdcContractInterface,
    functionName: "createPDC",
    args: [selectedToken, recipientAddress, (parseInt(pdcAmount) * 10 ** 18).toString(), dateTime],
  });
  const { data, isLoading, isSuccess, write } = useContractWrite(config);
  //console.log("data: ", data);
  if (data && data.hash) { 
    console.log('data:  ',data);
  }

  return (
    <>
      <button disabled={!write} onClick={() => write?.()} className="bg-green-500 px-10 py-2 rounded-xl text-white font-bold hover:bg-green-700">
        Create BNB PDC
      </button>
    </>
  );
};

export default CreateBnbPDC
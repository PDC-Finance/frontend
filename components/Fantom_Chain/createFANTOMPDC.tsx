import React, { useEffect } from "react";
import { usePrepareContractWrite, useContractWrite } from "wagmi";
import pdcContractInterface from "../../abi/pdc.json";

const CreateFantomPDC = ({
  pdcDateTime,
  pdcAccountAddress,
  selectedToken,
  recipientAddress,
  pdcAmount,
  setTabState,
  setIsCreatingPDC,
  fetchFromDB,
}: any) => {
  const dateTime = Math.floor(new Date(pdcDateTime).getTime() / 1000);

  const { config, error } = usePrepareContractWrite({
    addressOrName: pdcAccountAddress,
    contractInterface: pdcContractInterface,
    functionName: "createPDC",
    args: [selectedToken, recipientAddress, (parseInt(pdcAmount) * 10 ** 18).toString(), dateTime],
  });
  const { data, isLoading, isSuccess, write } = useContractWrite(config);

  console.log("data: ", data);
  console.log("error: ", error);
  console.log("isSuccess: ", isSuccess);
  //
  if (data && data.hash) {
  }
  if (isSuccess) {
    fetchFromDB();
    setTimeout(() => {
      fetchFromDB();
      setTabState("2");
    }, 5000);
  }
  if (isLoading) {
    setIsCreatingPDC(true);
  } else {
    //setIsCreatingPDC(false)
  }

  const writeContract = () => {
    if (dateTime < Math.floor(new Date().getTime() / 1000)) {
      alert("Please select a future date...");
    } else {
      write?.();
    }
  };

  return (
    <>
      <button onClick={writeContract} className="bg-green-500 px-10 py-2 rounded-xl text-white font-bold hover:bg-green-700">
        Create PDC
      </button>
    </>
  );
};

export default CreateFantomPDC;

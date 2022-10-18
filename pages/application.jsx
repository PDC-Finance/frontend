import Meta from '../components/Meta'
import { ConnectButton } from '@rainbow-me/rainbowkit';
import {
    useAccount, usePrepareContractWrite, useContractWrite,
    useWaitForTransaction, useContractRead, useBalance, chain, useNetwork, useConnect, chainId, defaultChains, ChainMismatchError, useDeprecatedContractWrite
} from 'wagmi';
import { Table} from '@web3uikit/core';
// import { Avatar, Tag, SvgMoreVert } from '@web3uikit/icons';
import styles from '../styles/Home.module.css';
import contractInterface from '../abi/pdcFactory.json';
import pdcContractInterface from '../abi/pdc.json';
// import Tabs from '../components/pdcAccount';
import { Tabs, Form, Input, Button, Checkbox, Image } from 'antd';
import DateTimePicker from 'react-datetime-picker/dist/entry.nostyle';
import {React,  useState, useEffect } from 'react';
import { Formik, Field, useFormik } from 'formik'; 
import * as Yup from 'yup'; 
import { useMoralis, useWeb3ExecuteFunction } from "react-moralis";
// import Moralis from 'moralis';
// const Moralis2 = Moralis.default
import { useMoralisWeb3Api } from "react-moralis";
import { Tab } from '../components/Styles';


const { TabPane } = Tabs;

const application = () => {

    const [pdcState, setPDCState] = useState([])

    const [contrTokenBalance, setContrTokenBalance] = useState([])

    const addressZero = '0x0000000000000000000000000000000000000000'

    const pdcFactoryDeployedAddress = '0x79CbA025E6D2abD19b2Fb52d10a19E5C479dDf10'

    const {Moralis}  = useMoralis();

    const Web3Api = useMoralisWeb3Api();

    Moralis.start({
        appId:"gzTPVse171cOrai0yDjhUrNgwrLz9h3DPfD34poY",
        serverUrl:"https://o7qbw6blidxt.usemoralis.com:2053/server"
      });

    // Moralis.settings.setAPIRateLimit({
    // anonymous:10, authenticated:20, windowMs:60000
    // })
    

    const { config } = usePrepareContractWrite({
        addressOrName: pdcFactoryDeployedAddress,
        contractInterface: contractInterface,
        functionName: 'createPDCAccount'
    })

    const {
        data: mineData,
        write: createPDC,
        isLoading: isTxLoading,
        isSucess: isTxStarted,
    } = useContractWrite(config)

    const { isSuccess: txSuccess } = useWaitForTransaction({
        hash: mineData?.hash
    })

    const isMined = txSuccess

    const [dateTime, setDateTime] = useState(new Date());

    const formik = useFormik({
        initialValues: {
            tokenAddress: "",
            receiverAddress: "",
            amount: 0,
            date: new Date()
        }
    })
    const account = useAccount({
        onConnect({ address, connector, isReconnected }) {
            console.log('Connected', { address, connector, isReconnected })
        },
    })
    const { data, isError, isLoading } = useContractRead({
        addressOrName: pdcFactoryDeployedAddress,
        contractInterface: contractInterface,
        functionName: 'pdcUserMapping',
        args: account.address,
        onSuccess(data) {
            console.log('Success', data)
        },
    })


    const { config: createPDCConfig } = usePrepareContractWrite({
        addressOrName: data,
        contractInterface: pdcContractInterface,
        functionName: 'createPDC',
        args: [formik.values.tokenAddress, formik.values.receiverAddress, formik.values.amount, (Math.floor(dateTime / 1000))]
    })

    const {
        data: createPDCData,
        write: issuePDC,
        isLoading: isPDCTxLoading,
        isSucess: isPDCTxStarted,
    } = useContractWrite(createPDCConfig)

    function isCreated(data) {
        return data !== addressZero && typeof (data) !== 'undefined';
    }

    console.log('isCreated', isCreated(data))
    console.log('data', data)
    console.log('address', account.address)

    const { data: pdcAccountData } = useBalance({
        addressOrName: data
    })

    console.log('pdcAccountData', pdcAccountData)

    console.log('dateTime', dateTime)
    console.log('dateUnix', Math.floor(dateTime / 1000))
    console.log('isMined', isMined)
    const { connector: activeConnector, isConnected } = useAccount()
    const { connect, connectors, error, isLoading: connectLoading, pendingConnector } = useConnect()
    const { chain, chains } = useNetwork()

    let chainMismatch = chains.some( e => e['id'] === (chain && chain.id) )
    console.log('isChain', chainMismatch)

    function availableChains() {
        return chains.map((chain) => chain.name)
    }

    const fetchNativeBalance = async () => {
        // get mainnet native balance for the current user
        const balance = await Web3Api.account.getNativeBalance();
        console.log(balance);
        // get BSC native balance for a given address
        const options = {
          chain: "mumbai",
          address: data,
        };
        const bscBalance = await Web3Api.account.getNativeBalance(options);
        console.log('nativeBalance', bscBalance);
      };
    
    // fetchNativeBalance()

    const fetchTokenBalances = async () => {
        const options = {
          chain: "mumbai",
          address: data,
        };
        const balances = await Web3Api.account.getTokenBalances(options)
        setContrTokenBalance(balances)
        console.log('Token Balances ', balances);
        return balances
      };

    useEffect(() => {
        async function fetchCreatedPDCs() {
            const createdPDCs = Moralis.Object.extend("newTestPDCCreated")
            const query = new Moralis.Query(createdPDCs)
            query.equalTo("pdcSC", data)
            const result = await query.find();
            setPDCState(await result)
            console.log('result', pdcState)
            console.log('ownerFrom', data)
            // return result
        }
        fetchCreatedPDCs()
        fetchTokenBalances()
        console.log('fetch', fetchCreatedPDCs())
        // console.log("tkn Bal", contrTokenBalance)
        
    }, [])

    // console.log("fetch", fetchCreatedPDCs())

    console.log('Formik', formik.values)

    return (
        <div>
            {/* {contrTokenBalance} */}
            <Meta title='Application' />
            <link rel="icon" href="/favicon.png" />
            <div className='ml-auto'>
                <ConnectButton />
            </div>

            {/* <div>
                {isConnected && !isMined && !isCreated(data)
                    ? <button
                        color="green"
                        theme="colored"
                        onClick={() => createPDC?.()}
                        disabled={isTxLoading || isTxStarted}
                        data-mint-loading={isTxLoading}
                        data-mint-started={isTxStarted}>
                        {isTxLoading && 'waiting for approval'}
                        {isTxStarted && 'Transaction started'}
                        {!isTxLoading && !isTxStarted && 'Create PDC'}
                    </button>
                    : <div> </div>
                }
            </div> */}

            <div>
                {isConnected && isCreated(data)
                    ?
                    <div>
                        <Tabs defaultActiveKey="1" centered size="large">
                            <TabPane tab="PDC Account" key="1">
                                It seems  you already created PDC Account in {chain.name} network.
                                Your PDC Account is {data}
                                <Table 
                                  columnsConfig="80px 3fr 2fr 2fr 80px"
                                //   customLoadingContent={<div><Loading size={30} spinnerColor="#2E7DAF" text="Fetching..."/></div>}

                                  data = {[
                                //     [
                                //         <Avatar isRounded size={36} theme="image"/>,
                                //         'Moralis Magi',
                                //         <Tag color="blue" text="Nft Collection"/>,
                                //         '0x18...130e',
                                //         <SvgMoreVert fill="black" fontSize={32}/>
                                //       ]
                                  ]}
                                  header = {[
                                    '',
                                    <span>Coin</span>,
                                    <span>Balance</span>,
                                    
                                    ''                                
                                  ]}
                                  maxPages={3}
                                  noPagination
                                  onPageNumberChanged={function noRefCheck(){}}
                                  onRowClick={function noRefCheck(){}}
                                  pageSize={5}
                                />
                                <form >
                                    <label>
                                        <h2>Create Post dated crypto payment</h2>
                                        Token Address: {' '} {' '}
                                        <input id="tokenAddress"
                                            type="text"
                                        value={formik.values.tokenAddress}
                                        onChange={formik.handleChange}
                                        />
                                    </label>
                                    <br />
                                    <br />
                                    <label>
                                        Receiver Address: {' '} {' '}
                                        <input id="receiverAddress"
                                            type="text"
                                        value={formik.values.receiverAddress}
                                        onChange={formik.handleChange}
                                        />
                                    </label>
                                    <br />
                                    <br />
                                    <label>
                                        Amount: {' '} {' '}
                                        <input id="amount"
                                            type="text"
                                        value={formik.values.amount}
                                        onChange={formik.handleChange}
                                        />
                                    </label>
                                    <br />
                                    <br />
                                    <DateTimePicker
                                        amPmAriaLabel="Select AM/PM"
                                        calendarAriaLabel="Toggle calendar"
                                        clearAriaLabel="Clear value"
                                        dayAriaLabel="Day"
                                        hourAriaLabel="Hour"
                                        maxDetail="minute"
                                        minuteAriaLabel="Minute"
                                        monthAriaLabel="Month"
                                        nativeInputAriaLabel="Date and time"
                                        onChange={setDateTime}
                                        secondAriaLabel="Second"
                                        value={dateTime}
                                        yearAriaLabel="Year"
                                        name='Select PDC Date & Time!'
                                    />

                                    {/* <label>
                                        Date: {' '} {' '}
                                        <input id="setText"
                                            type="text"
                                        // value={employerName}
                                        // onChange={(e) => setEmployerName(e.target.value)}
                                        />
                                    </label> */}

                                    <br />
                                    <br />
                                    <button
                                    color="green"
                                    theme="colored"
                                    onClick={() => issuePDC?.()}
                                    disabled={isPDCTxLoading || isPDCTxStarted}
                                    data-mint-loading={isPDCTxLoading}
                                    data-mint-started={isPDCTxStarted}>
                                    {isPDCTxLoading && 'waiting for approval'}
                                    {isPDCTxStarted && 'Transaction started'}
                                    {!isPDCTxLoading && !isPDCTxStarted && 'Create PDC'}
                                </button>
                                    <br />
                                    <br />
                                </form>

                            </TabPane>
                            <TabPane tab="Issued PDC" key="2">
                                <h1> {"Issued Post Dated Crypto Payments"} </h1>
                            </TabPane>
                        </Tabs>

                    </div> :
                    <div>
                        {isConnected && !isMined && !isCreated(data) && chainMismatch
                            ?
                            <div>
                                <p>
                                    It seems you haven't created PDC Account in {chain.name} network. Please create a new PDC account in {chain.name} network
                                </p>

                                <button
                                    color="green"
                                    theme="colored"
                                    onClick={() => createPDC?.()}
                                    disabled={isTxLoading || isTxStarted}
                                    data-mint-loading={isTxLoading}
                                    data-mint-started={isTxStarted}>
                                    {isTxLoading && 'waiting for approval'}
                                    {isTxStarted && 'Transaction started'}
                                    {!isTxLoading && !isTxStarted && 'Create PDC'}
                                </button>
                                <div >
                                    <div style={{ marginBottom: 6 }}>
                                        View on{' '}
                                        <a href={`https://mumbai.polygonscan.com/tx/${mineData?.hash}`}>
                                            Etherscan
                                        </a>
                                    </div>
                                </div>

                            </div>

                            : <div> </div>
                        }
                        {isConnected && !chainMismatch ?
                        <div>Unsupported Network</div>
                            : <div></div>
                        }
                    </div>}
            </div>

            {/* <div >
                <div style={{ marginBottom: 6 }}>
                    View on{' '}
                    <a href={`https://mumbai.polygonscan.com/tx/${mineData?.hash}`}>
                        Etherscan
                    </a>
                </div>
            </div> */}

        </div >
    )
}

export default application
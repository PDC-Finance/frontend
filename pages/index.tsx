import React from 'react'
import Image from 'next/image'
import Link from 'next/link';
const Home = () => {
  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-bold text-gray-700">
              Post Dated Crypto
              <br className="hidden lg:inline-block" />
              Payments Made Easy
            </h1>
            <p className="mb-8 leading-relaxed">
              PDC Finance enables users to make post-dated crypto payments, similar to post-dated cheques in the traditional finance world. Users
              register for the PDC Finance wallet, which has a special function to make a payment at future date.
              <br />
              Made by <b>Finance Professionals</b> for <b>Finance Teams</b> to easily adopt <b>DeFi</b>
              <br />
              <b>Powered by decentralized Gelato Keeper bots</b>
            </p>
            <div className="flex justify-center">
              <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                Explore More
              </button>
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <Image width={720} height={600} className="object-cover object-center rounded" alt="hero" src="/post-payment.jpg" />
          </div>
        </div>
      </section>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap w-full mb-20">
            <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
              <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">What is PDC Finance?</h1>
              <div className="h-1 w-20 bg-indigo-500 rounded"></div>
            </div>
            <p className="lg:w-1/2 w-full leading-relaxed text-gray-500">
              PDC finance provides a decentralized platform for Post-dated crypto payment to help Uncollateralized borrowing & lending platform based
              on the assignment of future cash flow from PDC. Users register for the PDC Finance wallet, which has a special function to make a
              payment at future date.
            </p>
          </div>
          <div className="flex flex-wrap -m-4">
            <div className="xl:w-1/4 md:w-1/2 p-4">
              <div className="bg-gray-100 p-6 rounded-lg">
                <Image
                  width={400}
                  height={350}
                  className="h-40 rounded w-full object-cover object-center mb-6"
                  src="/money-lending.jpg"
                  alt="content"
                />
                <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">For Money Lending</h3>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-4">Money Lending</h2>
                <p className="leading-relaxed text-base">
                  Lenders take exposure on PDC issuer. Irrespective of PDC holder, lender can be sure that the future dated commitment will be honored
                  based on PDC issuer creditworthiness.
                </p>
              </div>
            </div>
            <div className="xl:w-1/4 md:w-1/2 p-4">
              <div className="bg-gray-100 p-6 rounded-lg">
                <Image
                  width={400}
                  height={350}
                  className="h-40 rounded w-full object-cover object-center mb-6"
                  src="/money-borrow.jpg"
                  alt="content"
                />
                <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">For Money Borrowing</h3>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-4">Money Borrowers</h2>
                <p className="leading-relaxed text-base">
                  Let’s say Alice received a PDC from Ethereum Foundation, for a payment of DAI 10,000/-, payment date 60 days from now. Alice can
                  place the PDC NFT on PDC Finance marketplace for funding.
                </p>
              </div>
            </div>
            <div className="xl:w-1/4 md:w-1/2 p-4">
              <div className="bg-gray-100 p-6 rounded-lg">
                <Image
                  width={400}
                  height={350}
                  className="h-40 rounded w-full object-cover object-center mb-6"
                  src="/nft-marketplace.jpg"
                  alt="content"
                />
                <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">NFT Marketplace</h3>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-4">Post-dated crypto payment</h2>
                <p className="leading-relaxed text-base">
                  Make fully on chain post dated payment. Unlike Escrow, funding for post dated payment can be made available just before the maturity
                  date. This unlocks liquidity & brings various possibilities
                </p>
              </div>
            </div>
            <div className="xl:w-1/4 md:w-1/2 p-4">
              <div className="bg-gray-100 p-6 rounded-lg">
                <Image width={400} height={350} className="h-40 rounded w-full object-cover object-center mb-6" src="/gelato.jpg" alt="content" />
                <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">Powered By</h3>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-4">Gelato & Chainlink</h2>
                <p className="leading-relaxed text-base">
                  PDC finance utilizes Chainlink automation & Gelato automation to execute Post dated crypto payment from the smart contract itself
                  without any user interaction .
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="text-gray-600 body-font">
        <p className="text-center font-bold text-2xl">How it works?</p>
        <div className="container px-5 py-24 mx-auto flex flex-wrap ">
          <div className="flex flex-wrap w-full justify-between items-center">
            <div className="lg:w-2/5 md:w-1/2 md:pr-10 md:py-6">
              <div className="flex relative pb-12">
                <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                  <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
                </div>
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500 inline-flex items-center justify-center text-white relative z-10">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                  </svg>
                </div>
                <div className="flex-grow pl-4">
                  <h2 className="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">STEP 1</h2>
                  <p className="leading-relaxed">
                    Once the payer.eth sends a PDC to receiver.eth an amount of DAI 10,000 on a future date, for e.g., 15th January 2023, the
                    following things are automatically carried out by PDC Finance App
                  </p>
                </div>
              </div>
              <div className="flex relative pb-12">
                <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                  <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
                </div>
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500 inline-flex items-center justify-center text-white relative z-10">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                  </svg>
                </div>
                <div className="flex-grow pl-4">
                  <h2 className="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">STEP 2</h2>
                  <p className="leading-relaxed">
                    The receiver.eth receives an acknowledgment of PDC payment in the form of an NFT (similar to Uniswap LP NFTs)
                  </p>
                </div>
              </div>
              <div className="flex relative pb-12">
                <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                  <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
                </div>
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500 inline-flex items-center justify-center text-white relative z-10">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <circle cx="12" cy="5" r="3"></circle>
                    <path d="M12 22V8M5 12H2a10 10 0 0020 0h-3"></path>
                  </svg>
                </div>
                <div className="flex-grow pl-4">
                  <h2 className="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">STEP 3</h2>
                  <p className="leading-relaxed">
                    PDC Finance Wallet integrates Chainlink automation & Gelato automation, which pick up this post-dated transaction & watch for the
                    maturity date (in this case 15th Dec 2022) to make the payment to the receiver.eth from the payer.eth PDC Finance’s wallet.
                  </p>
                </div>
              </div>
              <div className="flex relative pb-12">
                <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                  <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
                </div>
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500 inline-flex items-center justify-center text-white relative z-10">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                  </svg>
                </div>
                <div className="flex-grow pl-4">
                  <h2 className="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">STEP 4</h2>
                  <p className="leading-relaxed">
                    The payer need not hold the necessary balance when initiating the PDC payment. But the payer needs to make sure to maintain the
                    necessary balance (in this case DAI 10,000) & small gas fees in the PDC Finance Wallet at the time of maturity date & time.
                  </p>
                </div>
              </div>
              <div className="flex relative">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500 inline-flex items-center justify-center text-white relative z-10">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                    <path d="M22 4L12 14.01l-3-3"></path>
                  </svg>
                </div>
                <div className="flex-grow pl-4">
                  <h2 className="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">FINISH</h2>
                  <p className="leading-relaxed">
                    In case receiver.eth required cash before maturity date, receiver.eth can transfer the PDC NFT in PDC Finance Marketplace (under
                    construction) to investor.eth. On PDC maturity date, payment goes from payer.eth PDC account to investor.eth
                  </p>
                </div>
              </div>
            </div>
            <Image
              width={720}
              height={600}
              className="lg:w-3/5 md:w-1/2 object-center object-scale-down rounded-lg md:mt-0 mt-12"
              src="/flow.gif"
              alt="step"
            />
          </div>
        </div>
      </section>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="text-center mb-20">
            <h1 className="sm:text-3xl text-2xl font-medium text-center title-font text-gray-900 mb-4">Features</h1>
            <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
              PDC Finance is solving the problem of money borrowing and lending and bridging the gap between a lender and borrower by creating a
              channel which can be trusted with the help of DeFi.
            </p>
          </div>
          <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
            <div className="p-2 sm:w-1/2 w-full">
              <div className="bg-gray-100 rounded flex p-4 h-full items-center">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="3"
                  className="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                  <path d="M22 4L12 14.01l-3-3"></path>
                </svg>
                <span className="title-font font-medium">Bringing DeFi to traditional finance</span>
              </div>
            </div>
            <div className="p-2 sm:w-1/2 w-full">
              <div className="bg-gray-100 rounded flex p-4 h-full items-center">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="3"
                  className="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                  <path d="M22 4L12 14.01l-3-3"></path>
                </svg>
                <span className="title-font font-medium">Unlock liquidity</span>
              </div>
            </div>
            <div className="p-2 sm:w-1/2 w-full">
              <div className="bg-gray-100 rounded flex p-4 h-full items-center">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="3"
                  className="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                  <path d="M22 4L12 14.01l-3-3"></path>
                </svg>
                <span className="title-font font-medium">PDC holders can get finance based on PDC issuers creditworthiness</span>
              </div>
            </div>
            <div className="p-2 sm:w-1/2 w-full">
              <div className="bg-gray-100 rounded flex p-4 h-full items-center">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="3"
                  className="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                  <path d="M22 4L12 14.01l-3-3"></path>
                </svg>
                <span className="title-font font-medium">Bringing organic users to DeFi</span>
              </div>
            </div>
          </div>
          <button className="flex mx-auto mt-16 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
            Enter App
          </button>
        </div>
      </section>

      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="text-2xl font-medium title-font mb-4 text-gray-900">OUR TEAM</h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
              We are a team of crypto enthusiasts having 20 years of combined experience in Finance and Technology.
              <br />
              We have a vision to solve the lending and borrowing problem with the help of DeFi.
            </p>
          </div>
          <div className="flex flex-wrap -m-4">
            <div className="p-4 lg:w-1/2 md:w-1/2">
              <div className="h-full flex flex-col items-center text-center">
                <div className="bg-gray-100 p-0 rounded-full">
                  <Image width={200} height={200} alt="team" className="rounded-full object-scale-down" src="/photo2.png" />
                </div>
                <div className="w-full">
                  <h2 className="title-font font-medium text-lg text-gray-900">Venkatesh Rengarajan</h2>
                  <h3 className="text-gray-500 mb-3">Finance Expert</h3>
                  <p className="mb-4">
                    A qualified finance professional experienced over a decade in Finance/Trading. Have been in Blockchain & Solidity development for
                    the past 2 years and got attracted to DeFi. Looking forward to leveraging my core finance experience in bringing DeFi to
                    traditional finance!
                  </p>
                  <span className="inline-flex">
                    <a className="text-gray-500">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                      >
                        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                      </svg>
                    </a>
                    <a className="ml-2 text-gray-500">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                      >
                        <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                      </svg>
                    </a>
                    <a className="ml-2 text-gray-500">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                      >
                        <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                      </svg>
                    </a>
                  </span>
                </div>
              </div>
            </div>
            <div className="p-4 lg:w-1/2 md:w-1/2">
              <div className="h-full flex flex-col items-center text-center">
                <div className="bg-gray-100 p-0 rounded-full">
                  <Image width={200} height={200} alt="team" className="rounded-full object-cover" src="/photo.png" />
                </div>

                <div className="w-full">
                  <h2 className="title-font font-medium text-lg text-gray-900">Manish Rana</h2>
                  <h3 className="text-gray-500 mb-3">Full Stack Developer</h3>
                  <p className="mb-4">
                    Manish Kumar Rana is a technology enthusiast and Passionate Full-stack Developer with 4+ years of hands-on experience in
                    developing scalable websites/applications with Blockchain Integration using a wide range of front-end and back-end technologies.
                  </p>
                  <span className="inline-flex">
                    <a className="text-gray-500">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                      >
                        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                      </svg>
                    </a>
                    <a className="ml-2 text-gray-500">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                      >
                        <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                      </svg>
                    </a>
                    <a className="ml-2 text-gray-500">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                      >
                        <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                      </svg>
                    </a>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="text-gray-600 body-font">
        <div className="container mx-auto w-full h-full">
          <p className="text-center font-bold text-2xl">Future Roadmap</p>
          <p className="text-center">
            We have a long term vision for PDC Finance to bring this
            <br />
            idea to real work and we will be doing the following upgrades.
          </p>

          <div className="container px-5 py-24 mx-auto">
            <div className="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
              <div className="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0">
                <Image src="/protocol.png" width={96} height={96} className="object-center" alt="protocol" />
              </div>
              <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
                <h2 className="text-gray-900 text-lg title-font font-medium mb-2">Protocol Integrations</h2>
                <p className="leading-relaxed text-base">To integrate various DID protocols</p>
              </div>
            </div>
            <div className="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
              <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
                <h2 className="text-gray-900 text-lg title-font font-medium mb-2">Arbitration Integrations</h2>
                <p className="leading-relaxed text-base">To integrate decentralized arbitration</p>
              </div>
              <div className="sm:w-32 sm:order-none order-first sm:h-32 h-20 w-20 sm:ml-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0">
                <Image src="/arbitration.png" width={96} height={96} className="object-center" alt="protocol" />
              </div>
            </div>
            <div className="flex items-center lg:w-3/5 mx-auto sm:flex-row flex-col">
              <div className="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0">
                <Image src="/gnosis.png" width={96} height={96} className="object-center" alt="protocol" />
              </div>
              <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
                <h2 className="text-gray-900 text-lg title-font font-medium mb-2">Gnosis Integration</h2>
                <p className="leading-relaxed text-base">To integrate in Gnosis safe app</p>
              </div>
            </div>
            <div className="flex items-center lg:w-3/5 mx-auto border-t mt-10 pt-10 border-gray-200 sm:flex-row flex-col">
              <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
                <h2 className="text-gray-900 text-lg title-font font-medium mb-2">Metamask institutional</h2>
                <p className="leading-relaxed text-base">To integrate Metamask institutional</p>
              </div>
              <div className="sm:w-32 sm:order-none  order-first sm:h-32 h-20 w-20 sm:ml-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0">
                <Image src="/metamask.png" width={96} height={96} className="object-center" alt="metamask" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer className="text-gray-600 body-font">
        <div className="container px-5 py-8 mx-auto flex justify-center items-center sm:flex-row flex-col">
          <span className="inline-flex sm:mt-0 mt-4 justify-center">
            <Link href="https://www.linkedin.com/in/pdc-finance">
              <a rel="noreferrer" className="ml-3 text-gray-500 hover:scale-125 cursor-pointer" target="_blank">
                <Image src="/linkedin.svg" width={24} height={24} alt="linkedin" />
              </a>
            </Link>
            <Link href="https://m.youtube.com/channel/UCKLeOMLR1An2SDoOtCftmWA">
              <a rel="noreferrer" className="ml-3 text-gray-500 hover:scale-125 cursor-pointer" target="_blank">
                <Image src="/youtube.svg" width={24} height={24} alt="youtube" />
              </a>
            </Link>
            <Link href="https://twitter.com/pdcfin">
              <a rel="noreferrer" className="ml-3 text-gray-500 hover:scale-125 cursor-pointer" target="_blank">
                <Image src="/twitter.svg" width={24} height={24} alt="twitter" />
              </a>
            </Link>
            <Link href="https://github.com/PDC-Finance">
              <a rel="noreferrer" className="ml-3 text-gray-500 hover:scale-125 cursor-pointer" href="https://github.com/PDC-Finance" target="_blank">
                <Image src="/github.svg" width={24} height={24} alt="github" />
              </a>
            </Link>
          </span>
          <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">© 2022 PDC FINANCE</p>
        </div>
      </footer>
    </div>
  );
}

export default Home;
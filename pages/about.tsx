import { NextPage } from 'next/types';
import React from 'react'


const About: NextPage = () => {
  return (
    <div className="h-screen">
      <section className="text-gray-600 body-font my-10 h-3/5">
        <div className="w-full text-center">
          <p className="text-3xl font-bold">About Us</p>
        </div>
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-3xl text-3xl mb-4 font-medium text-gray-900">PDC finance provides a decentralized platform for</h1>
            <div className="flex justify-center">
              <ul className="list-disc md:ml-10">
                <li>Post-dated crypto (PDC) payment (powered by decentralized Gelato keeper bots) </li>
                <li>Uncollateralized borrowing & lending platform based on the assignment of future cash flow from PDC </li>
              </ul>
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img className="object-cover object-center rounded" alt="hero" src="team.svg" />
          </div>
        </div>
      </section>

      <section className="text-gray-600 body-font mb-10">
        <div className="w-full text-center">
          <p className="text-3xl font-bold">PDC finance facilitates the following</p>
        </div>
        <section className="text-gray-600 body-font overflow-hidden">
          <div className="container px-5 py-24 mx-auto">
            <div className="-my-8 divide-y-2 divide-gray-100">
              <div className="py-8 flex flex-wrap md:flex-nowrap hover:bg-gray-200 bg-gray-100 hover:shadow-xl p-3">
                <div className="md:flex-grow">
                  <h2 className="text-2xl font-medium text-gray-900 title-font mb-2">Post-Dated Crypto (PDC) Payments</h2>
                  <p className="leading-relaxed">
                    PDC Finance enables users to make post-dated crypto payments, similar to post-dated cheques in the traditional finance world.
                    Users register for the PDC Finance wallet, which has a special function to make a payment at future date. Once the payer signed &
                    sent the transaction (for eg.) pay someone.eth an amount of DAI 10,000 on a future date, for e.g., 15th December 2022, the
                    following things are automatically carried out by PDC Finance Wallet
                  </p>
                  <ul className="list-disc ml-10">
                    <li>The receiver receives an acknowledgment of PDC payment in the form of an NFT (similar to Uniswap LP NFTs)</li>
                    <li>
                      PDC Finance Wallet integrates gelato bots, which pick up this post-dated transaction & watch for the maturity date (in this case
                      15th Dec 2022) to make the payment to the Receiver from the payer PDC Finance’s wallet. The payer need not hold the necessary
                      balance when initiating the PDC payment. But the payer needs to make sure to maintain the necessary balance (in this case DAI
                      10,000) & small gas fees in the PDC Finance Wallet at the time of maturity date & time.
                    </li>
                  </ul>
                </div>
              </div>
              <div className="py-8 flex flex-wrap md:flex-nowrap hover:bg-gray-200 hover:shadow-xl p-3">
                <div className="md:flex-grow">
                  <h2 className="text-2xl font-medium text-gray-900 title-font mb-2">Financing Marketplace</h2>
                  <p className="leading-relaxed">
                    PDC Finance provides a marketplace for PDC holders, whereby PDC holders list their NFTs for financing from investors. Upon PDC NFT
                    being sold in the finance marketplace, the seller receives the instant cash flow from the PDC after the deduction of implied
                    interest rates and the buyer will receive the proceeds from the PDC
                  </p>
                </div>
              </div>
              <div className="py-8 flex flex-wrap md:flex-nowrap hover:bg-gray-200 bg-gray-100 hover:shadow-xl p-3">
                <div className="md:flex-grow">
                  <h2 className="text-2xl font-medium text-gray-900 title-font mb-2">For Lenders</h2>
                  <p className="leading-relaxed">
                    PDC Finance’s financing marketplace provides an alternative financing platform, where users present their PDCs for advance
                    funding. PDC issued by good companies will be honored & pose a lesser credit risk. For example, MakerDAO/any web2 company issued a
                    PDC to a consultant for DAI 10,000 payable in 60 days. The consultant can place this PDC for funding in the PDC Finance
                    marketplace. For investors, the strength of the PDC issuer/payer is a more important factor than the PDC receiver/(consultant in
                    this case). An investor can be certain that MakerDAO in this case will make the payment on the 60th day irrespective of the PDC
                    receiver/consultant’s financial position. So the investor may finance this PDC at say 10% p.a. interest & PDC Finance marketplace
                    securely handles the swapping of loans. This PDC financing has below salient features
                  </p>
                  <ul className="list-disc ml-10">
                    <li>Returns are in stable coin terms (as the PDCs are made in stablecoins in PDC Finance)</li>
                    <li>
                      Returns are not correlated to market performance or any protocol emissions i.e., irrespective of bear/bull market, the payer
                      will make the payment at the maturity date, as these are all corporate post-dated payment commitments.
                    </li>
                  </ul>
                </div>
              </div>
              <div className="py-8 flex flex-wrap md:flex-nowrap hover:bg-gray-200 hover:shadow-xl p-3">
                <div className="md:flex-grow">
                  <h2 className="text-2xl font-medium text-gray-900 title-font mb-2">Payday Finance</h2>
                  <p className="leading-relaxed">
                    PDC Finance provides a platform for employees to receive a salary in their Carpet Finance Wallets from their employer. This is
                    very beneficial for remote employees and they can request financing in Marketplace by issuing a PDC based on their upcoming salary
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>
      <section className="text-gray-600 body-font mt-20">
        <div className="w-full text-center">
          <p className="text-3xl font-bold">Key distinct features</p>
        </div>
        <section className="text-gray-600 body-font overflow-hidden">
          <div className="container px-5 py-24 mx-auto">
            <div className="-my-8 divide-y-2 divide-gray-100">
              <div className="py-8 flex flex-wrap md:flex-nowrap hover:bg-gray-200 bg-gray-100 hover:shadow-xl p-3">
                <div className="md:flex-grow">
                  <ul className="list-disc ml-10">
                    <li className='mt-5'>
                      It has always been easy to finance blue chip companies & the remaining entities are left difficult to raise financing. PDC
                      Finance enables borrowers to raise financing based on the PDC issuer’s creditworthiness and not based on the borrower’s
                      creditworthiness.
                    </li>
                    <li className='mt-5'>PDC Finance decentralizes the lending marketplace.</li>
                    <li className='mt-5'>Lenders & borrowers from any geographical area can register and access the marketplace.</li>
                    <li className='mt-5'>
                      For eg., an entity or a consultant might have received a PDC for DAI 100,000 payable in 60 days from XYZ ltd based in the Middle
                      East, while XYZ ltd may not be known to an investor in the US, the Middle Eastern investor will be easy to recognize good
                      standing of XYZ ltd and might offer to finance against PDC of XYZ ltd.
                    </li>
                    <li className='mt-5'>
                      Enables remote employees to access funding through the PDC marketplace. For eg., for remote employees working in the Middle East
                      is almost impossible to seek a loan from a traditional bank. As banks ask for employment details and the employer is remote, a
                      remote employee has been slowly pushed away from the banking system. It's a moral obligation from the blockchain community to
                      step up to support decentralized remote employees. PDC Finance provides a platform for remote employees where they can share
                      proof of historical remote employment & can obtain finances backed by their upcoming salary. For eg., a remote employee working
                      for AAVE can request for salary advance in the marketplace by issuing a PDC. For investors, it's a certain cash flow that AAVE
                      doesn't default on salary payments. PDC finance marketplace securely swaps the loans.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>
      <section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-col text-center w-full mb-20">
      <h1 className="text-2xl font-bold title-font mb-4 text-gray-600">OUR TEAM</h1>
      <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them.</p>
    </div>
    <div className="flex flex-wrap -m-4">
      <div className="p-4 lg:w-1/2 md:w-1/2">
        <div className="h-full flex flex-col items-center text-center">
          <img alt="team" className="flex-shrink-0 rounded-full object-cover object-center mb-4" src="https://dummyimage.com/200x200"/>
          <div className="w-full">
            <h2 className="title-font font-medium text-lg text-gray-900">Venkatesh Rengaraja</h2>
            <h3 className="text-gray-500 mb-3">UI Developer</h3>
            <p className="mb-4">DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.</p>
            <span className="inline-flex">
              <a className="text-gray-500">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                </svg>
              </a>
              <a className="ml-2 text-gray-500">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                </svg>
              </a>
              <a className="ml-2 text-gray-500">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                </svg>
              </a>
            </span>
          </div>
        </div>
      </div>
      <div className="p-4 lg:w-1/2 md:w-1/2">
        <div className="h-full flex flex-col items-center text-center">
          <img alt="team" className="flex-shrink-0 rounded-full  object-cover object-center mb-4" src="https://dummyimage.com/201x201"/>
          <div className="w-full">
            <h2 className="title-font font-medium text-lg text-gray-900">Manish Rana</h2>
            <h3 className="text-gray-500 mb-3">UI Developer</h3>
            <p className="mb-4">DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.</p>
            <span className="inline-flex">
              <a className="text-gray-500">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                </svg>
              </a>
              <a className="ml-2 text-gray-500">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                </svg>
              </a>
              <a className="ml-2 text-gray-500">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
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
    </div>
  );
};

export default About
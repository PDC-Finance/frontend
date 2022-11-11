import { NextPage } from 'next'
import Image from 'next/image';
import React from 'react'
import Footer from '../components/footer';
import Layout from '../components/layout';

const Home:NextPage = () => {
  return (
    <>
      <div className="hero min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <Image alt="" src="/pdc-banner.webp" width={700} height={400} className="max-w-sm rounded-lg shadow-2xl" />
          <div>
            <h1 className="text-5xl font-bold">Post Dated Crypto Payments Made Easy</h1>
            <p className="py-6">
              Made by <b>Finance Professionals</b> for <b>Finance Professionals</b> to adopt <b>web3.0</b> easily
            </p>

            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center -mt-20">
        <h1 className="text-3xl font-bold">Benefits of Carpet Finance</h1>
        <p>Carpet Finance integrates various DID protocols (WIP)</p>
        <div className="mt-5">
          <div className="md:flex justify-between mb-10">
            <div className="card w-96 bg-base-100 shadow-xl border-2 border-gray-200 m-2">
              <div className="card-body flex flex-col items-center">
                <h2 className="card-title">For Individuals/Corporates</h2>
                <ul className="list-disc">
                  <li>Make post-dated crypto payments</li>
                  <li>Receive post-dated crypto payments</li>
                  <li>If needed, get instant finance from carpet Finance Marketplace against the PDC</li>
                </ul>
              </div>
            </div>
            <div className="card w-96 bg-base-100 shadow-xl border-2 border-gray-200 m-2">
              <div className="card-body flex flex-col items-center">
                <h2 className="card-title">For Borrowers</h2>
                <p>Leverage PDC issued by a credible payer and get financed</p>
              </div>
            </div>
            <div className="card w-96 bg-base-100 shadow-xl border-2 border-gray-200 m-2">
              <div className="card-body flex flex-col items-center">
                <h2 className="card-title">For Lenders</h2>
                <p className="text-center">Carpet finance provides an un-opinionated platform</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Home
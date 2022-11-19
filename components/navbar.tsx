import { NextComponentType } from 'next'
import React, { useState, useEffect } from "react";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useAccount, useConnect, useDisconnect, useEnsAvatar, useEnsName } from "wagmi";
import type { AppProps } from "next/app";
import Link from 'next/link';
import Image from 'next/image';

const NavBar = ({ isHomePage }: any) => {
  const { address, connector, isConnected } = useAccount();
  //console.log("isConnected: ", isConnected);
  const [IsConnected, setIsConnected] = useState(false);
  useEffect(() => {
    if (isConnected) {
      setIsConnected(true);
    } else {
      setIsConnected(false);
    }
  }, [isConnected]);

  return (
    <div>
      {/* <ConnectButton /> */}
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </label>
            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
              <li>
                <Link href="/">
                  <a>Home</a>
                </Link>
              </li>
              {/* <li>
                <Link href="about">
                  <a>About</a>
                </Link>
              </li> */}
              <li>
                <Link href="https://pdc-finance.gitbook.io/pdc-finance/">
                  <a target="_blank">Docs</a>
                </Link>
              </li>
              <li>
                <Link href="https://pdc-finance.notion.site/PDC-Finance-80d1a402a5c2414484c2d5bf4c8a3269">
                  <a target="_blank">Whitepaper</a>
                </Link>
              </li>

              {IsConnected && (
                <li>
                  <Link href="marketplace">
                    <a>PDC Marketplace</a>
                  </Link>
                </li>
              )}
            </ul>
          </div>
          <a className="btn btn-ghost normal-case text-xl md:block hidden">
            <Image src="/logo_transparent.png" height={38} width={200} alt="pdc finance" />
          </a>
          <a className="btn btn-ghost flex items-center normal-case text-xl md:hidden block">
            <Image src="/logo_transparent.png" height={24} width={80} alt="pdc finance" />
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal p-0">
            <li>
              <Link href="/">
                <a>Home</a>
                {/* <p>{{ status}}</p> */}
              </Link>
            </li>
            {/* <li>
              <Link href="about">
                <a>About</a>
              </Link>
            </li> */}
            <li>
              <Link href="https://pdc-finance.gitbook.io/pdc-finance/">
                <a target="_blank">Docs</a>
              </Link>
            </li>
            <li>
              <Link href="https://pdc-finance.notion.site/PDC-Finance-80d1a402a5c2414484c2d5bf4c8a3269">
                <a target="_blank">Whitepaper</a>
              </Link>
            </li>
            {IsConnected && (
              <li>
                <Link href="marketplace">
                  <a>PDC Marketplace</a>
                </Link>
              </li>
            )}
          </ul>
        </div>
        <div className="navbar-end">
          {isHomePage ? (
            <Link href="/app">
              <a className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                Enter App
              </a>
            </Link>
          ) : (
            <ConnectButton />
          )}
        </div>
      </div>
    </div>
  );
};

export default NavBar
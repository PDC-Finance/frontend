import React from 'react'
import Navbar from './navbar'
import Footer from './footer'
import { AppProps } from 'next/app';

const Layout = ({ children, isHomePage=true }: any) => {
  return (
    <>
      <Navbar isHomePage={isHomePage} />
        <main className='mx-7'>{children}</main>
      {/* <Footer /> */}
    </>
  );
};

export default Layout
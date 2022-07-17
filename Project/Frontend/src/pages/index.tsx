import NFT from '@Components/NFT';
import type { NextPage } from 'next';
import Head from 'next/head';
import Image from "next/image"
import { useState } from 'react';

import { AiOutlineSearch } from 'react-icons/ai';


const Index: NextPage = () => {

  const [searchValue, setSearchValue] = useState('');

  return (
    <div>
      <Head>
        <title>Lasagna NFT</title>
      </Head>
      <div className='p-2 md:px-[10rem] 2xl:px-[15rem] my-4'>
        {/* Catchphrase */}
        <div className='w-full h-[8rem] bg-secondary rounded-lg flex items-center px-8 mb-10 relative'>
          <Image src="/header-bg.svg" layout='fill' className='object-cover rounded-lg ' />
          <span className='font-bold text-2xl absolute z-10'>Discover, collect, and sell Lasagna NFTs</span>
        </div>

        {/* NFT List */}
        {/* Title Container */}
        <div className={`flex flex-col gap-y-2 justify-start md:flex-row md:items-center md:justify-between mb-6`}>
          <span className='font-bold text-lg mb-2'>HOT NFTs</span>
          <div className='w-full md:w-[40rem] h-[2.5rem] bg-accent rounded-lg flex p-2'>
            <div className='text-[1.5rem]'>
              <AiOutlineSearch />
            </div>
            <input className='w-full p-2 bg-transparent outline-none' type='text' onChange={(e) => setSearchValue(e.target.value)} placeholder='Search...' />
          </div>
        </div>

        <div className='grid gap-4 grid-cols-1 grid-rows-1 md:grid-cols-3 md:grid-rows-3 lg:grid-cols-4 lg:grid-rows-4 2xl:grid-cols-6 2xl:grid-rows-6'>

          <NFT />
          <NFT />
          <NFT />
          <NFT />
          <NFT />
          <NFT />
          <NFT />
          <NFT />
          <NFT />
          <NFT />
          <NFT />
          <NFT />
          <NFT />
          <NFT />
          <NFT />
          <NFT />
          <NFT />
          <NFT />
          <NFT />
          <NFT />
          <NFT />




        </div>

      </div>
    </div>
  )
};

export default Index;


'use client'
import React, { useState } from 'react';
import styles from './Hero.module.css';
import images from '../../assets/index'; // Ensure this exists and is valid
import { Search, Token } from '../index'; // Ensure the Search component is valid and properly imported
import Image from 'next/image';
import { StaticImageData } from 'next/image';

interface HeroProps {
  accounts: string; // Props should match the types you're passing
  tokenData: string;
}

interface Token {
  name: string;
  image: string | StaticImageData; // Allow both string and StaticImageData
}

const Hero: React.FC<HeroProps> = ({ accounts, tokenData }) => {
  const [openSetting, setOpenSetting] = useState(false);
  const [openToken, setOpenToken] = useState(false);
  const [openTokenTwo, setOpenTokenTwo] = useState(false);

  const [tokenOne, setTokenOne] = useState<Token>({ name: '', image: '' });
  const [tokenTwo, setTokenTwo] = useState<Token>({ name: '', image: '' });

  return (
    <div className={`${styles.HeroSection}`}>
      <div className={styles.HeroSection_box}>
        <div className={styles.HeroSection_box_heading}>
          <p>
            Swap
          </p>
          <div className={styles.HeroSection_box_heading_img}>
            <Image src={images.close} alt='close' width={50} height={50} onClick={() => setOpenSetting(true)} />
          </div>
        </div>

        <div className={styles.HeroSection_box_input}>

          <input type="text" placeholder='0' />
          <button onClick={() => setOpenToken(true)}>
            <Image src={tokenOne.image || images.ether} alt='ether' width={20} height={20} />
            {tokenOne.name || 'ETH'}
            <small>
              9474
            </small>
          </button>
        </div>
                
        <div className={styles.HeroSection_box_input}>

          <input type="text" placeholder='0' />
          <button onClick={() => setOpenTokenTwo(true)}>
            <Image src={tokenTwo.image || images.ether} alt='ether' width={20} height={20} />
            {tokenTwo.name || 'UNI'}
            <small>
              9474
            </small>
          </button>
        </div>

        {
          accounts ? (
            <button className={styles.HeroSection_box_btn}>
              Connect Wallet
            </button>
          ) : (
            <button className={styles.HeroSection_box_btn} onClick={()=>{}}>
              Swap
            </button>
          )
        }

      </div>
      { openSetting && <Token setOpenSetting={setOpenSetting} />}
      {
        openToken && (
          <Search
            openToken={setOpenToken}
            tokens={setTokenOne}
            tokenData={tokenData}
          />
        )
      }
      {
        openTokenTwo && (
          <Search
            openToken={setOpenTokenTwo}
            tokens={setTokenTwo}
            tokenData={tokenData}
          />
        )
      }
    </div>
  );
};

export default Hero;

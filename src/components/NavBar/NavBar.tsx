'use client'
import React, { useState } from 'react'
import style from './NavBar.module.css'
import images from "../../assets"
import { TokenList, Modal } from '../index'
import Image from 'next/image'
import Link from 'next/link'
import { useTheme } from '@/context/ThemeProvider'


const NavBar = () => {
  const menuItems = [
    {
      name: "Swap",
      link: "/"
    },
    {
      name: "Tokens",
      link: "/"
    },
    {
      name: "Pools",
      link: "/"
    }
  ]

  const [openModal, setOpenModal] = useState(false)
  const [openTokenBox, setopenTokenBox] = useState(false)
  const { theme, toggleTheme } = useTheme(); // Destructure theme and toggleTheme from context


  return (
    <div className={`${style.NavBar}`}>
      <button onClick={toggleTheme} className={`${style.NavBar_toggle_button}`} aria-label="Toggle dark/light mode">
        {theme === 'light' ? (
          <img src="/icons/dark.svg" alt="Switch to Dark Mode" width={24} height={24} />
        ) : (
          <img src="/icons/light.svg" alt="Switch to Light Mode" width={24} height={24} />
        )}
      </button>
      <div className={`${style.NavBar_box}`}>
        <div className={`${style.NavBar_box_left}`}>
          <div className={`${style.NavBar_box_left_logo}`}>
            <Image src={images.uniswap} alt="logo" width={50} height={50} />
          </div>
          {/* Left Section */}
          <div className={`${style.NavBar_box_left_menu}`}>
            {menuItems.map((item, index) => (
              <Link className={`${style.NavBar_box_left_links_item}`} key={index + 1}
              href={{pathname: `${item.name}`, query:`${item.link}`}}>
                <p className={style.NavBar_box_left_menu_item}>
                {item.name}
                </p>
              </Link>
            ))}
          </div>
        </div>
        {/* Middle Section */}
        <div className={`${style.NavBar_box_middle}`}>
          <div className={`${style.NavBar_box_middle_search}`}>
              <Image src={'/icons/search.svg'} alt="search" width={20} height={20} />
            {/* <div className={`${style.NavBar_box_middle_search_input}`}> */}
              <input type="text" placeholder="Search tokens and pools" />
            {/* </div> */}
          </div>
        </div>
        {/* Right Section */}
        <div className={`${style.NavBar_box_right}`}>
          <div className={`${style.NavBar_box_right_box}`} onClick={() => setopenTokenBox((prev) => !prev)}>
            <div className={`${style.NavBar_box_right_box_img}`}>
              <Image src={images.ether} alt="ether" width={30} height={30} />
            </div>
            <div className={`${style.NavBar_box_right_box_heading} hidden lg:flex` }>
              <p>Select a Network</p>
            </div>
          </div>
          <button className={`${style.NavBar_box_right_button}`} onClick={() => setOpenModal(true)}>
            Address
          </button>
          {openModal && (
            <Modal setOpenModal={setOpenModal} connectWallet="Connect" />
          )}
        </div>
      </div>
          {openTokenBox && (
            <TokenList tokenData='hey' setopenTokenBox={setopenTokenBox} />
          )}

    </div>
  )
}

export default NavBar

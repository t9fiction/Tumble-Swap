'use client'
import React, { useState } from 'react'
import style from './NavBar.module.css'
import images from "../../assets"
import { TokenList, Model } from '../index'
import Image from 'next/image'
import Link from 'next/link'


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

  const [openModel, setOpenModel] = useState(false)
  const [openTokenBox, setopenTokenBox] = useState(false)

  return (
    <div className={`${style.NavBar}`}>
      <div className={`${style.NavBar_box}`}>
        <div className={`${style.NavBar_box_left}`}>
          <div className={`${style.NavBar_box_left_logo}`}>
            <Image src={images.uniswap} alt="logo" width={50} height={50} />
          </div>
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
        <div className={`${style.NavBar_box_right}`}>
          <div className={`${style.NavBar_box_right_box}`} onClick={() => setopenTokenBox((prev) => !prev)}>
            <div className={`${style.NavBar_box_right_box_heading}`}>
              <p>Select a token</p>
            </div>
          </div>
          {/* {openTokenBox && (
            <TokenList setopenTokenBox={setopenTokenBox} />
          )} */}
          <button className={`${style.NavBar_box_right_button}`} onClick={() => setOpenModel(true)}>
            Connect
          </button>
          {/* {openModel && (
            <Model setOpenModel={setOpenModel} />
          )} */}
        </div>
      </div>

    </div>
  )
}

export default NavBar

'use client'
import style from "./Search.module.css";
import Image from "next/image";
import images from "../../assets"
import { useState } from "react";
import { StaticImageData } from 'next/image';

interface SearchProps {
  openToken: React.Dispatch<React.SetStateAction<boolean>>;
  tokens: React.Dispatch<React.SetStateAction<{ name: string; image: string | StaticImageData }>>; // Updated type
  tokenData: string;
}


// Define the Search component
const Search: React.FC<SearchProps> = ({ openToken, tokens, tokenData }) => {
  const [active, setActive] = useState(1)

  const coin = [
    {
      img: images.ether,
      name: "DAI"
    },
    {
      img: images.ether,
      name: "WETH"
    },
    {
      img: images.ether,
      name: "DOGE"
    },
    {
      img: images.ether,
      name: "UNI"
    },
    {
      img: images.ether,
      name: "ETH"
    }
  ]

  return (
    <div className={style.Search}>
      <div className={style.Search_box}>
        <div className={style.Search_box_heading}>
          <h4>Select a token</h4>
          <Image src={images.close} alt="close" width={50} height={50} onClick={() => openToken(false)} />
        </div>
        <div className={style.Search_box_search}>
          <div className={style.Search_box_search_img}>
            <Image src={'/icons/search.svg'} width={20} height={20} alt="search" />
          </div>
          <input type="text" placeholder="Search name and paste the address" />
        </div>

        <div className={style.Search_box_tokens}>
          {
            coin.map((el, i) =>
              <span key={i + 1} className={active == i + 1 ? `${style.active}` : ""} onClick={() => (setActive(i + 1), tokens({
                name: el.name,
                image: el.img
              }))}>
                <Image src={el.img || images.ether} alt="coin" width={30} height={30} />
                <p>{el.name}</p>
              </span>
            )
          }

        </div>
      </div>

    </div>
  );
};

export default Search;

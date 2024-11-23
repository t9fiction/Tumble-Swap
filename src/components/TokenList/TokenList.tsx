import Image from "next/image";
import style from "./TokenList.module.css";
import images from "../../assets";

interface TokenListProps {
  tokenData: string;
  setopenTokenBox: React.Dispatch<React.SetStateAction<boolean>>;
}

const TokenList: React.FC<TokenListProps> = ({ tokenData, setopenTokenBox }) => {
  const data = [1, 2, 3, 4, 5]
  return (
    <div className={style.TokenList}>
      <p className={style.TokenList_close} onClick={() => setopenTokenBox(false)}>
        <Image src={images.close} alt="close" width={50} height={50} />
      </p>
      <div className={style.TokenList_title}>
        <h2>Your Token List</h2>
      </div>
      {data.map((item, index) => (
        <div className={style.TokenList_box} key={index}>
          <div className={style.TokenList_box_info}>
            <p className={style.TokenList_box_info_symbol}>
              HEy
            </p>
            <span>
              34
            </span> GOLD COIN
          </div>
        </div>
      ))}
    </div>
  );
};

export default TokenList;
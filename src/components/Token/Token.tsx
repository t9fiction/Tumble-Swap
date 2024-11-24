import images from '../../assets'
import style from './Token.module.css'
import { Toggle } from '../index'
import Image from 'next/image';

interface TokenProps {
  setOpenSetting: React.Dispatch<React.SetStateAction<boolean>>; // Correct type for setOpenSetting
}


const Token: React.FC<TokenProps> = ({ setOpenSetting }) => {
  return (
    <div className={style.Token}>
      <div className={style.Token_box}>
        <div className={style.Token_box_heading}>

          <h4>Settings</h4>
          <Image src={images.close} alt="close" width={50} height={50} onClick={() => setOpenSetting(false)} />
        </div>

        <p className={style.Token_box_para}>
          Slippage tolerance {''}
          <Image src={images.lock} alt='img' width={20} height={20} />
        </p>

        <div className={style.Token_box_input}>
          <button>Auto</button>
          <input type="text" name="" id="" placeholder='0.10%' />
        </div>

        <p className={style.Token_box_para}>
          Slippage tolerance {''}
          <Image src={images.lock} alt='img' width={20} height={20} />
        </p>

        <div className={style.Token_box_input}>
          <input type="text" name="" id="" placeholder='0.10%' />
          <button>minutes</button>
        </div>
        <div>Interface Setting</div>
        <div className={style.Token_box_toggle}>
          <p className={style.Token_box_para}>
            Transaction deadline
          </p>
          <Toggle />
        </div>
      </div>
    </div>
  );
};

export default Token;

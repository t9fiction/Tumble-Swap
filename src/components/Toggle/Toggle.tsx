import React from 'react'
import style from './Toggle.module.css'

interface ToggleProps {
  label: string;
}

const Toggle: React.FC<ToggleProps> = ({ label }) => {
  return (
    <div className={style.Toggle}>

      <div className={style.Toggle_switch_box}>
        <input type="checkbox" name={label} id={label} className={style.Toggle_checkbox} />
        <label htmlFor={label} className={style.Toggle_label} >
          <span className={style.Toggle_inner} />
          <span className={style.Toggle_switch} />

        </label>
      </div>

    </div>
  )
}

export default Toggle

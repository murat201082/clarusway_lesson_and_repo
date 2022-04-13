import React from 'react';
import style from "./login.module.css";
import LocalDiningTwoToneIcon from '@mui/icons-material/LocalDiningTwoTone';

const Style = () => {
  return (
    <div className={style.container}>
    <div >
    <div><LocalDiningTwoToneIcon style={{width:"100px", height:"100px"}}/></div>
    <h3>ED8EN/RECİPE</h3>
    <input className={style.usercode} type="text" minLength={2} maxLength={20} placeholder="USERNAME" required/>
    <br />
    <input className={style.usercode} type="password" minLength={8} maxLength={15} placeholder="PASSWORD" required/>
    <br />
    <button   type="submit"><a href="/login" className={style.sub}>LOGIN</a></button>
    

    </div>
    
    </div>
  )
}

export default Style;
import { NextPage } from 'next'
import style from "../styles/device.module.css"

import { MdOutlineArrowDropDown, MdOutlineArrowRight, MdOutlineArrowDropUp, MdOutlineArrowLeft } from "react-icons/md"
import { IoMdHome } from "react-icons/io"
import { useReducer } from 'react'
import { skinReducer } from '../reducers/skin.reducer'
import Head from 'next/head'

const INITIAL_STATE = {
  left: "",
  right: ""
}

const Home: NextPage = () => {
  const [state, dispatch] = useReducer(skinReducer, INITIAL_STATE)

  return (
      <div className={style.container}>
        <Head>
          <title>Nintendo Switch</title>
        </Head>
        <select
          className={style.select} 
          onChange={e => dispatch(e.target.value)}
        >
          <option value=""
          >Escolha uma skin</option>
          <option value="normal">Normal</option>
          <option value="marvel">Marvel</option>
          <option value="dc">Dc</option>
          <option value="mario">Mario</option>
        </select>


        <div className={style.left} 
          style={{backgroundImage: `url(${state.left})`}}
        >
          <div className={style.leftTop}>
            <button className={style.leftSelect} />
            <div className={style.leftAnalogic} />
          </div>
          <div className={style.leftBottom}>
            <div className={style.leftButtons}>
              <button className={style.leftButton}><MdOutlineArrowDropUp size={"25px"}/></button>
              <button className={style.leftButton}><MdOutlineArrowRight size={"25px"}/></button>
              <button className={style.leftButton} ><MdOutlineArrowDropDown size={"25px"}/></button>
              <button className={style.leftButton}><MdOutlineArrowLeft size={"25px"}/></button>
            </div>
            <button className={style.leftCapture} />
          </div>
        </div>

        <div className={style.middle}>
          <div className={style.wrapperScreen}>
            <div className={style.screen}></div>
          </div>
        </div>

        <div className={style.right} 
          style={{backgroundImage: `url(${state.right})`}}
        >
          <div className={style.rightTop}>
            <span className={style.rightSelect} >+</span>
            <div className={style.rightButtons}>
              <button className={style.rightButton}>X</button>
              <button className={style.rightButton}>A</button>
              <button className={style.rightButton} >B</button>
              <button className={style.rightButton}>Y</button>
            </div>
          </div>
          <div className={style.rightBottom}>
            <div className={style.rightAnalogic} />
            <div className={style.rightHome} >
              <IoMdHome />
            </div>
          </div>
        </div>
      </div>
  )
}

export default Home

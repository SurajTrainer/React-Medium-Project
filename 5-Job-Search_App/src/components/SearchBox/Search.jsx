import React from 'react'
import style from './SearchBox.module.css'
import { FcSearch } from "react-icons/fc";
import { CiCircleRemove } from "react-icons/ci";
import { IoHomeOutline } from "react-icons/io5";
import { CiLocationOn } from "react-icons/ci";

const Search = () => {
  return (
    <div>
      <div className='searchBox'>
        <form action="">
          <div className={style.searchdiv}>
            <div className={style.div2}>
              <FcSearch className={style.searchicon} />
              <input type="text" className={style.searchinput} placeholder='Search job Here' />
              <CiCircleRemove className={style.searchicon} />
            </div>
            <div className={style.div2}>
              <IoHomeOutline className={style.searchicon} />
              <input type="text" className={style.searchinput} placeholder='Search by Company...' />
              <CiCircleRemove className={style.searchicon} />
            </div>
            <div className={style.div2}>
              <CiLocationOn className={style.searchicon} />
              <input type="text" className={style.searchinput} placeholder='Search Location' />
              <CiCircleRemove className={style.searchicon} />
            </div>
            <button type="button" className={`btn btn-primary ${style.searchbtn}`}>Search</button>
          </div>
        </form>


    
        <label htmlFor="">Sort By : </label>
        <select className={style.select}>
          <option >Education</option>
          <option value="1">Higher Education</option>
          <option value="2">Higher + 2</option>
          <option value="3">Graduate</option>
        </select>



        <label htmlFor="">Type :</label>
        <select  className={style.select}>
          <option >Full time</option>
          <option value="1">Remote Job</option>
          <option value="2">Hybrid</option>
          <option value="3">Work From office </option>
        </select>



        <label htmlFor="">Level:</label>
        <select  className={style.select}>
          <option >Experienced</option>
          <option value="1">Fresher</option>
          <option value="2">intermediate</option>
          <option value="3">Advance</option>
        </select>


      <span>Clear All</span>
      </div>

    
    </div>
  )
}

export default Search

import React from "react";
import style from "./Header.module.css";
import { AiOutlineDown } from "react-icons/ai";
// import { CiSearch } from "react-icons/ci";


const Header = () => {
  return (
    <div className={style["Header-container"]}>
      <div className={style["search-container"]}>
              <input type="text" placeholder="Search"/>
              {/* <CiSearch/> */}
              <i class="fas fa-search search-icon"></i>
      </div>
            <h1 className={style["head"]}> Relevance</h1>
            <AiOutlineDown/>
            <h1 className={style["head"]}> All Brands</h1>
            <AiOutlineDown/>
    </div>
  );
};

export default Header;

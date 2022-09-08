import React from "react";
import classes from "./Header.module.css";
import album from "./../../../assets/album.png";

const Header = () => {
  return (
    <div className={classes["header_block"]}>
      <div className={classes["header_text"]}>
        <p className={classes["bigger_text"]}>Get Photos</p>
        <p className={classes["smaller_text"]}>from your phone</p>
      </div>
      <img className={classes["header_image"]} src={album}></img>
      {/* <hr className={classes["line"]}></hr> */}
    </div>
  );
};

export default Header;

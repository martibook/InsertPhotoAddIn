import React from "react";
import classes from "./Footer.module.css";
import icon from "./../../../assets/microsoft.png";

const Footer = () => (
  <div className={classes["footer_block"]}>
    <div className={classes["central"]}>
      <p className={classes["left_text"]}>Developed by</p>
      <img className={classes["icon"]} src={icon}></img>
      <p className={classes["right_text"]}>microsoft</p>
    </div>
  </div>
);

export default Footer;

/* eslint-disable react/prop-types */
import React from "react";
import { QRCodeSVG } from "qrcode.react";
import classes from "./ScanQRCode.module.css";

const ScanQRCode = (props) => {
  return (
    <div className={classes["scan_block"]}>
      <div className={classes["central"]}>
        <div className={classes["qrcode"]}>
          <QRCodeSVG value={props.value}></QRCodeSVG>
        </div>
        <div className={classes["text_box"]}>
          <p className={classes["text"]}>Scan to get photos</p>
        </div>
      </div>
    </div>
  );
};

export default ScanQRCode;

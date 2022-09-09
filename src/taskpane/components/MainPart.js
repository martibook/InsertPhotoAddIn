/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from "react";
// import PreviewPhoto from "./PreviewPhoto";
import classes from "./MainPart.module.css";
import ScanQRCode from "./ScanQRCode";

const MainPart = () => {
  const temp = "https://www.thesprucepets.com/cute-dog-breeds-we-can-t-get-enough-of-4589340";
  const [qrValue, setqrValue] = useState(temp);

  return (
    <div className={classes["main_block"]}>
      <ScanQRCode value={qrValue}></ScanQRCode>
    </div>
  );
};

export default MainPart;

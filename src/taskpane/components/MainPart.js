/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from "react";
import PreviewPhoto from "./PreviewPhoto";
import classes from "./MainPart.module.css";
import ScanQRCode from "./ScanQRCode";

const MainPart = () => {
  const temp = "https://www.thesprucepets.com/cute-dog-breeds-we-can-t-get-enough-of-4589340";
  const [qrValue, setqrValue] = useState(temp);
  const [isCodePage, setIsCodePage] = useState(true);

  const changePage = () => {
    setIsCodePage((prevState) => !prevState);
  };

  return (
    <div className={classes["main_block"]}>
      {isCodePage && <ScanQRCode value={qrValue}></ScanQRCode>}
      {!isCodePage && <PreviewPhoto></PreviewPhoto>}
      <button className={classes["change_page"]} onClick={changePage}>
        Change Page
      </button>
    </div>
  );
};

export default MainPart;

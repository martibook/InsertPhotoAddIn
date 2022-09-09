import React from "react";
import PreviewPhoto from "./PreviewPhoto";
import classes from "./MainPart.module.css";

const MainPart = () => {
  return (
    <div className={classes["main_block"]}>
      <PreviewPhoto></PreviewPhoto>
    </div>
  );
};

export default MainPart;

/* global console, Office */

import React, { useCallback } from "react";
import { DefaultButton } from "@fluentui/react";
import edith from "./../../../assets/edith.png";
import classes from "./PreviewPhoto.module.css";

const PreviewPhoto = () => {
  const insertLocalBase64Image = useCallback((callback) => {
    const url = edith;
    var xhr = new XMLHttpRequest();
    xhr.onload = () => {
      var reader = new FileReader();
      reader.onloadend = () => {
        const r = reader.result.replace("data:", "").replace(/^.+,/, "");
        callback(r);
      };
      reader.readAsDataURL(xhr.response);
    };
    xhr.open("GET", url);
    xhr.responseType = "blob";
    xhr.send();
  });

  const insertImage = useCallback(async (content) => {
    Office.context.document.setSelectedDataAsync(
      content,
      {
        coercionType: Office.CoercionType.Image,
      },
      (result) => {
        if (result.status === Office.AsyncResultStatus.Failed) {
          console.error(result.error.message);
        }
      }
    );
  });

  const click = useCallback(async () => {
    insertLocalBase64Image(insertImage);
  });

  return (
    <div className={classes["preview_block"]}>
      <img className={classes["preview_image"]} src={edith}></img>
      <DefaultButton className={classes["insert_button"]} onClick={click}>Insert Photo</DefaultButton>
    </div>
  );
};

export default PreviewPhoto;

import * as React from "react";
import PropTypes from "prop-types";
import { DefaultButton } from "@fluentui/react";

import edith from "./../../../assets/edith.png";

/* global console, Office, require */

export default class App extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      listItems: [],
    };
  }

  insertLocalBase64Image = (callback) => {
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
  };

  insertImage = async (content) => {
    /**
     * Insert your PowerPoint code here
     */
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
  };

  click = async () => {
    this.insertLocalBase64Image(this.insertImage);
  };

  render() {
    return (
      <div className="ms-welcome">
        <DefaultButton className="ms-welcome__action" iconProps={{ iconName: "ChevronRight" }} onClick={this.click}>
          Run
        </DefaultButton>
      </div>
    );
  }
}

App.propTypes = {
  title: PropTypes.string,
  isOfficeInitialized: PropTypes.bool,
};

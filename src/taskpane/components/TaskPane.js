import * as React from "react";
import Header from "./Header";
import Footer from "./Footer";
import MainPart from "./MainPart";

const TaskPane = () => {
  return (
    <div>
      <Header></Header>
      <MainPart></MainPart>
      <Footer></Footer>
    </div>
  );
};

export default TaskPane;

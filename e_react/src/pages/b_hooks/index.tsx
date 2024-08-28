import React from "react";
import UseState01 from "./a_UseState/UseState01";
import UseState02 from "./a_UseState/UseState02";
import UseState03 from "./a_UseState/UseState03";
import UseState04 from "./a_UseState/UseState04";
import UseState05 from "./a_UseState/UseState05";
import UseState06 from "./a_UseState/UseState06";
import ChildComponent from "./a_UseState/ChildComponent";

function Index() {
  return (
    <div>
      <h1 style={{ backgroundColor: "black", color: "white" }}>
        리액트의 Hook
      </h1>

      <h2>리액트 Hook - useState</h2>
      <UseState01 />
      <UseState02 />
      <UseState03 />
      <UseState04 />
      <UseState05 />
      <UseState06 />
      {/* <ChildComponent /> */}
    </div>
  );
}

export default Index;
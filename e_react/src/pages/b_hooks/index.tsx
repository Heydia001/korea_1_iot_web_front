import React from "react";
import UseState01 from "./a_UseState/UseState01";
import UseState02 from "./a_UseState/UseState02";
import UseState03 from "./a_UseState/UseState03";
import UseState04 from "./a_UseState/UseState04";
import UseState05 from "./a_UseState/UseState05";
import UseState06 from "./a_UseState/UseState06";
import ChildComponent from "./a_UseState/ChildComponent";
import UseRef01 from "./b_UseRef/UseRef01";
import UseRef02 from "./b_UseRef/UseRef02";
import Practice01 from "./a_UseState/Practice01";

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
      
      <Practice01 />

      {/* <ChildComponent /> */}
      <hr />
      <UseRef01 />
      <UseRef02 />
    </div>
  );
}

export default Index;
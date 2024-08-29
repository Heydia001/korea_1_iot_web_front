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
import UseRef03 from "./b_UseRef/UserRef03";
import UseEffect01 from "./c_UseEffect/UseEffect01";
import UseEffect02 from "./c_UseEffect/UseEffect02";
// import UseEffect03 from "./c_UseEffect/UseEffect03";
import UseMemo01 from "./d_Use/UseMemo01";
import UseMemo02 from "./d_Use/UseMemo02";
import UseCallback from "./d_Use/UseCallback";

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
      <UseRef03 />
      <hr />
      {/*  */}
      <UseEffect01 />
      <UseEffect02 />
      {/* <UseEffect03 /> */}
      {/* <WebCampractice /> */}

      <UseMemo01 />
      <UseMemo02 />

      <UseCallback />

    </div>
  );
}

export default Index;
import React from "react";
import UseState01 from "./a_UseState/UseState01";

function Index() {
  return (
    <div>
      <h1 style={{ backgroundColor: "black", color: "white" }}>
        리액트의 Hook
      </h1>

      <h2>리액트 Hook - useState</h2>
      <UseState01 />
    </div>
  );
}

export default Index;
import React from "react";
import BaceButton from "./BaceButton";

export const App: React.FC = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "500px",
        margin: "0 auto",

        justifyContent: "center",
        height: "100vh",
        flex: 1,
      }}
    >
      <div style={{ textAlign: "center" }}>
        <BaceButton>Usual Button</BaceButton>
      </div>
      <div style={{ textAlign: "center" }}>
        <BaceButton mt={50}>Usual Button</BaceButton>
      </div>
    </div>
  );
};

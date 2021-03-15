import React from "react";
import { FlexBox } from "react-layout-library";
import BaceButton from "./BaceButton";

export const App: React.FC = () => {
  return (
    <FlexBox ai="center" jc="center" h="100vh" direction="column">
      <div>
        <BaceButton ml={200}>Usual Button</BaceButton>
      </div>
      <div>
        <BaceButton mt={200}>Usual Button</BaceButton>
      </div>
    </FlexBox>
  );
};

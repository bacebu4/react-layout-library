import React from "react";
import { FlexBox } from "react-layout-library";
import { StyledButtonWithStyles } from "./StyledButton";
import { FunctionComponentButtonWithStyles } from "./FunctionComponentButton";

export const App: React.FC = () => {
  return (
    <FlexBox ai="center" jc="center" h="100vh" direction="column">
      <div>
        <StyledButtonWithStyles ml={200}>Usual Button</StyledButtonWithStyles>
      </div>
      <div>
        <StyledButtonWithStyles mt={200}>Usual Button</StyledButtonWithStyles>
      </div>
      <div>
        <FunctionComponentButtonWithStyles mt={100} />
      </div>
    </FlexBox>
  );
};

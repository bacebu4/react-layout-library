import React from "react";
import renderer from "react-test-renderer";
import styled from "styled-components";

import { withLayoutStyles } from "../src";

const StyledButton = styled.button`
  padding: 12px 16px;
`;

const FunctionComponentButton = ({ className }) => {
  return (
    <button className={className} type="button">
      hey
    </button>
  );
};

describe("withLayoutStyles", () => {
  it("adds mt and ml props", () => {
    const ModifiedComponent = withLayoutStyles(StyledButton);
    const tree = renderer
      .create(
        <ModifiedComponent mt={10} ml={10}>
          Hey
        </ModifiedComponent>
      )
      .toJSON();
    console.log(tree);
    expect(tree).toHaveStyleRule("margin-top", "10px");
    expect(tree).toHaveStyleRule("margin-left", "10px");
  });

  it("correctly works with FC", () => {
    const ModifiedComponent = withLayoutStyles(FunctionComponentButton);
    const tree = renderer
      .create(<ModifiedComponent mt={10} ml={10} />)
      .toJSON();
    expect(tree).toHaveStyleRule("margin-top", "10px");
    expect(tree).toHaveStyleRule("margin-left", "10px");
  });
});

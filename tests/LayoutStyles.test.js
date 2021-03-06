import React from "react";
import renderer from "react-test-renderer";
import styled from "styled-components";

import { withLayoutStyles } from "../src";

const StyledButton = styled.button`
  padding: 12px 16px;
  margin-top: 9px;
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
        <ModifiedComponent mt={10} ml={11} mr={12} mb={13}>
          Hey
        </ModifiedComponent>
      )
      .toJSON();
    expect(tree).toHaveStyleRule("margin-top", "10px");
    expect(tree).toHaveStyleRule("margin-left", "11px");
    expect(tree).toHaveStyleRule("margin-right", "12px");
    expect(tree).toHaveStyleRule("margin-bottom", "13px");
  });

  it("correctly works with FC", () => {
    const ModifiedComponent = withLayoutStyles(FunctionComponentButton);
    const tree = renderer
      .create(<ModifiedComponent mt={10} ml={11} mr={12} mb={13} />)
      .toJSON();
    expect(tree).toHaveStyleRule("margin-top", "10px");
    expect(tree).toHaveStyleRule("margin-left", "11px");
    expect(tree).toHaveStyleRule("margin-right", "12px");
    expect(tree).toHaveStyleRule("margin-bottom", "13px");
  });

  it("does not overrides what was not used", () => {
    const ModifiedComponent = withLayoutStyles(StyledButton);
    const tree = renderer
      .create(
        <ModifiedComponent ml={11} mr={12} mb={13}>
          Hey
        </ModifiedComponent>
      )
      .toJSON();
    expect(tree).toHaveStyleRule("margin-top", "9px");
  });
});

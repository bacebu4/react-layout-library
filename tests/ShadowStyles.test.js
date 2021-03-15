import React from "react";
import renderer from "react-test-renderer";
import styled from "styled-components";

import { withShadowStyles, createShadowStyle } from "../src";

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
  it("adds shadow-box property", () => {
    const ModifiedComponent = withShadowStyles(StyledButton);
    const tree = renderer
      .create(<ModifiedComponent>Hey</ModifiedComponent>)
      .toJSON();
    expect(tree).toHaveStyleRule(
      "box-shadow",
      "3px 2px 17px 2px rgba(114,114,114,0.15)"
    );
  });

  it("correctly works with FC", () => {
    const ModifiedComponent = withShadowStyles(FunctionComponentButton);
    const tree = renderer.create(<ModifiedComponent />).toJSON();
    expect(tree).toHaveStyleRule(
      "box-shadow",
      "3px 2px 17px 2px rgba(114,114,114,0.15)"
    );
  });
});

describe("createShadowStyle", () => {
  it("adds default shadow-box property", () => {
    const withShadowStylesCustom = createShadowStyle();
    const ModifiedComponent = withShadowStylesCustom(StyledButton);
    const tree = renderer
      .create(<ModifiedComponent>Hey</ModifiedComponent>)
      .toJSON();
    expect(tree).toHaveStyleRule(
      "box-shadow",
      "3px 2px 17px 2px rgba(114,114,114,0.15)"
    );
  });

  it("correctly works with FC", () => {
    const withShadowStylesCustom = createShadowStyle();
    const ModifiedComponent = withShadowStylesCustom(FunctionComponentButton);
    const tree = renderer.create(<ModifiedComponent />).toJSON();
    expect(tree).toHaveStyleRule(
      "box-shadow",
      "3px 2px 17px 2px rgba(114,114,114,0.15)"
    );
  });

  it("correctly adds custom properties", () => {
    const withShadowStylesCustom = createShadowStyle({
      x: 1,
      y: 1,
      b: 1,
      s: 1,
      color: "#000",
    });
    const ModifiedComponent = withShadowStylesCustom(StyledButton);
    const tree = renderer
      .create(<ModifiedComponent>Hey</ModifiedComponent>)
      .toJSON();
    expect(tree).toHaveStyleRule("box-shadow", "1px 1px 1px 1px #000");
  });
});

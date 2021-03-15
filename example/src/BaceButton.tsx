import styled from "styled-components";
import { withLayoutStyles } from "../../src/LayoutStyles";
import { createShadowStyle } from "../../src/ShadowStyles";

type BaceButtonProps = {
  isSolid?: boolean;
};

const withShadowStyles = createShadowStyle({
  x: 1,
  y: 1,
  b: 1,
  s: 1,
  color: "#000",
});

const BaceButton = styled.button<BaceButtonProps>`
  color: ${(props) => (props.isSolid ? "#fff" : "#6A63DD")};
  background-color: ${(props) => (props.isSolid ? "#6A63DD" : "#6A63DD1a")};
  flex: 1;
  padding: 12px 16px;
  border: 0;
  border-radius: 16px;
  font-family: inherit;
  font-weight: 600;
  cursor: pointer;
`;
export default withShadowStyles(withLayoutStyles(BaceButton));

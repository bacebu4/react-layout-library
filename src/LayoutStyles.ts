/* eslint-disable @typescript-eslint/ban-types */
import styled, { StyledComponent } from "styled-components";

type LayoutStylesProps = {
  mt?: number;
  ml?: number;
  mr?: number;
  mb?: number;
};

export function withLayoutStyles<P>(
  Component: React.FC<P>
): StyledComponent<React.FC<P>, object, P & LayoutStylesProps, never> {
  const ComponentWithAddedProps = styled(Component)<LayoutStylesProps & P>`
    ${(props) => {
      if (props.mt) {
        return `margin-top: ${props.mt}px;`;
      }
      return "";
    }}
    ${(props) => {
      if (props.mb) {
        return `margin-bottom: ${props.mb}px;`;
      }
      return "";
    }}
    ${(props) => {
      if (props.ml) {
        return `margin-left: ${props.ml}px;`;
      }
      return "";
    }}
    ${(props) => {
      if (props.mr) {
        return `margin-right: ${props.mr}px;`;
      }
      return "";
    }}
  `;

  return ComponentWithAddedProps;
}

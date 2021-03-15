/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/ban-types */
import styled, { StyledComponent } from "styled-components";

interface Options {
  x: number;
  y: number;
  b: number;
  s: number;
  color: string;
}

export function createShadowStyle(
  opts: Options = {
    x: 3,
    y: 2,
    b: 17,
    s: 2,
    color: "rgba(114, 114, 114, 0.15)",
  }
) {
  return function withCustomShadowStyles<P>(
    Component: React.FC<P>
  ): StyledComponent<React.FC<P>, any, {}, never> {
    const ComponentWithAddedProps = styled(Component)`
      box-shadow: ${opts.x}px ${opts.y}px ${opts.b}px ${opts.s}px ${opts.color};
    `;

    return ComponentWithAddedProps;
  };
}

export function withShadowStyles<P>(
  Component: React.FC<P>
): StyledComponent<React.FC<P>, any, {}, never> {
  const ComponentWithAddedProps = styled(Component)`
    box-shadow: 3px 2px 17px 2px rgba(114, 114, 114, 0.15);
  `;

  return ComponentWithAddedProps;
}

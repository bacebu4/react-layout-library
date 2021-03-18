import styled from "styled-components";

interface FlexBoxProps {
  jc?:
    | "space-around"
    | "space-between"
    | "space-evenly"
    | "stretch"
    | "center"
    | "end"
    | "flex-end"
    | "flex-start";
  ai?:
    | "center"
    | "end"
    | "flex-end"
    | "flex-start"
    | "self-end"
    | "self-start"
    | "start"
    | "baseline"
    | "normal"
    | "stretch";
  mt?: number;
  ml?: number;
  mr?: number;
  mb?: number;
  pt?: number;
  pl?: number;
  pr?: number;
  pb?: number;
  w?: string;
  h?: string;
  margin?: string;
  padding?: string;
  direction?: "column";
}

export const FlexBox = styled.div<FlexBoxProps>`
  display: flex;
  flex-direction: ${(props) => props.direction};
  justify-content: ${(props) => props.jc};
  align-items: ${(props) => props.ai};
  margin-left: ${(props) => props.ml}px;
  margin-right: ${(props) => props.ml}px;
  margin-bottom: ${(props) => props.ml}px;
  margin-top: ${(props) => props.mt}px;
  padding-left: ${(props) => props.pl}px;
  padding-right: ${(props) => props.pr}px;
  padding-bottom: ${(props) => props.pb}px;
  padding-top: ${(props) => props.pt}px;
  margin: ${(props) => props.margin};
  padding: ${(props) => props.padding};
  width: ${(props) => props.w};
  height: ${(props) => props.h};
`;

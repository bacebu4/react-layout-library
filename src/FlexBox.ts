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

  ${(props) => {
    if (props.ml) {
      return `margin-left: ${props.ml}px;`;
    }
    return "";
  }}

  ${(props) => {
    if (props.mt) {
      return `margin-top: ${props.mt}px;`;
    }
    return "";
  }}

  ${(props) => {
    if (props.mr) {
      return `margin-right: ${props.mr}px;`;
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
    if (props.pl) {
      return `padding-left: ${props.pl}px;`;
    }
    return "";
  }}

  ${(props) => {
    if (props.pt) {
      return `padding-top: ${props.pt}px;`;
    }
    return "";
  }}

  ${(props) => {
    if (props.pr) {
      return `padding-right: ${props.pr}px;`;
    }
    return "";
  }}

  ${(props) => {
    if (props.pl) {
      return `padding-bottom: ${props.pb}px;`;
    }
    return "";
  }}

  ${(props) => {
    if (props.margin) {
      return `margin: ${props.margin};`;
    }
    return "";
  }}

  ${(props) => {
    if (props.padding) {
      return `padding: ${props.padding};`;
    }
    return "";
  }}

  width: ${(props) => props.w};
  height: ${(props) => props.h};
`;

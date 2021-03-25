/// <reference types="react" />
declare module "LayoutStyles" {
    import { StyledComponent } from "styled-components";
    type LayoutStylesProps = {
        mt?: number;
        ml?: number;
        mr?: number;
        mb?: number;
    };
    export function withLayoutStyles<P>(Component: React.FC<P>): StyledComponent<React.FC<P>, object, P & LayoutStylesProps, never>;
}
declare module "ShadowStyles" {
    import { StyledComponent } from "styled-components";
    interface Options {
        x: number;
        y: number;
        b: number;
        s: number;
        color: string;
    }
    export function createShadowStyle(opts?: Options): <P>(Component: import("react").FC<P>) => StyledComponent<import("react").FC<P>, any, {}, never>;
    export function withShadowStyles<P>(Component: React.FC<P>): StyledComponent<React.FC<P>, any, {}, never>;
}
declare module "FlexBox" {
    interface FlexBoxProps {
        jc?: "space-around" | "space-between" | "space-evenly" | "stretch" | "center" | "end" | "flex-end" | "flex-start";
        ai?: "center" | "end" | "flex-end" | "flex-start" | "self-end" | "self-start" | "start" | "baseline" | "normal" | "stretch";
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
    export const FlexBox: import("styled-components").StyledComponent<"div", any, FlexBoxProps, never>;
}
declare module "react-layout-library" {
    import { withLayoutStyles } from "LayoutStyles";
    import { withShadowStyles, createShadowStyle } from "ShadowStyles";
    import { FlexBox } from "FlexBox";
    export { withLayoutStyles, withShadowStyles, createShadowStyle, FlexBox };
}

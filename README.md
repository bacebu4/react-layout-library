[![version](https://img.shields.io/npm/v/react-layout-library.svg?style=flat-square)](https://www.npmjs.com/package/react-layout-library)
[![size](https://img.shields.io/badge/self%20size-2.82%20kB-green)](https://bundlephobia.com/result?p=react-layout-library@1.0.1)
[![license](https://img.shields.io/github/license/mashape/apistatus.svg?style=flat-square)](http://opensource.org/licenses/MIT)

# TOC

- [Usage](#usage)
- [Usage with Function Components](#usage-with-function-components)
- [`withShadowStyles`, `createShadowStyles`](#withshadowstyles-createshadowstyles)
- [`createShadowStyles` API](<#createshadowstyles(options)-api>)
- [`<FlexBox>` API](#flexbox-api)
- [Development](<#development-(src,-lib-and-the-build-process)>)
- [License](#license)

# React Layout Library by [@bacebu4](https://www.instagram.com/ui.bace/)

React Layout Library is used for the unified system of laying out React Components by adding to them specified props such as `mt` (stands for _margin-top_) and `ml` in `px` units.

The props are being added by applying Higher Order Components (HOC) to your components.

Besides that the library provides HOC for creating unified style for shadows and `FlexBox` component for easy layouts.

**NOTE**: You can use those HOC's separately from each other.

## Usage

Check [example/src/\*](/example/src) for more in-depth usage.

First, install the dependencies

```shell
npm i -D styled-components
npm i -D react-layout-library
```

Use `withLayoutStyles` to add `mt` and `ml` props to your styled component.

Use `createShadowStyles` to create custom HOC with custom `box-shadow` properties applied.

```js
// StyledButton.tsx

import styled from "styled-components";
import { withLayoutStyles, createShadowStyles } from "react-layout-library";

const withShadowStyles = createShadowStyles({
	x: 2,
	y: 3,
	b: 10,
	s: 12,
	color: "#0001A",
});

const StyledButtonLayout = styled.button`
	padding: 12px 16px;
`;

export const StyledButton = withShadowStyles(
	withLayoutStyles(StyledButtonLayout)
);
```

```js
// App.tsx

import { StyledButton } from "./StyledButton";
import { FlexBox } from "react-layout-library";

<FlexBox jc="center" ai="center" height="100vh">
	<StyledButton>Sample button</StyledButton>

	<StyledButton mt={3} ml={1} mb={6} mr={4}>
		Sample button with margins
	</StyledButton>
</FlexBox>;
```

## Usage with Function Components

```js
// FunctionComponentButton.tsx

import { withLayoutStyles } from "react-layout-library";

const FunctionComponentButtonLayout: React.FC<{ className?: string }> = ({
	className,
}) => {
	return (
		<button className={className} type="button">
			hey
		</button>
	);
};

export const FunctionComponentButton = withLayoutStyles(
	FunctionComponentButtonLayout
);
```

```js
// App.tsx

import { FunctionComponentButton } from "./StyledButton";

<FunctionComponentButton>
	Sample button
</FunctionComponentButton>

<FunctionComponentButton mt={32} ml={16} mb={16} mr={4}>
	Sample button with margins
</FunctionComponentButton>
```

## `withShadowStyles`, `createShadowStyles`

- `withShadowStyles` is the HOC which gives you the default nice looking soft shade.
- `createShadowStyles` is the function for creating your own HOC's (**note:** passing down the empty object into the function gives you the same shadow values as using `withShadowStyles`)

### `createShadowStyles(options)` API

**options** object required
{
x: number;
y: number;
b: number;
s: number;
color: string
}

| Name  | Default                     | Description                                                                                                                                                                 |
| ----- | --------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| x     | 2                           | offset-x. Specifies the horizontal distance                                                                                                                                 |
| y     | 3                           | offset-y. Specifies the vertical distance                                                                                                                                   |
| b     | 17                          | blur-radius. The larger this value, the bigger the blur, so the shadow becomes bigger and lighter. Negative values are not allowed.                                         |
| s     | 2                           | spread-radius. Positive values will cause the shadow to expand and grow bigger, negative values will cause the shadow to shrink.                                            |
| color | 'rgba(114, 114, 114, 0.15)' | The basic string that you would usually write in CSS. See [color](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value) values for possible keywords and notations. |

## `<FlexBox>` API

| Name      | Type                                                                                                                            | Description                 |
| --------- | ------------------------------------------------------------------------------------------------------------------------------- | --------------------------- |
| direction | "column"                                                                                                                        | If not specified then "row" |
| jc        | "space-around" \| "space-between" \| "space-evenly" \| "stretch" \| "center" \| "end" \| "flex-end" \| "flex-start"             | justify-content             |
| ai        | "center" \| "end" \| "flex-end" \| "flex-start" \| "self-end" \| "self-start" \| "start" \| "baseline" \| "normal" \| "stretch" | align-items                 |
| mt        | number                                                                                                                          | margin-top                  |
| mb        | number                                                                                                                          | margin-bottom               |
| ml        | number                                                                                                                          | margin-left                 |
| mr        | number                                                                                                                          | margin-right                |
| pt        | number                                                                                                                          | padding-top                 |
| pb        | number                                                                                                                          | padding-bottom              |
| pl        | number                                                                                                                          | padding-left                |
| pr        | number                                                                                                                          | padding-right               |
| margin    | string                                                                                                                          | margin                      |
| padding   | string                                                                                                                          | padding                     |
| w         | string                                                                                                                          | width                       |
| h         | string                                                                                                                          | height                      |

## Development (`src`, `lib` and the build process)

**NOTE:** The source code for the component is in `src`. A transpiled CommonJS version (generated with Babel) is available in `lib` for use with node.js, browserify and webpack.

To build, watch and serve the examples (which will also watch the component source), run `npm run dev`.

## License

[MIT Licensed](/LICENSE.md)
Copyright (c) 2021 Vasilii Krasikov

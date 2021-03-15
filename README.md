# React Layout Library by [@bacebu4](https://www.instagram.com/ui.bace/)

React Layout Library is used for the unified system of laying out React Components by adding to them specified props such as `mt` (stands fro *margin-top*) and `ml` in `px` units.

The props are being added by applying Higher Order Components (HOC) to your components.

Also the library provides HOC for creating unified style for shadows. Check the example usage below.

**NOTE**: You can use those HOC's separately from each other.

## Usage

Check [example/src/\*](/examples/src) for more in-depth usage.

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
import { withLayoutStyles } from "react-layout-library";
import { createShadowStyles } from "react-layout-library";

const withShadowStyles = createShadowStyles({
	x: 2,
	y: 3,
	b: 10,
	s: 12,
	color: '#0001A'
})

const StyledButtonLayout = styled.button`
  padding: 12px 16px;
`;

export const StyledButton = withShadowStyles(withLayoutStyles(SomeButtonLayout));
```

```js
// App.tsx
import { StyledButton } from './StyledButton';

<StyledButton>Sample button</StyledButton>

<StyledButton mt={32} ml={16}>
	Sample button with margin top=32px and margin-left=16px
</StyledButton>
```

## Development (`src`, `lib` and the build process)

**NOTE:** The source code for the component is in `src`. A transpiled CommonJS version (generated with Babel) is available in `lib` for use with node.js, browserify and webpack.

To build, watch and serve the examples (which will also watch the component source), run `npm run dev`.

## License

[MIT Licensed](/LICENSE.md)
Copyright (c) 2021 Vasilii Krasikov

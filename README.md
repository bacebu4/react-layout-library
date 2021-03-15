# React Layout Library by [@bacebu4](https://www.instagram.com/ui.bace/)

React Layout Library is used for the unified system of laying out React Components by adding to them specified props such as `mt` (stands fro *margin-top*) and `ml` in `px` units.

The props are being added by applying Higher Order Components (HOC) to your components.

Also the library provides HOC for creating unified style for shadows. Check the example usage below.

**NOTE**: You can use those HOC's separately from each other.

## Usage

Check example/src/\* for usage.

```js
// SomeButton.tsx

import styled from "styled-components";
import { withLayoutStyles } from "react-layout-library";
import { withShadowStyles } from "react-layout-library";

const SomeButton = styled.button`
  color: #fff;
  background-color: #6A63DD;
  flex: 1;
  padding: 12px 16px;
  border: 0;
  border-radius: 16px;
  font-family: inherit;
  font-weight: 600;
  cursor: pointer;
`;

export default withShadowStyles(withLayoutStyles(SomeButton));
```

```js
// App.tsx
import SomeButton from 'SomeButton';

<SomeButton>Sample button</SomeButton>

<SomeButton mt={32} ml={16}>
	Sample button with margin top=32px and margin-left=16px
</SomeButton>
```

## Development (`src`, `lib` and the build process)

**NOTE:** The source code for the component is in `src`. A transpiled CommonJS version (generated with Babel) is available in `lib` for use with node.js, browserify and webpack.

To build, watch and serve the examples (which will also watch the component source), run `npm run dev`.

## License

[MIT Licensed](/LICENSE.md)
Copyright (c) 2021 Vasilii Krasikov

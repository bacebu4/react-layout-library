import React from "react";
import renderer from "react-test-renderer";

import { FlexBox } from "../src";

describe("FlexBox", () => {
  it("renders all necessary props", () => {
    const tree = renderer
      .create(
        <FlexBox
          direction="column"
          jc="center"
          ai="center"
          mt={16}
          ml={16}
          pr={16}
          w="100%"
          h="100vh"
          margin="0 auto"
        >
          Hey
        </FlexBox>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});

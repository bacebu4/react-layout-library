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
          mr={16}
          mb={16}
          ml={16}
          pt={16}
          pr={16}
          pb={16}
          pl={16}
          w="100%"
          h="100vh"
          margin="0 auto"
          padding="0 auto"
        >
          Hey
        </FlexBox>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("doesn't renders not specified props", () => {
    const tree = renderer
      .create(
        <FlexBox
          direction="column"
          jc="center"
          ai="center"
          mr={16}
          mb={16}
          ml={16}
          pt={16}
          pr={16}
          pb={16}
          pl={16}
          w="100%"
          h="100vh"
          margin="0 auto"
          padding="0 auto"
        >
          Hey
        </FlexBox>
      )
      .toJSON();
    expect(tree).not.toHaveStyleRule("margin-top");
  });
});

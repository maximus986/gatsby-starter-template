/** @jsx jsx */
import { jsx } from 'theme-ui';
import { useResponsiveValue, useBreakpointIndex } from '@theme-ui/match-media';

import React from 'react';
import { Container } from 'components';

const IndexPage = () => {
  // Return literal values:
  const color = useResponsiveValue(['red', 'green', 'blue']);
  // Or provide a function to access theme values:
  const themeColor = useResponsiveValue((theme) => [
    theme?.colors?.primary,
    theme?.colors?.secondary,
    theme?.colors?.alert,
  ]);
  // `useBreakpointIndex` returns the index of the currently matched media query:
  const index = useBreakpointIndex();
  return (
    <Container>
      <h1 sx={{ color: themeColor }}>Gatsby Starter Template</h1>
      <p>
        The current color is: {color}, and the current index is: {index}
      </p>
    </Container>
  );
};

export default IndexPage;

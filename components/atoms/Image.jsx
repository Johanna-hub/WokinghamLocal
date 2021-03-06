import styled from 'styled-components';
import { system } from '@styled-system/core';
import { compose, space, color, border, layout, position, flexbox } from 'styled-system';
import { Platform } from 'react-primitives';

import { Image as _Image } from '../primitives';

const objectFit = system({
  objectFit: {
    property: 'objectFit',
    scale: 'objectFit',
  },
});


const Image = styled(_Image)`
  ${compose(space, color, border, layout, position, flexbox)}
  ${Platform.OS === 'web' ? objectFit : ''}
`;

Image.defaultProps = {
  display: 'flex',
  objectFit: 'cover',
  // objectPosition: '50% 50%',
}

export default Image;

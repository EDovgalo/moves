import React from 'react';
import { withKnobs, boolean } from '@storybook/addon-knobs';
import { LoadSpinner } from './LoadSpinner';

export default {
  title: 'Load Spinner',
  decorators: [withKnobs],
};

export const withLoadSpinner = () => (
  <LoadSpinner isLoading={boolean('isLoading', false)}><div>Content</div></LoadSpinner>
);

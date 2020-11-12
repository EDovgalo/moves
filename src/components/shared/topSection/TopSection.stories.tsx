import React from 'react';
import { withKnobs, boolean } from '@storybook/addon-knobs';
import { TopSection } from './TopSection';
import { Search } from '../movieSection/components/Search';

export default {
  title: 'Top section',
  decorators: [withKnobs],
};

export const topSection = () => (
  <TopSection>
    {boolean('withContent', true)
      ? <Search onSearch={null} title="With Content" /> : null}
  </TopSection>
);

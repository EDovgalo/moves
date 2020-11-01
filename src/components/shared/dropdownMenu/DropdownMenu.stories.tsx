import React from 'react';
import { withKnobs, text } from '@storybook/addon-knobs';
import { DropdownMenu } from './DropdownMenu';
import { DropdownMenuItem } from './DropdownMenuItem';

export default {
  title: 'Drop down menu',
  decorators: [withKnobs],
};

export const DropdownSelect = () => (
  <div className="storybook-dropdown-main">
    <div className="storybook-dropdown">
      <DropdownMenu>
        <DropdownMenuItem title={text('name 1', 'item 1')} />
        <DropdownMenuItem title={text('name 2', 'item 2')} />
      </DropdownMenu>
    </div>
  </div>
);

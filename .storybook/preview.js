import '@storybook/addon-knobs/register';
import '../src/index.scss';
import './styles.scss';

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
}

import { addons } from '@storybook/addons';
import { themes } from '@storybook/theming';
console.log("from manager", themes)
addons.setConfig({
  theme: themes.light,
});
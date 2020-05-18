import '../scss/test.scss';

import centered from '@storybook/addon-centered/html';
import { action } from '@storybook/addon-actions';
import { withA11y } from '@storybook/addon-a11y';



export default { 
	title: 'Elements/Button',
	decorators:[centered, withA11y]
};

export const withText = () => '<button class="btn btn-primary red">Hello World</button>';

export const withEmoji = () => {
  const button = document.createElement('button');
  button.innerText = '😀 😎 👍 💯';
	button.onclick = action('button-click');
  return button;
};

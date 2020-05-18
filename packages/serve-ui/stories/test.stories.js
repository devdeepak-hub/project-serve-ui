import '../scss/test.scss';

import centered from '@storybook/addon-centered/html';


export default { 
	title: 'Button',
	decorators:[centered]
};

export const withText = () => '<button class="btn btn-primary red">Hello World</button>';

export const withEmoji = () => {
  const button = document.createElement('button');
  button.innerText = '😀 😎 👍 💯';
  return button;
};

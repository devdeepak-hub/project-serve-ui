const path = require('path');

const custom = require('../webpack.config.js');


module.exports = {
	stories: ['../stories/**/*.stories.[tj]s'],

	webpackFinal: (config) => {


    		return { 
			...config, 
			module: { 
				...config.module, 
				rules: custom.module.rules 
			},
			resolve: {
				alias: {
					...config.resolve.alias,
					...custom.resolve.alias
				}
			}
		};
 	},

	addons: [
        '@storybook/addon-knobs',
	'@storybook/addon-actions',		
        '@storybook/addon-viewport',
	'@storybook/addon-storysource',
	'@storybook/addon-a11y'
	]
	
};



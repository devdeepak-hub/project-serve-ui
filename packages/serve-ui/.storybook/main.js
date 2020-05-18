const path = require('path');
console.log(`THIS IS THE __DIRNAME ${__dirname}`);

module.exports = {
	stories: ['../**/*.stories.[tj]s'],
	webpackFinal: async (config, { configType }) => {

		// `configType` has a value of 'DEVELOPMENT' or 'PRODUCTION'
    		// You can change the configuration based on that.
    		// 'PRODUCTION' is used when building the static version of storybook.

    		// Make whatever fine-grained changes you need

		config.module.rules.push({
      			test: /\.scss$/,
      			use: ['style-loader', 'css-loader', 'sass-loader']
    		});


		// Return the altered config
    		return config;
  	},
	addons: [
        	'@storybook/addon-knobs',
		'@storybook/addon-actions',		
        	'@storybook/addon-viewport',
        	'@storybook/addon-storysource',
		'@storybook/addon-a11y'
	]
	
};



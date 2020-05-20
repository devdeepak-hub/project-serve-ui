const path = require('path');


module.exports = {
	entry : './src/index.js',
	output: {
		filename: 'name[bundle].js',
		path: path.resolve(__dirname, '../dist')
	},
	module : {
		rules: [
			{
                		test: /\.(js|jsx)$/,
                		exclude: /(node_modules|bower_components)/,
                		loader: "babel-loader",
                		options: { presets: ["@babel/env"] }
            		},

			{
                		test: /\.s[ac]ss$/i,
				use: ['style-loader', 'css-loader', 'sass-loader']

            		},
			{
                		test: /\.(png|jpg|gif)$/,
                		use: [
                    			'file-loader',
                		],
            		},
		]
	},
	resolve: {
    		alias: {
			'@serve-ui/react' : path.resolve(__dirname, 'src/index.js'),
      			Elements: path.resolve(__dirname, 'src/elements/'),
    		}
  	}
}






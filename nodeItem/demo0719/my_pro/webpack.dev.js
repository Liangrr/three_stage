module.exports = {
	
	entry:'./src/main.js',
	output:{
		path:__dirname,
		filename:'dist/bundle.js'
	},
	module:{
		loaders:[
			{test:/\.css$/,loader: 'style-loader!css-loader'},
			{test: /\.(png|jpg|jpeg|gif|ttf|svg)$/,loader: 'url-loader'}
		]
	}
}

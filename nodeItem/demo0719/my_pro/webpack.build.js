module.exports = {
//	这个是输入路径,相对路径
	entry:'./src/main.js',
//	输出路径,绝对路径
	output:{
//		__dirname是当前路径前的绝对路径的那一部分
//		例如我的是C:\wamp\www\nodeItem\demo0719\my_pro
		path:__dirname+'/dist',
//		输出文件
		filename:'bundle.js'
	},
//	配置使用的模块
	module:{
//		配置使用的加载器
		loaders:[
//			需要处理的文件类型，正则跟文件路径匹配,这里有俩个,第一个是处理css,第二个是处理普通文件的loader
			{test:/\.css$/,loader: 'style-loader!css-loader'},
			{test: /\.(png|jpg|jpeg|gif|ttf|svg)$/,loader: 'url-loader'}
		]
	}
}

module.exports = {
	entry: __dirname + '/newsfeedsystem/static/src/js/app.ts',
	output: {
		path: __dirname + '/newsfeedsystem/static/dist',
		filename: 'bundle.js'
	},
	resolve: {
		extensions: ['.ts', '.js']
	},
	module: {
		loaders: [
			{
				test: /\.ts$/,
				loader: 'ts-loader'
            },
			{
				test: /\.js$/,
				loader: 'babel-loader',
				query: {
					presets: ['es2015']
				}
            }

        ]
	}
}
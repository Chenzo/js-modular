
//import { uglify } from "rollup-plugin-uglify";
import { terser } from "rollup-plugin-terser";

export default [
	{
		input: 'www/js/main.js',
		output: {
			name: 'mainPackage',
			file: 'www/js/main.min.js',
			format: 'umd',
			sourcemap: true
		},
		plugins: [
			//uglify() //Can't handle ES6 classes
			terser({
				//sourceMap: true
			}) //--source-map
		]
		
	},
	
];

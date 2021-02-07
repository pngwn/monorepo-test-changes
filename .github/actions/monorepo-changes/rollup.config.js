import cjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';

export default [
	{
		plugins: [
			cjs(),
			resolve(),
		],
		input: "main.js",
		output: [
			{
				file: "lib/main.js",
				format: "cjs",
				sourcemap: false,
			},
		],
	},
];
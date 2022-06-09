import { createRuntime } from '../utils/create-runtime';
import { link, PASS } from '../utils/markdown';

export default createRuntime({
	name: 'esbuild-runner',
	npmName: 'esbuild-runner',
	githubRepo: 'folke/esbuild-runner',
	binaryPath: './node_modules/esbuild-runner/bin/esr.js',
	performance: {
		compiler: link('esbuild', 'https://esbuild.github.io/'),
		diskCache: link(PASS, 'https://github.com/folke/esbuild-runner/blob/9dfb19f8fdead4d56abe4b70fe16bde745fd4d9c/src/cli.ts#L12'),
	},
	dx: {
		tsRepl: false,
		watchMode: false,
		typeChecking: false,
		hidesWarnings: '-',
		binaries: link('esr', 'https://github.com/folke/esbuild-runner/blob/949c847e413f5ce32aa2b06eab2a80ea99c221d3/package.json#L21'),
	},
	testing: {
		os: 'No tests',
		nodeVersions: 'No tests',
	},
});

import { createRuntime } from '../utils/create-runtime';
import { link } from '../utils/markdown';

export default createRuntime({
	name: 'tsm',
	npmName: 'tsm',
	githubRepo: 'lukeed/tsm',
	binaryPath: './node_modules/tsm/bin.js',
	performance: {
		compiler: link('esbuild', 'https://esbuild.github.io/'),
		diskCache: false,
	},
	dx: {
		tsRepl: false,
		watchMode: false,
		typeChecking: false,
		hidesWarnings: false,
		binaries: link('tsm', 'https://github.com/lukeed/tsm/blob/d65d835a8a9fc3bb60dae7336eabdd713bfed0fc/package.json#L7'),
	},
	testing: {
		os: link('Linux & Windows', 'https://github.com/lukeed/tsm/blob/d65d835a8a9fc3bb60dae7336eabdd713bfed0fc/.github/workflows/ci.yml#L19'),
		nodeVersions: link('12.22.10 ~ 16.14', 'https://github.com/lukeed/tsm/blob/d65d835a8a9fc3bb60dae7336eabdd713bfed0fc/.github/workflows/ci.yml#L18'),
	},
});

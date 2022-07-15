import { createRuntime } from '../utils/create-runtime';
import { link } from '../utils/markdown';

export default createRuntime({
	name: '@swc/register',
	npmName: '@swc/register',
	githubRepo: 'swc-project/register',
	binaryPath: 'node_modules/@swc/register/bin/swc-node',
	performance: {
		compiler: link('SWC', 'https://github.com/swc-project/register/blob/3b17c954386bbbe01100ac00a80ced68d6e10281/package.json#L38'),
		diskCache: false,
	},
	dx: {
		tsRepl: false,
		watchMode: false,
		typeChecking: false,
		hidesWarnings: '-',
		binaries: link('swc-node', 'https://github.com/swc-project/register/blob/3b17c954386bbbe01100ac00a80ced68d6e10281/package.json#L54'),
	},
	testing: {
		os: link('Linux', 'https://github.com/swc-project/register/blob/3b17c954386bbbe01100ac00a80ced68d6e10281/.github/workflows/test.yml#L6'),
		nodeVersions: link('Latest LTS', 'https://github.com/swc-project/register/blob/3b17c954386bbbe01100ac00a80ced68d6e10281/.github/workflows/test.yml#L11'),
	},
});

import { createRuntime } from '../utils/create-runtime';
import {
	link, PASS, FAIL, CLICKABLE,
} from '../utils/markdown';

export default createRuntime({
	name: 'tsx',
	npmName: 'tsx',
	githubRepo: 'esbuild-kit/tsx',
	binaryPath: './node_modules/tsx/dist/cli.js',
	performance: {
		compiler: link('esbuild', 'https://esbuild.github.io/'),
		diskCache: link(PASS + CLICKABLE, 'https://github.com/esbuild-kit/tsx#cache'),
	},
	dx: {
		tsRepl: link(PASS + CLICKABLE, 'https://tsx.is/usage#repl'),
		watchMode: link(PASS + CLICKABLE, 'https://tsx.is/watch-mode'),
		typeChecking: FAIL,
		hidesWarnings: PASS,
		binaries: link('tsx', 'https://github.com/esbuild-kit/tsx/blob/3e81d19bf759b512eb74360861f5abeb9d638ef0/package.json#L30'),
	},
	testing: {
		os: link('Linux & Windows', 'https://github.com/esbuild-kit/tsx/blob/3e81d19bf759b512eb74360861f5abeb9d638ef0/.github/workflows/test.yml#L13'),
		nodeVersions: link('12.20 ~ 18', 'https://github.com/esbuild-kit/tsx/blob/3e81d19bf759b512eb74360861f5abeb9d638ef0/tests/index.ts#L12-L25'),
	},
});

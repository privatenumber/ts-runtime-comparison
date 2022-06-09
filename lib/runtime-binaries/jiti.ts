import { createRuntime } from '../utils/create-runtime';
import { link, PASS } from '../utils/markdown';

export default createRuntime({
	name: 'jiti',
	npmName: 'jiti',
	githubRepo: 'unjs/jiti',
	binaryPath: './node_modules/jiti/bin/jiti.js',
	performance: {
		compiler: link('Babel', 'https://github.com/unjs/jiti/blob/main/package.json#L26'),
		diskCache: link(PASS, 'https://github.com/unjs/jiti#cache'),
	},
	dx: {
		tsRepl: false,
		watchMode: false,
		typeChecking: false,
		hidesWarnings: '-',
		binaries: link('jiti', 'https://github.com/unjs/jiti/blob/912645967d095b7d1a97829e2013019b948a9761/package.json#L9'),
	},
	testing: {
		os: link('Linux & Windows', 'https://github.com/unjs/jiti/blob/912645967d095b7d1a97829e2013019b948a9761/.github/workflows/ci.yml#L17'),
		nodeVersions: link('16', 'https://github.com/unjs/jiti/blob/912645967d095b7d1a97829e2013019b948a9761/.github/workflows/ci.yml#L18'),
	},
});

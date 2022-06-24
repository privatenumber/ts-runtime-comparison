import { createRuntime } from '../utils/create-runtime';
import { link } from '../utils/markdown';

export default createRuntime({
	name: 'sucrase',
	npmName: 'sucrase',
	githubRepo: 'alangpierce/sucrase',
	binaryPath: './node_modules/sucrase/bin/sucrase-node',
	performance: {
		compiler: link('Sucrase (Babel fork)', "https://github.com/alangpierce/sucrase#:~:text=sucrase's%20parser%20is%20forked%20from%20babel's%20parser"),
		diskCache: false,
	},
	dx: {
		tsRepl: false,
		watchMode: false,
		typeChecking: false,
		hidesWarnings: '-',
		binaries: link('sucrase-node', 'https://github.com/alangpierce/sucrase/blob/c01f429ddc86e0d819396170981284b8593cdb29/package.json#L10-L13'),
	},
	testing: {
		os: link('Linux', 'https://github.com/alangpierce/sucrase/blob/2a3f723/.github/workflows/build.yml'),
		nodeVersions: link('14 & 16', 'https://github.com/alangpierce/sucrase/blob/2a3f723/.github/workflows/build.yml'),
	},
});

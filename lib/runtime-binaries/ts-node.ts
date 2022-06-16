import { createRuntime } from '../utils/create-runtime';
import { link, PASS, FAIL, CLICKABLE } from '../utils/markdown';

export default createRuntime({
	name: 'ts-node',
	npmName: 'ts-node',
	githubRepo: 'TypeStrong/ts-node',
	binaryPath: 'node_modules/ts-node/dist/bin-esm.js',
	performance: {
		compiler: `${link('TypeScript', 'https://github.com/TypeStrong/ts-node#compiler')} / ${link('SWC', 'https://github.com/TypeStrong/ts-node#swc-1')}`,
		diskCache: link(FAIL + CLICKABLE, 'https://github.com/TypeStrong/ts-node/issues/908#issuecomment-1060214613'),
	},
	dx: {
		tsRepl: link(PASS + CLICKABLE, 'https://github.com/TypeStrong/ts-node#:~:text=Typechecking%20(optional)-,REPL,-Write%20standalone%20scripts'),
		watchMode: false,
		typeChecking: PASS,
		hidesWarnings: link(PASS + CLICKABLE, 'https://github.com/TypeStrong/ts-node/blob/599f28bbed574003aea08cffab098a3348475649/src/child/child-require.ts#L19-L24'),
		binaries: link('ts-node, ts-node-esm, +4', 'https://github.com/TypeStrong/ts-node/blob/14323f9d00d5c7051ac09b944c7f423e442145ea/package.json#L38-L43'),
	},
	testing: {
		os: link('Linux & Windows', 'https://github.com/TypeStrong/ts-node/blob/14323f9d00d5c7051ac09b944c7f423e442145ea/.github/workflows/continuous-integration.yml#L52'),
		nodeVersions: link('12 ~ 18 + Nightly', 'https://github.com/TypeStrong/ts-node/blob/14323f9d00d5c7051ac09b944c7f423e442145ea/.github/workflows/continuous-integration.yml#L55-L143'),
	},
});

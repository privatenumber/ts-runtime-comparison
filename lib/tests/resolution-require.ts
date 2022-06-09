import { createTest, describe } from '../utils/test';
import { link } from '../utils/markdown';

export default createTest(binary => describe(
	'`require()`',
	(test) => {
		test(
			'`.ts` file',
			async () => (await binary.run('package-commonjs', './require.js', './resolution/ts.ts').catch(() => {})) === 'true',
		);

		test(
			`\`.ts\` file ${link('via `.js`', 'https://www.typescriptlang.org/docs/handbook/esm-node.html#new-file-extensions')}`,
			async () => (await binary.run('package-commonjs', './require.ts', './resolution/ts.js').catch(() => {})) === 'true',
		);

		test(
			'`.ts` file without extension',
			async () => (await binary.run('package-commonjs', './require.js', './resolution/ts').catch(() => {})) === 'true',
		);

		test(
			'`index.ts` file via directory',
			async () => (await binary.run('package-commonjs', './require.js', './resolution/directory').catch(() => {})) === 'true',
		);

		test(
			'`.cts` file',
			async () => (await binary.run('package-commonjs', './require.js', './resolution/cts.cts').catch(() => {})) === 'true',
		);

		test(
			`\`.cts\` file ${link('via `.cjs`', 'https://www.typescriptlang.org/docs/handbook/esm-node.html#new-file-extensions')}`,
			async () => (await binary.run('package-commonjs', './require.ts', './resolution/cts.cjs').catch(() => {})) === 'true',
		);

		test(
			'`.mts` file',
			async () => (await binary.run('package-commonjs', './require.js', './resolution/mts.mts').catch(() => {})) === 'true',
		);

		test(
			`\`.mts\` file ${link('via `.mjs`', 'https://www.typescriptlang.org/docs/handbook/esm-node.html#new-file-extensions')}`,
			async () => (await binary.run('package-commonjs', './require.ts', './resolution/mts.mjs').catch(() => {})) === 'true',
		);

		test(
			'`node:` prefix',
			async () => (await binary.run('package-commonjs', './require-log.js', 'node:fs').catch(() => '')).includes('F_OK'),
		);

		test(
			`tsconfig.json ${link('paths', 'https://www.typescriptlang.org/tsconfig#paths')}`,
			async () => (await binary.run('package-commonjs', './require.js', 'prefix/ts').catch(() => {})) === 'true',
		);
	},
));

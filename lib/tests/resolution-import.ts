import { createTest, describe } from '../utils/test';
import { link } from '../utils/markdown';

export default createTest(binary => describe(
	'`import()`',
	(test) => {
		//
		test(
			'`.ts` file',
			async () => (await binary.run('package-commonjs', './import.js', './resolution/ts.ts').catch(() => {})) === 'true',
		);

		test(
			`\`.ts\` file ${link('via `.js`', 'https://www.typescriptlang.org/docs/handbook/esm-node.html#new-file-extensions')}`,
			async () => (await binary.run('package-commonjs', './import.ts', './resolution/ts.js').catch(() => {})) === 'true',
		);

		test(
			'`.ts` file without extension',
			async () => (await binary.run('package-commonjs', './import.js', './resolution/ts').catch(() => {})) === 'true',
		);

		test(
			'`index.ts` file via directory',
			async () => (await binary.run('package-commonjs', './import.js', './resolution/directory').catch(() => {})) === 'true',
		);

		test(
			'`.cts` file',
			async () => (await binary.run('package-commonjs', './import.js', './resolution/cts.cts').catch(() => {})) === 'true',
		);

		test(
			`\`.cts\` file ${link('via `.cjs`', 'https://www.typescriptlang.org/docs/handbook/esm-node.html#new-file-extensions')}`,
			async () => (await binary.run('package-commonjs', './import.ts', './resolution/cts.cjs').catch(() => {})) === 'true',
		);

		test(
			'`.mts` file',
			async () => (await binary.run('package-commonjs', './import.js', './resolution/mts.mts').catch(() => {})) === 'true',
		);

		test(
			`\`.mts\` file ${link('via `.mjs`', 'https://www.typescriptlang.org/docs/handbook/esm-node.html#new-file-extensions')}`,
			async () => (await binary.run('package-commonjs', './import.ts', './resolution/mts.mjs').catch(() => {})) === 'true',
		);

		test(
			`tsconfig.json ${link('paths', 'https://www.typescriptlang.org/tsconfig#paths')}`,
			async () => (await binary.run('package-commonjs', './import.ts', 'prefix/ts').catch(() => {})) === 'true',
		);
	},
));

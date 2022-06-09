import { createTest, describe } from '../utils/test';

export default createTest(binary => describe(
	'Package type: Module',
	(test) => {
		test(
			'require() `.js` file (ESM export)',
			async () => (await binary.run('package-module', './require-log.js', './interops/esm.js')) === '{"default":true}',
		);

		test(
			'require() `.ts` file (ESM export)',
			async () => (await binary.run('package-module', './require-log.js', './interops/ts.ts')) === '{"default":true}',
		);

		test(
			'require() `.cjs` file',
			async () => (await binary.run('package-module', './require-log.js', './interops/cjs.cjs')) === 'true',
		);

		test(
			'require() `.cts` file',
			async () => (await binary.run('package-module', './require-log.js', './interops/cts.cts')) === 'true',
		);

		test(
			'require() `.mjs` file',
			async () => (await binary.run('package-module', './require-log.js', './interops/mjs.mjs')) === '{"default":true}',
		);

		test(
			'require() `.mts` file',
			async () => (await binary.run('package-module', './require-log.js', './interops/mts.mts')) === '{"default":true}',
		);

		test(
			'import() `.js` file (ESM export)',
			async () => (await binary.run('package-module', './import-log.js', './interops/esm.js')) === '{"default":true}',
		);

		test(
			'import() `.ts` file (ESM export)',
			async () => (await binary.run('package-module', './import-log.js', './interops/ts.ts')) === '{"default":true}',
		);

		test(
			'import() `.cjs` file',
			async () => (await binary.run('package-module', './import-log.js', './interops/cjs.cjs')) === '{"default":true}',
		);

		test(
			'import() `.cts` file',
			async () => (await binary.run('package-module', './import-log.js', './interops/cts.cts')) === '{"default":true}',
		);

		test(
			'import() `.mjs` file',
			async () => (await binary.run('package-module', './import-log.js', './interops/mjs.mjs')) === '{"default":true}',
		);

		test(
			'import() `.mts` file',
			async () => (await binary.run('package-module', './import-log.js', './interops/mts.mts')) === '{"default":true}',
		);
	},
));

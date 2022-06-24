import { createTest, describe } from '../utils/test';

export default createTest(binary => describe(
	'Package type: Module',
	(test) => {
		test(
			'TypeScript syntax',
			async () => (await binary.run('package-module', './transformation/ts.ts')) === 'true',
		);

		test(
			'CJS scope in `.cjs` file',
			async () => (await binary.run('package-module', './transformation/cjs-scope.cjs')) === 'true',
		);

		test(
			'CJS scope in `.cts` file',
			async () => (await binary.run('package-module', './transformation/cjs-scope.cts')) === 'true',
		);

		test(
			'No CJS scope in `.js` file',
			async () => (await binary.run('package-module', './transformation/cjs-scope.js')) === 'false',
		);

		test(
			'No CJS scope in `.ts` file',
			async () => (await binary.run('package-module', './transformation/cjs-scope.ts')) === 'false',
		);

		test(
			'No CJS scope in `.mjs` file',
			async () => (await binary.run('package-module', './transformation/cjs-scope.mjs')) === 'false',
		);

		test(
			'No CJS scope in `.mts` file',
			async () => (await binary.run('package-module', './transformation/cjs-scope.mts')) === 'false',
		);

		test(
			'Source maps',
			async () => (await binary.run('package-module', './transformation/source-maps.ts')) === 'true',
		);
	},
));

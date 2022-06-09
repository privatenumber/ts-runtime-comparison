import { createTest, describe } from '../utils/test';

export default createTest(binary => describe(
	'Package type: CommonJS',
	(test) => {
		test(
			'TypeScript syntax',
			async () => (await binary.run('package-commonjs', './transformation/ts.ts')) === 'true',
		);

		test(
			'ESM → CJS: import/export syntax',
			async () => {
				try {
					return (await binary.run('package-commonjs', './transformation/esm-import.js')) === 'true';
				} catch (error) {
					if (error.message.match('SyntaxError')) {
						return false;
					}
					throw error;
				}
			},
		);

		test(
			'ESM → CJS: `import.meta.url` shim',
			async () => {
				try {
					return (await binary.run('package-commonjs', './transformation/import-meta-url.js')) === 'true';
				} catch (error) {
					if (error.message.match('SyntaxError')) {
						return false;
					}
					throw error;
				}
			},
		);

		test(
			'CJS scope in `.js` file',
			async () => (await binary.run('package-commonjs', './transformation/cjs-scope.js')) === 'true',
		);

		test(
			'CJS scope in `.ts` file',
			async () => (await binary.run('package-commonjs', './transformation/cjs-scope.ts')) === 'true',
		);

		test(
			'CJS scope in `.cjs` file',
			async () => (await binary.run('package-commonjs', './transformation/cjs-scope.cjs')) === 'true',
		);

		test(
			'CJS scope in `.cts` file',
			async () => (await binary.run('package-commonjs', './transformation/cjs-scope.cts')) === 'true',
		);

		test(
			'No CJS scope in `.mjs` file',
			async () => (await binary.run('package-commonjs', './transformation/cjs-scope.mjs')) === 'false',
		);

		test(
			'No CJS scope in `.mts` file',
			async () => (await binary.run('package-commonjs', './transformation/cjs-scope.mts')) === 'false',
		);

		test(
			'Source maps',
			async () => (await binary.run('package-commonjs', './transformation/source-maps.ts')) === 'true',
		);
	},
));

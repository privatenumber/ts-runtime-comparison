// import { inspect } from 'util';
import getNode from 'get-node';
import { loadRuntimeBinaries } from './runtime-binaries';
import { loadTests } from './tests';
import { RuntimeTested } from './types';
import { updateMarkdown } from './utils/update-markdown';

(async () => {
	// Test with 12.20.0 because it doesn't support node: prefix in imports
	const node = await getNode('12.20.0');
	const runtimes = await loadRuntimeBinaries();
	const tests = await loadTests();
	const allTestResults = await Promise.all(
		runtimes.map(async (runtime) => {
			runtime.nodePath = node.path;

			const testResults = await Promise.all(
				tests.map(
					async ([name, testSuite]) => [
						name,
						await testSuite(runtime),
					] as const,
				),
			);

			return {
				runtime,
				...Object.fromEntries(testResults),
			} as RuntimeTested;
		}),
	);

	// console.log(inspect(results, {
	// 	colors: true,
	// 	depth: null,
	// }));

	await updateMarkdown(
		'./README.md',
		runtimes,
		allTestResults,
	);
})();

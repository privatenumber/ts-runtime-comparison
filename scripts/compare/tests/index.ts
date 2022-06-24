import fs from 'fs/promises';
import path from 'path';
import type { TestSuite } from '../utils/test';

export async function loadTests() {
	const files = await fs.readdir(__dirname);
	const testFiles = files.filter(file => file !== 'index.ts' && file.endsWith('.ts'));

	const testsLoaded = await Promise.all(
		testFiles.map(async (testPath) => {
			const { default: testSuite } = await import(path.join(__dirname, testPath));

			return [testPath.slice(0, -3), testSuite as TestSuite] as const;
		}),
	);

	return testsLoaded;
}

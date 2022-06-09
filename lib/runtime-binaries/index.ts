import fs from 'fs/promises';
import path from 'path';
import type { Runtime } from '../types';

export async function loadRuntimeBinaries() {
	const files = await fs.readdir(__dirname);
	const runtimeBinaryPaths = files.filter(file => file !== 'index.ts' && file.endsWith('.ts'));

	const binaries = await Promise.all(
		runtimeBinaryPaths.map(async (binaryPath) => {
			const { default: runtime } = await import(path.join(__dirname, binaryPath));

			return runtime as Runtime;
		}),
	);

	binaries.sort((a, b) => (
		a.name === 'tsx'
			? -1
			: a.name.localeCompare(b.name)
	));

	return binaries;
}

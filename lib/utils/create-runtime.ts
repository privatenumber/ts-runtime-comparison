import path from 'path';
import { execaNode } from 'execa';
import type { RuntimeData, Runtime } from '../types';

export function createRuntime(
	runtimeData: RuntimeData,
): Runtime {
	return {
		...runtimeData,
		async run(
			this: RuntimeData,
			cwd: string,
			...args: string[]
		) {
			const result = await execaNode(
				path.resolve(this.binaryPath),
				args,
				{
					cwd,
					nodePath: this.nodePath,
					nodeOptions: [],
				},
			);

			if (result.stderr.includes('UnhandledPromiseRejectionWarning')) {
				throw result;
			}

			return result.stdout;
		},
	};
}

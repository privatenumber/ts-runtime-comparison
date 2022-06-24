import { type TestSuiteResult } from './utils/test'

export type RuntimeData = {
	name: string;

	npmName: string;

	githubRepo: string;

	binaryPath: string;

	nodePath?: string;

	performance: {
		compiler: string;
		diskCache: string | false;
	};

	dx: {
		tsRepl: string | false;
		watchMode: string | false;
		typeChecking: string | false;
		hidesWarnings: string | false;
		binaries: string;
	};

	testing: {
		os: string;
		nodeVersions: string;
	};
};

export type RuntimeBinary = (
	this: RuntimeData,
	...args: string[]
) => Promise<string>;

export type Runtime = RuntimeData & {
	run: RuntimeBinary;
};

export type RuntimeTested = {
	runtime: Runtime;
} & {
	[k: string]: TestSuiteResult;
};
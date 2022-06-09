import type { Runtime } from '../types';
import { PASS, FAIL } from './markdown';

type TestResult = {
	label: string;
	value: string;
};

export type TestSuiteResult = {
	title: string;
	results: TestResult[];
};

export type TestSuite = (runtime: Runtime) => Promise<TestSuiteResult>;

export const createTest = (
	testSuite: TestSuite,
) => testSuite;

type MaybePromise<T> = T | Promise<T>

type Test = (
	label: string,
	testFunction: () => MaybePromise<boolean | string>,
) => void;

const cwd = process.cwd();

export async function describe(
	title: string,
	tests: (test: Test) => void,
): Promise<TestSuiteResult> {
	const promises: Promise<TestResult>[] = [];

	tests((label, testFunction) => {
		promises.push((async () => {
			let value;
			try {
				const result = await testFunction();
				if (typeof result === 'boolean') {
					value = result ? PASS : FAIL;
				} else {
					value = result;
				}
			} catch (error) {
				let { message } = error;
				if ('stderr' in error) {
					const foundError = error.stderr.match(/\w*Error.*:.+/);
					if (foundError) {
						[message] = foundError;
					}
				}

				if (message) {
					message = message.replace(/"/g, '\'').replace(cwd, '.');
					value = `<span title="${message}">⛔️</span>`;
				} else {
					value = '⚠️';
				}
			}

			return {
				label,
				value,
			};
		})());
	});

	return {
		title,
		results: await Promise.all(promises),
	};
}

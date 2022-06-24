import fs from 'fs/promises';
import { markdownTable } from 'markdown-table';
import commentMark from 'comment-mark';
import { link } from './markdown';
import type { Runtime, RuntimeTested } from '../types';

function renderTable(
	results: RuntimeTested[],
	property: string,
	showTestTitle = false,
) {
	const headings = [''];
	const rows = new Map();

	for (const result of results) {
		headings.push(link(result.runtime.name));
		for (const { label, value } of result[property].results) {
			if (!rows.has(label)) {
				rows.set(label, []);
			}

			rows.get(label).push(value);
		}
	}

	const table = markdownTable([
		headings,
		...Array.from(rows).map(row => row.flat()),
	], {
		align: headings.map(column => (column ? 'c' : 'l')),
	});

	return (showTestTitle ? `#### ${results[0][property].title}` : '') + `\n${table}`;
}

export async function updateMarkdown(
	filePath: string,
	runtimes: Runtime[],
	results: RuntimeTested[],
) {
	let mdFile = await fs.readFile(filePath, 'utf8');

	mdFile = commentMark(mdFile, {
		links: runtimes.map(runtime => `[${runtime.name}]: https://github.com/${runtime.githubRepo}`).join('\n'),
		runtimes: runtimes.map(runtime => `- ${link(runtime.name)}`).join('\n'),
		projectStats: renderTable(results, 'project-stats'),
		transformCommonjs: renderTable(results, 'transformation-commonjs', true),
		transformModule: renderTable(results, 'transformation-module', true),
		resolutionRequire: renderTable(results, 'resolution-require', true),
		resolutionImport: renderTable(results, 'resolution-import', true),
		interopCommonjs: renderTable(results, 'interop-commonjs', true),
		interopModule: renderTable(results, 'interop-module', true),
		performance: renderTable(results, 'performance'),
		dx: renderTable(results, 'dx'),
		testing: renderTable(results, 'testing'),
	});

	await fs.writeFile(filePath, mdFile);
}

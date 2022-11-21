import { createTest, describe } from '../utils/test';
import { img, link } from '../utils/markdown';

export default createTest(binary => describe(
	'Project stats',
	(test) => {
		test(
			'npm downloads',
			() => link(
				img(`https://img.shields.io/npm/dm/${binary.npmName}?label`),
				`https://www.npmjs.com/package/${binary.npmName}`,
			),
		);

		test(
			'Install size',
			() => link(
				img(`https://badgen.net/packagephobia/install/${binary.npmName}?color=blue&label`),
				`https://packagephobia.com/result?p=${binary.npmName}`,
			),
		);

		test(
			'GitHub stars',
			() => link(
				img(`https://img.shields.io/github/stars/${binary.githubRepo}?color=gray&label`),
				`https://github.com/${binary.githubRepo}/stargazers`,
			),
		);

		test(
			'Issues open',
			() => link(
				img(`https://img.shields.io/github/issues-raw/${binary.githubRepo}?color=orange&label`),
				`https://github.com/${binary.githubRepo}/issues?q=is%3Aissue+is%3Aopen+sort%3Aupdated-desc`,
			),
		);

		test(
			'Issues closed',
			() => link(
				img(`https://img.shields.io/github/issues-closed-raw/${binary.githubRepo}?color=blue&label`),
				`https://github.com/${binary.githubRepo}/issues?q=is%3Aissue+is%3Aclosed`,
			),
		);
	},
));

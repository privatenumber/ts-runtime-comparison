import { createTest, describe } from '../utils/test';

export default createTest(binary => describe(
	'DX',
	(test) => {
		test(
			'TypeScript REPL',
			() => binary.dx.tsRepl,
		);

		test(
			'Watch mode',
			() => binary.dx.watchMode,
		);

		test(
			'Type checking',
			() => binary.dx.typeChecking,
		);

		test(
			'Hides experimental feature warnings',
			() => binary.dx.hidesWarnings,
		);

		test(
			'Binaries',
			() => binary.dx.binaries,
		);
	},
));

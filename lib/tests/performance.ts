import { createTest, describe } from '../utils/test';

export default createTest(binary => describe(
	'Performance',
	(test) => {
		test(
			'Compiler',
			() => binary.performance.compiler,
		);

		test(
			'Disk cache',
			() => binary.performance.diskCache,
		);
	},
));

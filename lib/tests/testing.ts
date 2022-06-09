import { createTest, describe } from '../utils/test';

export default createTest(binary => describe(
	'Testing',
	(test) => {
		test(
			'Operating systems',
			() => binary.testing.os,
		);

		test(
			'Node.js versions',
			() => binary.testing.nodeVersions,
		);
	},
));

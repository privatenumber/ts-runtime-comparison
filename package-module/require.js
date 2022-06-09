import { createRequire } from 'module';

const require = createRequire(import.meta.url);
require(process.argv[2]);

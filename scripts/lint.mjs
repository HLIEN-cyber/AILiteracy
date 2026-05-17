import {spawnSync} from 'node:child_process';
import {createRequire} from 'node:module';

const require = createRequire(import.meta.url);

const hasParser = (() => {
  try {
    require.resolve('@typescript-eslint/parser');
    return true;
  } catch {
    return false;
  }
})();

if (!hasParser) {
  console.warn('[lint skipped] Missing @typescript-eslint/parser in this environment.');
  console.warn('To enable full lint locally, install: npm i -D @typescript-eslint/parser @typescript-eslint/eslint-plugin');
  process.exit(0);
}

const result = spawnSync('npx', ['eslint', 'src', '--ext', '.ts,.tsx'], {stdio: 'inherit'});
process.exit(result.status ?? 1);

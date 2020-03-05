import { createDefaultConfig } from '@open-wc/building-rollup';
import copy from 'rollup-plugin-copy';

const config = createDefaultConfig({ input: './index.html' });

export default {
  ...config,
  plugins: [
    ...config.plugins,
    copy({
      targets: [
        { src: 'pages/**/*', dest: 'dist/pages' },
        { src: 'assets/**/*', dest: 'dist/assets' },
        { src: 'mock-data/**/*', dest: 'dist/mock-data' },
      ],
    }),
  ],
};

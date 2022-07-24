import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';
import react from '@vitejs/plugin-react';
import macrosPlugin from 'vite-plugin-babel-macros';
import checker from 'vite-plugin-checker';

// https://vitejs.dev/config/
export default defineConfig({
  esbuild: {
    jsxFactory: 'jsx',
    jsxInject: `
      import React from 'react';
      import { jsx } from '@emotion/react';
    `
  },
  plugins: [
    checker({
      typescript: true,
      eslint: {
        lintCommand: 'eslint --fix "./src/**/*.{ts,tsx}"' // for example, lint .ts & .tsx
      }
    }),
    tsconfigPaths({
      loose: true
    }),
    macrosPlugin(),
    react({
      jsxImportSource: '@emotion/react',
      babel: {
        plugins: ['@emotion/babel-plugin']
      }
    })
  ]
});

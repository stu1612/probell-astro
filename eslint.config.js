import eslintPluginAstro from 'eslint-plugin-astro';
import tseslint from 'typescript-eslint';

export default [
  ...tseslint.configs.recommended,
  ...eslintPluginAstro.configs.recommended,
  {
    files: ['**/*.astro'],
    rules: {
      'astro/no-set-html-directive': 'error',
    },
  },
  {
    // JSON-LD structured data requires set:html to avoid HTML-entity-escaping the JSON;
    // eslint-plugin-astro has no comment-directive support for disabling rules inline in
    // .astro templates, so this file-level override is the only way to suppress the rule.
    // Both files serialize static, server-built objects with no user input.
    files: [
      'src/layouts/BaseLayout.astro',
      'src/pages/supplements/\\[slug\\].astro',
    ],
    rules: {
      'astro/no-set-html-directive': 'off',
    },
  },
  {
    ignores: ['dist/**', 'node_modules/**', '.astro/**'],
  },
];

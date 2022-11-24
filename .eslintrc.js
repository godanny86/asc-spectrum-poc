module.exports = {
    root: true,
    env: {
        browser: true,
        es6: true,
        node: true,
    },
    extends: [
        'prettier',
        'plugin:react-hooks/recommended',
        'next/core-web-vitals',
    ],
    globals: {
        Atomics: 'readonly',
        SharedArrayBuffer: 'readonly',
    },
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 2019,
        sourceType: 'module',
    },
    plugins: ['react', 'jsx-a11y', '@typescript-eslint'],
    settings: {
        react: {
            version: 'detect',
        },
    },
    rules: {
        /* https://eslint.org/docs/rules/ & https://github.com/airbnb/javascript */
        // disabled
        'no-underscore-dangle': ['off'], // we use leading _ to encourage only private usage
        'import/prefer-default-export': ['off'], // makes starting new util files obnoxious
        'no-await-in-loop': ['off'], // for retrying fetches
        'dot-notation': ['off'], // breaks metrics
        'no-cond-assign': ['off'], // breaks metrics
        'no-lonely-if': ['off'], // less readable
        'consistent-return': ['off'], // breaks early returns
        'no-plusplus': ['off'], // "semi" rule keeps this safe
        'no-tabs': ['off'], // we use tabs for comment & property formatting a lot
        'implicit-arrow-linebreak': ['off'], // fights with arrow-body-style & max-len, private arrow functions
        // can use lengthy function names but still be readable

        // error
        'no-trailing-spaces': ['error', { ignoreComments: true }],
        'no-param-reassign': [
            'off',
            { ignorePropertyModificationsFor: ['self'] },
        ], // mobx-state-tree
        'spaced-comment': ['error', 'always', { block: { exceptions: ['*'] } }],
        'no-use-before-define': ['error', { functions: false }],
        'operator-linebreak': [
            'error',
            'after',
            { overrides: { '?': 'before', ':': 'before', '=': 'ignore' } },
        ],
        'nonblock-statement-body-position': ['error', 'below'],
        curly: ['error', 'all'],
        'no-magic-numbers': ['off'], // prefer @typescript-eslint rule for magic numbers
        'quote-props': ['error', 'as-needed'],

        // warn
        'jsx-a11y/anchor-is-valid': ['warn'],
        'jsx-a11y/no-noninteractive-tabindex': ['warn'],
        'jsx-a11y/no-static-element-interactions': ['warn'],
        'jsx-a11y/click-events-have-key-events': ['warn'],
        'no-shadow': ['warn'], // should be changed to "error", but
        // will take some refactoring first,
        // specifically for props like `ccxIngest`

        /* https://github.com/yannickcr/eslint-plugin-react/tree/master/docs/rules */
        // react - disabled
        'react/jsx-props-no-spreading': ['off'], // we do this all the time, and I think we want to keep doing it
        'react/static-property-placement': ['off'], // forces `defaultProps` & etc to be outside of the class scope
        'react/jsx-wrap-multilines': ['off'], // we never wrap multiline JSX
        'react/state-in-constructor': ['off'],
        'react/jsx-closing-tag-location': ['off'], // I don't like this but it breaks ternaries in render methods
        // react - warn
        'react/jsx-filename-extension': [
            'warn',
            { extensions: ['.jsx', '.tsx'] },
        ],
    },
    overrides: [
        {
            // rules for typescript files
            files: ['**/*.ts', '**/*.tsx'],
            parser: '@typescript-eslint/parser',
            rules: {
                'no-undef': 'off', // exporting types & interfaces break with this on, plus TS will catch undefined vars anyway
                'no-unused-vars': 'off', // importing types & interfaces breaks too
            },
        },
        {
            // rules for unit tests
            files: ['**/*.test.ts', '**/*.test.tsx', '**/*.test.js'],
            parser: '@typescript-eslint/parser',
            rules: {
                // disabled
                '@typescript-eslint/no-magic-numbers': ['off'],
                'global-require': ['off'], // jest.mock('@ccx/acp-fetch', () => require('../../__mocks__/@ccx/acp-fetch'))
                'no-multi-assign': ['off'], // const method = object.someMethod = jest.fn();
                'import/extensions': ['off'], // import messages from '../../locale/en.js';
            },
        },
        {
            // react files
            files: ['**/*.tsx', '**/*.jsx'],
            parser: '@typescript-eslint/parser',
            rules: {
                // disabled
                'class-methods-use-this': ['off'], // would require many render*() functions be changed to static
            },
        },
        {
            // SVG files
            files: ['src/components/svgs/*.tsx'],
            parser: '@typescript-eslint/parser',
            rules: {
                // disabled
                '@typescript-eslint/no-magic-numbers': ['off'],
            },
        },
    ],
}

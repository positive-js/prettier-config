# prettier-config

[![CircleCI](https://circleci.com/gh/positive-js/prettier-config/tree/master.svg?style=shield)](https://circleci.com/gh/positive-js/prettier-config/tree/master)
[![npm](https://img.shields.io/npm/v/@ptsecurity/prettier-config.svg)](https://www.npmjs.com/package/@ptsecurity/prettier-config)
[![David-DM](https://david-dm.org/positive-js/prettier-config/status.svg)](https://david-dm.org/positive-js/prettier-config)

# Usage

1. `npm install --save-dev @ptsecurity/prettier-config prettier`

2. In your project create .prettierrc.js with line:
`module.exports = require('@ptsecurity/prettier-config');`

# Optionally

1. `npm install --save-dev husky lint-staged`

2. Add lines to your package.json
```
    "scripts": {
        "precommit": "lint-staged"
    },
    "lint-staged": {
        "linters": {
            "*.{ts,js,json,css,less,md}": ["prettier --write", "git add"]
        }
    }
```
3. Optionally add [plugins](https://prettier.io/docs/en/related-projects.html)



# prettier-config

# Usage

1. npm install --save-dev @ptsecurity/prettier-config husky lint-staged prettier
2. Add strings to your package.json
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
3. In your project create .prettierrc.js with strings:
`module.exports = require('@ptsecurity/prettier-config');`

4. Optionally add [plugins](https://prettier.io/docs/en/related-projects.html)

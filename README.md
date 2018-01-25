# prettier-config

# Usage

1. `npm install --save-dev @ptsecurity/prettier-config prettier`

2. In your project create .prettierrc.js with strings:
`module.exports = require('@ptsecurity/prettier-config');`

# Optionally

1. `npm install --save-dev husky lint-staged`

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

3. Optionally add [plugins](https://prettier.io/docs/en/related-projects.html)

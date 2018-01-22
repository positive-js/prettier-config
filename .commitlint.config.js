const config = {
    extends: ['@commitlint/config-angular'],
    rules: {
        'header-max-length': [2, 'always', 120],
        lang: [0, 'never'],
        'type-enum': [
            2,
            'always',
            [
                'feat',
                'fix',
                'docs',
                'refactor',
                'test',
                'perf',
                'bump',
                'chore'
            ]
        ],
        'scope-empty': [
            0,
            'always'
        ]
    }
};

module.exports = config;
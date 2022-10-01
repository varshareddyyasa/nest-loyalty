const config = {
    extends: ['@commitlint/config-conventional'],
    rules: {
        'scope-empty': [2, 'never']
    }
}

module.exports = config;
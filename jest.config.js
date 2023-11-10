require('dotenv').config({ path: '.env' });

module.exports = {
    testEnvironment: 'node',
    setupFilesAfterEnv: ['<rootDir>/dist/tests/setup.js'],
    testPathIgnorePatterns: ['<rootDir>/src/tests/*'],
};

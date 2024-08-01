import nextJest from 'next/jest.js'

const createJestConfig = nextJest({
    // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
    dir: './',
})

// Add any custom config to be passed to Jest
/** @type {import('jest').Config} */
const config = {
    // Add more setup options before each test is run
    // NOTE: this file is currently empty but keeping it in config in case we need it later
    setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],

    moduleNameMapper: {
        '@/app/(.*)': '<rootDir>/src/app/$1',
        '@/components/(.*)': '<rootDir>/src/app/components/$1',
        '@/data/(.*)': '<rootDir>/src/app/data/$1',
        "^.+\\.(svg)$": "<rootDir>/__mocks__/svg.tsx",
    },

    testEnvironment: 'jest-environment-jsdom',
}

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
export default createJestConfig(config)
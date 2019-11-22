// jest.config.js
module.exports = {
  testRegex: 'resources/js/tests/.*.spec.js$',
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/resources/js/$1"
  },
  moduleFileExtensions: ['js', 'json', 'vue'],
  transform: {
    '^.+\\.js$': '<rootDir>/node_modules/babel-jest',
    '.*\\.(vue)$': '<rootDir>/node_modules/vue-jest'
  },
  snapshotSerializers: ['jest-serializer-vue'],
  collectCoverageFrom: [
    'resources/js/**/*.{js,jsx,ts,tsx,vue}',
  ],
  collectCoverage: true,
  coverageReporters: ['html', 'lcov', 'text-summary'],
  coverageDirectory: './coverage'
}

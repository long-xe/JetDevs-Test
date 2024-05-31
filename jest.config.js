module.exports = {
  verbose: true,
  preset: 'react-native',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  // setupFiles: ['<rootDir>/src/__mocks__/setupTests.tsx'],
  transformIgnorePatterns: [
    "node_modules/(?!(jest-)?react-native|react-clone-referenced-element|@react-native-community|rollbar-react-native|@fortawesome|@react-native|@react-navigation|react-redux)",
  ],
  collectCoverage: true,
  collectCoverageFrom: [
    'src/**/*.{ts,tsx}',
    '!<rootDir>/node_modules/',
    // '!<rootDir>/src/store/*.tsx',
    // '!<rootDir>/src/interfaces/*.tsx',
    // '!<rootDir>/src/configs/*.tsx',
    // '!<rootDir>/src/constants/*.tsx',
    // '!<rootDir>/src/mocks/*.{js,ts,tsx}',
    // '!**/index.{ts,tsx}',
    '!**/*.style.{ts,tsx}',
    '!**/styles.{ts,tsx}',
    '!**/*.type.{ts,tsx}',
    '!**/*.interface.tsx',
    '!<rootDir>/src/types/',
    '!<rootDir>/src/constants/',
    // '!**/*.testid.{ts,tsx}'
  ],
  testPathIgnorePatterns: ['<rootDir>/e2e', '<rootDir>/node_modules'],
};

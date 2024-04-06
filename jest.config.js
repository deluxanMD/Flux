module.exports = {
  preset: 'react-native',
  transformIgnorePatterns: [
    'node_modules/(?!((jest-)?react-native|@react-native(-community)?)|expo(nent)?|@expo(nent)?/.*|@expo-google-fonts/.*|react-navigation|@react-navigation/.*|@unimodules/.*|unimodules|sentry-expo|native-base|react-native-svg|react-redux|@rneui)',
  ],
  setupFiles: ['<rootDir>/jest.setup.js'],
  coveragePathIgnorePatterns: [
    '<rootDir>/src/navigation/bottom-tab/bottom-tab-navigation.tsx',
    '<rootDir>/src/navigation/stack-nav/stack-navigation.tsx',
    '<rootDir>/src/App.tsx',
  ],
};

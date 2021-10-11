module.exports = {
  roots: ['<rootDir>'],
  testMatch: ['**/?(*.)+(test).+(ts)'],
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },
  moduleFileExtensions: ['ts', 'js'],
  testEnvironment: 'node',
}

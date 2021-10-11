module.exports = {
  roots: ['<rootDir>'],
  testMatch: ['**/?(*.)+(int.test).+(ts)'],
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },
  moduleFileExtensions: ['ts', 'js'],
  testEnvironment: 'node',
}

module.exports = {
  roots: ['<rootDir>'],
  testMatch: ['**/?(*.)+(unit.test).+(ts)'],
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },
  moduleFileExtensions: ['ts', 'js'],
  testEnvironment: 'node',
}

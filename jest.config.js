module.exports = {
  roots: [
    '<rootDir>/src',
  ],
  testMatch: [
    '**/tests/**/*.+(ts|tsx|js)',
    '**/?(*.)+(spec|test).+(ts|tsx|js)',
  ],
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },
  snapshotSerializers: ['enzyme-to-json/serializer'],
  setupFilesAfterEnv: ['<rootDir>/configs/setupEnzyme.ts'],
  moduleNameMapper: {
    '\\.(css|less|sass|scss)$': '<rootDir>/configs/styleStub.ts',
    '\\.(gif|ttf|eot|png)$': '<rootDir>/configs/fileStub.ts',
  },
  collectCoverage: true,
  coverageReporters: ['text', 'html'],
  coverageDirectory: '<rootDir>/coverage/',
};

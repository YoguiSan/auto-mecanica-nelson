import type { Config } from '@jest/types';

const config: Config.InitialOptions = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  testMatch: ['<rootDir>/src/**/*.spec.ts', '<rootDir>/src/**/*.spec.tsx'],
  moduleNameMapper: {
    // map static assets and SVGs before other aliases so they are handled by mocks
    '^@icons/(.*)$': '<rootDir>/__mocks__/fileMock.ts',
    '\\.(svg)$': '<rootDir>/__mocks__/fileMock.ts',
    '^@amn/(.*)$': '<rootDir>/src/$1',
    '^@eui/(.*)$': '<rootDir>/packages/ethyl-ui/src/$1',
    '^next/image$': '<rootDir>/__mocks__/nextImage.tsx',
    '^next/navigation$': '<rootDir>/__mocks__/nextNavigation.ts',
    '\\.(css|less|sass|scss)$': 'identity-obj-proxy',
    '\\.svg$': '<rootDir>/__mocks__/fileMock.ts',
  },
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },
  globals: {
    'ts-jest': {
      tsconfig: 'tsconfig.json',
      isolatedModules: true,
    },
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json'],
  testPathIgnorePatterns: ['/node_modules/', '/packages/'],
  collectCoverage: true,
  coverageDirectory: './coverage',
  // collectCoverageFrom: ['./src'],
};

export default config;

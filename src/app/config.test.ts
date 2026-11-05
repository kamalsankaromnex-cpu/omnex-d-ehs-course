import { expect, it } from 'vitest';
import { AppConfigSchema, appConfig } from './config';
it('keeps LMS writes disabled in the foundation', () => {
  expect(AppConfigSchema.safeParse(appConfig).success).toBe(true);
  expect(AppConfigSchema.safeParse({ ...appConfig, lmsWritesEnabled: true }).success).toBe(false);
  expect(AppConfigSchema.safeParse({ ...appConfig, passThreshold: 80 }).success).toBe(false);
});

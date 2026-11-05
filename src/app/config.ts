import { z } from 'zod';

export const AppConfigSchema = z.strictObject({
  mode: z.literal('foundation'),
  lmsWritesEnabled: z.literal(false),
});
export type AppConfig = z.infer<typeof AppConfigSchema>;
export const appConfig: AppConfig = AppConfigSchema.parse({
  mode: 'foundation', lmsWritesEnabled: false,
});

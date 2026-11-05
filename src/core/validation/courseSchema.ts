import { z } from 'zod';

export const CourseSchema = z.strictObject({
  schemaVersion: z.literal('1.1'),
  id: z.string().min(1),
  version: z.string().min(1),
  locale: z.string().min(2),
  title: z.string().min(1),
  sectionIds: z.array(z.string().min(1)),
  completionPolicy: z.strictObject({ status: z.literal('pending-approval') }),
  lms: z.strictObject({ standard: z.literal('SCORM_2004'), edition: z.literal('pending-confirmation') }),
});
export type CourseDefinition = z.infer<typeof CourseSchema>;
export function validateCourse(input: unknown) { return CourseSchema.safeParse(input); }

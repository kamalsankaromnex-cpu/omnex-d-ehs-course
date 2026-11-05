import { z } from 'zod';

const id = z.string().trim().min(1);
export const CourseCommandSchema = z.discriminatedUnion('type', [
  z.strictObject({ type: z.literal('NAVIGATE_NEXT'), requestId: id }),
  z.strictObject({ type: z.literal('NAVIGATE_PREVIOUS'), requestId: id }),
  z.strictObject({ type: z.literal('NAVIGATE_TO'), requestId: id, slideId: id }),
]);
export type CourseCommand = z.infer<typeof CourseCommandSchema>;

export const DomainEventSchema = z.strictObject({
  schemaVersion: z.literal(1),
  eventId: id,
  name: z.literal('COURSE_LOADED'),
  timestamp: z.iso.datetime(),
  courseId: id,
  correlationId: id,
  payload: z.strictObject({ version: id }),
});
export type DomainEvent = z.infer<typeof DomainEventSchema>;
// Events describe successful operations. Navigation events belong to Phase 2.

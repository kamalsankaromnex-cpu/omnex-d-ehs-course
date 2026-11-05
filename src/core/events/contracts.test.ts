import { describe, expect, it } from 'vitest';
import { CourseCommandSchema, DomainEventSchema } from './contracts';

describe('command and event boundaries', () => {
  it.each(['NAVIGATE_NEXT', 'NAVIGATE_PREVIOUS'])('accepts %s requests', type => {
    expect(CourseCommandSchema.safeParse({ type, requestId: 'request-1' }).success).toBe(true);
  });
  it('requires a navigation destination and rejects extra fields', () => {
    expect(CourseCommandSchema.safeParse({ type: 'NAVIGATE_TO', requestId: 'r' }).success).toBe(false);
    expect(CourseCommandSchema.safeParse({ type: 'NAVIGATE_NEXT', requestId: 'r', passed: true }).success).toBe(false);
    expect(CourseCommandSchema.safeParse({ type: 'NAVIGATE_TO', requestId: 'r', slideId: 's' }).success).toBe(true);
  });
  const event = { schemaVersion: 1, eventId: 'e', name: 'COURSE_LOADED', timestamp: '2026-11-05T00:00:00Z', courseId: 'c', correlationId: 'r', payload: { version: '0.1.0' } };
  it('validates completed course load events', () => {
    expect(DomainEventSchema.safeParse(event).success).toBe(true);
    expect(DomainEventSchema.safeParse({ ...event, name: 'NAVIGATE_NEXT' }).success).toBe(false);
    expect(DomainEventSchema.safeParse({ ...event, timestamp: 'yesterday' }).success).toBe(false);
    expect(DomainEventSchema.safeParse({ ...event, payload: {} }).success).toBe(false);
  });
});

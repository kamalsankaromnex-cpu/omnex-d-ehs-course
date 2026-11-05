import { describe, expect, it } from 'vitest';
import { courseDefinition } from '../../course/course';
import { validateCourse } from './courseSchema';

describe('Daimler EHS course contract', () => {
  it('accepts the approved architecture baseline', () => {
    expect(validateCourse(courseDefinition).success).toBe(true);
  });
  it('rejects unapproved completion settings', () => {
    expect(validateCourse({ ...courseDefinition, completionPolicy: { status: 'passed' } }).success).toBe(false);
  });
  it('rejects SCORM 1.2 configuration', () => {
    expect(validateCourse({ ...courseDefinition, lms: { standard: 'SCORM_12', edition: 'pending-confirmation' } }).success).toBe(false);
  });
});

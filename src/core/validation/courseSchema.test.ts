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

describe('strict course configuration', () => {
  it.each(['id', 'title', 'version'])('rejects blank %s', field => {
    expect(validateCourse({ ...courseDefinition, [field]: '  ' }).success).toBe(false);
  });
  it('rejects unknown root and nested properties', () => {
    expect(validateCourse({ ...courseDefinition, passThreshold: 80 }).success).toBe(false);
    expect(validateCourse({ ...courseDefinition, completionPolicy: { status: 'pending-approval', threshold: 80 } }).success).toBe(false);
  });
  it('rejects duplicate or empty section IDs', () => {
    expect(validateCourse({ ...courseDefinition, sectionIds: ['intro', 'intro'] }).success).toBe(false);
    expect(validateCourse({ ...courseDefinition, sectionIds: [''] }).success).toBe(false);
  });
  it('rejects missing metadata and unsupported versions', () => {
    const { title: _title, ...incomplete } = courseDefinition;
    expect(validateCourse(incomplete).success).toBe(false);
    expect(validateCourse({ ...courseDefinition, schemaVersion: '2' }).success).toBe(false);
  });
});

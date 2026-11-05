import type { CourseDefinition } from '../core/validation/courseSchema';

export const courseDefinition: CourseDefinition = {
  schemaVersion: '1.1',
  id: 'DAIMLER-EHS',
  version: '0.1.0',
  locale: 'en',
  title: 'Daimler Environmental Health & Safety',
  sectionIds: [],
  completionPolicy: { status: 'pending-approval' },
  lms: { standard: 'SCORM_2004', edition: 'pending-confirmation' },
};

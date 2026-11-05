import { appConfig } from './config';
import { courseDefinition } from '../course/course';
import { validateCourse } from '../core/validation/courseSchema';
import { logger } from '../core/logger/logger';

const parsed = validateCourse(courseDefinition);
if (parsed.success) logger.info('COURSE', 'Course configuration validated', { courseId: parsed.data.id });
else logger.error('CONFIG', 'Course configuration invalid');

export function App() {
  if (!parsed.success) return <main role="alert"><h1>Course unavailable</h1><p>Configuration could not be validated.</p></main>;
  return <div className="shell" data-mode={appConfig.mode}><a className="skip-link" href="#main-content">Skip to main content</a><header className="topbar"><strong>Daimler EHS</strong><span>Foundation preview • not an LMS release</span></header><main id="main-content" tabIndex={-1}><p className="eyebrow">Environmental Health & Safety</p><h1>{parsed.data.title}</h1><p>Technical foundation initialized. Learning content and SCORM integration will be added in subsequent phases.</p><section aria-labelledby="status-title" className="panel"><h2 id="status-title">Course baseline</h2><dl><dt>SCORM</dt><dd>2004 (edition pending LMS confirmation)</dd><dt>Accessibility target</dt><dd>WCAG 2.2 AA (testing pending)</dd><dt>Devices</dt><dd>Desktop, tablet and mobile</dd><dt>Completion policy</dt><dd>Awaiting approval</dd></dl></section></main></div>;
}

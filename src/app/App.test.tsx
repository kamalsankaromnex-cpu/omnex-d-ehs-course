import { renderToStaticMarkup } from 'react-dom/server';
import { expect, it } from 'vitest';
import { App } from './App';

it('renders validated metadata and accessible foundation landmarks', () => {
  const html = renderToStaticMarkup(<App />);
  expect(html).toContain('Daimler Environmental Health &amp; Safety');
  expect(html).toContain('href="#main-content"');
  expect(html).toContain('<main id="main-content"');
  expect(html).toContain('aria-labelledby="status-title"');
  expect(html).toContain('Awaiting approval');
  expect(html).not.toContain('Course unavailable');
});

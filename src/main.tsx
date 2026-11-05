import React from 'react';
import { logger } from './core/logger/logger';
import { createRoot } from 'react-dom/client';
import { App } from './app/App';
import './design-system/global.css';

const root = document.getElementById('root');
if (!root) {
  logger.error('APP', 'Application mount element not found');
  throw new Error('Application mount element not found');
}
logger.info('APP', 'Application startup');
createRoot(root).render(<React.StrictMode><App /></React.StrictMode>);

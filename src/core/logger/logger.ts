export type LogCategory = 'APP' | 'CONFIG' | 'COURSE' | 'NAVIGATION' | 'ASSESSMENT' | 'SCORM' | 'ERROR';
export interface LogContext { courseId?: string; slideId?: string; correlationId?: string }
function write(level: 'info' | 'warn' | 'error', category: LogCategory, message: string, context: LogContext = {}) {
  const record = { timestamp: new Date().toISOString(), level, category, message, ...context };
  if (import.meta.env.DEV || level !== 'info') console[level]('[EHS]', record);
}
export const logger = { info: (category: LogCategory, message: string, context?: LogContext) => write('info', category, message, context), warn: (category: LogCategory, message: string, context?: LogContext) => write('warn', category, message, context), error: (category: LogCategory, message: string, context?: LogContext) => write('error', category, message, context) };

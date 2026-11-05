export type CourseCommand =
  | { type: 'NAVIGATE_NEXT'; requestId: string }
  | { type: 'NAVIGATE_TO'; requestId: string; slideId: string }
  | { type: 'SUBMIT_ANSWER'; submissionId: string; questionId: string; answerIds: string[] };

export interface DomainEvent<TPayload = unknown> {
  schemaVersion: 1;
  eventId: string;
  name: string;
  timestamp: string;
  courseId: string;
  correlationId: string;
  slideId?: string;
  payload: TPayload;
}
// Commands request a transition; events describe transitions already completed.

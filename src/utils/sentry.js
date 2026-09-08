import * as Sentry from '@sentry/browser';

export function initSentry(dsn) {
  if (!dsn || import.meta.env.DEV) return;

  Sentry.init({
    dsn,
    integrations: [
      Sentry.browserTracingIntegration(),
    ],
    tracesSampleRate: 0.1,
    replaysSessionSampleRate: 0.01,
    replaysOnErrorSampleRate: 0.5,
    environment: import.meta.env.MODE || 'production',
    release: 'astrosalud-pro@' + (import.meta.env.VITE_APP_VERSION || '1.0.0'),
  });
}

export function captureError(error, context) {
  Sentry.withScope((scope) => {
    if (context) scope.setExtras(context);
    Sentry.captureException(error);
  });
}

export function captureMessage(message, level = 'info') {
  Sentry.captureMessage(message, level);
}

import { Suspense } from 'react';
import CallbackClient from './callback-client';

export default function CallbackPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-lg text-muted-foreground">Loading...</p>
      </div>
    }>
      <CallbackClient />
    </Suspense>
  );
}
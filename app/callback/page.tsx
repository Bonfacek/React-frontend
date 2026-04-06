"use client";

import { useEffect, Suspense } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

export default function Callback() {
  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    // Get tokens directly from URL (what your backend sends)
    const accessToken = searchParams.get('accessToken');
    const refreshToken = searchParams.get('refreshToken');
    const error = searchParams.get('error');
    
    if (error) {
      console.error('OAuth error:', error);
      router.push('/#home?error=oauth_failed');
      return;
    }
    
    if (accessToken && refreshToken) {
      // Store the tokens directly
      localStorage.setItem('accessToken', accessToken);
      localStorage.setItem('refreshToken', refreshToken);
      router.push('/#home');
    } else {
      // Fallback to code flow (if you still need it)
      const code = searchParams.get('code');
      const state = searchParams.get('state');
      
      if (code && state) {
        fetch(`${process.env.NEXT_PUBLIC_API_URL}/userapi/callback`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ code, state }),
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.accessToken) {
              localStorage.setItem('accessToken', data.accessToken);
              localStorage.setItem('refreshToken', data.refreshToken);
              router.push('/#home');
            } else {
              router.push('/#home');
            }
          })
          .catch(() => {
            router.push('/#home');
          });
      } else {
        router.push('/#home');
      }
    }
  }, [searchParams, router]);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <p className="text-lg text-muted-foreground">Processing authentication...</p>
      </div>
    </div>
  );
}
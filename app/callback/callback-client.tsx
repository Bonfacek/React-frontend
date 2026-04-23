// app/callback/callback-client.tsx
"use client";

import { useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { useAuth } from "@/contexts/AuthContext";

export default function CallbackClient() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { login } = useAuth();

  useEffect(() => {
    const accessToken = searchParams.get('accessToken');
    const refreshToken = searchParams.get('refreshToken');
    const oauthError = searchParams.get('error');
    const code = searchParams.get('code');
    const state = searchParams.get('state');

    if (oauthError) {
      console.error('OAuth error:', oauthError);
      router.replace('/#home?error=oauth_failed');
      return;
    }

    const completeAuth = (token: string, refresh?: string) => {
      localStorage.setItem('accessToken', token);
      if (refresh) localStorage.setItem('refreshToken', refresh);
      login(token);
      router.replace('/#home');
    };

    if (accessToken && refreshToken) {
      completeAuth(accessToken, refreshToken);
    } else if (code && state) {
      const exchangeTokens = async () => {
        try {
          const apiUrl = process.env.NEXT_PUBLIC_API_URL;
          if (!apiUrl) throw new Error('NEXT_PUBLIC_API_URL is not configured');

          const res = await fetch(`${apiUrl}/userapi/callback`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ code, state }),
          });

          if (!res.ok) {
            const errorData = await res.json().catch(() => ({}));
            throw new Error(errorData.message || `HTTP ${res.status}`);
          }

          const data = await res.json();
          if (data.accessToken) {
            completeAuth(data.accessToken, data.refreshToken);
          } else {
            router.replace('/#home');
          }
        } catch (error) {
          console.error('Token exchange failed:', error);
          router.replace('/#home');
        }
      };

      exchangeTokens();
    } else {
      router.replace('/#home');
    }
  }, [searchParams.toString(), router, login]);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <p className="text-lg text-muted-foreground">Processing authentication...</p>
      </div>
    </div>
  );
}
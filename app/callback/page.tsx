"use client";

import { useEffect, Suspense } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { useAuth } from "@/contexts/AuthContext"

export default function Callback() {
  const router = useRouter();  
  const searchParams = useSearchParams();
  const { login } = useAuth();


  useEffect(() => {
    const accessToken = searchParams.get('accessToken');
    const refreshToken = searchParams.get('refreshToken');
    const error = searchParams.get('error');
    
    if (error) {
      console.error('OAuth error:', error);
      router.push('/#home?error=oauth_failed');
      return;
    }
    
    if (accessToken && refreshToken) {
      localStorage.setItem('accessToken', accessToken);
      localStorage.setItem('refreshToken', refreshToken);
      login(accessToken);
      router.push('/#home');
    } else {
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
                login(data.accessToken);
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
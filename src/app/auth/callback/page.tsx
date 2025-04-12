'use client';

import {useEffect} from 'react';
import {useRouter} from 'next/navigation';
import {createClientComponentClient} from '@supabase/auth-helpers-nextjs';

export default function AuthCallback() {
  const router = useRouter();
  const supabase = createClientComponentClient();

  useEffect(() => {
    const handleCallback = async () => {
      const {error} = await supabase.auth.getSession();

      if (error) {
        console.error('Authentication callback error:', error);
        alert('Authentication failed. Please try again.');
      }

      router.push('/profile');
    };

    handleCallback();
  }, [router, supabase]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1>Completing Authentication...</h1>
    </div>
  );
}

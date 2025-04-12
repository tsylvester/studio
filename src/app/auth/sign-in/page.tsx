'use client';

import {useState} from 'react';
import {useRouter} from 'next/navigation';
import {createClientComponentClient} from '@supabase/auth-helpers-nextjs';

import {Button} from '@/components/ui/button';
import {Input} from '@/components/ui/input';
import {Icons} from '@/components/icons';

export default function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const supabase = createClientComponentClient();

  const handleSignIn = async () => {
    setLoading(true);
    try {
      const {error} = await supabase.auth.signInWithPassword({
        email: email,
        password: password,
      });

      if (error) {
        console.error('Sign in error:', error);
        alert(error.message);
      } else {
        router.push('/profile');
      }
    } catch (error) {
      console.error('Unexpected error:', error);
      alert('An unexpected error occurred.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1 className="text-2xl font-semibold mb-4">Sign In</h1>
      <Input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="mb-2"
      />
      <Input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="mb-4"
      />
      <Button disabled={loading} onClick={handleSignIn}>
        {loading && <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />}
        Sign In
      </Button>
      <Button
        variant="link"
        onClick={() => router.push('/auth/sign-up')}
        className="mt-2"
      >
        Don&apos;t have an account? Sign Up
      </Button>
    </div>
  );
}

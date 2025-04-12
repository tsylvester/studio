'use client';

import {useState} from 'react';
import {useRouter} from 'next/navigation';
import {createClientComponentClient} from '@supabase/auth-helpers-nextjs';

import {Button} from '@/components/ui/button';
import {Input} from '@/components/ui/input';
import {Icons} from '@/components/icons';

export default function SignUp() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const supabase = createClientComponentClient();

  const handleSignUp = async () => {
    setLoading(true);
    try {
      const {error} = await supabase.auth.signUp({
        email: email,
        password: password,
        options: {
          emailRedirectTo: `${location.origin}/auth/callback`,
        },
      });
      if (error) {
        console.error('Sign up error:', error);
        alert(error.message);
      } else {
        alert('Check your email for verification!');
        router.push('/auth/sign-in'); // Redirect to sign-in page after successful sign-up
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
      <h1 className="text-2xl font-semibold mb-4">Sign Up</h1>
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
      <Button disabled={loading} onClick={handleSignUp}>
        {loading && <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />}
        Sign Up
      </Button>
      <Button
        variant="link"
        onClick={() => router.push('/auth/sign-in')}
        className="mt-2"
      >
        Already have an account? Sign In
      </Button>
    </div>
  );
}

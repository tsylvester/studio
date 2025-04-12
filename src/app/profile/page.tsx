'use client';

import {useState, useEffect} from 'react';
import {useRouter} from 'next/navigation';
import {createClientComponentClient} from '@supabase/auth-helpers-nextjs';

import {Button} from '@/components/ui/button';
import {Icons} from '@/components/icons';

export default function Profile() {
  const [user, setUser] = useState(null);
  const router = useRouter();
  const supabase = createClientComponentClient();

  useEffect(() => {
    const fetchUser = async () => {
      const {data, error} = await supabase.auth.getUser();
      if (error) {
        console.error('Error fetching user:', error);
      } else {
        setUser(data.user);
      }
    };

    fetchUser();
  }, [supabase]);

  const handleSignOut = async () => {
    const {error} = await supabase.auth.signOut();
    if (error) {
      console.error('Sign out error:', error);
    } else {
      router.push('/');
    }
  };

  if (!user) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen">
        <Icons.spinner className="mr-2 h-8 w-8 animate-spin" />
        <p>Loading profile...</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1 className="text-3xl font-semibold mb-4">User Profile</h1>
      <p>Email: {user.email}</p>
      <p>User ID: {user.id}</p>
      {/* Subscription status and other profile details will go here */}
      <Button onClick={handleSignOut} className="mt-4">
        <Icons.logOut className="mr-2 h-4 w-4" />
        Sign Out
      </Button>
    </div>
  );
}

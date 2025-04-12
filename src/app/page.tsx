'use client';
import {Button} from '@/components/ui/button';
import {useRouter} from 'next/navigation';

export default function Home() {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1 className="text-4xl font-extrabold tracking-tight text-center lg:text-5xl">
        Welcome to <span className="text-primary">OmniLink</span>
      </h1>
      <p className="mt-3 text-lg text-gray-600 text-center">
        Your all-in-one platform to connect, communicate, and collaborate.
      </p>
      <div className="mt-6">
        <Button onClick={() => router.push('/auth/sign-up')}>
          Get Started
        </Button>
      </div>
    </div>
  );
}

'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle login logic here
    console.log('Login attempt:', { email, password });
  };

  return (
    <div className="min-h-screen w-screen">
        <div className="flex h-screen w-screen">

            {/* LEFT: Login */}
            <div className="flex w-full lg:w-1/2 items-center justify-center bg-gray-900 px-6">
            <div className="w-full max-w-sm">

                <img
                src="/images/logo.png"
                alt="Your Company"
                className="mx-auto h-10 w-auto"
                />

                <h2 className="mt-10 text-center text-2xl font-bold text-white">
                Sign in to your account
                </h2>

                <form className="mt-10 space-y-6">
                <div>
                    <label className="block text-sm font-medium text-gray-200">
                    Email address
                    </label>
                    <input
                    type="email"
                    name="email"
                    required
                    className="mt-2 block w-full rounded-md bg-white/5 px-3 py-2 text-white outline outline-1 outline-white/10 focus:outline-indigo-500"
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-200">
                    Password
                    </label>
                    <input
                    type="password"
                    name="password"
                    required
                    className="mt-2 block w-full rounded-md bg-white/5 px-3 py-2 text-white outline outline-1 outline-white/10 focus:outline-indigo-500"
                    />
                </div>

                <button
                    type="submit"
                    className="w-full rounded-md bg-indigo-500 py-2 font-semibold text-white hover:bg-indigo-400"
                >
                    Sign in
                </button>
                </form>

                <p className="mt-8 text-center text-sm text-gray-400">
                Don&apos;t have an account?
                <Link href="/admin/register" className="ml-1 font-semibold text-indigo-400 hover:text-indigo-300">
                    Sign up
                </Link>
                </p>

            </div>
            </div>

            {/* RIGHT: Image */}
            <div className="hidden lg:block lg:w-1/2">
            <img
                src="https://images.unsplash.com/photo-1506765515384-028b60a970df"
                alt="Login"
                className="h-full w-full object-cover"
            />
            </div>

        </div>
        </div>

  );
}
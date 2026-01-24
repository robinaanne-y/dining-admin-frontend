'use client';

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link';
import LoginButton from '@/components/forms/auth/LoginButton';
import axios from 'axios'
import { DASHBOARD_ROUTE, LOGIN_ROUTE } from '@/constants';


const baseUrl= process.env.NEXT_PUBLIC_API_URL

export default function LoginForm() {
  const router = useRouter()
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        setLoading(true)
        setError(null)

        const formData = new FormData(e.currentTarget)

        try {
        // 1️⃣ CSRF cookie — MUST be from browser
            await fetch(`${baseUrl}/sanctum/csrf-cookie`, {
                credentials: 'include',
            })

            const xsrfToken = getCookie('XSRF-TOKEN')

            // 2️⃣ Login
            const res = await fetch(`${baseUrl}/login`, {
                method: 'POST',
                credentials: 'include',
                body: formData,
                headers: {
                    'X-XSRF-TOKEN': xsrfToken ?? '',
                    'Accept': 'application/json',
                },
            })

            if (!res.ok) {
                const data = await res.json()
                setError(data.message || 'Invalid credentials')
                setLoading(false)
                return
            }

            router.push(DASHBOARD_ROUTE)
        } catch {
            setError('Something went wrong')
        } finally {
            setLoading(false)
        }
    }

    

    return (
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

                    <form onSubmit={handleSubmit} className="mt-10 space-y-6">

                        {error && <p className="text-red-400 text-sm">{error}</p>}

                        <div>
                            <label className="block text-sm font-medium text-gray-200">
                            Email address
                            </label>
                            <input
                            type="email"
                            name="email"
                            autoComplete="email"
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
                            autoComplete="current-password"
                            className="mt-2 block w-full rounded-md bg-white/5 px-3 py-2 text-white outline outline-1 outline-white/10 focus:outline-indigo-500"
                            />
                        </div>

                        <LoginButton isPending={loading} />
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
  )
}

function getCookie(name: string) {
  const value = document.cookie
    .split('; ')
    .find(row => row.startsWith(name + '='))
    ?.split('=')[1]

  return value ? decodeURIComponent(value) : undefined
}
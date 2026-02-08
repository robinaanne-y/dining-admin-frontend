'use client';

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link';
import SubmitFormButton from '@/components/shared/SubmitFormButton';

import { DASHBOARD_ROUTE } from '@/constants';
import FormField from '@/components/ui/formField';
import Input from '@/components/ui/input';
import Form from '@/components/ui/form';
import { getCsrfCookie, getCookie } from '@/lib/sanctum';


const baseUrl= process.env.NEXT_PUBLIC_API_URL

export default function LoginForm() {
    type FormErrors = {
        email?: string;
        password?: string;
        message?: string;
    };

    const [error, setError] = useState<FormErrors | null>(null);
    const router = useRouter()
    const [loading, setLoading] = useState(false)

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        setLoading(true)

        const formData = new FormData(e.currentTarget)

        try {
            await getCsrfCookie()

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

                setError({
                    email: data.errors?.email?.[0],
                    password: data.errors?.password?.[0],
                    message: data.message,
                })
                
                console.log(data)
                setLoading(false)
                return
            }

            
            console.log('Login successful')
            router.push(DASHBOARD_ROUTE)
        } catch (err) {
            setError({
                message: "An error occurred during login.",
            })
        } finally {
            setLoading(false)
        }
    }

    

    return (
        <div className="flex h-screen w-screen">

            {/* LEFT: Login */}
            <div className="flex w-full lg:w-1/2 items-center justify-center bg-slate-900 px-6">
                <div className="w-full max-w-sm">

                    <img
                    src="/images/logo.png"
                    alt="Your Company"
                    className="mx-auto h-10 w-auto"
                    />

                    <h2 className="text-center text-2xl font-bold text-slate-50 py-6">
                    Sign in to your account
                    </h2>

                    <Form onSubmit={handleSubmit}>
                        <FormField label="Email" error={error?.email}>
                            <Input
                                name="email"
                                type="email"
                                state={error?.email ? "error" : "default"}
                            />
                        </FormField>


                        <FormField label="Password" error={error?.password}>
                            <Input
                                name="password"
                                type="password"
                                state={error?.password ? "error" : "default"}
                            />
                        </FormField>

                        <SubmitFormButton 
                            isLoading={loading} 
                            label="Sign in"
                            loadingLabel="Signing in..."
                        />
                    </Form>

                    <p className="mt-8 text-center text-sm text-gray-400">
                        Don&apos;t have an account?
                        <Link href="/admin/register" className="ml-1 font-semibold text-slate-50 hover:text-indigo-300">
                            Sign up
                        </Link>
                    </p>

                </div>
            </div>

            {/* RIGHT: Image */}
            <div className="hidden lg:block lg:w-1/2">
                <img
                    src="/images/login_img.png"
                    alt="Login"
                    className="h-full w-full object-cover"
                />
            </div>

        </div>
    )
}
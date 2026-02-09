"use client";

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link';
import FormField from "@/components/ui/formField";
import SubmitFormButton from "@/components/shared/SubmitFormButton";
import Form from "@/components/ui/form";
import Input from '@/components/ui/input';
import { DASHBOARD_ROUTE, LOGIN_ROUTE } from '@/constants';
import { getCsrfCookie, getCookie } from '@/lib/sanctum';


const baseUrl= process.env.NEXT_PUBLIC_API_URL

export default function RegisterForm() {
  type FormErrors = {
      email?: string;
      password?: string;
      password_confirmation?: string;
      restaurant_name?: string;
      name?: string;
      phone_number?: string;
      user_type?: string;
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
      const res = await fetch(`${baseUrl}/register`, {
          method: 'POST',
          credentials: 'include',
          body: formData,
          headers: {
            'X-XSRF-TOKEN': xsrfToken || '',
            'Accept': 'application/json',
          },
      })

      if (!res.ok) {
          const data = await res.json()

          setError({
              email: data.errors?.email?.[0],
              password: data.errors?.password?.[0],
              password_confirmation: data.errors?.password_confirmation?.[0],
              name: data.errors?.name?.[0],
              phone_number: data.errors?.phone_number?.[0],
              restaurant_name: data.errors?.restaurant_name?.[0],
              message: data.message,
          })

          setLoading(false)
          return
      }

      router.push(DASHBOARD_ROUTE)
    } catch (err) {
      setError({
        message: "An error occurred during registration.",
      })
    } finally {
        setLoading(false)
    }
}
  return (
    <div className="w-full max-w-md px-6">
      {/* Logo / Heading */}
      <div className="text-center">
        <img
          src="/images/logo.png"
          alt="App logo"
          className="mx-auto h-10 w-auto"
        />
        <h2 className="mt-6 text-2xl font-bold text-white">
          Create your account
        </h2>
        <p className="mt-2 text-sm text-gray-400">
          Manage orders and menus in one place
        </p>
      </div>

      {/* Form */}
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

        <FormField label="Confirm Password" error={error?.password_confirmation}>
            <Input
                name="password_confirmation"
                type="password"
                state={error?.password_confirmation ? "error" : "default"}
            />
        </FormField>

        <FormField label="Restaurant Name" error={error?.restaurant_name}>
            <Input
                name="restaurant_name"
                type="text"
                state={error?.restaurant_name ? "error" : "default"}
            />
        </FormField>

        <FormField label="Owner Name" error={error?.name}>
            <Input
                name="name"
                type="text"
                state={error?.name ? "error" : "default"}
            />
        </FormField>

        <FormField label="Phone Number" error={error?.phone_number}>
            <Input
                name="phone_number"
                type="text"
                state={error?.phone_number ? "error" : "default"}
            />
        </FormField>

        <FormField error={error?.user_type}>
            <Input
                name="user_type"
                type="hidden"
                value="owner"
                state={error?.user_type ? "error" : "default"}
            />
        </FormField>


        <SubmitFormButton 
              isLoading={loading} 
              label="Sign up"
              loadingLabel="Signing up..."
          />
      </Form>

      {/* Footer */}
      <p className="mt-6 text-center text-sm text-gray-400">
        Already have an account?{" "}
        <Link href={LOGIN_ROUTE} className="text-blue-400 hover:text-blue-300">
          Sign in
        </Link>
      </p>
    </div>
  );
}
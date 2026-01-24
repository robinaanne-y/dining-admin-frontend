"use client";

import { registerAction } from "../register/actions";
import { useActionState } from "react";
import SubmitButton from "./SubmitButton";

const initialState = {
  errors: {},
};

export default function RegisterForm() {
  const [state, formAction] = useActionState(registerAction, initialState);

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
      <form action={formAction} className="mt-8 space-y-6">

        {"_form" in (state.errors ?? {}) && (
          <p className="text-sm text-red-400">
            {state.errors?._form}
          </p>
        ) }

        
        <div>
          <label className="block text-sm font-medium text-gray-200">
            Name
          </label>
          <input
            name="name"
            type="text"
            autoComplete="name"
            className={`mt-1 w-full rounded-md bg-white/5 px-3 py-2 text-white outline outline-1 outline-white/10 focus:outline-indigo-500 ${
            state.errors?.name
              ? "outline-red-500"
              : "outline-white/10"}`}
          />

          {state.errors?.name && (
            <p className="mt-1 text-sm text-red-400">
              {state.errors?.name}
            </p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-200">
            Phone Number
          </label>
          <input
            name="phone_number"
            type="text"
            autoComplete="phone_number"
            className={`mt-1 w-full rounded-md bg-white/5 px-3 py-2 text-white outline outline-1 outline-white/10 focus:outline-indigo-500 ${
            state.errors?.phone_number
              ? "outline-red-500"
              : "outline-white/10"}`}
          />

          {state.errors?.phone_number && (
            <p className="mt-1 text-sm text-red-400">
              {state.errors?.phone_number}
            </p>
          )}
        </div>


        <div>
          <label className="block text-sm font-medium text-gray-200">
            Email address
          </label>
          <input
            name="email"
            type="email"
            autoComplete="email"
            className={`mt-1 w-full rounded-md bg-white/5 px-3 py-2 text-white outline outline-1 outline-white/10 focus:outline-indigo-500 ${
            state.errors?.email
              ? "outline-red-500"
              : "outline-white/10"}`}
          />

          {state.errors?.email && (
            <p className="mt-1 text-sm text-red-400">
              {state.errors?.email}
            </p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-200">
            Password
          </label>
          <input
            name="password"
            type="password"
            autoComplete="new-password"
            className={`mt-1 w-full rounded-md bg-white/5 px-3 py-2 text-white outline outline-1 outline-white/10 focus:outline-indigo-500 ${
            state.errors?.password
              ? "outline-red-500"
              : "outline-white/10"}`}
          />
          {state.errors?.password && (
            <p className="mt-1 text-sm text-red-400">
              {state.errors?.password}
            </p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-200">
            Re-type Password
          </label>
          <input
            name="retype_password"
            type="password"
            autoComplete="retype-password"
            className={`mt-1 w-full rounded-md bg-white/5 px-3 py-2 text-white outline outline-1 outline-white/10 focus:outline-indigo-500 ${
            state.errors?.retype_password
              ? "outline-red-500"
              : "outline-white/10"}`}
          />
          {state.errors?.retype_password && (
            <p className="mt-1 text-sm text-red-400">
              {state.errors?.retype_password}
            </p>
          )}
        </div>

        <div>
          <input
            name="user_type"
            type="text"
            autoComplete="user_type"
            value="owner"
            readOnly
            hidden
          />
        </div>

        <SubmitButton />

        <p className="text-center text-sm text-gray-400">
          Already have an account?{" "}
          <a href="/admin/login" className="text-indigo-400 hover:text-indigo-300">
            Sign in
          </a>
        </p>
      </form>
    </div>
  );
}

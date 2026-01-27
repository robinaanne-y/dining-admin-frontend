'use server'

import { redirect } from 'next/navigation'

export async function logoutAction() {
  await fetch(`${process.env.NEXT_PUBLIC_API_URL}/logout`, {
    method: 'POST',
    credentials: 'include',
  })

  redirect('/admin/login')
}

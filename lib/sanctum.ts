export async function getCsrfCookie() {
  await fetch(`${process.env.NEXT_PUBLIC_API_URL}/sanctum/csrf-cookie`, {
    credentials: 'include',
  })
}

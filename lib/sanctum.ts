export async function getCsrfCookie() {
  await fetch(`${process.env.NEXT_PUBLIC_API_URL}/sanctum/csrf-cookie`, {
    credentials: 'include',
  })
}

export function getCookie(name: string) {
    const value = document.cookie
        .split('; ')
        .find(row => row.startsWith(name + '='))
        ?.split('=')[1]

    return value ? decodeURIComponent(value) : undefined
}
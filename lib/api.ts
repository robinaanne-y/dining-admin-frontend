export async function apiFetch(path: string) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api${path}`,
    {
      credentials: "include",
      headers: {
        Accept: "application/json",
      },
    }
  )

  if (!res.ok) throw new Error("API failed")

  return res.json()
}

"use client"

import { useEffect, useState } from "react"
import Form from "@/components/ui/form"
import FormField from "@/components/ui/formField"
import Input from "@/components/ui/input"
import SubmitFormButton from "@/components/shared/SubmitFormButton"
import { apiFetch } from "@/lib/api"

type Restaurant = {
  name: string
  address?: string
  city?: string
  branch?: string
  id?: number
}


export default function RestaurantForm() {
  const [data, setData] = useState<Restaurant>({
    name: "",
  })

  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [errors, setErrors] = useState<any>({})

  // load current data
  useEffect(() => {
    apiFetch("/restaurants/current").then(setData)
  }, [])

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()

    setLoading(true)
    setErrors({})
    setSuccess(false)

    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/restaurants/${data.id}`,
        {
          method: "PUT",
          credentials: "include",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      )

      if (!res.ok) {
        const err = await res.json()
        setErrors(err.errors || {})
        return
      }

      setSuccess(true)
    } finally {
      setLoading(false)
    }
  }

  function update(key: keyof Restaurant, value: string) {
    setData((prev) => ({ ...prev, [key]: value }))
  }

  return (
    <Form onSubmit={handleSubmit} className="space-y-4">
      {success && (
        <p className="text-green-400 text-sm">
          ✅ Settings saved successfully
        </p>
      )}

      <FormField label="Restaurant Name" error={errors.name?.[0]}>
        <Input
          value={data.name}
          onChange={(e) => update("name", e.target.value)}
        />
      </FormField>

      <FormField label="Address" error={errors.address?.[0]}>
        <Input
          value={data.address || ""}
          onChange={(e) => update("address", e.target.value)}
        />
      </FormField>

      <FormField label="City" error={errors.city?.[0]}>
        <Input
          value={data.city || ""}
          onChange={(e) => update("city", e.target.value)}
        />
      </FormField>

      <FormField label="Branch" error={errors.branch?.[0]}>
        <Input
          value={data.branch || ""}
          onChange={(e) => update("branch", e.target.value)}
        />
      </FormField>

      <SubmitFormButton
        isLoading={loading}
        label="Save Changes"
        loadingLabel="Saving..."
      />
    </Form>
  )
}

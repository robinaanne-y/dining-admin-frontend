import RestaurantForm from "@/components/settings/restaurantForm"

export default function SettingsPage() {
  return (
    <div className="max-w-3xl space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-white">Restaurant Settings</h1>
        <p className="text-sm text-slate-400">
          Manage your restaurant information
        </p>
      </div>

      <RestaurantForm />
    </div>
  )
}

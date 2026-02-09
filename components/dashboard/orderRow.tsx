import Badge from "../ui/badge"

export default function OrderRow({
  id,
  name,
  total,
  status,
}: {
  id: string
  name: string
  total: string
  status: string
}) {
  return (
    <tr className="text-slate-300">
      <td className="py-2">{id}</td>
      <td>{name}</td>
      <td>{total}</td>
      <td>
        <Badge variant={getStatusVariant(status)}>
            {status}
        </Badge>
      </td>
    </tr>
  )
}

function getStatusVariant(status: string) {
  switch (status.toLowerCase()) {
    case "completed":
      return "success"
    case "preparing":
      return "info"
    case "pending":
      return "warning"
    case "cancelled":
      return "danger"
    default:
      return "default"
  }
}

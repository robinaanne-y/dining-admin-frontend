import api from "./api";

export async function getAdmin() {
  try {
    const res = await api.get("/api/admin/login");
    return res.data;
  } catch {
    return null;
  }
}

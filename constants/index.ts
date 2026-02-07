// lib/constants/index.ts
export const LOGIN_ROUTE = "/admin/login";
export const DASHBOARD_ROUTE = "/admin/dashboard";

// Expired session
export const EXPIRED_SESSION_PARAM = "expired_session";
export const EXPIRED_SESSION_ROUTE = `${LOGIN_ROUTE}?${EXPIRED_SESSION_PARAM}`;

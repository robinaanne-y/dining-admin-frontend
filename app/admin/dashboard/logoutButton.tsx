import React from 'react'
import { logoutAction } from './logoutAction'

const logoutButton = () => {
  return (
    <form action={logoutAction}>
    <button type="submit">Logout</button>
    </form>
  )
}

export default logoutButton
import { Navigate } from 'react-router-dom'

export default function ProtectedRoute({
  user,
  authenticated,
  component: Component,
  ...rest
}) {

  if (user && authenticated) {
    return <Component />
  }

  return (
    <Navigate to="/login" />
  )
}

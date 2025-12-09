import { AppRoutes } from "./routes";

import { AuthProvider } from "./context/AuthContext";

export function App() {
  return (
    <AuthProvider>
      <AppRoutes />
    </AuthProvider>
  )
}

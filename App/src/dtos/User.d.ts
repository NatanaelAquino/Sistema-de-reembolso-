type UserAPIRole="employee" | "manager"

type UserAPIResonse = {
  token: string,
  user: {
    id: string,
    name: string,
    email: string,
    role: UserAPIRole
  }
}
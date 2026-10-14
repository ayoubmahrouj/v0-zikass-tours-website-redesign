"use client"

import { useActionState } from "react"
import { login } from "./actions"

export function LoginForm() {
  const [state, action, pending] = useActionState(login, null as null | { error: string })
  return (
    <form action={action} className="space-y-4">
      <input
        type="password"
        name="password"
        required
        autoFocus
        placeholder="Mot de passe admin"
        className="w-full rounded-lg border border-input bg-background px-3 py-3"
      />
      {state?.error && <p className="text-sm text-red-600">{state.error}</p>}
      <button disabled={pending} className="w-full rounded-lg bg-primary text-primary-foreground py-3 font-semibold disabled:opacity-60">
        {pending ? "..." : "Se connecter"}
      </button>
    </form>
  )
}

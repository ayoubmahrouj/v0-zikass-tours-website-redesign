import type { Metadata } from "next"
import Link from "next/link"
import { adminConfigured, isAdmin } from "@/lib/admin-auth"
import { listReviews, reviewsEnabled, type Review, type ReviewStatus } from "@/lib/reviews"
import { changeStatus, logout, remove } from "./actions"
import { LoginForm } from "./login-form"

export const dynamic = "force-dynamic"
export const metadata: Metadata = { title: "Admin", robots: { index: false, follow: false } }

const TABS: { key: ReviewStatus; label: string }[] = [
  { key: "pending", label: "En attente" },
  { key: "approved", label: "Publiés" },
  { key: "hidden", label: "Masqués" },
]

function Stars({ n }: { n: number }) {
  return <span className="text-amber-500 tracking-tight">{"★".repeat(n)}<span className="text-gray-300">{"★".repeat(5 - n)}</span></span>
}

function Card({ r }: { r: Review }) {
  const btn = "px-3 py-1.5 rounded-md text-sm font-medium"
  return (
    <article className="rounded-xl border bg-card p-4 flex flex-col sm:flex-row gap-4">
      {r.photo_url && (
        <a href={r.photo_url} target="_blank" rel="noreferrer" className="shrink-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={r.photo_url} alt="" className="w-full sm:w-32 h-40 sm:h-32 object-cover rounded-lg" />
        </a>
      )}
      <div className="flex-1 min-w-0">
        <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
          <strong>{r.name}</strong>
          {r.country && <span className="text-sm text-muted-foreground">{r.country}</span>}
          <Stars n={r.rating} />
        </div>
        <p className="text-xs text-muted-foreground mt-1">
          {new Date(r.created_at).toLocaleString("fr-FR")} · {r.trip || "—"} · {r.locale?.toUpperCase()}
        </p>
        <p className="mt-2 whitespace-pre-line text-sm">{r.text}</p>
        <div className="flex flex-wrap gap-2 mt-3">
          {r.status !== "approved" && (
            <form action={changeStatus}>
              <input type="hidden" name="id" value={r.id} />
              <input type="hidden" name="status" value="approved" />
              <button className={`${btn} bg-green-600 text-white`}>✓ Publier</button>
            </form>
          )}
          {r.status !== "hidden" && (
            <form action={changeStatus}>
              <input type="hidden" name="id" value={r.id} />
              <input type="hidden" name="status" value="hidden" />
              <button className={`${btn} bg-gray-200 text-gray-900`}>Masquer</button>
            </form>
          )}
          <form action={remove}>
            <input type="hidden" name="id" value={r.id} />
            <button className={`${btn} bg-red-600 text-white`}>Supprimer</button>
          </form>
        </div>
      </div>
    </article>
  )
}

export default async function AdminPage({ searchParams }: { searchParams: Promise<{ tab?: string }> }) {
  const shell = (children: React.ReactNode) => (
    <main className="min-h-screen bg-muted/40 px-4 py-8">
      <div className="max-w-3xl mx-auto">{children}</div>
    </main>
  )

  if (!adminConfigured() || !reviewsEnabled()) {
    return shell(
      <div className="rounded-xl border bg-card p-6">
        <h1 className="text-xl font-bold mb-2">Configuration manquante</h1>
        <p className="text-sm text-muted-foreground">
          Ajoutez ADMIN_PASSWORD, SUPABASE_URL et SUPABASE_SERVICE_ROLE_KEY dans Vercel &gt; Settings &gt; Environment Variables, puis redéployez.
        </p>
      </div>,
    )
  }

  if (!(await isAdmin())) {
    return shell(
      <div className="max-w-sm mx-auto rounded-xl border bg-card p-6 mt-16">
        <h1 className="text-xl font-bold mb-4 text-center">ZikassTours · Admin</h1>
        <LoginForm />
      </div>,
    )
  }

  const tab = ((await searchParams).tab as ReviewStatus) || "pending"
  const all = await listReviews()
  const counts = Object.fromEntries(TABS.map((t) => [t.key, all.filter((r) => r.status === t.key).length]))
  const items = all.filter((r) => r.status === tab)

  return shell(
    <>
      <header className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">Avis clients</h1>
        <div className="flex items-center gap-3 text-sm">
          <Link href="/" className="underline">Voir le site</Link>
          <form action={logout}><button className="underline">Déconnexion</button></form>
        </div>
      </header>
      <nav className="flex gap-2 mb-6">
        {TABS.map((t) => (
          <Link
            key={t.key}
            href={`/admin?tab=${t.key}`}
            className={`px-4 py-2 rounded-full text-sm font-medium border ${tab === t.key ? "bg-primary text-primary-foreground" : "bg-card"}`}
          >
            {t.label} ({counts[t.key]})
          </Link>
        ))}
      </nav>
      <div className="space-y-3">
        {items.length === 0 && <p className="text-muted-foreground text-sm">Aucun avis ici.</p>}
        {items.map((r) => <Card key={r.id} r={r} />)}
      </div>
    </>,
  )
}

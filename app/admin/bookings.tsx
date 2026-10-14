import { listBookings, type Booking } from "@/lib/bookings"
import { removeBooking, saveBooking } from "./actions"

const TABS = [
  { key: "new", label: "Nouvelles" },
  { key: "confirmed", label: "Confirmées" },
  { key: "done", label: "Terminées" },
  { key: "cancelled", label: "Annulées" },
  { key: "clicks", label: "Clics WhatsApp" },
] as const

const eur = (n: number) => `${n.toFixed(2).replace(/\.00$/, "")} €`
const wa = (p: string) => `https://wa.me/${p.replace(/[^\d]/g, "").replace(/^00/, "")}`

function Row({ b }: { b: Booking }) {
  const input = "rounded-md border bg-background px-2 py-1 text-sm"
  return (
    <article className="rounded-xl border bg-card p-4 space-y-3">
      <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
        <strong>{b.name || "Visiteur"}</strong>
        {b.phone && <a className="text-sm underline" href={wa(b.phone)} target="_blank" rel="noreferrer">{b.phone}</a>}
        <span className="text-xs text-muted-foreground">{new Date(b.created_at).toLocaleString("fr-FR")}</span>
      </div>
      <p className="text-sm">
        <b>{b.trip || "—"}</b> · {b.trip_date || "date ?"} · {b.people || "?"} pers. · {b.hotel || "hôtel ?"}
      </p>
      {b.message && <p className="text-sm text-muted-foreground whitespace-pre-line">{b.message}</p>}
      <form action={saveBooking} className="flex flex-wrap items-end gap-2">
        <input type="hidden" name="id" value={b.id} />
        <label className="text-xs">Statut<br />
          <select name="status" defaultValue={b.status} className={input}>
            <option value="new">Nouvelle</option><option value="confirmed">Confirmée</option>
            <option value="done">Terminée</option><option value="cancelled">Annulée</option>
          </select>
        </label>
        <label className="text-xs">Prix (€)<br /><input name="price" type="number" step="0.01" defaultValue={b.price ?? ""} className={input + " w-24"} /></label>
        <label className="text-xs">Commission %<br /><input name="commission_pct" type="number" step="0.5" defaultValue={b.commission_pct} className={input + " w-20"} /></label>
        <label className="text-xs flex-1 min-w-32">Note<br /><input name="note" defaultValue={b.note ?? ""} className={input + " w-full"} /></label>
        <button className="px-3 py-1.5 rounded-md text-sm font-medium bg-primary text-primary-foreground">Enregistrer</button>
        {b.price != null && <span className="text-sm">Ma part : <b>{eur((b.price * b.commission_pct) / 100)}</b></span>}
      </form>
      <form action={removeBooking}><input type="hidden" name="id" value={b.id} /><button className="text-xs text-red-600 underline">Supprimer</button></form>
    </article>
  )
}

export async function BookingsView({ tab }: { tab: string }) {
  const all = await listBookings()
  const bookings = all.filter((b) => b.source === "form")
  const clicks = all.filter((b) => b.source === "whatsapp_click")
  const done = bookings.filter((b) => b.status === "confirmed" || b.status === "done")
  const priced = done.filter((b) => b.price != null)
  const revenue = priced.reduce((s, b) => s + (b.price || 0), 0)
  const mine = priced.reduce((s, b) => s + ((b.price || 0) * b.commission_pct) / 100, 0)
  const counts: Record<string, number> = {
    new: 0, confirmed: 0, done: 0, cancelled: 0, clicks: clicks.length,
  }
  bookings.forEach((b) => counts[b.status]++)
  const current = TABS.some((t) => t.key === tab) ? tab : "new"
  const items = bookings.filter((b) => b.status === current)

  return (
    <>
      <div className="grid grid-cols-3 gap-3 mb-6 text-center">
        <div className="rounded-xl border bg-card p-3"><div className="text-xs text-muted-foreground">Réservations</div><div className="text-xl font-bold">{bookings.length}</div></div>
        <div className="rounded-xl border bg-card p-3"><div className="text-xs text-muted-foreground">Chiffre confirmé</div><div className="text-xl font-bold">{eur(revenue)}</div></div>
        <div className="rounded-xl border bg-card p-3"><div className="text-xs text-muted-foreground">Ma commission</div><div className="text-xl font-bold">{eur(mine)}</div></div>
      </div>
      <nav className="flex flex-wrap gap-2 mb-6">
        {TABS.map((t) => (
          <a key={t.key} href={`/admin?view=bookings&tab=${t.key}`} className={`px-4 py-2 rounded-full text-sm font-medium border ${current === t.key ? "bg-primary text-primary-foreground" : "bg-card"}`}>
            {t.label} ({counts[t.key]})
          </a>
        ))}
      </nav>
      <div className="space-y-3">
        {current === "clicks" ? (
          clicks.length === 0 ? <p className="text-sm text-muted-foreground">Aucun clic.</p> :
          clicks.slice(0, 200).map((c) => (
            <p key={c.id} className="text-sm rounded-lg border bg-card px-3 py-2">
              {new Date(c.created_at).toLocaleString("fr-FR")} · {c.page} · {c.trip} · {c.locale?.toUpperCase()}
            </p>
          ))
        ) : items.length === 0 ? (
          <p className="text-sm text-muted-foreground">Aucune réservation ici.</p>
        ) : (
          items.map((b) => <Row key={b.id} b={b} />)
        )}
      </div>
    </>
  )
}

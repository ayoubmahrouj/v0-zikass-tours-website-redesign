import { listBookings, type Booking } from "@/lib/bookings"
import { removeBooking, saveBooking, addBookingLog, toggleCommissionPaid } from "./actions"

const TABS = [
  { key: "new", label: "Nouvelles" },
  { key: "confirmed", label: "Confirmées" },
  { key: "done", label: "Terminées" },
  { key: "cancelled", label: "Annulées" },
  { key: "clicks", label: "Clics WhatsApp" },
  { key: "partners", label: "Partenaires" },
] as const

const eur = (n: number) => `${n.toFixed(2).replace(/\.00$/, "")} €`
const wa = (p: string) => `https://wa.me/${p.replace(/[^\d]/g, "").replace(/^00/, "")}`
const dstr = (d: string) => new Date(d).toLocaleDateString("fr-FR", { day: "2-digit", month: "2-digit", year: "2-digit" })

/** Ce que prend le partenaire (riad, hôtel, agence) sur cette course. */
const partnerCut = (b: Booking) => (b.ref && b.price != null ? (b.price * b.commission_pct) / 100 : 0)
/** Ce qui reste pour ZikassTours. */
const myCut = (b: Booking) => (b.price != null ? b.price - partnerCut(b) : 0)
const isCounted = (b: Booking) => b.source === "form" && (b.status === "confirmed" || b.status === "done") && b.price != null

function Row({ b }: { b: Booking }) {
  const input = "rounded-md border bg-background px-2 py-1 text-sm"
  const cut = partnerCut(b)
  const mine = myCut(b)
  const logLines = (b.log ?? "").split("\n").filter(Boolean)

  return (
    <article className="rounded-xl border bg-card p-4 space-y-3">
      <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
        <strong>{b.name || "Visiteur"}</strong>
        {b.phone && <a className="text-sm underline" href={wa(b.phone)} target="_blank" rel="noreferrer">{b.phone}</a>}
        <span className="text-xs text-muted-foreground">{new Date(b.created_at).toLocaleString("fr-FR")}</span>
        {b.ref ? (
          <span className="text-xs rounded-full bg-secondary/20 px-2 py-0.5">partenaire : {b.ref}</span>
        ) : (
          <span className="text-xs rounded-full bg-muted px-2 py-0.5 text-muted-foreground">direct</span>
        )}
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
        <label className="text-xs">Prix payé par le client (€)<br />
          <input name="price" type="number" step="0.01" defaultValue={b.price ?? ""} className={input + " w-24"} />
        </label>
        <label className="text-xs">Commission partenaire (%)<br />
          <input name="commission_pct" type="number" step="0.5" defaultValue={b.commission_pct} className={input + " w-20"} />
        </label>
        <label className="text-xs flex-1 min-w-32">Note courte<br />
          <input name="note" defaultValue={b.note ?? ""} className={input + " w-full"} />
        </label>
        {b.ref && (
          <label className="text-xs inline-flex items-center gap-1.5 pb-1.5">
            <input type="checkbox" name="commission_paid" defaultChecked={!!b.commission_paid} />
            Commission payée
          </label>
        )}
        <button className="px-3 py-1.5 rounded-md text-sm font-medium bg-primary text-primary-foreground">Enregistrer</button>
      </form>

      {b.price != null && (
        <p className="text-sm rounded-lg bg-muted/60 px-3 py-2">
          Client <b>{eur(b.price)}</b>
          {b.ref ? <> · partenaire <b>{eur(cut)}</b> ({b.commission_pct}%) · moi <b>{eur(mine)}</b></> : <> · moi <b>{eur(mine)}</b></>}
          {b.ref && (
            <span className={"ml-2 text-xs " + (b.commission_paid ? "text-green-700" : "text-amber-700")}>
              {b.commission_paid ? "✓ payée" : "à payer"}
            </span>
          )}
        </p>
      )}

      <div className="rounded-lg border bg-background p-3 space-y-2">
        <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">Suivi / messages</p>
        {logLines.length === 0 ? (
          <p className="text-xs text-muted-foreground">Aucun message pour l'instant.</p>
        ) : (
          <ul className="space-y-1">
            {logLines.map((l, i) => (
              <li key={i} className="text-xs whitespace-pre-wrap border-l-2 border-secondary/40 pl-2">{l}</li>
            ))}
          </ul>
        )}
        <form action={addBookingLog} className="flex gap-2">
          <input type="hidden" name="id" value={b.id} />
          <input name="entry" placeholder="Ex : Riad a confirmé, 20% d'accord, client rappelé" className={input + " flex-1"} />
          <button className="px-3 py-1.5 rounded-md text-xs font-medium border bg-card">Ajouter</button>
        </form>
      </div>

      <form action={removeBooking}><input type="hidden" name="id" value={b.id} /><button className="text-xs text-red-600 underline">Supprimer</button></form>
    </article>
  )
}

export async function BookingsView({ tab }: { tab: string }) {
  const all = await listBookings()
  const bookings = all.filter((b) => b.source === "form")
  const clicks = all.filter((b) => b.source === "whatsapp_click")
  const priced = bookings.filter(isCounted)
  const revenue = priced.reduce((s, b) => s + (b.price || 0), 0)
  const partnerTotal = priced.reduce((s, b) => s + partnerCut(b), 0)
  const partnerUnpaid = priced.filter((b) => !b.commission_paid).reduce((s, b) => s + partnerCut(b), 0)
  const mine = priced.reduce((s, b) => s + myCut(b), 0)

  const counts: Record<string, number> = {
    new: 0, confirmed: 0, done: 0, cancelled: 0, clicks: clicks.length, partners: 0,
  }
  bookings.forEach((b) => counts[b.status]++)
  const current = TABS.some((t) => t.key === tab) ? tab : "new"
  const items = bookings.filter((b) => b.status === current)

  type Agg = { n: number; clicks: number; ok: number; rev: number; cut: number; paid: number; mine: number; rows: Booking[] }
  const refs = new Map<string, Agg>()
  const bump = (r: string) => refs.get(r) ?? (refs.set(r, { n: 0, clicks: 0, ok: 0, rev: 0, cut: 0, paid: 0, mine: 0, rows: [] }), refs.get(r)!)
  all.forEach((b) => {
    if (!b.ref) return
    const x = bump(b.ref)
    if (b.source === "whatsapp_click") x.clicks++
    else {
      x.n++
      if (isCounted(b)) {
        x.ok++
        x.rev += b.price || 0
        const c = partnerCut(b)
        x.cut += c
        if (b.commission_paid) x.paid += c
        x.mine += myCut(b)
        x.rows.push(b)
      }
    }
  })
  counts.partners = refs.size

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6 text-center">
        <div className="rounded-xl border bg-card p-3"><div className="text-xs text-muted-foreground">Réservations</div><div className="text-xl font-bold">{bookings.length}</div></div>
        <div className="rounded-xl border bg-card p-3"><div className="text-xs text-muted-foreground">Chiffre confirmé</div><div className="text-xl font-bold">{eur(revenue)}</div></div>
        <div className="rounded-xl border bg-card p-3"><div className="text-xs text-muted-foreground">Mon net</div><div className="text-xl font-bold">{eur(mine)}</div></div>
        <div className="rounded-xl border bg-card p-3">
          <div className="text-xs text-muted-foreground">À payer aux partenaires</div>
          <div className="text-xl font-bold text-amber-700">{eur(partnerUnpaid)}</div>
          <div className="text-[11px] text-muted-foreground">sur {eur(partnerTotal)}</div>
        </div>
      </div>

      <nav className="flex flex-wrap gap-2 mb-6">
        {TABS.map((t) => (
          <a key={t.key} href={`/admin?view=bookings&tab=${t.key}`} className={`px-4 py-2 rounded-full text-sm font-medium border ${current === t.key ? "bg-primary text-primary-foreground" : "bg-card"}`}>
            {t.label} ({counts[t.key]})
          </a>
        ))}
      </nav>

      <div className="space-y-3">
        {current === "partners" ? (
          <div className="space-y-4">
            <div className="rounded-xl border bg-card p-4 text-sm">
              <p className="text-muted-foreground">
                Donnez à chaque partenaire (riad, hôtel, agence) un lien à son nom : <b>zikasstours.com/?ref=nom-du-partenaire</b>.
                Toutes ses réservations, ses clics et sa commission apparaissent ici.
              </p>
              <p className="mt-2 text-muted-foreground">
                Le <b>%</b> saisi sur chaque réservation est la part du <b>partenaire</b>. Votre net = prix − part du partenaire.
              </p>
            </div>

            {refs.size === 0 ? <p className="text-sm text-muted-foreground">Aucun partenaire pour l'instant.</p> :
              [...refs.entries()].sort((a, b) => b[1].rev - a[1].rev).map(([r, x]) => (
                <details key={r} className="rounded-xl border bg-card p-4">
                  <summary className="cursor-pointer flex flex-wrap items-baseline gap-x-5 gap-y-1 text-sm">
                    <b className="text-base">{r}</b>
                    <span>{x.n} réservations</span>
                    <span>{x.clicks} clics</span>
                    <span>{x.ok} confirmées · <b>{eur(x.rev)}</b></span>
                    <span>commission <b>{eur(x.cut)}</b></span>
                    <span className={x.cut - x.paid > 0 ? "text-amber-700 font-semibold" : "text-green-700 font-semibold"}>
                      {x.cut - x.paid > 0 ? `à payer ${eur(x.cut - x.paid)}` : "tout payé ✓"}
                    </span>
                    <span>mon net <b>{eur(x.mine)}</b></span>
                  </summary>

                  {x.rows.length > 0 && (
                    <div className="overflow-x-auto mt-3">
                      <table className="w-full text-xs">
                        <thead className="text-muted-foreground">
                          <tr className="text-left">
                            <th className="py-1 pr-3">Date</th>
                            <th className="py-1 pr-3">Client</th>
                            <th className="py-1 pr-3">Trajet</th>
                            <th className="py-1 pr-3 text-right">Prix</th>
                            <th className="py-1 pr-3 text-right">%</th>
                            <th className="py-1 pr-3 text-right">Commission</th>
                            <th className="py-1 pr-3 text-right">Mon net</th>
                            <th className="py-1 text-right">Statut</th>
                          </tr>
                        </thead>
                        <tbody>
                          {x.rows.map((b) => (
                            <tr key={b.id} className="border-t">
                              <td className="py-1 pr-3 whitespace-nowrap">{b.trip_date || dstr(b.created_at)}</td>
                              <td className="py-1 pr-3">{b.name || "—"}</td>
                              <td className="py-1 pr-3">{b.trip || "—"}</td>
                              <td className="py-1 pr-3 text-right whitespace-nowrap">{eur(b.price || 0)}</td>
                              <td className="py-1 pr-3 text-right">{b.commission_pct}%</td>
                              <td className="py-1 pr-3 text-right whitespace-nowrap">{eur(partnerCut(b))}</td>
                              <td className="py-1 pr-3 text-right whitespace-nowrap">{eur(myCut(b))}</td>
                              <td className="py-1 text-right">
                                <form action={toggleCommissionPaid}>
                                  <input type="hidden" name="id" value={b.id} />
                                  <input type="hidden" name="paid" value={b.commission_paid ? "0" : "1"} />
                                  <button className={"px-2 py-0.5 rounded-full text-[11px] border " + (b.commission_paid ? "bg-green-50 text-green-700 border-green-300" : "bg-amber-50 text-amber-700 border-amber-300")}>
                                    {b.commission_paid ? "payée ✓" : "à payer"}
                                  </button>
                                </form>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  )}
                </details>
              ))}
          </div>
        ) : current === "clicks" ? (
          clicks.length === 0 ? <p className="text-sm text-muted-foreground">Aucun clic.</p> :
          clicks.slice(0, 200).map((c) => (
            <p key={c.id} className="text-sm rounded-lg border bg-card px-3 py-2">
              {new Date(c.created_at).toLocaleString("fr-FR")} · {c.page} · {c.trip} · {c.locale?.toUpperCase()}
              {c.ref && <span className="ml-2 text-xs rounded-full bg-secondary/20 px-2 py-0.5">{c.ref}</span>}
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

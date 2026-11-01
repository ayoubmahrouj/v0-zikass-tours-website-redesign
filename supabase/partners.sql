-- ZikassTours — suivi des partenaires (commissions + suivi des échanges)
-- À exécuter UNE FOIS dans Supabase > SQL Editor > New query > Run.
-- Sans risque : n'efface aucune donnée existante.

-- 1. La commission versée au partenaire (riad, hôtel, agence) a-t-elle été payée ?
alter table public.zt_bookings
  add column if not exists commission_paid boolean not null default false;

-- 2. Journal du suivi : chaque ligne = une date + un message / une action.
--    Exemple : "2026-11-01 14:32 — Riad Dar Anika : client confirmé, 20% d'accord"
alter table public.zt_bookings
  add column if not exists log text;

create index if not exists zt_bookings_commission_idx
  on public.zt_bookings (ref, commission_paid);

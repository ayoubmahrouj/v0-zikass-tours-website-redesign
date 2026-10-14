-- ZikassTours bookings tracking. Run once in Supabase > SQL Editor.
create table if not exists public.zt_bookings (
  id             uuid primary key default gen_random_uuid(),
  created_at     timestamptz not null default now(),
  source         text not null default 'form' check (source in ('form','whatsapp_click')),
  name           text,
  phone          text,
  trip           text,
  trip_date      text,
  people         text,
  hotel          text,
  message        text,
  page           text,
  locale         text,
  status         text not null default 'new' check (status in ('new','confirmed','done','cancelled')),
  price          numeric,
  commission_pct numeric not null default 20,
  note           text
);
create index if not exists zt_bookings_created_idx on public.zt_bookings (created_at desc);
alter table public.zt_bookings enable row level security;

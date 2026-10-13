-- ZikassTours customer reviews
-- Run this once in Supabase > SQL Editor > New query > Run

create extension if not exists pgcrypto;

create table if not exists public.reviews (
  id          uuid primary key default gen_random_uuid(),
  created_at  timestamptz not null default now(),
  name        text not null check (char_length(name) between 2 and 60),
  country     text check (char_length(country) <= 60),
  trip        text check (char_length(trip) <= 80),
  rating      smallint not null check (rating between 1 and 5),
  text        text not null check (char_length(text) between 10 and 1500),
  photo_url   text,
  photo_path  text,
  locale      text,
  status      text not null default 'pending' check (status in ('pending','approved','hidden'))
);

create index if not exists reviews_status_created_idx on public.reviews (status, created_at desc);

-- Lock the table: only the server (service_role key) can read/write.
alter table public.reviews enable row level security;

-- Public bucket for customer photos (read-only for visitors, uploads go through the server).
insert into storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
values ('review-photos', 'review-photos', true, 5242880, array['image/jpeg','image/png','image/webp'])
on conflict (id) do nothing;

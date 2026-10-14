"use server"

import { redirect } from "next/navigation"
import { revalidatePath, updateTag } from "next/cache"
import { checkPassword, endSession, isAdmin, startSession } from "@/lib/admin-auth"
import { deleteBooking, updateBooking, type BookingStatus } from "@/lib/bookings"
import { deleteReview, REVIEWS_TAG, setReviewStatus, type ReviewStatus } from "@/lib/reviews"

export async function login(_: unknown, form: FormData) {
  await new Promise((r) => setTimeout(r, 600)) // slow down brute force
  if (!checkPassword(String(form.get("password") || ""))) return { error: "Mot de passe incorrect" }
  await startSession()
  redirect("/admin")
}

export async function logout() {
  await endSession()
  redirect("/admin")
}

function refreshSite() {
  updateTag(REVIEWS_TAG)
  revalidatePath("/", "layout")
}

export async function changeStatus(form: FormData) {
  if (!(await isAdmin())) redirect("/admin")
  const id = String(form.get("id"))
  const status = String(form.get("status")) as ReviewStatus
  if (!["pending", "approved", "hidden"].includes(status)) return
  await setReviewStatus(id, status)
  refreshSite()
}

export async function remove(form: FormData) {
  if (!(await isAdmin())) redirect("/admin")
  await deleteReview(String(form.get("id")))
  refreshSite()
}

export async function saveBooking(form: FormData) {
  if (!(await isAdmin())) redirect("/admin")
  const status = String(form.get("status"))
  if (!["new", "confirmed", "done", "cancelled"].includes(status)) return
  const price = String(form.get("price") || "").trim()
  const pct = Number(form.get("commission_pct"))
  await updateBooking(String(form.get("id")), {
    status: status as BookingStatus,
    price: price === "" || isNaN(Number(price)) ? null : Number(price),
    commission_pct: pct >= 0 && pct <= 100 ? pct : 20,
    note: String(form.get("note") || "").slice(0, 500) || null,
  })
  revalidatePath("/admin")
}

export async function removeBooking(form: FormData) {
  if (!(await isAdmin())) redirect("/admin")
  await deleteBooking(String(form.get("id")))
  revalidatePath("/admin")
}
